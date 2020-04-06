const express = require('express');
const router = express();
const keyController = require('../controllers/login-verify-password-controllers');

router.post('/login-password' , keyController.verifyKey);

module.exports = router;