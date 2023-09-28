const {User} = require("../models/User")
const bcrypt = require("bcryptjs")

 const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (req.body.username) {
            user.username = req.body.username;
        }
         if (req.body.email) {
            user.email = req.body.email;
        }
         if (req.body.password) {
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(req.body.password, salt);
            user.password = hashPassword;
        }
        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Update failed' });
    }
};

const deleteUser = async(req,res)=>{
    try {

        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if(!deleteUser){
            res.status(200).json({message: 'User not found'});
        }
        res.status(200).json({message: "User deleted successfully"});

    } catch(error) {
        console.error(error);
    }
}
const getAllUser = async(req,res)=>{
    try{

        const AllUser = await User.find({});
        if(!AllUser){
            res.status(404).json({message:"user not avialable"})
        }
        return res.send(AllUser);
    } catch(err){
        console.log(err);
    }
}

module.exports = { updateUser,deleteUser,getAllUser}