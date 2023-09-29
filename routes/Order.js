const express = require('express');
const { getOrder, createOrder, updateOrder, deleteOrder, userOrder } = require('../controller/Order');
const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require('../middleware/verifyToken');

const OrderRoute = express.Router();


OrderRoute.get("/",verifyTokenAndAdmin,getOrder);
OrderRoute.post("/",verifyToken,createOrder);
OrderRoute.put("/:orderId",verifyTokenAndAdmin,updateOrder);
OrderRoute.delete("/:orderId",verifyToken,deleteOrder);
OrderRoute.get("/find/:userId",verifyTokenAndAuthorization,userOrder);


module.exports = OrderRoute;