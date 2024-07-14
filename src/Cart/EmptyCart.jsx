import { Link } from "react-router-dom"
export default function EmptyCart() {
  return (
    <div className="px-5 py-3">
      <h4 className=" text-2xl hover:underline text-newgray-400 hover:text-wine-700 font-semibold">
        <Link to="/">&larr; Back to product</Link>
      </h4>
      <p className="mt-7 text-lg ">
        Your cart is still empty. Start adding products to cart :)
      </p>
    </div>
  );
}
