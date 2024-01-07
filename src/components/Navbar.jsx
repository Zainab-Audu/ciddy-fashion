import React from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

import Searcharea from "./Searcharea";

const Navbar = () => {
  return (
    <div className="shadow-lg sticky w-full top-0 left-0 z-[20]  mx-auto item-center ">
      <div className="md:flex items-center justify-between bg-[#040734] py-4">
        <div className="font-bold  pl-20 ">
          <img
            src="/Images/CiddyLogo.png"
            alt="Ciddy's Logo"
            width="80"
            height="80"
          />
        </div>
        <Searcharea />

        <ul className="text-white flex ">
          <p className="text-white font-bold text-[40px] w-[20px]">
            <TiShoppingCart />
          </p>
          <Link to="About" className="mx-10">
            About
          </Link>
          <Link to="Contact" className="mx-10">
            Contact
          </Link>
          <Link to="FemaleSection" className="mx-10">
            Shop
          </Link>

          <button></button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
