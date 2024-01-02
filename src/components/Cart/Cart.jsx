import { useSelector } from "react-redux";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart";
import { v4 as uuidv4 } from "uuid";
import { date } from "../../util/helperFn";
import { queryClient, sendOrderData } from "../../util/http";
import { AnimatePresence, motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import StatusBlock from "../../UI/StatusBlock";
import { useState } from "react";
import CartList from "./CartList";
import { ClipLoader } from "react-spinners";
const id = uuidv4();
const Cart = () => {
  const [renderComponent, setRenderComponent] = useState(false);
  const [note, setNote] = useState([]);
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const orderItems = cartItems.map((item) => item.title);
  const casheir = useSelector((state) => state.app.casheirLoggedIn);
  const dispatch = useDispatch();

  const description = (notes) => {
    setNote((notes) => ` ${notes}`);
  };

  const items = {
    item: [...orderItems, note],
    date: date(),
    id,
    casheir,
    purchase: `$${totalAmount}`,
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: sendOrderData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      setRenderComponent(true);
      setTimeout(() => {
        setRenderComponent(false);
      }, 2000);
      dispatch(cartAction.emptyCart());
    },
  });
  const chargeHandler = () => {
    mutate({ items: items });
  };

  let content;

  if (!isPending) {
    content = (
      <Button
        name="checkout"
        title={`Charge $${totalAmount}`}
        handleClick={chargeHandler}
      />
    );
  }

  if (isPending) {
    content = (
      <Button
        title={<ClipLoader color="#f86e0a" size={20} />}
        handleClick={chargeHandler}
        outline
      />
    );
  }

  return (
    <div>
      {isError && (
        <StatusBlock
          title="An Error Occur"
          message={error.info?.message || "Failed to send orders."}
        />
      )}

      <AnimatePresence mode="wait">
        {!renderComponent && cartItems.length === 0 && !isError && (
          <h4 className="fs-6 text-center mt-5">Your cart is empty</h4>
        )}
        {renderComponent && (
          <StatusBlock title="Sent to Kitchen" type="success" />
        )}

        {cartItems.length > 0 && (
          <motion.div
            key="list"
            className="d-flex flex-column  justify-content-between"
          >
            <div>
              <CartList cartItems={cartItems} onGetdescription={description} />
            </div>
            <div className="align-self-center">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
