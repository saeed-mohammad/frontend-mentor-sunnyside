import React from "react";
import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="heroPage">
      <Navbar />
      <HeroSection />
      {/* <div className="bg-img">
        <img src={ds_header} alt="" className="desk-img" />
        <img src={mb_header} alt="" className="mob-img" />
      </div> */}
    </div>
  );
};

export default Hero;
