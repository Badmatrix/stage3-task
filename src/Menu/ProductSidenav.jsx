export default function Sidenav() {
  return (
    <div className="sidenav lg:col-span-1 hidden lg:block">
      <div className="max-w-full grid grid-flow-row gap-7 lg:w-4/5 xl:w-full mx-auto">
        <ul className="">
          <h1>product by category</h1>
          <li className=" text-wine-700 font-extrabold bg-wine-100">
            red wine
          </li>
          <li>white wine</li>
          <li>rose wine</li>
          <li>sparkling wine</li>
          <li>dessert wine</li>
          <li>fortified wine</li>
          <li>natural & organic wine</li>
        </ul>
        <ul className=" font-bold">
          <h1>brand by category</h1>
          <li>robert mondavi</li>
          <li>hugel & fill</li>
          <li>beringer</li>
          <li>veuve cliquot</li>
          <li>chateau suduiraut</li>
          <li>cantine florio</li>
          <li>frey vinyard</li>
        </ul>
        <div>
          <h2 className="font-semibold capitalize text-lg my-2">price</h2>
          <aside className="flex items-center gap-3 text-[10px] font-bold">
            <div className="border border-wine-900 rounded-full px-2  bg-newgray-100 font-bold ">
              3000 NGN
            </div>
            <div className="border border-wine-900 rounded-full px-2  ">
              20,000 NGN
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
