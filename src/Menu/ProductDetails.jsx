

export default function ProductDetails() {
  return (
    <section className="md:my-20 my-16 formP">
      <ul className="flex gap-5 my-10 items-center">
        <li className="rounded-full w-36 px-2 border border-wine-800 block text-xs capitalize text-center bg-wine-800 text-wine-50">
          description
        </li>
        <li className="rounded-full w-36 px-2 border border-wine-800 block text-xs capitalize text-center bg-white-70 text-wine-800">
          product review
        </li>
        <li className="rounded-full w-36 px-2 border border-wine-800 block text-xs capitalize text-center bg-white-70 text-wine-800">
          shipping policy
        </li>
      </ul>
      <div className=" space-y-5 text-sm detail">
        <h1 className=" capitalize font-bold text-sm md:text-base">
          product description
        </h1>
        <p>
          Experience the harmonious blend of tradition and modern winemaking
          with Four Cousins Red Wine. Crafted with care and passion in the
          picturesque vineyards of South Africa, this wine represents a perfect
          fusion of quality, heritage, and innovation.
        </p>
        <ul className=" list-disc text-sm space-y-3">
          <li>
            <span>flavour profile</span> :A delightful blend of ripe red
            berries, dark plums, and subtle hints of spice. Aromas of fresh
            cherries, raspberries, and vanilla. Medium-bodied with smooth
            tannins and a lingering, velvety finish.{" "}
          </li>
          <li>
            <span>pairing suggestion</span> :A delightful blend of ripe red
            berries, dark plums, and subtle hints of spice. Aromas of fresh
            cherries, raspberries, and vanilla. Medium-bodied with smooth
            tannins and a lingering, velvety finish.
          </li>
          <li>
            <span>versatility</span> :A delightful blend of ripe red berries,
            dark plums, and subtle hints of spice. Aromas of fresh cherries,
            raspberries, and vanilla. Medium-bodied with smooth tannins and a
            lingering, velvety finish.
          </li>
          <li>
            <span>bottle size</span> :A delightful blend of ripe red berries,
            dark plums, and subtle hints of spice. Aromas of fresh cherries,
            raspberries, and vanilla.
          </li>
          <li>
            <span>country of origin</span> :A delightful blend of ripe red
            berries, dark plums, and subtle
          </li>
        </ul>
        <p>
          Discover the charm and elegance of Four Cousins Red Wine and celebrate
          memorable moments with every sip. Order now from Savory Sips and
          elevate any occasion with a touch of sophistication. Here's to good
          times and exceptional wine!
        </p>
        <h6>
          <span>categories:</span> wine,red wine
        </h6>
      </div>
    </section>
  );
}
