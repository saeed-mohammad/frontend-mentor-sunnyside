import React from "react";
import arrow_down from "../assets/images/icon-arrow-down.svg";
import "../style/HeroSection.scss";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h2>WE ARE CREATIVES</h2>
        <div className="arrow">
          <Link to="Egg" spy={true} smooth={true} duration={500}>
            <img src={arrow_down} alt="arrow-down" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
