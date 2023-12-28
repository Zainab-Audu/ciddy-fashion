import React from "react";
import ShopNowButton from "../../components/ShopNowButton";

const HeroSectionTwo = () => {
  return (
    <div className="flex justify-center items-center py-5 lg:px-20 h-screen">
      <div className="flex flex-col gap-3 items-center">
        <p className="text-[#000] font-extrabold text-[2rem]">New Arrivals</p>
        <p className="text-[1rem] font-mono tracking-wide text-center">
          we are giving 15% discount on your first shopping with us.
        </p>
        <button className="bg-slate-800 px-4 py-1 text-[#FFF] font-semibold ">
          Shop here !
        </button>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-black/40 relative">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1703651184467/39d5a85a-c9db-48af-8914-34b0897bc86a.jpeg"
            alt=""
            className="h-[20rem] w-[20rem] mix-blend-overlay"
          />
          <div className=" absolute top-5">
            <ShopNowButton />
          </div>
        </div>
        <div className="bg-black/40 relative">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1703651018232/49dadb57-cb57-4415-9674-531d30d6b46f.jpeg"
            alt=""
            className="h-[26rem] w-[25rem] mix-blend-overlay"
          />
          <div className="absolute top-5">
            <ShopNowButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTwo;
