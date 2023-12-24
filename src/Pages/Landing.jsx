import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Aboutus from "./Aboutus";
import Testimonial from "../components/Testimonial";

const Landing = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-full bg-white">I will continue from here tommorow</div>
      <Aboutus />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Landing;
