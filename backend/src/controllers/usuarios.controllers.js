const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const ctrlUsuarios = {};
const SECRET_KEY = 'key';
const modeloUsuario = require('../models/usuarios.model');

// 1 - Registrar un nuevo usuario a la plataforma
ctrlUsuarios.crearUsuario = (req , res) => {
    const { nombresPersona, apellidosPersona, generoPersona, correoPersona, passwordPersona, fechaNacimiento } = req.body;
    let nuevoUsuario = new modeloUsuario({
        nombresPersona: nombresPersona ,
        apellidosPersona: apellidosPersona ,
        generoPersona: generoPersona ,
        correoPersona: correoPersona ,
        passwordPersona: bcrypt.hashSync(passwordPersona) , // Aqui importante, se hashea la clave del usuario
        fechaNacimiento: fechaNacimiento
    });

    // Guardamos mediante una promesa por que es malo el codigo bloqueante
    nuevoUsuario.save()
    .then((exito) => { // Si tuvo exito

        // Genereamos tokes y el tiempo de vida del token
        let expiresIn = 24*60*60;
        let tokenAcceso = jwt.sign({ id: exito._id } , SECRET_KEY , { expiresIn: expiresIn });

        // Al crear una cuenta solo eso mandaremos al frontend evitando enviar el password
        let informacionUsuario = {
            codigoRes: 1 ,
            nombresPersona: exito.nombresPersona ,
            correoPersona: exito.correoPersona ,
            tokenAcceso: tokenAcceso ,
            expiresIn: expiresIn
        }

        // Enviamos solo esto al usuario 
        res.send(informacionUsuario);
        res.end();

    })
    .catch((error) => { // Si ocurre error en este caso solo controlo el catch de correo duplicado
        if (error && (error.code === 11000)) {
            res.status(200).send({ codigoRes: 0 , mensaje: 'El correo que Digito ya existe en la base de datos' });
            res.send();
        }
    });

}

// 2 - Logueo de usuario para lo cual se necesitan las credenciales
ctrlUsuarios.verifCredenciales = (req , res) => {
    let { correoPersona , passwordPersona } = req.body; // Capturamos parametros
    let password;

    modeloUsuario.find({ correoPersona: correoPersona })
    .then((exito) => {
        if(!exito[0]) {
            res.send({ 
                codigoRes: 2 , 
                mensaje: 'El correo no fue encontrado' 
            });
            res.end();
        } else {
            password = bcrypt.compareSync(passwordPersona , exito[0].passwordPersona);
            if(password) { // Si son iguales que es true
                let expiresIn = 24*60*60;
                let tokenAcceso = jwt.sign({ id: exito._id } , SECRET_KEY , { expiresIn: expiresIn });

                // Hacemos un json con los datos que queremos que el usuario vea
                let informacionUsuario = {
                    codigoRes: 1 ,
                    nombresPersona: exito[0].nombresPersona ,
                    correoPersona: exito[0].correoPersona ,
                    tokenAcceso: tokenAcceso ,
                    expiresIn: expiresIn
                };

                // Los enviamos esos datos
                res.status(200).send(informacionUsuario);
                res.end();
            } else { // Sino
                res.send({ 
                    codigoRes: 0 ,
                    mensaje: 'Clave Incorrecta' 
                });
                res.end();
            }
        }
    })
    .catch((error) => {
        res.send({ codigoRes: 0, mensaje: 'Ha ocurrido un error, verificar mas tarde' });
        res.end();
    })
}

// 3 - Obtener los usuarios registrados esposible ocuparla despues
ctrlUsuarios.getUsers = (req , res) => {

}

// 4 - Obtener los datos de un usuario seleccionado
ctrlUsuarios.getUser = (req , res) => {

}

// 5 - Actualizar los datos de un usuario
ctrlUsuarios.updateUser = (req, res) => {

}

module.exports = ctrlUsuarios; 