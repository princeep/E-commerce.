const productData = require("../models/Product");
const { User } = require("../models/User");
const addProduct = async(req,res)=>{
    const {title,description,price,quantity,size,color,category,img} = req.body;
    const newProduct = await productData.Product({
        title,description,price,quantity,size,color,category,img
    });
    const storeProduct = await newProduct.save();
    res.status(200).json(storeProduct);
};

const getAlProduct = async (req,res)=>{
    const AllProduct = await User.find({});
    if(AllProduct.length <0){
        res.status(200).json({message:"Product not found"})
    }
    res.json(AllProduct);
}

module.exports = {addProduct,getAlProduct};