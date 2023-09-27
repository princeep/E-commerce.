const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
{
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
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
    
},
{timestamps:true}
);

module.exports = mongoose.model("Product",productSchema);