db.createCollection('usuarios');

usuarios = {
    nombresPersona: '' ,
    apellidosPersona: '' ,
    generoPersona: '',
    correoPersona: '' ,
    passwordPersona: '' ,
    fechaNacimiento: ''
};

-------- Usuario de prueba encyrptado
{
	"nombresPersona": "Nombre 1" ,
    "apellidosPersona": "Apellido 1" ,
    "generoPersona": "Masculino" ,
    "correoPersona": "user1@gmail.com" ,
    "passwordPersona": "asd.456" ,
    "fechaNacimiento": "12/12/2012"
}

plataformasWeb = {
    nombreSitio: '' ,
    description: '' ,
    estatusSitio: '' , // Terminado, no terminado
    fechaCreacion: '' ,
    usuarioCreador: {
        idUsuario: '' ,
        nombreUsuario: ''
    } ,
    participantes: [{
        idParticipante: '' ,
        emailParticipante: '' ,
        roleParticipante: '' ,
        estatusParticipante: '' ,  // Activo Inactivo 
    }]
};


// para invitar a alguien debe estar logueado en la cuenta ojo hacer validacion para esto
invitacionesParticipantes = {
    emailParticipante: '' ,
    roleParticipante: '' ,
    estatusInvitacion: ''
};