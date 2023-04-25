import React from "react";
import Header from "../../components/header";
import TEXT from "../../components/section";
import Footer from "../../components/footer";
import Map from "./components/map";
import ContactPage from "./components/inputs-and-text";
import FAQsAccordion from "./components/faqs";


function CONTACT() {
  return (
    <>
    <TEXT title="Contact Page" content="You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template."/>
      <ContactPage/>
    <Map/>
    <FAQsAccordion/>
   <Footer/>
    </>
  );
}

export default CONTACT;
