const express = require('express');
const router = express.Router();
const ctrlPlataformas = require('../controllers/plataformasWeb.controller');

router.get('/' , ctrlPlataformas.verPlataformas);

module.exports = router;