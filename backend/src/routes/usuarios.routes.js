const express = require('express');
const router = express();
const ctrlUsuarios = require('../controllers/usuarios.controllers');

/* 
    Que servicios necesito
    1 - Registrar un nuevo usuario a la plataforma
    2 - Logueo de usuario para lo cual se necesitan las credenciales
    3 - Obtener los usuarios registrados esposible ocuparla despues
    4 - Obtener los datos de un usuario seleccionado
    5 - Actualizar los datos de un usuario 
*/

// 1 - Registrar un nuevo usuario a la plataforma
router.post('/registro', ctrlUsuarios.crearUsuario);

// 2 - Logueo de usuario para lo cual se necesitan las credenciales
router.post('/login' , ctrlUsuarios.verifCredenciales);

// 3 - Obtener los usuarios registrados esposible ocuparla despues
router.get('/' , ctrlUsuarios.getUsers);

// 4 - Obtener los datos de un usuario seleccionado
router.get('/:id' , ctrlUsuarios.getUser);

// 5 - Actualizar los datos de un usuario 
router.put('/:id' , ctrlUsuarios.updateUser);

module.exports = router;