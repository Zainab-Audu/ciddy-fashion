import React from "react";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import Sidebar from "../../components/SidebarC";
import Popular from "../../components/Popular";
import Navbar2 from "../../components/Navbar2";

const Catalogue = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar2 />
      <section className="w-[90%] mx-auto">
        <div className="flex justify-between flex-col lg:flex-row md:flex-row">
          <Sidebar />
          <ProductCard />
        </div>
      </section>
      <div className="w-[100%] py-14 shadow-lg shadow-black mt-10">
        <Popular />
      </div>
      <Footer />
    </div>
  );
};

export default Catalogue;
