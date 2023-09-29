const {Cart}= require("../models/Cart");
const { Product } = require("../models/Product");


const addTocart = async (req, res) => {
    const newCart = new Cart(req.body);
  
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const updateCart = async(req,res)=>{
    try {
        const newupdatedCart = await Cart.findById(req.params.id,{
            $set:req.body,
        }, {new:true}
        );
        const savecart = await newupdatedCart.save();
        res.status(200).json(savecart);

    } catch (err){
        res.status(500).json(err);
    }
  };

  const deleteCart = async(req,res)=>{
    try {
        const delCart = await Cart.findByIdAndDelete(req.params.id);
        res.status(200).send({message:"Cart has been deleted successfully"})
    } catch(error){
        res.status(500).json(error);
    }
  }

  const UserCart = async(req,res)=>{
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        if(!cart){
            res.send(404).json({message: 'Cart not found'});
        }
        res.status(200).json(cart);
    } catch(error){
        res.status(500).json(error);
    }
  }

  const allCart = async(req,res)=>{
    try {
        const carts = await Cart.find();
        if(!carts){
            res.status(404).json({message: 'Cart not found'});
        }
        res.status(200).json({message:"All cart found",carts})

    } catch(error){
        res.status(500).json(error);
    }
  }
// const addTocart = async(userId,productId,amount)=>{
//     try {
//         const userCart = await Cart.findOne({user:userId})
//         if(!userCart){
//             newCart = new Cart({
//                 user:userId,
//                 items:[],
//             })
//         }
//         const existProduct = await Product.findById({_id:productId})
//         if(existProduct){
//             existProduct.
//         }
//         const cart = await Cart.findOne({user:userId});

//         if(!cart){
//             cart = new Cart({ user: userId, items: [] });
//         }

//         const existItems = cart.items.find((item)=>{
//             item.Product.equals(productId)
//         });
//         if(existItems){
//             existItems.quantity += quantity;
//         }
//         else {
//             cart.items.push({Product,quantity});
//         }
//         const saveCart = cart.save();
//         res.send(saveCart);
//     } catch(error){
//         console.log(error);
//     }
// }


// const updateCart = async(req,res)=>{
//     try {
//         const updateCart = await Cart.findByIdAndUpdate(
//             req.params.id,{
//                 $set:req.body,
//             },
//             {new:true}
//         );
//         res.status(200).json(updateCart);

//     } catch(error){
//         console.log(error);
//     }
// }

module.exports = {addTocart,updateCart,deleteCart,allCart,UserCart}