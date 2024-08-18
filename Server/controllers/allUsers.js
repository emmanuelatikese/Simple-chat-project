const User = require('../models/Users');

const allUser = async (req, res) => {
    try{
        const currentUser = req.user;
        const allUsers = await User.find({ _id: { $ne: currentUser._id } }).select("-password");

        return res.status(200).json(allUsers);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});
    }
}

module.exports = allUser;