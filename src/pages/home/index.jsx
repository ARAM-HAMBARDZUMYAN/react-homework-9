import React from "react";
import Header from "../../components/header";
import TEXT from "../../components/section";
import Box from "./component/imgandtext";
import Footer from "../../components/footer";
import Menu from "./component/buttoncomponent";




function HOME() {
  return (<>
    <TEXT  title="Welcome to Simple House" content="Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites." />
    <Menu/>
    <Box/>
    <Footer/>
    </>
  );
}

export default HOME;
