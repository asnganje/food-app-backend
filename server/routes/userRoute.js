const express = require('express');
const { createUser, getAllUsers, loginUser, logoutUser } = require('../controllers/authController');
const router = express.Router();

router.route('/').get(getAllUsers)
router.route('/signup').post(createUser)
router.route('/login').post(loginUser)
router.post('/logout', logoutUser)
module.exports = router