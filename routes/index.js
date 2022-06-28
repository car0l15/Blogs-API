const express = require('express');
const loginController = require('../controllers/login.controller');

const routes = express.Router();

routes.use('/login', loginController);

module.exports = routes;