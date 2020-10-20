import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignInLinks";
import SignedOutLinks from "./SignOutLinks";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

class NavBar extends Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }
  render() {
    const { auth, profile } = this.props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    return (
      <>
        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <div className="container">
              <Link to="/" className="brand-logo black-text text-darken-4">
                Pragma
              </Link>
              <a href="#" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons" style={{ color: "black" }}>
                  menu
                </i>
              </a>
              {links}
            </div>
          </div>
        </nav>
        <ul className="sidenav" id="slide-out">
          {links}
        </ul>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(NavBar);
