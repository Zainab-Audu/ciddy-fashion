import React from 'react'
import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import Searcharea from './Searcharea';
import NavbarUI2 from './NavbarUI2';

const Navbar2 = () => {
  return (
    <div className="shadow-lg sticky w-full top-0 left-0 z-[20]  mx-auto item-center ">
      <div className="flex items-center justify-between bg-[#040734] p-4 lg:px-20">
        <div className="font-bold flex items-center gap-1 ">
          <Link to="/" className="cursor-pointer">
            <img
              src="/Images/CiddyLogo.png"
              alt="Ciddy's Logo"
              width="80"
              height="80"
            />
          </Link>
          <Searcharea />
        </div>

        <ul className="text-white flex items-center gap-10">
          <Link
            to="/cartpage"
            className="text-white font-bold text-[40px] w-[20px] cursor-pointer"
          >
            <TiShoppingCart />
          </Link>

          <NavbarUI2 />
          <Link
            to="/catalogue"
            className="hover:text-slate-200  duration-300 cursor-pointer"
          >
            Shop
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar2