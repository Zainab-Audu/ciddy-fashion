import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const ProductCard = () => {
  const [product, setProduct] = useState([]);

  const promotionData = [
    {
      id: 1,
      coverImg:
        "https://images.pexels.com/photos/63580/neckties-cravats-ties-fashion-63580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      advert: "silk office suit ties",
    },
    {
      id: 2,
      coverImg:
        "https://img.freepik.com/free-vector/various-color-checkered-cotton-shirts-folded-stack_1441-3074.jpg?size=626&ext=jpg&ga=GA1.1.1207199826.1690666781&semt=ais",
      advert: "free delivery deals",
    },
    {
      id: 3,
      coverImg:
        "https://img.freepik.com/free-photo/stack-clothes-white-background-closeup_93675-132644.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais",
      advert: "new jean trouser arrivals",
    },
    {
      id: 4,
      coverImg:
        "https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-29.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais",
      advert: "top Discount sales",
    },
    {
      id: 5,
      coverImg:
        "https://img.freepik.com/free-photo/full-shot-smiley-man-with-sale-tag_23-2149220646.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais",
      advert: "promotion promotion",
    },
  ];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
      cache: "force-cache",
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const extract = (text) => {
    const words = text.split(" ");
    return words.slice(0, 4).join(" ");
  };

  const Items = product.map((info) => (
    <div
      key={info.id}
      className="lg:w-[30%] md:w-[30%] w-[100%] rounded-md bg-gray-200 mb-4 border-gray-200 border"
    >
      <div className="relative">
        <img
          src={info.image}
          alt=""
          className=" object-cover object-center w-[100%] h-[200px] rounded-md"
        />
        <div className="absolute top-10 right-4 text-[2rem] text-[#FF6B6B] drop-shadow-[10px]">
          <IoMdHeartEmpty className="mb-4" />
          <FaCartShopping className="cursor-pointer hover:text-[#1e0d0d]" />
        </div>
      </div>
      <div className="px-2 py-4">
        <p className="flex justify-between items-center">
          {extract(info.title)}{" "}
          <span className="bg-[#FF6B6B] text-white p-2 text-[13.216px] rounded-[10px]">
            ${info.price}
          </span>
        </p>
        <p className="text-yellow-500 flex my-2 text-[10px]">
          &#9733; &#9733; &#9733; &#9733; &#9733;
          <span className="text-[#040734]">10</span>
          <span className="text-[#040734] ml-auto">200units</span>
        </p>
      </div>
    </div>
  ));

  const promotionItems = promotionData.map((item) => (
    <div
      style={{ backgroundImage: `url(${item.coverImg})` }}
      className="bg-cover bg-center h-[20vh] mb-4 flex"
    >
      <p className="mt-auto bg-black text-[#FFF200] w-[100%] px-4 py-2 text-[1.4rem] capitalize">
        {item.advert}
      </p>
    </div>
  ));

  return (
    <section className="w-[90%] lg:w-[70%] ">
      <div className="">
        <section className="flex mt-10 justify-between">
          <div className="w-[100%] lg:w-[50%] md:w-[50%]">
            <div
              style={{
                backgroundImage:
                  'url("https://colorlib.com/wp/wp-content/uploads/sites/2/hoodie-mockups.jpeg")',
              }}
              className="bg-cover bg-center h-[30vh] p-6 flex justify-start items-start flex-col rounded-lg mb-4"
            >
              <p className="text-[2rem] lg:w-[50%] uppercase text-[#FFF200]">
                Winter <br /> is <br /> here
              </p>
              <p>20%-off</p>
            </div>
            <div
              style={{
                backgroundImage:
                  'url("https://img.freepik.com/free-photo/rack-clothes-store_23-2148929536.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais")',
              }}
              className="bg-cover bg-center h-[30vh] p-6 flex justify-start items-start flex-col rounded-lg"
            >
              <p className="text-[2rem] lg:w-[50%] uppercase text-[#FFF200]">
                checkout our latest exquisite suits
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                'url("https://img.freepik.com/free-photo/portrait-woman-posing-with-fake-plastic-gun_23-2150368031.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais")',
            }}
            className="bg-cover bg-center h-[62vh] p-6 flex justify-start items-start flex-col rounded-lg lg:w-[48%] md:w-[48%]"
          >
            <p className="text-[2rem] lg:w-[50%] uppercase">
              trending: CASUAL GROOVY COMBO OFFER
            </p>
          </div>
        </section>
        <div className="flex justify-between ">{promotionItems}</div>
      </div>
      <div>
        <p className="my-4 text-[24px] font-bold">See more product</p>
        <div className="flex flex-col lg:flex-row md:flex-row flex-wrap justify-between items-center">
          {Items}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
