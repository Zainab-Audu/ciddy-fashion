import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Aboutus from "./Aboutus";
import HeroSectionOne from "./landingPageComponent/HeroSectionOne";
import HeroSectionTwo from "./landingPageComponent/HeroSectionTwo";
import SingnUp from "./landingPageComponent/SingnUp";

const Landing = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSectionOne />
      <Aboutus />
      <HeroSectionTwo />
      <SingnUp />
      <Footer />
    </div>
  );
};

export default Landing;
