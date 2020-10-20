import React, { Component } from "react";
import cssStyles from "../../styles/cssStyles.module.css";
// import axios from "axios";

// import web3 from "../../actions/web3";
// import ipfs from "../../actions/ipfs";
// import storeHash from "../../actions/contract";

class Receive extends Component {
  state = {
    hash: null,
  };

  handleChange = (e) => {
    e.preventDefault();
    const hash = e.target.value;
    this.setState({
      hash: hash,
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    let hash = this.state.hash;
    window.open(`https://ipfs.infura.io:5001/api/v0/cat?arg=${hash}`, "_blank");
  };

  render() {
    return (
      <div className="container" style={{ width: "100%" }}>
        <div className={"card medium white darken-1"} style={{borderRadius:"10px",boxShadow: "10px 10px 8px #888888"}}>
          <div className="card-content">
            <span className="card-title" style={{fontWeight:"600"}}>RECEIVE FILES</span>
            <form onSubmit={this.onSubmit}>
              <div className="input-field">
                <label htmlFor="hash">File Hash</label>
                <input id="hash" type="text" onChange={this.handleChange} />
                <button className="btn waves-effect waves-light orange" style={{borderRadius:"10px",marginLeft:"5px"}}>
                  Receive
                  <i className="material-icons right">send</i>
                </button>
                <p className={cssStyles.para}>How to Receive? <br /> Enter the hash, voila, you get your files!</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Receive;
