import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SidebarC from "../components/SidebarC";
import Popular from "../components/Popular";

const FemaleSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <SidebarC />
      <Popular />
      <Footer />
    </div>
  );
};

export default FemaleSection;
