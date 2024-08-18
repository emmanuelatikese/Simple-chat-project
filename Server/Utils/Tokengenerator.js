const jwt = require('jsonwebtoken');
const generateToken = (UserId, res) => {
    const token = jwt.sign({ UserId }, process.env.ACCESS_TOKEN,
    {expiresIn: '10d'});
    res.cookie("jwt_token", token, {
        httpOnly: true,
        maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
        sameSite: "strict",
        secure: process.env.NODE_ENV === 'production'
    });
}

module.exports = generateToken;