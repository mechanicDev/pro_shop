const express = require("express");
const app = express();
PORT = process.env.PORT || 5000;
const products = require("./data/products");

require("dotenv").config();

app.get("/api/products", (req, res) => {
  res.send("Working");
  console.log("This is the products: ", products);
});

app.get("/api/products/:id", (req, res) => {
  let id = req.params.id;
  let product = products.find((p) => id === p._id);
  res.status(200).json(product);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
