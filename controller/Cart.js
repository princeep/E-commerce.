const {Cart}= require("../models/Cart");

const addToCart = async(req,res)=>{
    const newCart =  await Cart(
        req.body
        // productId:req.body.productId,
        // userId:req.body.userId,
    );
    const saveCart = await newCart.save();
    res.status(200).send(saveCart);
};

const updateCart = async(req,res)=>{
    try {
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id,{
                $set:req.body,
            },
            {new:true}
        );
        res.status(200).json(updateCart);

    } catch(error){
        console.log(error);
    }
}

module.exports = {addToCart,updateCart}