import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { selectTransactionData } from "../../selectors/transactionSelector";

const HistoryPage = ({ transactions }) => {
  return (
    <div className="container" style={{ maxWidth: "100%" }}>
      <h4>Recent Transactions</h4>
      <div className="row">
        <div className="col">
          {transactions &&
            transactions.map((transaction) => {
              return (
                <div className="card blue-grey darken-1" key={transaction.id}>
                  <div className="card-content white-text">
                    <p>IPFS HASH : {transaction.ifpsHash}</p>
                    <p>Transaction Hash: {transaction.transactionhash}</p>
                    <p className="grey-text">{moment(transaction.createdAt.toDate()).calendar()}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transactions: selectTransactionData(state),
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    if (!props.auth.uid) return [];
    return [{ collection: "transactions", where: [["userId", "==", props.auth.uid]] }];
  })
)(HistoryPage);
