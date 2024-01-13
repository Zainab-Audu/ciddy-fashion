import React from "react";
import { Link } from "react-router-dom";

const ShopNowButton = () => {
  return (
    <div className="bg-[#FFF] text-[#000] px-4 py-1 cursor-pointer  duration-500 border-2 hover:bg-slate-900 hover:text-[#FFF]">
      <Link to="shopmalebutton">Shop Now</Link>
    </div>
  );
};

export default ShopNowButton;
