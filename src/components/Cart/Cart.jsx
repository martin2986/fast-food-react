import classes from "./Cart.module.scss";
import OrderInfo from "../OrderInfo/OrderInfo";
import OrderAction from "../OrderInfo/OrderAction";
import SelectQuantity from "../OrderInfo/SelectQuantity";
import { MdDeleteOutline } from "react-icons/md";
const Cart = ({ id }) => {
  return (
    <div className={classes.cart}>
      <h4>Order #00054</h4>
      <div>
        <OrderInfo title="Cheese Burger" price="15" />
        <OrderAction addnote="Add Note" customize="Customize" />
        <div className="d-flex flex-row justify-content-between align-items-center">
          <SelectQuantity quantity={1} />
          <div className={classes.iconWrapper}>
            <MdDeleteOutline className={classes.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
