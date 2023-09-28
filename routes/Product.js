const express = require('express');
const { addProduct , getAlProduct,updateProduct,deleteProduct} = require('../controller/Product.js');
const { verifyToken, verifyTokenAndAuthorization } = require('../middleware/verifyToken.js');

const productRoute = express.Router();


productRoute.post("/add-product",verifyToken,addProduct);
productRoute.get("/get-product",verifyToken,getAlProduct);
productRoute.put("/update-product/:id",verifyToken,updateProduct);
productRoute.delete("/delete-product/:id",verifyToken,deleteProduct);

module.exports = {productRoute};