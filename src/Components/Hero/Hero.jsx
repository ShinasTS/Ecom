import React from "react";
import "./Hero.css";
// import hero_image from "../Assets/hero_image.jpg";
// import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        {/* <h2>NEW ARRIVALS ONLY</h2> */}
        <div>
          {/* <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div> */}
          {/* <p>Explore</p>
          <p>Our Collctions</p> */}
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      {/* <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div> */}
    </div>
  );
};

export default Hero;
