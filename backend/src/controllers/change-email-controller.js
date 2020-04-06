const controller = {};

controller.changeEmail = (req , res) => {
    let email = req.body.email;
    let repeatEmail = req.body.repeatEmail;
    let newEmail = req.body.newEmail;
    let repeatNewEmail = req.body.repeatNewEmail;
    
    if ((email == repeatEmail) && (newEmail == repeatNewEmail)) {
        let arrayOfChanges = {
            email: email ,
            newEmail: newEmail
        };
        console.log(arrayOfChanges);
        res.send({ statusRes:1 , message: 'Recived Data Succesfully'});
    } else {
        console.log('The Emails Do Not Match');
        res.send({ statusRes:2 , message: 'The emails do not match'});
    }
    
}

module.exports = controller;