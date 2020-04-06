const controller = {};
var users = [{
    emailUser: 'test@gmail.com',
    optionUser: 1 ,
    statusInvited: true
}];
controller.inviteUser = (req , res) => {
    let emailUser = {
        emailUser: req.body.emailUser,
        optionUser: req.body.optionUser,
        statusInvited: false // por defecto falso hasta aceptar la invitacion
    };
    console.log(emailUser);
    users.push(emailUser);
    res.send({ statusRes: 1 , message: 'Usuario Invitado con Exito' });

}

controller.getUsers = (req , res) => {
    res.send(users);
}

controller.getUser = (req , res) => {
    const id = req.params.id;
    let userSelected = users[id];
    res.send(userSelected);
}

controller.updateUser = (req, res) => {
    id = req.params.id;
    let user = { 
        emailUser: req.body.emailUser ,
        optionUser: req.body.optionUser ,
        statusInvited: req.body.statusInvited
    };
    users[id] = user;
    res.send({ statusRes: 1 , message: 'Cambios Guardados con Exito' });
}
module.exports = controller; 