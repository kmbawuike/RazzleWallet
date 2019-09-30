import React, { Component } from "react";
import image1 from "../../assets/Home/bckgrd2.png";
import image2 from "../../assets/Home/screenshot-fees__one.png";
import image3 from "../../assets/Home/screenshot-fees__two.png";
import image4 from "../../assets/Home/debit-card-group__two.png";
import image5 from "../../assets/Home/debit-card.png";
import image6 from "../../assets/Home/gointernational.png";
import "../../styles/Home/describtion.css";
import "../../styles/Home/responsiveness/describtion.css";

class Describtion extends Component {
  fixedOnScroll() {
    const distanceY = window.pageYOffset;
    const imagedrop2 = document.querySelector(".slidem");
    const imagedrop = document.querySelector(".slide1");
    if (distanceY > 80) {
      imagedrop.classList.add("drop1");
      imagedrop2.classList.add("dropm");
    } else {
      imagedrop.classList.remove("drop1");
      imagedrop2.classList.remove("dropm");
    }
  }

  fixedOnScroll2() {
    const distanceY = window.pageYOffset;
    const imagedrop3 = document.querySelector(".slidem1");
    const imagedrop4 = document.querySelector(".slidemm");

    if (distanceY > 550) {
      imagedrop4.classList.add("drop1");
      imagedrop3.classList.add("dropm");
    } else {
      imagedrop3.classList.remove("dropm");
      imagedrop4.classList.remove("drop1");
    }
  }

  fixedOnScroll3() {
    const distanceY = window.pageYOffset;
    const imagedrop5 = document.querySelector(".last");
    if (distanceY > 1000) {
      // imagedrop5.style='display:block'
      imagedrop5.classList.add("lastslide");
      //   imagedrop5.style='display:none'
    } else {
      imagedrop5.classList.remove("lastslide");
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.fixedOnScroll);
    window.addEventListener("scroll", this.fixedOnScroll2);
    window.addEventListener("scroll", this.fixedOnScroll3);
  }

  render() {
    return (
      <div>
        <div className="first">
          <div className="slide">
            <img className="slide1" src={image3} alt="" />
            <div className="slidem">
              <img className="slide2" src={image2} alt="" />
            </div>
          </div>
          <img className="image1" src={image1} alt="" />
          <div className="text1">
            <h2 className="head">Transparent and cheaper fees.</h2>
            <p className="words">
              We know how hard you work for your money.We workhard too and we
              respect that.We are clear about our fees and works to offer the
              cheapest rates possible.
            </p>
            <button className="btn1">Create Your Account</button>
          </div>
        </div>
        <div className="second">
          <div className="slide">
            <div className="slidemm">
              <img className="slide11" src={image4} alt="" />
            </div>
            <div className="slidem1">
              <img className="slide12" src={image5} alt="" />
            </div>
          </div>
          <img className="image2" src={image1} alt="" />
          <div className="text2">
            <h2 className="head">Cards that work.</h2>
            <p className="words">
              Paying your Netflix subscription,shopping on Amazon or checking
              out at Shoprite,tour Wallets virtual doller card and physical
              debit card work everywhere.
            </p>
            <button className="btn1">Create Your Account</button>
          </div>
        </div>
        <div className="third">
          <div className="image-6">
            <img className="image6" src={image6} alt="" />
          </div>
          <div className="last"></div>
          <img className="image3" src={image1} alt="" />
          <div className="text3">
            <h2 className="head">GO International.</h2>
            <p className="words">
              Wallets allows you easily send money to mobile money accounts in
              Ghana and Kenya. it's faster, cheaper amd more secure than
              anything out ther.More countries coming soon.
            </p>
            <button className="btn1">Create Your Account</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Describtion;
