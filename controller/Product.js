const productData = require("../models/Product");

const addProduct = async(req,res)=>{
    const {title,description,price,quantity,size,color,category,img} = req.body;
    const newProduct = await productData.Product({
        title,description,price,quantity,size,color,category,img
    });
    const storeProduct = await newProduct.save();
    res.status(200).json(storeProduct);
};

const getAlProduct = async (req,res)=>{
    const AllProduct = await productData.Product.find({});
    if(AllProduct.length <0){
        res.status(200).json({message:"Product not found"})
    }
    res.json(AllProduct);
}

const updateProduct = async(req,res)=>{
    const ProductId = req.params.id;
    const updatefields = req.body;
   const updateProduct = await productData.Product.findByIdAndUpdate(ProductId,updatefields,{
    new:true
   });
   if(!updateProduct){
    res.send({message:"product not available"})
   }
    const saveproduct = updateProduct.save();
   return res.status(200).json(saveproduct);
}

const deleteProduct = async(req,res)=>{
    const deleteProduct = await productData.Product.findByIdAndDelete(req.params.id);
    // if(!deleteProduct){
    //     res.status(404).json({message: 'Product not found'});
    // }
    res.status(200).json({message: 'Product deleted successfully ' + deleteProduct});
}

module.exports = {addProduct,getAlProduct,updateProduct,deleteProduct};