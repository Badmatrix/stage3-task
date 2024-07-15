/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import Order from "../Order/Order";
import OrderOverview from "../Order/OrderOverview";
import { clearCart, getCart } from "../Cart/CartSlice";
import EmptyCart from "../Cart/EmptyCart";
import Button from "../Ui/Button";
import SuccessOrderModal from "../Order/SuccessOrderModal";

export default function CheckOut() {
  const [modalShow, setModalShow] = useState(false);
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handlePrev() {
    if (step === 1) setStep((step) => step - 1);
  }
  function handleNext() {
    if (step === 0) setStep((step) => step + 1);
  }
  function handleForm() {
    setModalShow((show) => !show);
    scrollTo(0, 100);
  }
  function closeModal(){
    setModalShow((show) => !show);
    navigate("/");
    dispatch(clearCart());
  }
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;
  return (
    <section className="mx-10 my-5 capitalize mb-10 lg:mb-20 relative">
      <div>
        <header className="text-wine-700 leading-loose font-bold tracking-widest my-3">
          <h1 className=" text-4xl py-2">checkout</h1>
          <h2 className=" text-2xl py-1">personal information</h2>
        </header>
        <form className="space-y-8 " onSubmit={handleForm}>
          <div className="my-5 lg:grid grid-cols-2 gap-10">
            <Order type={`${step !== 0 ? "hidden" : ""}`} />
            <OrderOverview cart={cart} type={`${step !== 1 ? "hidden" : ""}`} />
          </div>
        </form>
        <div className="flex gap-5 justify-end lg:hidden">
          {step === 1 ? (
            <Button
              onclick={handlePrev}
              type="bg-gray-50 hover:bg-wine-800 shadow-md text-wine-800 hover:text-white"
            >
              &larr; back
            </Button>
          ) : (
            <Button onclick={handleNext}>next &rarr;</Button>
          )}
        </div>
      </div>
      <div
        className={`${
          modalShow === true ? "block" : "hidden"
        } absolute top-0 z-10 w-full`}
      >
        <SuccessOrderModal
          onclick={closeModal}
        />
      </div>
    </section>
  );
}
