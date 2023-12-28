import React from "react";

const checkout = () => {
  return (
    <div>
      <div className=" w-full bg-gradient-to-t from-[#faf8fa] via-[#e4e2e7] to-[#c9c7cd] text-black flex flex-col lg:flex-row justify-center items-center lg:px-[100px] pt-28 pb-32  h-screen ">
        <div className="w-[100%] lg:w-[80%] flex flex-col justify-center items-center">
          <h1 className=" text-[30px] text-black lg:font-bold ">
            Send me a Message
          </h1>
          <form className="  w-[70%] shadow-xl p-10 flex flex-col gap-5  justify-center">
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
                className=" p-3 w-full border rounded-lg border-[#c0b7c5]  focus:bg-[#e6e4e7] outline-none focus:border-[#d7d5d7]  focus:border-2 focus:text-[24px]"
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
                className=" p-3 w-full border rounded-lg border-[#c0b7c5]  focus:border-[#d7d5d7] outline-none  focus:border-2 focus:text-[24px]"
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
                className=" p-3 w-full border rounded-lg border-[#c0b7c5]  focus:border-[#d7d5d7] outline-none  focus:border-2 focus:text-[24px]"
              />
            </div>
            <button className="bg-[#6a696b] rounded-lg  hover:bg-[#8f8e90] w-[30%] justify-center items-center py-2 border-none text-[24px]  duration-300">
              Send
            </button>
          </form>
        </div>
        <div className=" w-[100%] lg:w-[20%] pt-10"></div>
      </div>
    </div>
  );
};

export default checkout;
