const express = require('express');
const {SignUp, Login} = require('../controllers/Users');
const routes = express.Router();


routes.post('/SignUp', SignUp);
routes.post('/Login', Login);


module.exports = routes;


