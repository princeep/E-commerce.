const express = require("express");
const cartRoute = express.Router();
const {verifyToken} = require("../middleware/verifyToken");
const {addToCart} = require("../controller/Cart")


cartRoute.post("/add-to-cart",verifyToken,addToCart);

module.exports = cartRoute;