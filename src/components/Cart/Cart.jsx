import { useSelector } from "react-redux";
import CartIem from "./CartIem";
import Button from "../Button/Button";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    cartItems.length > 0 && (
      <div className="d-flex flex-column h-75 justify-content-between">
        <div>
          {cartItems.map((item) => (
            <div>
              <CartIem key={item.id} {...item} />
            </div>
          ))}
        </div>

        <div className="align-self-center">
          <Button name="checkout" title={`Charge $${totalAmount}`} />
        </div>
      </div>
    )
  );
};

export default Cart;
