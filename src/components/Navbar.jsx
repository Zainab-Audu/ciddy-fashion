import React from "react";
import { TiShoppingCart } from "react-icons/ti";

import Searcharea from "./Searcharea";

const Navbar = () => {
  return (
    <div className="shadow-lg sticky w-full top-0 left-0 z-[20]  mx-auto item-center ">
      <div className="md:flex items-center justify-between bg-[#040734] py-4">
        <div className="font-bold  pl-20  ">
          <img
            src="/Images/CiddyLogo.png"
            alt="Ciddy's Logo "
            width="80"
            height="80"
          />
        </div>
        <Searcharea />

        <ul className="text-white flex ">
          <p className="text-white font-bold text-[40px] w-[20px]">
            <TiShoppingCart />
          </p>
          <li className="mx-10">About</li>
          <li className="mx-10">Contact</li>
          <li className="mx-10">Shop</li>

          <button></button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
