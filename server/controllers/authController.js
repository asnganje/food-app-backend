const User = require("../models/User")

const createUser = async (req,res) => {
    const user = await User.create(req.body)
    res.status(201).json({status: 'success', data: user})
}

const loginUser = async (req,res)=> {
    const {email} = req.body

    const user = await User.findOne({email})
    if (user === 'null') {
        res.status(400).json({status:'fail'})
    }
    res.status(200).json({status:'success', data:user})
}
const getAllUsers = async(req,res)=> {
    const users = await User.find({})
    res.status(200).json({status: 'success', data: users})
}

const logoutUser = async (req, res) => {
    res.status(200).json({ status: 'success', message: 'Logged out successfully' });
};

module.exports = { createUser, getAllUsers, loginUser, logoutUser };