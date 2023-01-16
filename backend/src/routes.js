const express = require('express');

const UserController = require("./controllers/UserController");
const ActivityController = require("./controllers/ActivityController");
const AuthController = require("./controllers/AuthController");

const routes = express.Router();

routes.post('/user', UserController.store)
routes.post('/activity', ActivityController.store)
routes.post('/activity/get', ActivityController.index)
routes.delete('/activity', ActivityController.delete)
routes.put('/activity', ActivityController.update)
routes.post('/login', AuthController.login)

module.exports = routes;