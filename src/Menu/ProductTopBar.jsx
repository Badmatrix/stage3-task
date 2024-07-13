import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

export default function ProductTopBar() {
  return (
    <div className="md:my-6 my-4">
      <div className="flex justify-between md:mx-10 mx-5">
        <form>
          <input
            type="search"
            placeholder="search for product"
            className=" outline outline-1 outline-wine-800/80 rounded-full px-3 md:py-1 w-36 md:w-48 py-0  lg:w-56 bg-wine-800/10 placeholder:text-wine-200 placeholder:text-xs"
          />
        </form>
        <div className="flex items-center md:gap-12 gap-4 ">
          <span className="rounded-full border border-wine-900 md:p-2 p-1 text-sm md:text-base cursor-pointer">
            <FaLessThan />
          </span>
          <span className="rounded-full border border-wine-900 md:p-2 p-1 text-sm md:text-base cursor-pointer">
            <FaGreaterThan />
          </span>
        </div>
      </div>
    </div>
  );
}
