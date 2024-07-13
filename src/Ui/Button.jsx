/* eslint-disable react/prop-types */


export default function Button({ children,type,onclick}) {
  return (
    <button className={`rounded-full w-24 text-xs md:w-32 py-1 px-2 border border-wine-800 md:text-sm capitalize ${type}`} onClick={onclick}>
      {children}
    </button>
  );
}