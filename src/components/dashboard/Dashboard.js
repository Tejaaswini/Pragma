import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Profile from "./profile";
import History from "../transactions/history";
import { selectTransactionData } from "../../selectors/transactionSelector";

class Dashboard extends Component {
  render() {
    const { transactions, auth, profile } = this.props;
    //const rewards = profile.PragmaRewards
    if (!auth.uid) return <Redirect to="/signin"></Redirect>;
    return (
      <div className="container">
        <Profile profile={profile} />
        <div className="section">
          <div className="row">
            <div className="col">
              <History transactions={transactions} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: selectTransactionData(state),
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    if (!props.auth.uid) return [];
    return [{ collection: "transactions", where: [["userId", "==", props.auth.uid]] }];
  })
)(Dashboard);
