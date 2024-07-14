/* eslint-disable react/prop-types */
import locationList from "../DeliveryLocation";
import DisplayList from "./DisplayList";
import OverviewProducts from "./OverviewProducts";
import { useNavigation } from "react-router-dom";
import { getCart, getTotalCartprice } from "../Cart/CartSlice";
import { useSelector } from "react-redux";


export default function OrderOverview({ type }) {
  const cart = useSelector(getCart)
  
    const totalCartPrice = useSelector(getTotalCartprice);
  // const totalCartPrice = 20;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className={`${type} lg:col-span-1 lg:block`}>
      <h2 className=" font-bold text-2xl text-wine-900 m-4">your order</h2>
      <div className="border-[0.5px] border-wine-800 px-5 bg-wine-70 py-3">
        <header className="flex justify-between font-bold text-xl">
          <span>products</span>
          <span>products</span>
        </header>
        <OverviewProducts cart={cart} totalCartPrice={totalCartPrice} />
        <ul className=" list-outside">
          <h3 className=" font-bold text-xl text-wine-950 my-3">shipping</h3>
          {locationList.map((list) => (
            <DisplayList key={list.location} list={list} />
          ))}
        </ul>
        <aside className="flex justify-between font-bold text-2xl border-t border-b py-7 border-white">
          <div>total</div>
          <div className="text-notify">NGN 1,500</div>
        </aside>
        <div className=" my-5 space-y-5">
          <label className="text-lg flex font-bold">
            <input type="checkbox" className=" accent-wine-200 mx-3  h-6 w-6" />
            Bank transfer
          </label>
          <p className="formP text-newgray-400 text-sm">
            Send payment directly to our bank account. Please use your Order ID
            NO as the payment reference. Until the funds are duly recieved and
            cleared, your order will not be shipped.
          </p>
        </div>
        <div className="">
          <h1 className="mx-10">debit cards</h1>
          <p className="font-thin text-xs text-center">secured by paystack</p>

          <div className="flex gap-4">
            <input
              type="checkbox"
              className=" accent-wine-200 mx-3  h-6 w-6 mt-4 outline-wine-700 outline outline-1"
            />
            <div className="bg-white py-5 w-[50%] flex border border-wine-700 rounded-lg justify-center">
              <img src="/images/Frame 99.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="formP text-xs my-5">
        <p className="formP text-xs font-semibold">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
        <label className="text-sm flex font-normal my-3">
          <input type="checkbox" className=" accent-wine-200 mx-3  h-5 w-5" />I
          agree to the Terms and Condition
        </label>
      </div>
      <div className="flex justify-center">
        <button
          disabled={isSubmitting}
          className=" disabled:cursor-not-allowed"
        >
          {isSubmitting
            ? "placing order..."
            : ` place your order ${totalCartPrice}`}
        </button>
      </div>
    </div>
  );
}
