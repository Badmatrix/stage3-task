/* eslint-disable react/prop-types */

export default function OverviewProducts({ cart,totalPrice }) {
   
  return (
    <section className="formP tracking-wider space-y-3 my-3 border-t border-b border-newgray-300/10 py-4">
      <ul>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between ">
            <p>{item.name} | 75cl |{item.quantity} Bottles</p>
                <p>{ item.totalPrice}</p>
          </div>
        ))}
      </ul>
      <div className="flex justify-between">
        <p className="text-sm">subtotal</p>
              <p className=" text-notify">{ totalPrice}</p>
      </div>
    </section>
  );
}
