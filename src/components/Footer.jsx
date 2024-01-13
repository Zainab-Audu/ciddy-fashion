import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#040734] text-[#FFF] shadow-xl">
      <section className="flex flex-wrap justify-center p-10 gap-10 lg:flex-row">
        <div className="flex flex-col gap-1 md:gap-3">
          <h2 className="font-bold text-[1rem]">OTHER LINKS</h2>
          <ul className="flex flex-col gap-1 text-[0.75rem]">
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-1 md:gap-3">
          <h2 className="font-bold text-[1rem]">Office Address</h2>
          <p className="flex flex-col gap-1 text-[0.75rem]">
            16 Ibrahim Crescent off Victoria island express way, <br />
            Lagos Nigeria
          </p>
        </div>
        <div className="flex flex-col gap-1 md:gap-3">
          <h2 className="font-bold text-[1rem]">CONTACT US</h2>
          <ul className="flex flex-col gap-1 text-[0.75rem]">
            <li>+234 8132 624 679</li>
            <Link to="">Ciddy@gmail.com</Link>
          </ul>
        </div>
        <div className="flex flex-col gap-1 md:gap-3">
          <h2 className="font-bold text-[1rem]">Social Media</h2>
          <ul>
            <li className="flex gap-5">
              <span className="text-[22px] cursor-pointer hover:text-slate-300 duration-300">
                <Link to="">
                  <FaLinkedin />
                </Link>
              </span>
              <span className="text-[22px] cursor-pointer hover:text-slate-300 duration-300">
                <Link to="">
                  <FaInstagram />
                </Link>
              </span>
              <span className="text-[22px] cursor-pointer hover:text-slate-300 duration-300">
                <Link to="">
                  <FaFacebook />
                </Link>
              </span>
              <span className="text-[22px] cursor-pointer hover:text-slate-300 duration-300">
                <Link to="/">
                  <FaTwitter />
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </section>
      <div className="border-t-2 border-[#e29a85] p-4">
        <p className="text-center font-medium text-[18px]">©2023 Ciddy Ng</p>
      </div>
    </section>
  );
};

export default Footer;
