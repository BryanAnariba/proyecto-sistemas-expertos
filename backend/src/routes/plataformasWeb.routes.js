const express = require('express');
const router = express.Router();
const ctrlPlataformas = require('../controllers/plataformasWeb.controller');

router.post('/' , ctrlPlataformas.crearNuevaPlataforma);
router.get('/:idUsuario' , ctrlPlataformas.verPlataformas);
router.put('/:idUsuario' , ctrlPlataformas.modificaPlataforma);
router.get('/:idUsuario/contenido/:idPlataforma' , ctrlPlataformas.dameSitio);
router.put('/:idUsuario/contenido/:idPlataforma' , ctrlPlataformas.modificaContenido);

module.exports = router;