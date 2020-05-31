const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('./data-base');
const rutasUsuarios = require('./routes/usuarios.routes');

// Settings
app.set('port' , process.env.PORT || 3500);

// Middlewares
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/usuarios' , rutasUsuarios);
app.use(require('./routes/change-email-routes'));
app.use(require('./routes/change-password-routes'));
app.use(require('./routes/blog-content-routes'));


// Starting Server
app.listen(app.get('port') , () => {
    console.log('Server Started on Port -> ' + app.get('port'));
});