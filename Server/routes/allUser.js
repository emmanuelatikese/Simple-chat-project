const routes = require("express").Router();
const allUser = require("../controllers/allUsers");
const protectRoute = require("../middlewares/routeProtector");
routes.get('/', protectRoute, allUser);

module.exports = routes;