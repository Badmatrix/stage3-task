/* eslint-disable react/prop-types */
import Button from '../Ui/Button';
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, deleteItem, increaseItemQuantity } from './CartSlice';

export default function CartItem({ cart }) {
    const dispatch=useDispatch()
    function deleteCartItem(id) {
        dispatch(deleteItem(id))
    }
    function handleIncreaseItem(id) {
        dispatch(increaseItemQuantity(id))
    }
    function handleDecreaseItem(id) {
        dispatch(decreaseItemQuantity(id));
    }
    // console.log(cart)
  return (
    <li className=" flex flex-wrap justify-between items-center py-5 px-3 gap-y-3 border-b">
      <div className="flex items-center gap-3">
        <div className="bg-wine-100 shadow-sm shadow-newgray-100 border-newgray-100 rounded-lg px-3 py-5 lg:w-60 md:w-48 w-40 flex justify-center mx-auto md:mx-0">
          <img
            src={`https://api.timbu.cloud/images/${cart.image}`}
            alt={cart.name}
          />
        </div>
        <div>
          <h1>{cart.name} | brand |</h1>
          <h2>{cart.unitPrice * cart.quantity}</h2>
        </div>
      </div>
      <div className="space-x-4 flex items-center gap-3">
        <span
          onClick={() => handleDecreaseItem(cart.id)}
          className=" rounded-full border-wine-800 cursor-pointer border flex justify-center align-middle items-center h-5 w-5 aspect-square"
        >
          <FiMinus className="text-wine-800 font-bold text-xl" />
        </span>
        <h2>{cart.quantity}</h2>
        <span
          onClick={() => handleIncreaseItem(cart.id)}
          className=" rounded-full border-wine-800 cursor-pointer border flex justify-center align-middle items-center h-5 w-5 aspect-square"
        >
          <MdAdd className="text-wine-800 font-bold text-xl" />
        </span>
        <Button onclick={() => deleteCartItem(cart.id)}>remove</Button>
      </div>
    </li>
  );
}
