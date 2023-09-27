exports.postRequest = async(req,res)=>{
    const request = req.body;
    res.status(200).send(request)
};

