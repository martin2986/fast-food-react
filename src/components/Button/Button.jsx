import classes from "./Button.module.scss";

const Button = ({
  icon,
  title,
  handleClick,
  name,
  outline,
  value,
  orderOutline,
  ...props
}) => {
  return (
    <button
      type="button"
      value={value}
      onClick={handleClick}
      className={`${
        name === "order"
          ? classes.order
          : name === "checkout"
          ? classes.checkout
          : outline
          ? classes.checkoutOutline
          : orderOutline
          ? classes.orderOutline
          : classes.btn
      }`}
      {...props}
    >
      <span className={`${classes.icon} text-nowrap`}>{icon}</span>
      {title}
    </button>
  );
};

export default Button;
