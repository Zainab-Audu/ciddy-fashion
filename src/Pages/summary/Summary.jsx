import React from "react";
import Navbar from "../../components/Navbar";
import {
  MdOutlineStarPurple500,
  MdStarHalf,
  MdFavoriteBorder,
} from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { TbCurrencyNaira } from "react-icons/tb";
import Footer from "../../components/Footer";
// import Footer from "../../components/Footer";

const Summary = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#F5F5F5] flex flex-col gap-24 py-20 lg:px-[6rem]">
        <section className="flex flex-col gap-4 w-[100%] lg:flex-row">
          <div className="lg:w-[50%]">
            <img
              src="https://images.pexels.com/photos/9558699/pexels-photo-9558699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-[30rem] h-[20rem] object-cover rounded-md"
            />
          </div>
          <div className="lg:w-[50%] flex flex-col gap-4">
            <div className="flex items-center gap-4 font-bold text-[1.4rem]">
              <h1>Gucci tiger top </h1>
              <button>
                <MdFavoriteBorder />
              </button>{" "}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              temporibus.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eos, temporibus.
            </p>
            <p className="flex items-center gap-1">
              <MdOutlineStarPurple500 color="#FF6B6B" />
              <MdOutlineStarPurple500 color="#FF6B6B" />
              <MdOutlineStarPurple500 color="#FF6B6B" />
              <MdOutlineStarPurple500 color="#FF6B6B" />
              <MdStarHalf color="#FF6B6B" />
              <span className="px-3 font-medium">20 (customers) </span>{" "}
            </p>
            <p className="flex items-center text-[#FF6B6B] font-bold">
              <TbCurrencyNaira size={20} />
              <span>20,000</span>
            </p>
            <p>
              Size variation <span className="font-bold">1 2 3 4 5 6 </span>{" "}
            </p>
            <div className="flex items-center gap-4">
              <p>Quality</p>
              <input
                type="number"
                className="w-16 h-10 outline-none border-2 border-black rounded-lg p-1"
              />
              <button className="bg-[#FF6B6B] p-2 rounded-full hover:bg-[#FF4B4B] duration-300">
                <CiShoppingCart className="text-[1.4rem] text-[#FFF]" />
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-[1.6rem] font-bold">Description</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur. Neque consectetur eget in eu
            elementum velit augue. Sed netus dictum duis aenean pellentesque.
            Sapien varius sagittis aliquam pellentesque..Lorem ipsum dolor sit
            amet consectetur. Neque consectetur eget in eu elementum velit
            augue. Sed netus dictum duis aenean pellentesque. Sapien varius
            sagittis aliquam pellentesque..Lorem ipsum dolor sit amet
            consectetur. Neque consectetur eget in eu elementum velit augue. Sed
            netus dictum duis aenean pellentesque. Sapien varius sagittis
            aliquam pellentesque..Lorem ipsum dolor sit amet consectetur. Neque
            consectetur eget in eu elementum velit augue. Sed netus dictum duis
            aenean pellentesque. Sapien varius sagittis aliquam
            pellentesque..Lorem ipsum dolor sit amet consectetur. Neque
            consectetur eget in eu elementum velit augue. Sed netus dictum duis
            aenean pellentesque. Sapien varius sagittis aliquam
            pellentesque..Lorem ipsum dolor sit amet consectetur. Neque
            consectetur eget in eu elementum velit augue. Sed netus dictum duis
            aenean pellentesque. Sapien varius sagittis aliquam
            pellentesque..Lorem ipsum dolor sit amet consectetur. Neque
            consectetur
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Summary;
