import React from "react";
import arrow_down from "../assets/images/icon-arrow-down.svg";
import "../style/HeroSection.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h2>WE ARE CREATIVES</h2>
        <div className="arrow">
          <img src={arrow_down} alt="arrow-down" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
