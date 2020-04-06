const express = require('express');
const router = express();
const changeEmailController = require('../controllers/change-email-controller');

router.post('/change-email' , changeEmailController.changeEmail);//cambiar a put pero se ocupa el id del usuario
module.exports = router;