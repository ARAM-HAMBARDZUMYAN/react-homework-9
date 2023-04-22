import React from "react";
import Header from "../../components/header";
import TEXT from "../../components/section";
import Footer from "../../components/footer";
import SpecialList from "./components/specialists";
import ReadMore from "./components/ReadMore";
import History from "./components/Historyofrestaurant";


function ABOUT() {
  return (
    <>
    <TEXT title="About Simple House" content="This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect."/>
    <SpecialList/>
    <ReadMore/>
    <History/>
    <Footer/>
    </>
  );
}

export default ABOUT;
