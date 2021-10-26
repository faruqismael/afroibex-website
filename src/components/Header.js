import React from "react";
import "./header.css";
import logo from "../assets/images/afroibex-shadow.png";
import Button from "./Button";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Afro-Ibex Logo" />
      <div className="header__center">
        <a href="#" className="header__menu">
          Home
        </a>
        <a href="#" className="header__menu">
          Services
        </a>
        <a href="#" className="header__menu">
          Product
        </a>
        <a href="#" className="header__menu">
          About Us
        </a>
      </div>
      <div className="header__right">
        <a href="#" className="header__menu">
          Our Team
        </a>
        <Button name="Contact" />
      </div>
    </header>
  );
}

export default Header;
