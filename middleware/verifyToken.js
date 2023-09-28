const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
    const autheader = req.headers.token;
    if (autheader) {
        const token = autheader.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                res.status(403).json("Token is invalid")
            }
            req.user = user;
            next();
        })
    }
    else {
        return res.json("you are not authorized to access this website")
    }
}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json("you are not authorized to access this website")
        }
    })
}

const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuthorization }