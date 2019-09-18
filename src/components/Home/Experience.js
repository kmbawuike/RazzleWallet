import React from "react";
import "../../styles/Home/Experience.css";
import Image1 from "../../assets/Home/app-store-button.png";
import Image2 from "../../assets/Home/play-store-button.png";

class Experience extends React.Component {
  render() {
    return (
      <div>
        <center>
          <h1> Experience true freedom. </h1>
          <p>
            You won 't be joining bad company. lots of people use Wallets
            <pre> </pre>
            everyday to get transaction done.
          </p>
        </center>
        <div className="pic">
          <img src={Image1}/> 
          <img src={Image2}/> 
        </div>
      </div>
    );
  }
}
export default Experience;
