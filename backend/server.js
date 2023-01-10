import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import connectDB from "./config/db.js";
import colors from "colors";
import router from "./routes/productRoutes.js";
import * as url from "url";
import * as path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

console.log("Dirname: ", path.join(__dirname, "../frontend/dist"));

const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.use("/api/products", router);

app.get("/", (req, res) => {
  res.status(200).json({ Message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}:`.yellow.bold
  );
});
