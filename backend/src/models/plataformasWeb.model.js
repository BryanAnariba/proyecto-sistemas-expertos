const mongoose = require('mongoose');

const esquemaPlataformas = new mongoose.Schema({
    nombreSitioWeb: {
        type: String ,
        required: true
    } ,
    descripcion: {
        type: String ,
        required: true

    } ,
	idCreadorSitioWeb: {
        type: String ,
        required: true
    } ,
    nombreCreadorSitioWeb: {
        type: String ,
        required: true
    } ,
	estatusSitioWeb: {
        type: Boolean ,
        required: true
    } ,
	Colaboradores: {
        type: Array 
    }
},{
    timestamps: true
});

module.exports = mongoose.model('plataformasWeb' , esquemaPlataformas);