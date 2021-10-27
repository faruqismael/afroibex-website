import React, { useEffect, useState } from "react";
import Button from "./Button";
import "./hero.css";
import heroImage from "../assets/images/heroImage.png";

function Hero() {
  const services = ["WEBSITE", "APPLICATION", "GRAPHICS"];

  function changeService() {
    let length = services.length;
    let i = 0;
    let serviceName = document.getElementById("serviceName");

    return () => {
      setInterval(() => {
        if (i >= length) {
          i = 0;
        }
        // serviceName.style.opacity = "0.4";
        serviceName.textContent = services[i];
        i++;
      }, 4000);
    };
  }

  useEffect(() => {
    changeService()();
  });

  return (
    <div className="hero">
      <div className="hero__text">
        <h2>YOUR BUSINESS</h2>
        <h1>DEFINITELY</h1>
        <h2>
          NEED <span id="serviceName">{services[services.length - 1]}</span>
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
