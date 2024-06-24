import React from "react";
import "./Hero.css";

// icon
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero_images from "../Assets/hero_image.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals only</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_images} alt="" />
      </div>
    </div>
  );
};
