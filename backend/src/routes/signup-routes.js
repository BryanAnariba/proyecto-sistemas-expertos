const express = require('express');
const router = express();
const signupController = require('../controllers/signup-controllers');

// Creating a new user by this route
router.post('/signup' , signupController.createNewUser);

module.exports = router;