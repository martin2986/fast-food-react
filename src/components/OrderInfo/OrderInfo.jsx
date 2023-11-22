import classes from "./OrderInfo.module.scss";
const OrderInfo = ({ title, price, img }) => {
  return (
    <div className={classes.orderInfo}>
      <img
        src="https://s23209.pcdn.co/wp-content/uploads/2022/07/220602_DD_The-Best-Ever-Cheeseburger_267-500x500.jpg"
        alt=""
      />
      <div>
        <h5>{title}</h5>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default OrderInfo;
