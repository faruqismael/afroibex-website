import React from "react";
import Button from "./Button";
import "./hero.css";
import heroImage from "../assets/images/heroImage.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__text">
        <h2>YOUR BUSINESS</h2>
        <h1>DEFINITELY</h1>
        <h2>
          NEED <span>WEBSITE</span>
        </h2>
        <Button name="Contact Us" />
      </div>
      <div className="hero__image">
        <img src={heroImage} alt="hero image" />
      </div>
    </div>
  );
}

export default Hero;
