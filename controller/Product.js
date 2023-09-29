const productData = require("../models/Product");

const addProduct = async (req, res) => {
    const { title, description, price, quantity, size, color, category, img } = req.body;
    const newProduct = await productData.Product({
        title, description, price, quantity, size, color, category, img
    });
    const storeProduct = await newProduct.save();
    res.status(200).json(storeProduct);
};

const getAlProduct = async (req, res) => {
    const AllProduct = await productData.Product.find({});
    if (AllProduct.length < 0) {
        res.status(200).json({ message: "Product not found" })
    }
    res.json(AllProduct);
}

const updateProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const updateFields = req.body;
  
      const foundProduct = await productData.Product.findById(productId);
  
      if (!foundProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
        foundProduct.set(updateFields);
        const updatedProduct = await foundProduct.save();
      return res.status(200).json(updatedProduct);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

const deleteProduct = async (req, res) => {
    try {
        const deleteProduct = await productData.Product.findByIdAndDelete({_id:req.params.id});
        if(!deleteProduct){
            res.status(404).json({message: 'Product not found'});
        }
        res.status(200).json({ message: 'Product deleted successfully '});
    } catch(error){
        res.send(error);
    }
}

module.exports = { addProduct, getAlProduct, updateProduct, deleteProduct };