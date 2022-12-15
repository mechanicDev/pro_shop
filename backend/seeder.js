import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
// Data Files
import users from "./data/users.js";
import products from "./data/products.js";
// DataBase Models
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
// DB Connection
import connectDB from "./config/db.js";

dotenv.config;
