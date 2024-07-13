/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom"
import { getAllProducts } from "../Services/ApiTimbu";
import ProductHeader from "../Menu/ProductHeader";
import ProductContent from "../Menu/ProductContent";

export default function ProductMenu() {
    const menu = useLoaderData()
    
  return (
    <section>
      <ProductHeader />
      <ProductContent products={menu} />
    </section>
    )
    
    
}
export async function loader() {
    const menu = await getAllProducts();
    return menu;
}
