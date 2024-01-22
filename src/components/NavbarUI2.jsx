import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarUI2 = () => {
  return (
    <div className="flex gap-10">
      <Link
        to="/"
        className="text-white font-bold text-[40px] w-[20px]  cursor-pointer "
      >
        <FaTwitter />
      </Link>
      <Link
        to="/"
        className="text-white font-bold text-[40px] w-[20px] cursor-pointer"
      >
        <FaInstagram />
      </Link>
      <Link
        to="/"
        className="text-white font-bold text-[40px] w-[20px] cursor-pointer"
      >
        <FaFacebook />
      </Link>
      <Link
        to="/"
        className="text-white font-bold text-[40px] w-[20px] cursor-pointer"
      >
        <FaLinkedin />
      </Link>
    </div>
  );
};

export default NavbarUI2;
