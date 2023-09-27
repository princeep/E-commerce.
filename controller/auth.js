const userData = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.registration = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(req.body.password, salt);
        const newUser = await userData.User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword
        });
        const saveUser = await newUser.save();
        res.send(saveUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Registration failed" });
    }
}


exports.login = async (req, res) => {
    try {
        const user = await userData.User.findOne({ username: req.body.username });
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }
        const checkPassword = await bcrypt.compare(req.body.password, user.password);
        if (!checkPassword) {
            console.log("Invalid password");
            return res.status(401).json({ message: "Invalid password" });
        }

        jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1h" }, (error, token) => {
            if (error) {
                console.error("JWT token generation error:", error);
                return res.status(500).json({ message: "Failed to generate token" });
            }
            console.log("Login successful");
            res.json({ token, user });
        });
    } catch (error) {
        res.status(500).json({ message: "Login failed" });
    }
};

