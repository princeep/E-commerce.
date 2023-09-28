const express = require('express');
const { registration ,login } = require('../controller/auth');
const { verifyTokenAndAuthorization, verifyToken } = require('../middleware/verifyToken');
const {User} = require("../models/User");
const { updateUser,deleteUser, getAllUser } = require('../controller/User');
const routes = express.Router();


routes.get("/all",verifyToken,getAllUser)
routes.post("/sign-up",registration);
routes.post("/login",login);
routes.put('/:id', verifyToken,updateUser)
routes.delete("/:id",verifyToken,deleteUser);

module.exports = routes;