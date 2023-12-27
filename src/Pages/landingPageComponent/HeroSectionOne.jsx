import React, { useState, useEffect } from "react";

const HeroSectionOne = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgroundData = [
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1703645502827/5b75909b-5534-4b1a-a989-b086813e3231.jpeg",
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1703645475974/5d54e4f2-9fd5-4def-ba49-b355fcc82a43.jpeg",
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1703645457520/c166de73-4e1e-47a7-ac96-dad50488642b.jpeg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundData.length
      );
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  });

  const heroStyle = {
    backgroundImage: `url(${backgroundData[backgroundIndex]})`,
  };
  return (
    <React.Fragment>
      <div className="bg-black/40 relative">
        <div
          className="w-full h-screen bg-[#433A3A]  bg-cover bg-center mix-blend-overlay object-cover absolute "
          style={heroStyle}
        ></div>
        <div className="flex flex-col gap-2 justify-center items-center h-screen text-[#FFF] z-10 relative">
          <h1 className="font-extrabold text-[2.5rem] font-mono ">
            Best Outfits with CIDDY Fashion{" "}
          </h1>
          <p className="font-bold text-[1.5rem] ">
            Dress nice <span className="text-[#FF7F50]">stay Simple</span>
          </p>
          <button className="bg-slate-200 px-4 py-1 text-[#000] hover:bg-slate-900 hover:text-[#FFF]">
            Shop Now!
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSectionOne;