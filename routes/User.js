const express = require('express');
const { postRequest } = require('../controller/User');
const { registation,login } = require('../controller/auth');

const routes = express.Router();


routes.get("/",(req,res)=>{
    res.send("Hello, world!");
});

routes.post("/post",postRequest);
routes.post("/sign-up",registation);
routes.post("/login",login);

module.exports = routes;