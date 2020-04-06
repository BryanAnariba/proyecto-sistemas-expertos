const controller = {};

controller.verifyKey = (req , res) => {
    let key = req.body.userKey;
    console.log('Key Received Successfuly -> ' + key);
    res.send({ statusRes: 1 , message: 'Password is valid' }); // falta el else 
} 

module.exports = controller;