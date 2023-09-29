const Order = require("../models/Order");


const createOrder = async(req,res)=>{
    const newOrder = await Order(req.body);
    try{
        const saveOrder = await newOrder.save();
        res.status(200).json(saveOrder)
    } catch(e){
        res.status(500).json(e);
    }
}

const getOrder = async(req,res)=>{
    try {
        const all = await Order.find();
        if(!all){
            res.status(404).json({message:"No Order found"})
        }
        res.status(200).json(all);
    } catch(errors){
        res.status(500).json(errors);
    }

}

const deleteOrder = async(req,res)=>{
    try {
        const delOrder = await Order.findByIdAndDelete(req.params.id);
        if(!delOrder){
            res.status(404).json({message:"Order not found"})
        }
        res.status(200).json({message:"Order deleted successfully",deleteOrder});

    } catch(errors){
        res.status(500).json(errors);
    }

}

const userOrder = async(req,res)=>{
    try{
        const order = await Order.findById({userId:req.params.userId});
        res.status(200).json(order);
    } catch(errors){
        res.status(500).json(errors);
    }
}

const updateOrder = async(req,res)=>{
    try {
        const upOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },
        {new:true}
        )
        res.status(200).json({message:"order updated successfully",upOrder})

    } catch(errors){
        res.status(500).json(errors);
    }
}
module.exports = {createOrder,getOrder,deleteOrder,userOrder,updateOrder};