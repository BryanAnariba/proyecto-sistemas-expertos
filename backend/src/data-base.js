const mongoose = require('mongoose');
const DATA_BASE = 'proyecto-cms';
const PORT = '27017';
const HOST = 'localhost';

class Conexion { 
    constructor () {
        this.conectaMe();
    }

    conectaMe () {
        mongoose.connect(`mongodb://${ HOST }:${ PORT }/${ DATA_BASE }` , { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then((exito) => {
            console.log('Data Base Connected Successfully');
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

module.exports = new Conexion;