import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Cart from "../components/Cart/Cart";
import CartIcon from "../components/Cart/CartIcon";
import FilterItems from "../components/FilterFoodItems/FilterItems";
import Meals from "../components/Meals/Meals";
const Home = () => {
  const query = useSelector((state) => state.app.searchInput);
  const cart = useSelector((state) => state.cart.items);
  const [selected, setSelected] = useState(null);

  const handleClick = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className=" w-100">
      <Container style={{ backgroundColor: "#f7f7f8" }}>
        <Row>
          <Col xs={12} md={9}>
            <FilterItems handleClick={handleClick} />
            {cart.length > 0 && (
              <div className=" position-fixed z-2 d-block d-md-none  top-10 start-5 translate-middle  ">
                <CartIcon />
              </div>
            )}

            <Row>
              <Meals selected={selected} query={query} />
            </Row>
          </Col>
          <Col
            className="d-none d-md-block bg-white pt-3 vh-100 w-25"
            xs={12}
            md={3}
          >
            <Cart />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
