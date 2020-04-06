const verifyEmailController = {};

verifyEmailController.verifyEmail = (req , res) => {
    let email = req.body.emailUser;
    console.log(email);
    console.log('Email Capturado -> ' + email);
    res.send({ statusRes: 1 , message: 'Email Correcto' }); // falta el fase
}


module.exports = verifyEmailController;