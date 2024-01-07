import React from "react";
import { Link } from "react-router-dom";
import Searcharea from "../components/Searcharea";
import { TiShoppingCart } from "react-icons/ti";
import Footer from "../components/Footer";
import ShopNowButton from "../components/ShopNowButton";
import Sidebar from "../components/Sidebar";

const FemaleSection = () => {
  return (
    <div className="bg-white">
      <div className="shadow-lg sticky w-full top-0 left-0 z-[20] mx-auto item-center ">
        <div className="md:flex items-center justify-between bg-[#040734] py-4">
          <div className="">
            <div className="font-bold   ">
              <img
                src="/Images/CiddyLogo.png"
                alt="Ciddy's Logo "
                width="80"
                height="80"
              />
            </div>
            <div className=" bg-slate-400">
              <p>Denim Hoodie</p>
            </div>
          </div>
          <Searcharea />

          <ul className="text-white flex ">
            <p className="text-white font-bold text-[40px] w-[20px]">
              <TiShoppingCart />
            </p>
            <Link to={"About"} className="mx-10">
              About
            </Link>
            <Link to={"Contact"} className="mx-10">
              Contact
            </Link>
            <Link to={""} className="mx-10">
              Shop Male
            </Link>
          </ul>
        </div>
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
