import React from "react";
import "../style/Footer.scss";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer>
      <h4>sunnyside</h4>
      <ul className="ftr-list">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
      </ul>
      <ul className="ftr-icon">
        <li>
          <a href="">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={twitter} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={pinterest} alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
