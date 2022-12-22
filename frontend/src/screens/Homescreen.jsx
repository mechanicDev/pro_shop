import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Product } from "../components/Product.jsx";
import axios from "axios";

export const Homescreen = ({ product }) => {
  const [products, setProducts] = useState([]);

  // Get products from the product API and establish them in Homescreen State
  useEffect(() => {
    const fetchProducts = async function () {
      const { data } = await axios.get("/api/products");
      console.log("Data from the homescreen fetch: ", data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} med={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
