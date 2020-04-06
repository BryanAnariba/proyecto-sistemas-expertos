const express = require('express');
const router = express();
const controller = require('../controllers/change-password-controller');

router.post('/change-password' , controller.changePassword)//cambiar a put pero se ocupa el id del usuario

module.exports = router;

