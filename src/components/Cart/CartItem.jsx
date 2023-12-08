import classes from "./CartItem.module.scss";
import { motion } from "framer-motion";
import OrderInfo from "../OrderInfo/OrderInfo";
import OrderAction from "../OrderInfo/OrderAction";
import SelectQuantity from "../OrderInfo/SelectQuantity";
import { MdDeleteOutline } from "react-icons/md";
import { cartAction } from "../../store/cart";
import { useDispatch } from "react-redux";

const CartIem = ({
  id,
  image,
  price,
  title,
  quantity,
  totalPrice,
  onGetdescription,
}) => {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(
      cartAction.addItem({
        id,
        image,
        price,
        quantity,
        totalPrice,
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
      key={id}
      layout
      exit={{ y: -30, opacity: 0 }}
      className={classes.cart}
    >
      <h4>Order {id}</h4>
      <div>
        <OrderInfo img={image} title={title} price={price} />
        <OrderAction
          addnote="Add Note"
          customize="Customize"
          onGetdescription={onGetdescription}
        />
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
