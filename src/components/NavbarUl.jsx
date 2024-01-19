import React from "react";
import { Link } from "react-scroll";

const NavbarUl = () => {
  return (
    <div className="flex gap-10">
      <Link
        to="about"
        smooth={true}
        className="hover:text-slate-200 cursor-pointer duration-300"
      >
        About
      </Link>
      <Link
        to="signup"
        smooth={true}
        className="hover:text-slate-200 cursor-pointer duration-300"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default NavbarUl;
