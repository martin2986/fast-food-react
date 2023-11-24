import classes from "./OrderInfo.module.scss";
const OrderInfo = ({ title, price, img }) => {
  return (
    <div className={classes.orderInfo}>
      <img src={img} alt="" />
      <div>
        <h5>{title}</h5>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default OrderInfo;
