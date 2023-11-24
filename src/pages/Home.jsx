import { Col, Container, Row } from "react-bootstrap";
import { LuIceCream } from "react-icons/lu";
import Button from "../components/Button/Button";
import Cards from "../components/Card/Card";
import Cart from "../components/Cart/Cart";

import { data } from "../data";

const Home = () => {
  return (
    <div className="d-flex flex-row vw-100">
      <Container style={{ backgroundColor: "#f7f7f8" }}>
        <Row>
          <Col xs={12} md={9}>
            <Button title="All Menu" icon={<LuIceCream />} />
            <Row>
              {data.map((item) => (
                <Col key={item.id} md={4} lg={4} className="mb-2">
                  <Cards {...item} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col className="d-none d-md-block bg-white pt-3" xs={12} md={3}>
            <Cart />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
