const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/UserController');

routes.get('/', UserController.index);
routes.get('/login', UserController.index);
routes.post('/createdata', UserController.createdata);

module.exports = routes;