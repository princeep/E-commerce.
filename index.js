const express = require('express');
const { connectDb } = require('./db/dbConnection');
const routes = require('./routes/User');
const {User,Product,Cart,Order} = require("./models/User");
const { productRoute } = require('./routes/Product.js');
const app = express();
require("dotenv").config();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/api",routes);
app.use("/api",productRoute)


const start = ()=>{
    connectDb(process.env.MONGO_URL)

    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
}


start();