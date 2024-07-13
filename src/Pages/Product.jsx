/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getProduct } from "../Services/ApiTimbu";
import ProductInfo from "../Menu/ProductInfo";
import ProductDetails from "../Menu/ProductDetails";

export default function ProductDescription() {
  const product = useLoaderData();
  console.log(product);
  return (
    <section className="mx-7 my-10">
      <ProductInfo product={product} />
      <ProductDetails product={product} />
      
    </section>
  );
}

export async function loader({ params }) {
  const menu = await getProduct(params.id);
  return menu;
}
