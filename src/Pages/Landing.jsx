import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Aboutus from "./Aboutus";
import Testimonial from "../components/Testimonial";
import HeroSectionOne from "./landingPageComponent/HeroSectionOne";
import HeroSectionTwo from "./landingPageComponent/HeroSectionTwo";

const Landing = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSectionOne />
      <Aboutus />
      <HeroSectionTwo />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Landing;
