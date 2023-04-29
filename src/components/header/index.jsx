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
      <div className="logo">
          <img src={Logo} alt="Brand Logo" /> 
          
     <div className="brandname">
                        <h1>Simple House</h1>
                        <h6>new restaurant template</h6>
                        </div>
                        </div>
                      <div className="links">
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
      </div>
      </header>
  </>
  );
}

export default Header;
