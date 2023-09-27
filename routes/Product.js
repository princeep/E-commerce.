const express = require('express');
const { addProduct , getAlProduct } = require('../controller/Product.js');
const { verifyToken } = require('../middleware/verifyToken.js');

const productRoute = express.Router();


productRoute.post("/add-product",verifyToken,addProduct);
productRoute.get("/get-product",verifyToken,getAlProduct);

module.exports = {productRoute};