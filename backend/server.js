import express from "express";
import DOTENV from "dotenv";
import products from "./data/products.js";
import connectDB from "./config/db.js";
import colors from "colors";

const app = express();
DOTENV.config();
connectDB();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.get("/api/products", (req, res) => {
  res.status(200).send(products);
});

app.get("/api/products/:id", (req, res) => {
  let id = req.params.id;
  let product = products.find((p) => id === p._id);
  res.status(200).json(product);
});

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}:`.yellow.bold
  );
});
