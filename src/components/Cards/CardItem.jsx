import Cards from "./Cards";
import { Col } from "react-bootstrap";
const CardItem = ({ result }) => {
  return result?.map((item) => (
    <Col key={item.id} md={4} className="mb-4">
      <Cards item={item} />
    </Col>
  ));
};

export default CardItem;
