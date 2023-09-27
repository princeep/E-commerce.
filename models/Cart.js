const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({

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
            default:1,
        }
    ]
},{
    timestamps:true
});

module.exports =mongoose.model("Cart",cartSchema);