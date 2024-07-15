/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom"
import { getAllProducts } from "../Services/ApiTimbu";
import ProductHeader from "../Menu/ProductHeader";
import ProductContent from "../Menu/ProductContent";

export default function ProductMenu({ handlePageDec, handlePageInc, pageNum }) {
  const menu = useLoaderData();
  return (
    <section>
      <ProductHeader />
      <ProductContent
        products={menu}
        handlePageInc={handlePageInc}
        handlePageDec={handlePageDec}
        pageNum={pageNum}
      />
    </section>
  );
}
export async function loader(num) {
    const menu = await getAllProducts(num);
    return menu;
}
