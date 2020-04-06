const controladorCuenta = {};
var usuarioCreado = [];

controladorCuenta.createNewUser = (req , res) => {
  var nuevoUsuario = {
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    genderSameName:req.body.genderSameName,
    date:req.body.date,
    emailUser:req.body.emailUser,
    passwordUser:req.body.passwordUser
  };
  usuarioCreado.push(nuevoUsuario);
  res.send({ statusRes: 1 , message: 'Usuario Creado Satisfactoriamente' , usuarioCreado: nuevoUsuario });
}
module.exports = controladorCuenta;