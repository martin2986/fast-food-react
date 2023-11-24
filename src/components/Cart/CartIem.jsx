import classes from "./CartItem.module.scss";
import { motion } from "framer-motion";
import OrderInfo from "../OrderInfo/OrderInfo";
import OrderAction from "../OrderInfo/OrderAction";
import SelectQuantity from "../OrderInfo/SelectQuantity";
import { MdDeleteOutline } from "react-icons/md";
import { cartAction } from "../../store/cart";
import { useDispatch } from "react-redux";

const CartIem = ({ id, image, price, quantity, title }) => {
  const defaultQuantity = 1;
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(
      cartAction.addItem({
        id,
        title,
        price,
        quantity: defaultQuantity,
      })
    );
  };
  const removeItem = () => {
    dispatch(cartAction.removeItem(id));
  };
  const deleteItem = () => {
    dispatch(cartAction.deleteItem(id));
  };
  return (
    <motion.div
      key="list"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      transition={{ duration: 0.2 }}
      className={classes.cart}
    >
      <h4>Order {id}</h4>
      <div>
        <OrderInfo img={image} title={title} price={price} />
        <OrderAction addnote="Add Note" customize="Customize" />
        <div className="d-flex flex-row justify-content-between align-items-center">
          <SelectQuantity
            quantity={quantity}
            onIncrease={addItemHandler}
            onDecrease={removeItem}
          />
          <div className={classes.iconWrapper} onClick={deleteItem}>
            <MdDeleteOutline className={classes.icon} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartIem;
