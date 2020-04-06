const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

// Settings
app.set('port' , process.env.PORT || 3500);

// Middlewares
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(require('./routes/signup-routes'));
app.use(require('./routes/login-verify-email-routes'));
app.use(require('./routes/login-verify-password-routes'));
app.use(require('./routes/change-email-routes'));
app.use(require('./routes/change-password-routes'));
app.use(require('./routes/insert-users-routes'));
app.use(require('./routes/blog-content-routes'));

// Static Files

// Global Variables

// Starting Server
app.listen(app.get('port') , () => {
    console.log('Server Started on Port -> ' + app.get('port'));
});