const express = require('express');
const router = express();
const emailController = require('../controllers/login-verify-user-controller');

router.post('/login-email' , emailController.verifyEmail);

module.exports = router;