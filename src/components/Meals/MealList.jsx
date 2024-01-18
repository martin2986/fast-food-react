import React from "react";
import { Col } from "react-bootstrap";
import Cards from "../Cards/Cards";

const MealList = ({ result }) => {
  return result?.map((item) => (
    <Col key={item.id} md={4} className="mb-4">
      <Cards key={item.id} {...item} />
    </Col>
  ));
};

export default MealList;
