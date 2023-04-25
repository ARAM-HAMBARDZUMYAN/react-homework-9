import React from "react";
import {Route, Routes,Navigate, NavLink } from "react-router-dom";
import Logo from "./assets/images/logo.png";
import background from "./assets/images/header.png";
import ABOUT from "./pages/about";
import HOME from "./pages/home";
import CONTACT from "./pages/contact";
import './App.css';
import Header from "./components/header";

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route element={<HOME/>} path='/'/>
        <Route element={<ABOUT/>} path='/about'/>
        <Route element={<CONTACT/>} path='/contact'/>
        <Route element={<Navigate to={'/'}/>} path='*'/>
      </Routes>



    </div>
  );
}

export default App;
