/* eslint-disable react/prop-types */

export default function SuccessOrderModal({onclick}) {
  return (
    <section className="h-2/3 bg-green-300 cursor-pointer" onClick={onclick}>
      <div className="shadow-lg py-5 flex justify-center">
        <div className=' text-center text-wine-500 text-xl font-semibold capitalize'>
          <h1>your order was successful</h1>
        </div>
      </div>
    </section>
  );
}
