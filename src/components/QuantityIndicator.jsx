import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const QuantityIndicator = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onDecrement}
        className="bg-gray-200 px-2 py-1 rounded-lg"
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span className="mx-2">{quantity}</span>
      <button
        onClick={onIncrement}
        className="bg-gray-200 px-2 py-1 rounded-lg"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default QuantityIndicator;
