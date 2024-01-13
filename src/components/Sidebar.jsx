import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="bg-gray-900 text-white px-3 py-2 rounded"
        onClick={toggleSidebar}
      >
        Toggle Side
      </button>
      <div
        className={`fixed  left-0 z-50 w-64 bg-gray-500  h-screen text-white transition duration-300 transform ${
          isOpen ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="p-4">
          <ul className="mt-4">
            <Link
              to={"/femaleSection"}
              className="py-2 hover:bg-gray-700 cursor-pointer"
            >
              Men's Clothing
            </Link>
            <Link
              to={"/maleSection"}
              className="py-2 hover:bg-gray-700 cursor-pointer"
            >
              Women's Clothing
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
