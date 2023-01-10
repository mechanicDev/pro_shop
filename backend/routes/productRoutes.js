import express from "express";
const router = express.Router();
import Product from "../models/productModel.js";

// @description Fetch All Products
// @route GET /api/products
// @access Public
router.get("/", async (req, res) => {
  try {
    let products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.og("Error retrieving product: ", error);
    res.status(404).json({ message: "Error Retrieving Products" });
  }
});

// @description Fetch a single product
// @route GET /api/products/:id
// @access Public
router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.log("Error testing on the ID route");
    res.status(404).json({ message: "No Product found" });
  }
});

export default router;
