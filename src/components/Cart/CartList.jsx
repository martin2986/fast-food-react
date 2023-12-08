import { motion } from "framer-motion";
import CartItem from "./CartItem";
const CartList = ({ cartItems, onGetdescription }) => {
  return (
    <div>
      {cartItems.map((item) => (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          key={item.id}
        >
          <CartItem {...item} onGetdescription={onGetdescription} />
        </motion.div>
      ))}
    </div>
  );
};

export default CartList;
