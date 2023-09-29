const express = require("express");
const cartRoute = express.Router();
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("../middleware/verifyToken");
const {addTocart, updateCart, deleteCart, allCart, UserCart} = require("../controller/Cart")


cartRoute.get("/",verifyToken,allCart)
cartRoute.post("/add-to-cart",verifyToken,addTocart);
cartRoute.put("/:cart-id",verifyTokenAndAuthorization,updateCart);
cartRoute.delete("/:cart-id",verifyTokenAndAuthorization,deleteCart);
cartRoute.get("/find/:userId",verifyTokenAndAuthorization,UserCart);

module.exports = cartRoute;