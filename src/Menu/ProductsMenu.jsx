/* eslint-disable react/prop-types */
import ProductMenuItem from "./ProductMenuItem";
import ProductMenuNav from "./ProductMenuNav";
import ProductTopBar from "./ProductTopBar";

export default function ProductsMenu({
  products,
  handlePageDec,
  handlePageInc,
  pageNum,
}) {
  return (
    <section className="col-span-3 ">
      <ProductTopBar
        handlePageInc={handlePageInc}
        handlePageDec={handlePageDec}
        pageNum={pageNum}
      />
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5 md:gap-x-4 md:gap-y-7 lg:gap-y-10 ">
        {products.map((product) => (
          <ProductMenuItem key={product.id} product={product} />
        ))}
      </ul>
      <ProductMenuNav
        handlePageInc={handlePageInc}
        handlePageDec={handlePageDec}
        pageNum={pageNum}
      />
    </section>
  );
}
