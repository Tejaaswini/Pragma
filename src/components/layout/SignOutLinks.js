import React from "react";
import { NavLink } from "react-router-dom";
import cssStyles from "../../styles/cssStyles.module.css"

const SignedOutLinks = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/about" className={cssStyles.navLinks}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin" className={cssStyles.navLinks}>
          SignIn
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" className={cssStyles.navLinks}>
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
