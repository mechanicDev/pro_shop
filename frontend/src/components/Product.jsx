import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Rating } from "./Rating";

export const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded" id="product-card">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </a>
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>

          <Card.Text as="div">
            <Rating value={product.rating} number={product.numReviews} />
          </Card.Text>

          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
