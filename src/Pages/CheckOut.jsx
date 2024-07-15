/* eslint-disable react-refresh/only-export-components */
import { useDispatch, useSelector } from "react-redux";
import Order from "../Order/Order";
import OrderOverview from "../Order/OrderOverview";
import { clearCart, getCart } from "../Cart/CartSlice";
import EmptyCart from "../Cart/EmptyCart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CheckOut() {
    const [step, setStep] = useState(0);
    const dispatch = useDispatch()
    const navigate=useNavigate()
    
    function handleForm() {
    dispatch(clearCart());
    navigate("/success");
}
  const cart = useSelector(getCart)

  if (!cart.length) return <EmptyCart />;
  return (
    <section className="mx-10 my-5 capitalize mb-10 lg:mb-20">
      <header className="text-wine-700 leading-loose font-bold tracking-widest my-3">
        <h1 className=" text-4xl py-2">checkout</h1>
        <h2 className=" text-2xl py-1">personal information</h2>
      </header>
      <form  className="space-y-8 " onSubmit={handleForm}>
        <div className="my-5 lg:grid grid-cols-2 gap-10">
          <Order type={`${step !== 0 ? "hidden" : ""}`} />
          <OrderOverview cart={cart} />
        </div>
      </form>
    </section>
  );
}

