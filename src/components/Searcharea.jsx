import React from "react";

const Searcharea = () => {
  return (
    <div className="w-[100%] items-center lg:w-[70%] relative mb-10 ">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search here"
        className="w-[40%] p-3 pl-6 rounded-lg shadow-sm shadow-[#fff] outline-none absolute"
      />
    </div>
  );
};

export default Searcharea;
