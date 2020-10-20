import React, { Component } from "react";
import M from "materialize-css";

class Faq extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
  }
  render() {
    return (
      <div className="container">
        <h3 className="center-align" style={{ color: "#ff8e3c" }}>
          Let's answer some of your questions
        </h3>
        <ul className="collapsible">
          <li>
            <div className="collapsible-header">
              <h5>How to send files?</h5>
            </div>
            <div className="collapsible-body" style={{fontSize:"20px"}}>
              <span>1. Select the file needed and compress them into .zip format.</span>
              <br />
              <span>2. Head to the Share page and click the big ol' Add button on the Send section.</span>
              <br />
              <span>3. Click on Send button to send files and validate the transaction from Metamask wallet. </span>
              <br />
              <span>
                4. Once you get the File hash send it to the person using the mail option next to Send section
              </span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h5>How to receive files?</h5>
            </div>
            <div className="collapsible-body" style={{fontSize:"20px"}}>
              <span>1. Get the File hash from the sender. File Hash is of the format "Qbxxxxxxx"</span>
              <br />
              <span>2. Enter the hash in the Receive section of the Share page and click receive to get the files</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h5>Hey, do I need Metamask?</h5>
            </div>
            <div className="collapsible-body" style={{fontSize:"20px"}}>
              <span>
                Well, we use Metamask to record the transactions over the network and make sure it is transparent yet
                secure. If you use Metamask the transactions get recorded as part of history and stays with you. If you
                do not wish to have a transaction history you do not need Metamask.
              </span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h5>What is Pragma Rewards? Do I get scratch cards?</h5>
            </div>
            <div className="collapsible-body" style={{fontSize:"20px"}}>
              <span>
                Pragma Rewards is something we call Non-Fungiable Tokens (NFT) in the crypto ecosystem that acts as fiat
                currency and can be used anywhere in the crypto marketplace to buy and sell stuff. We are still working
                on the feature.
              </span>
              <br />
              <span>
                But as a Token of Gratitude for using our website we give each user 15 Pragma rewards as a gift. So
                chill while we make it fully funkantional.
              </span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h5>Where can I get the Metamask wallet?</h5>
            </div>
            <div className="collapsible-body" style={{fontSize:"20px"}}>
              <p>
                Metamask is a browser extention. For Chrome browser{" "}
                <span>
                  <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?utm_source=chrome-ntp-icon">
                    Click here
                  </a>
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Faq;
