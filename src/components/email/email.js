import React, { Component } from "react";
import axios from "axios";

// import web3 from "../../actions/web3";
// import ipfs from "../../actions/ipfs";
// import storeHash from "../../actions/contract";

class EmailService extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      },
    }).then((response) => {
      if (response.data.message === "success") {
        alert("Email sent, awesome");
        this.setState({
          email: "",
          message: "",
        });
      } else if (response.data.message === "failed") {
        alert("Oops,something went wrong. Try again");
      }
    });
  };

  render() {
    return (
      <div className="container" style={{ width: "100%" }}>
        <div className={"card medium white darken-1"} style={{borderRadius:"10px",boxShadow: "10px 10px 8px #888888"}}>
          <div className="card-content">
            <span className="card-title" style={{fontWeight:"600"}}>SEND THE HASH WITHOUT HASSLE</span>
            <p>Now send the hash through mail by entering the receiver's Mail ID</p>
            <form onSubmit={this.onSubmit}>
              <div className="input-field">
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="email">To Email</label>
                <input id="email" type="text" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="message">Hash</label>
                <input id="message" type="text" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <button className="btn waves-effect waves-light orange" style={{borderRadius:"10px"}}>
                  Send Hash
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailService;
