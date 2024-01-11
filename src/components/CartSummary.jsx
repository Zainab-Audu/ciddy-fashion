import React, { useState } from "react";

const CartSummary = () => {
  const deliveryFee = 5;

  const [cart] = useState([2]);
  const calculateSubtotal = () => {
    return cart.reduce(
      (subtotal, item) => subtotal + item.quantity * item.price,
      0
    );
  };

  const calculateTotal = () => {
    return calculateSubtotal() + deliveryFee;
  };

  return (
    <div className="  border border-blue-50 p-2 rounded-lg ">
      <h2 className="text-3xl justify-center items-center  font-bold mb-4">
        Summary
      </h2>

      {cart.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <>
          <ul className=" divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="py-4 flex ">
                <div className="flex items-center">
                  <div className="">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-500">{item.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="">
            <div className="flex justify-between  ">
              <span>Subtotal:</span>
              <span>&#8358;{calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between   ">
              <span>Delivery:</span>
              <span>&#8358;{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between ">
              <span>Total:</span>
              <span>&#8358;{calculateTotal().toFixed(2)}</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-10">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;
