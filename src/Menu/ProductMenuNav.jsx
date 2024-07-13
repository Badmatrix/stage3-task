import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

export default function ProductMenuNav() {
  return (
    <div className="flex items-center justify-center gap-10 lg:gap-20 my-10 mb-16  border-t border-b border-newgray-200/20 w-1/3 md:w-2/3 lg:w-full mx-auto">
      <span>
        <FaLessThan />
      </span>
      <ul className="productNav flex justify-center font-medium text-lg text-wine-900 gap-7">
        <li className="border-t border-b border-wine-900">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <span>
        <FaGreaterThan />
      </span>
    </div>
  );
}
