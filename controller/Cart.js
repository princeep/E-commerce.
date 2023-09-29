// const {Cart}= require("../models/Cart");

// const addItemToCart = async(userId,productId)=>{
//     try {
//         const quantity = 1;
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

// module.exports = {addItemToCart,updateCart}