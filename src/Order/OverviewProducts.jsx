/* eslint-disable react/prop-types */

export default function OverviewProducts({ cart, totalCartPrice }) {
  return (
    <section className="formP tracking-wider space-y-3 my-3 border-t border-b border-newgray-300/10 py-4">
      <ul>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between text-base"
          >
            <p>
              {item.name} | 75cl |{item.quantity} Bottles
            </p>
            <p>{item.totalPrice}</p>
          </div>
        ))}
      </ul>
      <div className="flex justify-between font-medium text-xl">
        <p className="text-base">subtotal</p>
        <p className=" text-notify">{totalCartPrice}</p>
      </div>
    </section>
  );
}
