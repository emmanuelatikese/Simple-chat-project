const express = require('express');
const {SignUp, Login, Logout} = require('../controllers/Users');
const routes = express.Router();


routes.post('/SignUp', SignUp);
routes.post('/Login', Login);
routes.post('/Logout', Logout);


module.exports = routes;


