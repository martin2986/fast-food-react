import classes from "./Card.module.scss";
import Card from "react-bootstrap/Card";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart";

const variants = {
  y: 0,
  opacity: 1,
  transition: {
    y: { stiffness: 1000, velocity: -100 },
  },
};
const Cards = ({ image, title, price, id }) => {
  const dispatch = useDispatch();
  const quantity = 1;
  const addItemHandler = () => {
    // console.log(id, title, defaultQuantity);
    dispatch(
      cartAction.addItem({
        id,
        title,
        price,
        image,
        quantity,
      })
    );
  };
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
    >
      <Card className="w-100" id={id}>
        <Card.Img variant="top" className="img-fluid" src={image} />
        <Card.Body>
          <Card.Title className={classes.title}>{title}</Card.Title>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div>
              <Card.Text className={classes.price}>
                ${price}
                <span>/pcs</span>
              </Card.Text>
            </div>
            <div>
              <Button title="Order" name="order" handleClick={addItemHandler} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default Cards;
