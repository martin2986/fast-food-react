import classes from "./Button.module.scss";

const Button = ({ icon, title, handleClick, name, value }) => {
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
          : classes.btn
      }`}
    >
      <span className={`${classes.icon} text-nowrap`}>{icon}</span>
      {title}
    </button>
  );
};

export default Button;
