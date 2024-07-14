/* eslint-disable react-refresh/only-export-components */
import { useSelector } from "react-redux";
import Order from "../Order/Order";
import OrderOverview from "../Order/OrderOverview";
import { clearCart, getCart } from "../Cart/CartSlice";
import EmptyCart from "../Cart/EmptyCart";
import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import store from "../Store";

export default function CheckOut() {
  const [step, setStep] = useState("");

  const cart = useSelector(getCart)

  if (!cart.length) return <EmptyCart />;
  return (
    <section className="mx-10 my-5 capitalize mb-10 lg:mb-20">
      <header className="text-wine-700 leading-loose font-bold tracking-widest my-3">
        <h1 className=" text-4xl py-2">checkout</h1>
        <h2 className=" text-2xl py-1">personal information</h2>
      </header>
      <Form method="POST" className="space-y-8 ">
        <div className="my-5 lg:grid grid-cols-2 gap-10">
          <Order type={`${step !== 0 ? "hidden" : ""}`} />
          <OrderOverview cart={cart} />
        </div>
      </Form>
    </section>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  function createOrder(newOrder) {
    console.log(newOrder);
  }
  const errors = {};
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}
