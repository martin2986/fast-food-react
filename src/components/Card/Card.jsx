import classes from "./Card.module.scss";
import Card from "react-bootstrap/Card";
import Button from "../Button/Button";
const Cards = ({ image, title, price }) => {
  return (
    <Card clasName="w-100">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className={classes.title}>{title}</Card.Title>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div>
            <Card.Text className={classes.price}>
              ${price}
              <span>/pcs</span>
            </Card.Text>
          </div>
          <Button title="Order" name="order" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
