import React, { Component } from "react";
import { Link } from "react-router-dom";
import Send from "../Files/sendFiles";
import Instructions from "../Files/instructions";
import Receive from "../Files/recieveFiles";
import EmailService from "../email/email";

class FileActionPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="send section">
          <div className="row">
            <div className="col l6">
              <Send />
              <Receive />
            </div>
            <div className="col l6">
              <EmailService />
              <Link to="/faq">
                <Instructions />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FileActionPage;
