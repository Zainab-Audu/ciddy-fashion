import React from "react";
import Footer from "../components/Footer";
import ShopNowButton from "../components/ShopNowButton";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const FemaleSection = () => {
  return (
    <div className="bg-white">
      <div className="shadow-lg sticky w-full top-0 left-0 z-[20] mx-auto item-center ">
        <Navbar />
      </div>
      <div className="flex  py-5 lg:px-20 h-screen">
        <Sidebar />

        <div className="flex items-center gap-4">
          <div className="bg-black/40 relative">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1703651184467/39d5a85a-c9db-48af-8914-34b0897bc86a.jpeg"
              alt=""
              className="h-[20rem] w-[20rem] mix-blend-overlay"
            />
            <div className=" absolute top-5">
              <ShopNowButton />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FemaleSection;
