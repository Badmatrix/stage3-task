/* eslint-disable react/prop-types */
import { MdOutlineStar } from "react-icons/md";
import Button from "../Ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { addItem, getCurrentQuantity } from '../Cart/CartSlice'

export default function ProductInfo({ product }) {
  const navigate = useNavigate()
  // console.log(product)
    const { id, name, current_price,photos } = product;
  // const currentQuantity = useSelector(getCurrentQuantity(id));
  
  const dispatch=useDispatch()
  function handleAddToCart() {
    const newItem = {
      id,
      name,
      brand: product.extra_infos[2]?.value,
      image: photos[0]?.url,
      quantity: 1,
      unitPrice: current_price,
      totalPrice:   current_price * 1,
    };
    dispatch(addItem(newItem));
    navigate('/cart')
  }
  const imgSrc =
    product.photos[0]?.url === undefined
      ? "/images/image 22.svg"
      : `https://api.timbu.cloud/images/${photos[0]?.url} `;
  return (
    <section className="grid md:grid-cols-4 md:align-bottom items-center align-middle justify-center">
      <div className="md:flex md:items-center gap-3 col-span-3 ">
        <div className="bg-wine-100 shadow-sm shadow-newgray-100 border-newgray-100 rounded-lg px-3 py-5 lg:w-64 md:w-52 w-44 flex justify-center mx-auto md:mx-0">
          <img
            src={imgSrc}
            alt={product.name}
            className=""
          />
        </div>
        <div className="lg:space-y-3 space-y-1 text-center  ">
          <h1 className="md:text-xl text-lg capitalize font-bold text-wine-700 text-center">
            {name} | {product?.brand || "red wine"} |{" "}
            {product.extra_infos[1]?.value || 17}% | 75 cl
          </h1>
          <div className="flex justify-between">
            <h1 className="md:hidden font-bold">{current_price } NGN</h1>
            <div className="flex items-center font-bold text-sm sm:text-lg md:text-xl">
              <span className="mr-2">
                {product.extra_infos[0]?.value || "4.5"}
              </span>

              {Array.from({ length: 5 }).map((_, i) => (
                <MdOutlineStar key={i} className=" text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <h3 className="font-bold text-xs my-1  text-left">Quantity</h3>
            <div className=" py-3 px-1 border border-newgray-100 rounded-md text-center w-36 bg-wine-70 shadow-sm shadow-newgray-100">
              75 cl * 12 Bottles
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-1 space-y-4 sm:space-x-2 md:space-x-0">
        <Button type="text-white md:block">
          <Link to="/order/new">shop</Link>
        </Button>
        <Button
          onclick={ handleAddToCart}
          type="bg-white text-wine-800 hover:text-white md:block"
        >
          add to cart
        </Button>
      </div>
    </section>
  );
}
