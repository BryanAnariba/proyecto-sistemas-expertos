const mongoose = require('mongoose');

const esquemaPlataformas = new mongoose.Schema({
	idCreadorSitioWeb: {
        type: Object ,
        required: true
    } ,
    nombreCreadorSitioWeb: {
        type: String ,
        required: true
    } ,
    statusAdmin: {
        type: Boolean
    } , 
	plataformasCreadas: {
        type: Array
    }
},{
    timestamps: true
});

module.exports = mongoose.model('plataformasWeb' , esquemaPlataformas);