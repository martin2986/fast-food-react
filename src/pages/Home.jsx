import { Container, Row, Col } from "react-bootstrap";
import Button from "../components/Button/Button";
import { LuIceCream } from "react-icons/lu";
import Cards from "../components/Card/Card";
import Cart from "../components/Cart/Cart";
const Home = () => {
  return (
    <Container style={{ backgroundColor: "#f7f7f8" }}>
      <Button title="All Menu" icon={<LuIceCream />} />

      <Row>
        <Col xs={12} md={8}>
          <Row>
            <Col md={6} lg={4} className="mb-2">
              <Cards title="Cassamigos" price="10" />
            </Col>
          </Row>
        </Col>
        <Col
          className="d-none d-md-block"
          md={4}
          style={{ backgroundColor: "#fff" }}
        >
          <Cart />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
