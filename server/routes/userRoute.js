const express = require('express');
const { createUser, getAllUsers, loginUser } = require('../controllers/authController');
const router = express.Router();

router.route('/').get(getAllUsers)
router.route('/signup').post(createUser)
router.route('/login').post(loginUser)
module.exports = router