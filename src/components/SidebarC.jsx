import { FaAngleDown } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";
import { FaSortAmountUpAlt } from "react-icons/fa";

const SidebarC = () => {
  return (
    <div className="text-[#040734] text-[18px]">
      <div className="mt-24 border-b border-[#040734] h-[30vh]">
              <h3 className="font-bold text-[24px] capitalize ">explore categories</h3>
      <p className="flex items-center my-4">Men's clothing <FaAngleDown className="ml-4"/></p>
      <p className="flex items-center my-4">Women's clothing <FaAngleDown className="ml-4" /></p>
      </div>
      <div>
        <p className="flex items-center my-4">Filter <MdFilterList className="ml-4" /></p>
        <p className="flex items-center my-4">Sort <FaSortAmountUpAlt className="ml-4" /></p>
      </div>
    </div>
  )
}

export default SidebarC