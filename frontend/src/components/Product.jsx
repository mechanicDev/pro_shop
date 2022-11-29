import React from "react";
import { Rating } from "./Rating";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";

export const Product = ({ product }) => {
  return (
    <div>
      <Card className='my-3 p-3 rounded' id='product-card'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as='div'>
            <Rating value={product.rating} number={product.numReviews} />
          </Card.Text>

          <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
