/* eslint-disable react/prop-types */
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

export default function ProductMenuNav({ handlePageDec,handlePageInc,pageNum }) {
  
  return (
    <div className="flex items-center justify-center gap-10 lg:gap-20 my-10 mb-16  border-t border-b border-newgray-200/20 w-1/3 md:w-2/3 lg:w-full mx-auto">
      <span className=" cursor-pointer" onClick={() => handlePageDec()}>
        <FaLessThan />
      </span>
      <ul className="productNav flex justify-center font-medium text-lg text-wine-900 gap-7">
        {Array.from({ length: 4 }).map((_, i) => (
          
          <li className={`${pageNum === i + 1 ?' border-t border-b border-wine-700':''} cursor-pointer `} key={i}>
            {i + 1}
          </li>
        ))}
      </ul>
      <span className=" cursor-pointer" onClick={() => handlePageInc()}>
        <FaGreaterThan />
      </span>
    </div>
  );
}
