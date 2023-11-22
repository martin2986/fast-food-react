import classes from "./SelectQuantity.module.scss";

const SelectQuantity = ({ quantity, onDecrease, onIncrease }) => {
  const showDelete = quantity === 1;
  return (
    <div className={classes.quantity}>
      <span onClick={onDecrease}>-</span>
      <p>{quantity}</p>
      <span onClick={onIncrease}>+</span>
    </div>
  );
};

export default SelectQuantity;
