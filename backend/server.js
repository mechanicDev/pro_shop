import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import connectDB from "./config/db.js";
import colors from "colors";
import router from "./routes/productRoutes.js";

const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.use("/api/products", router);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}:`.yellow.bold
  );
});
