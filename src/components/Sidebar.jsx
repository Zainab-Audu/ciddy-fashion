import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transition duration-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4">
        <button
          className="bg-gray-900 text-white px-3 py-2 rounded"
          onClick={toggleSidebar}
        >
          Toggle Sidebar
        </button>
        <ul className="mt-4">
          <li className="py-2 hover:bg-gray-700 cursor-pointer">
            Men's Clothing
          </li>
          <li className="py-2 hover:bg-gray-700 cursor-pointer">
            Women's Clothing
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
