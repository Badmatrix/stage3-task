/* eslint-disable react/prop-types */

export default function HeaderIcon({ para, children, img }) {
  return (
    <div className=" col-span-1 w-full space-y-3 text-center mx-auto items-center align-middle border-r border-wine-900/40 overflow-hidden ">
      <div className="flex justify-center">
        <img src={img} alt="icon" className="h-5 md:h-7 lg:h-10" />
      </div>
      <div className="md:space-y-1 text-xs sm:text-lg">
        <h1 className="font-bold md:text-xl ">{children}</h1>
        <p className="w-full lg:w-[60%] mx-auto md:text-lg md:px-7 px-3">
          {para}
        </p>
      </div>
    </div>
  );
}
