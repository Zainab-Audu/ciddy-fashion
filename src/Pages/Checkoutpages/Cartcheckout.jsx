import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CartSummary from "../../components/CartSummary";

const Cartcheckout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-full bg-gradient-to-t from-[#faf8fa] via-[#e4e2e7] to-[#c9c7cd] text-black flex flex-row">
        <div className=" w-[80%] bg-gradient-to-t from-[#faf8fa] via-[#e4e2e7] to-[#c9c7cd] text-black flex flex-col lg:flex-row justify-center items-center lg:px-[100px] pt-5    ">
          <div className="w-[100%] lg:w-[80%] flex flex-col justify-center items-center">
            <h1 className=" text-[30px] text-black lg:font-bold ">
              Shipping Information
            </h1>
            <form className="  w-[70%] shadow-xl p-2 flex flex-col gap-5  justify-center">
              <div>
                <label
                  htmlFor="Name"
                  className="block text-[18px] font-semibold "
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your FullName"
                  className=" p-1 w-full border rounded-lg border-[#c0b7c5]  focus:bg-[#e6e4e7] outline-none focus:border-[#d7d5d7]  focus:border-2 focus:text-[24px]"
                />
              </div>
              <div>
                <label
                  htmlFor="Name"
                  className="block text-[18px] font-semibold "
                >
                  State
                </label>
                <input
                  type="text"
                  placeholder="Enter the state you want your Item delivered"
                  className=" p-1 w-full border rounded-lg border-[#c0b7c5]  focus:bg-[#e6e4e7] outline-none focus:border-[#d7d5d7]  focus:border-2 focus:text-[24px]"
                />
              </div>
              <div>
                <label
                  htmlFor="Name"
                  className="block text-[18px] font-semibold "
                >
                  City
                </label>
                <input
                  type="text"
                  placeholder=""
                  className=" p-1 w-full border rounded-lg border-[#c0b7c5]  focus:bg-[#e6e4e7] outline-none focus:border-[#d7d5d7]  focus:border-2 focus:text-[24px]"
                />
              </div>
              <div>
                <label
                  htmlFor="Name"
                  className="block text-[18px] font-semibold "
                >
                  Street Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className=" p-1 w-full border rounded-lg border-[#c0b7c5]  focus:bg-[#e6e4e7] outline-none focus:border-[#d7d5d7]  focus:border-2 focus:text-[24px]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[18px] font-semibold   "
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className=" p-1 w-full border rounded-lg border-[#c0b7c5]  focus:border-[#d7d5d7] outline-none  focus:border-2 focus:text-[24px]"
                />
              </div>
              <div>
                <label
                  htmlFor="Number"
                  className="block text-[18px] font-semibold "
                >
                  Phone Number 1
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone Number 1"
                  className=" p-1 w-full border rounded-lg border-[#c0b7c5]  focus:bg-[#e6e4e7] outline-none focus:border-[#d7d5d7]  focus:border-2 focus:text-[24px]"
                />
              </div>
              <div>
                <label
                  htmlFor="Number"
                  className="block text-[18px] font-semibold "
                >
                  Phone Number 2
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone Number 2"
                  className=" p-1 w-full border rounded-lg border-[#c0b7c5]  focus:bg-[#e6e4e7] outline-none focus:border-[#d7d5d7]  focus:border-2 focus:text-[24px]"
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-[18px] font-semibold   "
                >
                  Location
                </label>
                <input
                  type="Location"
                  placeholder="Enter Your Address Address"
                  className=" p-1 w-full border rounded-lg border-[#c0b7c5]  focus:border-[#d7d5d7] outline-none  focus:border-2 focus:text-[24px]"
                />
              </div>
              <button className="bg-[#6a696b] rounded-lg  hover:bg-[#8f8e90] w-[40%] justify-center items-center py-2 border-none text-[24px]  duration-300">
                Proceed to make payment
              </button>
            </form>
          </div>
          <div className=" w-[100%] lg:w-[20%] pt-10"></div>
        </div>
        <div className="w-[20%] mt-32 px-10">
          <CartSummary />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cartcheckout;
