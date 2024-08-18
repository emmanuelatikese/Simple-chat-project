const express = require('express');
const routeProtect = require('../middlewares/routeProtector');
const routes = express.Router();
const {SenderMessage, ReceiveMessage} = require('../controllers/Message');

routes.post('/send/:id', routeProtect, SenderMessage);
routes.get('/receive/:id', routeProtect, ReceiveMessage);

module.exports = routes;