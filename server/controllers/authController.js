const User = require("../models/User")

const createUser = async (req,res) => {
    const user = await User.create(req.body)
    res.status(201).json({status: 'success', data: user})
}

const getAllUsers = async(req,res)=> {
    const users = await User.find({})
    res.status(200).json({status: 'success', data: users})
}

module.exports = {createUser, getAllUsers}