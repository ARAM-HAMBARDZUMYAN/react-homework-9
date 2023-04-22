import React from "react";
import {Route, Routes,Navigate, NavLink } from "react-router-dom";
import "./style.scss";
import Logo from "../../assets/images/logo.png";
import background from "../../assets/images/header.png";
import ABOUT from "../../pages/about";
import HOME from "../../pages/home";
import CONTACT from "../../pages/contact";

function Header() {
  return (
  <>
    <header
      style={{ backgroundImage: `url(${background})`, height: "200px" }}>
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
      <Routes>
        <Route element={<HOME/>} path='/'/>
        <Route element={<ABOUT/>} path='/about'/>
        <Route element={<CONTACT/>} path='/contact'/>
        <Route element={<Navigate to={'/'}/>} path='*'/>
      </Routes>
  </>
  );
}

export default Header;
