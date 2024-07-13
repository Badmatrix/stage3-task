/* eslint-disable react/prop-types */
import { BsCart3 } from "react-icons/bs";
import { MdOutlineStar } from "react-icons/md";

export default function ProductDesc({product}) {
  return (
    
        <div className="absolute bottom-0 bg-newgray-600  px-3 py-2 m-1 rounded-lg  font-bold h-[35%] lg:h-2/5 left-0 right-0 overflow-hidden">
          <div className=" flex justify-between items-end ">
            <h3 className="py-2 text-xs md:text-base">
              {product.name} | {product.brand || 'red wine'} | {product.alcoholPerc || '14%'} |
              {75} cl
            </h3>
            <div className="text-xs flex justify-end gap-x-1">
              {product.ratings || 4.5}
              <span>
                <MdOutlineStar className=" text-yellow-400 text-sm" />
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <h5 className="  font-medium text-xs sm:text-sm md:text-base">
              {product.current_price[0].NGN} NGN
            </h5>
            <div className="">
              <div className=" rounded-full flex p-1  border border-wine-700 ">
                <BsCart3 className="text-wine-1000 font-light text-xs" />
              </div>
            </div>
          </div>
        </div>
  )
}
