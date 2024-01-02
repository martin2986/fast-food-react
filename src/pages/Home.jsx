import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Cart from "../components/Cart/Cart";
import FilterItems from "../components/FilterFoodItems/FilterItems";
import { fetchFood } from "../util/http";
import { filteredData } from "../util/helperFn";
import Error from "../components/Error/ErrorMessage";
import CartIcon from "../components/Cart/CartIcon";
import CardItem from "../components/Cards/CardItem";
import CardSkeleton from "../components/Skeleton/CardSkeleton/CardSkeleton";
const Home = () => {
  const query = useSelector((state) => state.app.searchInput);
  const cart = useSelector((state) => state.cart.items);
  const [selected, setSelected] = useState(null);

  const { data: foodItems, isPending } = useQuery({
    queryKey: ["food"],
    queryFn: fetchFood,
  });
  const result = filteredData(foodItems?.data, selected, query);

  const handleClick = (e) => {
    setSelected(e.target.value);
  };

  let content;

  if (foodItems?.error) {
    content = <Error message={foodItems?.error.message} />;
  }

  if (result?.length === 0) {
    content = <h4 className="fs-5 text-center mt-5">Item not available</h4>;
  }
  if (result?.length > 0) {
    content = <CardItem result={result} />;
  }

  if (isPending) {
    content = <CardSkeleton cards={9} className="w-100" />;
  }
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

            <Row>{content}</Row>
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
