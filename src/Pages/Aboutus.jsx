import React from "react";

const Aboutus = () => {
  return (
    <div className="bg-[#040734] shadow-lg w-full flex flex-col items-center my-20 h-screen ">
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="text-white text-bold text-[26px] underline  ">
          About Ciddy Fashion
        </h1>

        <div className="item-center flex-col">
          <img
            src="/Images/CiddyLogo.png"
            alt="Ciddy's Logo "
            width="650"
            height="150"
          />
        </div>
        <div className="px-40">
          <p className="text-white text-center  text-[18px]">
            <strong>
              At Ciddy, we are dedicated to celebrating individuality and
              helping you express your unique style. With a passion for fashion
              and a commitment to quality, we curate collections that inspire
              confidence and creativity. Join us on a journey where every outfit
              tells a story, and fashion becomes a form of self-expression.
              Welcome to a world of style, where you're the star of your own
              runway."
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
