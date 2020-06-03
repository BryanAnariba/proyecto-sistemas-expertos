const ctrlPlataformas = {};
const modeloPlataformas = require('../models/plataformasWeb.model');
const mongoose = require('mongoose');

ctrlPlataformas.verPlataformas = (req , res) => {
    let { idUsuario } = req.params;
    modeloPlataformas.find({ idCreadorSitioWeb: mongoose.Types.ObjectId(idUsuario) })
    .then((exito) => {
        res.send(exito[0]);
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    });
}

ctrlPlataformas.crearNuevaPlataforma = (req , res) => {
    let { nombreSitioWeb , descripcion , idCreadorSitioWeb ,nombreCreadorSitioWeb , contenido } = req.body;
    let nuevaPlataforma = new modeloPlataformas({
        idCreadorSitioWeb: mongoose.Types.ObjectId(idCreadorSitioWeb) ,
        nombreCreadorSitioWeb: nombreCreadorSitioWeb ,
        statusAdmin: true , 
        plataformasCreadas: {
            _id: mongoose.Types.ObjectId() ,
            descripcion: descripcion ,
            nombreSitioWeb: nombreSitioWeb ,
            contenido: contenido ,
            estatusSitioWeb: false ,
            colaboradores: []
        }
    });
    nuevaPlataforma.save()
    .then((exito) => {
        res.send(exito);
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    });
}

ctrlPlataformas.modificaPlataforma = (req , res) => {
    let { idUsuario } = req.params;
    let { descripcion , nombreSitioWeb , contenido } = req.body;
    modeloPlataformas.updateOne({ idCreadorSitioWeb: mongoose.Types.ObjectId(idUsuario) } , {
        $push: {
            plataformasCreadas: {
                _id: mongoose.Types.ObjectId() ,
                descripcion: descripcion ,
                nombreSitioWeb: nombreSitioWeb ,
                contenido: contenido ,
                estatusSitioWeb: false ,
                colaboradores: []
            }
        }
    })
    .then((exito) => { 
        res.send(exito);
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    });
}

// Obtenemos la data o contenido del sitio
ctrlPlataformas.dameSitio = (req , res) => {
    let { idUsuario , idPlataforma } = req.params;
    modeloPlataformas.find({ 
        idCreadorSitioWeb: mongoose.Types.ObjectId(idUsuario) ,
        "plataformasCreadas._id": mongoose.Types.ObjectId(idPlataforma)
    },{"plataformasCreadas.$": true })
    .then((exito) => {
        res.send(exito[0]);
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    });
}

ctrlPlataformas.modificaContenido = (req , res) => {
    let { idUsuario , idPlataforma } = req.params;
    let {contenido } = req.body;
    modeloPlataformas.updateOne({ 
        idCreadorSitioWeb: mongoose.Types.ObjectId(idUsuario),
        "plataformasCreadas._id": mongoose.Types.ObjectId(idPlataforma)
    } , {
            $set: {'plataformasCreadas.$.contenido': contenido} 
    })
    .then((exito) => { 
        res.send(exito);
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    });
}
module.exports = ctrlPlataformas;