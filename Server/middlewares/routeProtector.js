require('dotenv').config();
const User = require('../models/Users');
const jwt = require("jsonwebtoken");


const routeProtect = async (req, res, next) => {
    try{
        const token = req.cookies.jwt_token;
        if(!token) return res.status(401).json({ error: 'No token, authorization denied' });

        const decode = jwt.verify(token, process.env.ACCESS_TOKEN);
        if (!decode) return res.status(401).json({ error: "Invalid authorization token, authorization denied" });
        const user = await User.findById(decode.UserId).select('-password');
        req.user = user;
        next();
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: "internal server error" });
    }
};

module.exports = routeProtect;