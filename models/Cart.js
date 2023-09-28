const mongoose = require('mongoose');

const cartSchema =new mongoose.Schema({

    userId:{
        type:String,
        required:true,
    },
    products: [
        {
            productId:{
                type:String,
            },
            quantity:Number,
            // default:"1",
        }
    ]
},{
    timestamps:true
});
const Cart =mongoose.model("Cart",cartSchema);
module.exports = {Cart};