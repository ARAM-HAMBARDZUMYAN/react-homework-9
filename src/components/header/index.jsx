import React from "react";
import {Route, Routes,Navigate, NavLink } from "react-router-dom";
import "./style.scss";
import Logo from "../../assets/images/logo.png";
import background from "../../assets/images/header.png";


function Header() {
  return (
  <>
    <header className="header"
      style={{ backgroundImage: `url(${background})`, }}>
      <div className="container">
          <img src={Logo} alt="Brand Logo" />
        <nav>
          <ul>
            <li>
              <NavLink to="/" > Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" > About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" > Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      </header>
  </>
  );
}

export default Header;
