import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Homeimage from "../../media/doc.svg";
import cssStyles from "../../styles/cssStyles.module.css";

const Home = (props) => {
  const { auth } = props;
  if (auth.uid) {
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col l6">
              <img src={Homeimage} alt="" className={cssStyles.homeImg} />
            </div>
            <div className="col l6">
              <div className={cssStyles.section}>
                <h3 className={cssStyles.headingStyle}>Start Sharing Files</h3>
                <h5 className={cssStyles.subHeadingStyle}>SAFE - SECURE - FREE</h5>
                <NavLink to="/share" >
                <button className="btn orange z-depth-1" style={{borderRadius:"10px"}}>
                  SHARE NOW!
                  </button>
                </NavLink> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col 16">
              <img src={Homeimage} className={cssStyles.homeImg} alt=""/>
            </div>
            <div className="col l6">
              <div className={cssStyles.section}>
                <h3 className={cssStyles.headingStyle}>SHARING FILES MADE SECURE!</h3>
                <h5 className={cssStyles.subHeadingStyle}>SAFE - SECURE - FREE</h5>
                <NavLink to="/signup" >
                <button className="btn orange z-depth-1" style={{borderRadius:"10px"}}>
                  JOIN US!
                  </button>
                </NavLink> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Home);
