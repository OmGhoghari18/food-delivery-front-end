import React from "react";
import "./Landing.css";
import "../../App.css";
import BannerImage from "../../assets/home-banner-image.png";

const Landing = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            ELEVATE YOUR INNER <span>FOODIE</span> WITH EVERY BITE
          </h1>
          <p className="primary-text">
            Indulge in our delectable selection of meals, crafted with love and
            care, exclusively for you. Delivered right to your doorstep, each
            bite promises a symphony of flavors, allowing you to savor every
            moment without a moment's delay!
          </p>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
