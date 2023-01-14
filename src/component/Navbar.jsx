import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import "../style/Nav.scss";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handleMenu);

    return () => {
      document.removeEventListener("mousedown", handleMenu);
    };
  });

  return (
    <header>
      <h1>
        <a href="#logo">
          <img src={logo} alt="" />
        </a>
      </h1>
      <nav className={menu ? "active" : ""}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#button">
              <button className="btn-cnt">CONTACT</button>
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu" ref={menuRef} onClick={() => setMenu(!menu)}>
        <img src={hamburger} alt="" />
      </div>
    </header>
  );
};

export default Navbar;
