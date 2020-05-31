const mongoose= require('mongoose');
mongoose.set('useCreateIndex' , true);

const esquemaUsuario = new mongoose.Schema({
    nombresPersona: {
        type: String ,
        required: true ,
        trim: true
    } ,
    apellidosPersona: {
        type: String ,
        required: true ,
        trim: true
    } ,
    generoPersona: {
        type: String ,
        required: true ,
        trim: true
    },
    correoPersona: {
        type: String ,
        required: true ,
        trim: true ,
        unique: true
    } ,
    passwordPersona: {
        type: String ,
        required: true ,
        trim: true
    } ,
    fechaNacimiento: {
        type: Date ,
        required: true
    }
} , {
    timestamps: true
});

module.exports = mongoose.model('usuarios' , esquemaUsuario);