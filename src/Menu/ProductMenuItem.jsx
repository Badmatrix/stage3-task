/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import ProductDesc from "./ProductDesc";

export default function ProductMenuItem({ product }) {
const imgSrc =
  product.photos[0]?.url === undefined
      ? "/images/image 22.svg" : `https://api.timbu.cloud/images/${product.photos[0]?.url} `
  
    
  return (
    <li className="relative h-[340px] md:h-[360px] bg-wine-50 col-span-1 capitalize border-2 border-newgray-600 shadow-md shadow-newgray-600 rounded-lg overflow-hidden mx-auto w-[98%] lg:w-full pt-3 ">
      <Link to={`/${product.id}`}>
        <div className="flex justify-center">
          <img
            src={imgSrc}
            className="max-w-full "
          />
        </div>
        <ProductDesc product={product} />
      </Link>
    </li>
  );
}
