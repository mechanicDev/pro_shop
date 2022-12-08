import React from "react";
import { Col, Row } from "react-bootstrap";
import products from "../products";
import { Product } from "../components/Product.jsx";

export const Homescreen = ({ product }) => {
  return (
    <div>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} med={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
