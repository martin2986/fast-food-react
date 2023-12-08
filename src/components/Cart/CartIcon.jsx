import { BsCartPlus } from "react-icons/bs";
import classes from "./CartIcon.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const CartIcon = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <Link to="/cart" className={`${classes.cartIcon} position-relative`}>
      <BsCartPlus className={classes.icon} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
        +{totalQuantity}
      </span>
    </Link>
  );
};

export default CartIcon;
