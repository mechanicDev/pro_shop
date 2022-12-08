import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import products from "../products.js";
import { useParams } from "react-router-dom";
import { Rating } from "../components/Rating.jsx";

export const ProductScreen = (props) => {
  let { id } = useParams();
  const product = products.find((p) => p._id === id);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.description} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} number={product.numReviews} />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};
