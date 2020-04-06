const controller = {};

controller.changePassword = (req , res) => {
    let password = req.body.password;
    let repeatPassword = req.body.repeatPassword;
    let newPassword = req.body.newPassword;
    let repeatNewPassword = req.body.repeatNewPassword;

    if ((password == repeatPassword) && (newPassword == repeatNewPassword)) {
        let passwordJson = {
            password: password ,
            newPassword: newPassword
        };
        console.log(passwordJson);
        res.send({ statusRes: 1 , message: 'Update Password Successfully.' });
    } else {
        console.log('The Keys Do not Match')
        res.send({ statusRes: 2 , message: 'The Passwords Do Not Match.' });
    }

}

module.exports = controller;