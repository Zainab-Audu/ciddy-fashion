import React from "react";
import Footer from "../../components/Footer";
import { MdDelete } from "react-icons/md";
import CartSummary from "../../components/CartSummary";
import Navbar2 from "../../components/Navbar2";

const Cartpage = () => {
  return (
    <div className="bg-white w-[100%] ">
      <Navbar2 />
      <div className="flex justify-between  flex-col w-[100%] pl-10  py-5 lg:px-20 lg:flex-row md:flex-row">
        <div className="flex w-[70%]">
          <div className="flex flex-col pb-10">
            <div className="bg-slate-20 flex gap-5 pb-3">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1703651184467/39d5a85a-c9db-48af-8914-34b0897bc86a.jpeg"
                alt="Female wear"
                className="h-[10rem] w-[10rem] rounded-lg bg-slate-900 border-slate-900 "
              />
              <div className="flex flex-col  text-bold gap-3">
                <p className=" text[24px]">Denim Hoodie</p>
                <h3 className="text-[12px]">In Stock</h3>
                <h4 className="text-[12px]">Size 3</h4>
              </div>
              <div className="flex flex-col gap-3">
                <p>&#8358;200 </p>
                <input
                  type="number"
                  className="w-16 h-6 outline-none border-2 border-black rounded-lg p-1"
                />
                <p className="flex gap-3 text-[12px] text-[#ff6b6b]">
                  Uncart
                  <MdDelete className="text-[24px]" />
                </p>
              </div>
            </div>
            <div className="bg-slate-20 flex gap-5 pb-3">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1703651184467/39d5a85a-c9db-48af-8914-34b0897bc86a.jpeg"
                alt="Female wear"
                className="h-[10rem] w-[10rem] rounded-lg bg-slate-900 border-slate-900 "
              />
              <div className="flex flex-col  text-bold gap-3">
                <p className=" text[24px]">Denim Hoodie</p>
                <h3 className="text-[12px]">In Stock</h3>
                <h4 className="text-[12px]">Size 3</h4>
              </div>
              <div className="flex flex-col gap-3">
                <p>&#8358;200 </p>
                <input
                  type="number"
                  className="w-16 h-6 outline-none border-2 border-black rounded-lg p-1"
                />
                <p className="flex gap-3 text-[12px] text-[#ff6b6b]">
                  Uncart
                  <MdDelete className="text-[24px]" />
                </p>
              </div>
            </div>
            <div className="bg-slate-20 flex gap-5 pb-3">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1703651184467/39d5a85a-c9db-48af-8914-34b0897bc86a.jpeg"
                alt="Female wear"
                className="h-[10rem] w-[10rem] rounded-lg bg-slate-900 border-slate-900 "
              />
              <div className="flex flex-col  text-bold gap-3">
                <p className=" text[24px]">Denim Hoodie</p>
                <h3 className="text-[12px]">In Stock</h3>
                <h4 className="text-[12px]">Size 3</h4>
              </div>
              <div className="flex flex-col gap-3">
                <p>&#8358;200 </p>
                <input
                  type="number"
                  className="w-16 h-6 outline-none border-2 border-black rounded-lg p-1"
                />
                <p className="flex gap-3 text-[12px] text-[#ff6b6b]">
                  Uncart
                  <MdDelete className="text-[24px]" />
                </p>
              </div>
            </div>
            <div className="bg-slate-20 flex gap-5 pb-3">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1703651184467/39d5a85a-c9db-48af-8914-34b0897bc86a.jpeg"
                alt="Female wear"
                className="h-[10rem] w-[10rem] rounded-lg bg-slate-900 border-slate-900 "
              />
              <div className="flex flex-col  text-bold gap-3">
                <p className=" text[24px]">Denim Hoodie</p>
                <h3 className="text-[12px]">In Stock</h3>
                <h4 className="text-[12px]">Size 3</h4>
              </div>
              <div className="flex flex-col gap-3">
                <p>&#8358;200 </p>
                <input
                  type="number"
                  className="w-16 h-6 outline-none border-2 border-black rounded-lg p-1"
                />
                <p className="flex gap-3 text-[12px] text-[#ff6b6b]">
                  Uncart
                  <MdDelete className="text-[24px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <CartSummary />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cartpage;
