const User = require('../models/Users');
const bcrypt = require('bcrypt');
const profileHandler = require('../Utils/profileHandler');
const generateToken = require('../Utils/Tokengenerator');



const SignUp = async(req, res) => {
        const {
        username,
        fullname,
        email,
        password,
        gender,
        confirmedPassword}
        = req.body;
    try{
        const commonUser = await User.findOne({username: username});
        if (commonUser) return res.status(409).json({ error: 'User already exists' });
        if(password !== confirmedPassword) return res.status(400).json({ error: 'Passwords mismatch' });
        const hashPassword = await bcrypt.hash(password, 10);
        const profilePic = gender === 'male' ? profileHandler('boy', username) : profileHandler('girl', username);
        const newUser = new User({
            username,
            fullname,
            password: hashPassword,
            email,
            profilePic,
            gender
        })

        if (newUser){
            await newUser.save();
            generateToken(newUser._id, res);
            res.status(201).json({
                id: newUser._id,
                username: newUser.username,
                fullname: newUser.fullname,
                email: newUser.email,
                profilePic: newUser.profilePic
            })
        }
        else{
            res.status(400).json({ error: 'Failed to create user' });
        }
        
    }
    catch(error){
        res.status(500).json({error: "Internal Server error"});
    }
}


const Login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username: username});
        if(!user) return res.status(404).json({ error: 'User not found' });
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(401).json({ error: 'Invalid credentials' });
        generateToken(user._id, res);
        res.status(200).json({
            id: user._id,
            username: user.username,
            fullname: user.fullname,
            email: user.email,
            profilePic: user.profilePic,
        })
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const Logout = async (req, res) => {
    try{
            res.clearCookie('jwt_token');
            res.status(200).json({ message: 'Logged out successfully' });
    }
    catch(error){
        res.status(500).json({ error: 'Internal server error' });
    }

};

module.exports = {SignUp, Login, Logout};