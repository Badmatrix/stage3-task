/* eslint-disable react/prop-types */
import Button from "../Ui/Button";
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  deleteItem,
  getCurrentPrice,
  getCurrentQuantity,
  increaseItemQuantity,
} from "./CartSlice";

export default function CartItem({ cart }) {
  const { id, name, brand, image, totalPrice } = cart;

  console.log(cart)
  const currentQuantity = useSelector(getCurrentQuantity(id));

  const newPrice=useSelector(getCurrentPrice(id)) * currentQuantity
  const dispatch = useDispatch();


  function deleteCartItem(id) {
    dispatch(deleteItem(id));
  }
  function handleIncreaseItem(id) {
    dispatch(increaseItemQuantity(id));
  }
  function handleDecreaseItem(id) {
    dispatch(decreaseItemQuantity(id));
  }
  const imgSrc =
    cart.image === undefined
      ? "/images/image 22.svg"
      : `https://api.timbu.cloud/images/${image} `;
  return (
    <li className=" flex flex-wrap justify-between items-center py-5 px-3 gap-y-3 border-b">
      <div className="flex items-center gap-3">
        <div className="bg-wine-100 shadow-sm shadow-newgray-100 border-newgray-100 rounded-lg px-3 py-5 lg:w-60 md:w-48 w-40 flex justify-center mx-auto md:mx-0">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="font-semibold mx-2">
          <h1 className="text-xl text-wine-700 capitalize">
            {cart.name} | {brand || 'red wine'} | 75 cl
          </h1>
          <h2 className=" text-lg text-wine-800">{newPrice.toLocaleString()} NGN</h2>
        </div>
      </div>
      <div className="space-x-4 flex items-center gap-3">
        <span
          onClick={() => handleDecreaseItem(id)}
          className=" rounded-full border-wine-800 cursor-pointer border flex justify-center align-middle items-center h-5 w-5 aspect-square"
        >
          <FiMinus className="text-wine-800 font-bold text-xl" />
        </span>
        <h2>{currentQuantity}</h2>
        <span
          onClick={() => handleIncreaseItem(id)}
          className=" rounded-full border-wine-800 cursor-pointer border flex justify-center align-middle items-center h-5 w-5 aspect-square"
        >
          <MdAdd className="text-wine-800 font-bold text-xl" />
        </span>
        <Button onclick={() => deleteCartItem(id)}>remove</Button>
      </div>
    </li>
  );
}
