import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { MdDelete } from "react-icons/md";
import CartSummary from "../../components/CartSummary";

const Cartpage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex w-[100%]  py-5 lg:px-20 ">
        <div className="flex w-[70%]">
          <div className="flex flex-col pb-10">
            <div className="bg-slate-20 flex gap-20 pb-5">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1703651184467/39d5a85a-c9db-48af-8914-34b0897bc86a.jpeg"
                alt="Female wear"
                className="h-[15rem] w-[15rem] rounded-lg bg-slate-900 border-slate-900 "
              />
              <div className="flex flex-col  text-bold gap-3">
                <p className="text-bold">Denim Hoodie</p>
                <h3>In Stock</h3>
                <h4 className="text-[12px]">Size 3</h4>
              </div>
              <div className="flex flex-col gap-3">
                <p>&#8358;200 </p>
                <input
                  type="number"
                  className="w-16 h-6 outline-none border-2 border-black rounded-lg p-1"
                />
                <p className="flex gap-5 text-[#ff6b6b]">
                  Uncart
                  <MdDelete className="text-[30px]" />
                </p>
              </div>
            </div>
            <div className="bg-slate-20 flex gap-20 pb-5">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1703651184467/39d5a85a-c9db-48af-8914-34b0897bc86a.jpeg"
                alt="Female wear"
                className="h-[15rem] w-[15rem] rounded-lg bg-slate-900 border-slate-900 "
              />
              <div className="flex flex-col  text-bold gap-3">
                <p className="text-bold">Denim Hoodie</p>
                <h3>In Stock</h3>
                <h4 className="text-[12px]">Size 3</h4>
              </div>
              <div className="flex flex-col gap-3">
                <p>&#8358;200 </p>
                <input
                  type="number"
                  className="w-16 h-6 outline-none border-2 border-black rounded-lg p-1"
                />
                <p className="flex gap-5 text-[#ff6b6b]">
                  Uncart
                  <MdDelete className="text-[30px]" />
                </p>
              </div>
            </div>
            <div className="bg-slate-20 flex gap-20 pb-5">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1703651184467/39d5a85a-c9db-48af-8914-34b0897bc86a.jpeg"
                alt="Female wear"
                className="h-[15rem] w-[15rem] rounded-lg bg-slate-900 border-slate-900 "
              />
              <div className="flex flex-col  text-bold gap-3">
                <p className="text-bold">Denim Hoodie</p>
                <h3>In Stock</h3>
                <h4 className="text-[12px]">Size 3</h4>
              </div>
              <div className="flex flex-col gap-3">
                <p>&#8358;200 </p>
                <input
                  type="number"
                  className="w-16 h-6 outline-none border-2 border-black rounded-lg p-1"
                />
                <p className="flex gap-5 text-[#ff6b6b]">
                  Uncart
                  <MdDelete className="text-[30px]" />
                </p>
              </div>
            </div>
            <div className="bg-slate-20 flex gap-20 pb-5">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1703651184467/39d5a85a-c9db-48af-8914-34b0897bc86a.jpeg"
                alt="Female wear"
                className="h-[15rem] w-[15rem] rounded-lg bg-slate-900 border-slate-900 "
              />
              <div className="flex flex-col  text-bold gap-3">
                <p className="text-bold">Denim Hoodie</p>
                <h3>In Stock</h3>
                <h4 className="text-[12px]">Size 3</h4>
              </div>
              <div className="flex flex-col gap-3">
                <p>&#8358;200 </p>
                <input
                  type="number"
                  className="w-16 h-6 outline-none border-2 border-black rounded-lg p-1"
                />
                <p className="flex gap-5 text-[#ff6b6b]">
                  Uncart
                  <MdDelete className="text-[30px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] ">
          <CartSummary />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cartpage;
