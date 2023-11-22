import classes from "./Button.module.scss";

const Button = ({ icon, title, handleClick, name }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${name === "order" ? classes.order : classes.btn}`}
    >
      <span className={`${classes.icon} text-nowrap`}>{icon}</span>
      {title}
    </button>
  );
};

export default Button;
