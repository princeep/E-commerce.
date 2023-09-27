const mongoose = require('mongoose');

const productSchema =new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    img:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
        required:true,
    },
    color:{
        type:String,
    },
    size:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    }
    
},
{timestamps:true}
);

const Product = mongoose.model("Product",productSchema);

module.exports = {Product};