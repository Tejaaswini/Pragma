import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "../../actions/authActions";
import SignupImage from "../../media/signup.svg";
import cssStyles from "../../styles/cssStyles.module.css"

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/"></Redirect>;
    return (
      <div className="container">
        <h3 className="center-align" style={{ color: "#ff8e3c" }}>
          You Have Made The Right Choice!
        </h3>
        <h5 className="center-align">Register and start sharing!</h5>
        <div className="row">
          <div className="col l6">
            <img src={SignupImage} alt="" className={cssStyles.signupImg} />
          </div>
          <div className="col l6">
            <form className={cssStyles.siginUpForm}  onSubmit={this.handleSubmit}>
              <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} />
              </div>

              <div className="input-field">
                <button className="btn orange z-depth-1" style={{borderRadius:"10px"}}>Register</button>
                <div className="center red-text">{authError ? <p>{authError}</p> : null}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
