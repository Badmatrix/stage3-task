import { useSelector, useDispatch } from "react-redux";
import CartItem from "../Cart/CartItem";
import Button from "../Ui/Button";
import EmptyCart from "../Cart/EmptyCart"
import { clearCart } from "../Cart/CartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((cart) => cart.cart.cart);

  return (
    <div className="my-10 mx-7">
      {cartItems.length > 0 ? (
        <>
          <ul className="space-y-4 my-5">
            {cartItems.map((cart) => (
              <CartItem cart={cart} key={cart.id} />
            ))}
          </ul>
          <div className="flex justify-end gap-5 flex-wrap">
            <Button>shop</Button>
            <Button
              onclick={() => {
                dispatch(clearCart());
              }}
            >
              clear cart
            </Button>
          </div>
        </>
      ) : (
        <EmptyCart/>
      )}
    </div>
  );
}
