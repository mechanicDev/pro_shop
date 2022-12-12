const express = require("express");
const app = express();
const DOTENV = require("dotenv");
DOTENV.config();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
const products = require("./data/products");

app.get("/api/products", (req, res) => {
  res.status(200).send(products);
});

app.get("/api/products/:id", (req, res) => {
  let id = req.params.id;
  let product = products.find((p) => id === p._id);
  res.status(200).json(product);
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}:`);
});
