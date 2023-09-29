const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    items:[
        {
        Product:{
            type:mongoose.Schema.ObjectId,
            required:true,
        },
        quantity:{
            type:Number,
            required:true,
            default:1,
        },
    },
    ],
    Product:{
        type:String,
        required:true,
    }
    user:{
        type:mongoose.Schema.ObjectId,
    },
    amount:{
        type:Number,
        required:true,
    }
    created_at:{
        type:Date,
        default:Date.now(),
    }
});

   
const Cart =mongoose.model("Cart",cartSchema);
module.exports = {Cart};