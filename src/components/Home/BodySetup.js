import React, { Component } from "react";
import setup from "../../assets/Home/easy-setup-icon.svg";
import support from "../../assets/Home/awesome-support-icon.svg";
import secure from "../../assets/Home/safe-secure-icon.svg";
import "../../styles/Home/BodySetup.css";
import "../../styles/default.css";

class BodySetup extends Component {
  render() {
    return (
      <div className="mainSupport">
        <a href="#" alt>
          <div className="innerSupport">
            <img src={setup} alt="" />
            <h2>Easy Setup</h2>
            <p>Your Wallets account is up and ready to go in less than 5 mins.</p>
          </div>
        </a>
        <a href="#">
          <div className="innerSupport">
            <img src={secure} alt="" />
            <h2>Safe & Secure</h2>
            <p>Great sercurity features to keep your funds safe and your data protected</p>
          </div>
        </a>
        <a href="#">
          <div className="innerSupport">
            <img src={support} alt="" />
            <h2>Awesome Support</h2>
            <p>Get best in class customer support all day, every day.</p>
          </div>
        </a>
      </div>
    );
  }
}
export default BodySetup;
