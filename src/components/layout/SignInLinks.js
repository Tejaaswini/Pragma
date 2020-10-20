import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../../actions/authActions";
import cssStyles from "../../styles/cssStyles.module.css";

const SignedInLinks = (props) => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/share" className={cssStyles.navLinks}>
          Share
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className={cssStyles.navLinks}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <a href="/" onClick={props.signout} className={cssStyles.navLinks}>
          Log Out
        </a>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
