/* eslint-disable react/prop-types */
import ProductSidenav from "../Menu/ProductSidenav";
import ProductsMenu from "./ProductsMenu";

export default function ProductContent({
  products,
  handlePageDec,
  handlePageInc,
  pageNum,
}) {
  return (
    <div className="md:grid lg:grid-cols-4 lg:gap-16 mx-5 px-3 align-top">
      <ProductSidenav />
      <ProductsMenu
        products={products}
        handlePageInc={handlePageInc}
        handlePageDec={handlePageDec}
        pageNum={pageNum}
      />
    </div>
  );
}
