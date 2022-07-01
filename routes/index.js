const express = require('express');
const loginController = require('../controllers/login.controller');
const userController = require('../controllers/user.controller');
const categoriesController = require('../controllers/categories.controller');

const routes = express.Router();

routes.use('/login', loginController);
routes.use('/user', userController);
routes.use('/categories', categoriesController);
module.exports = routes;