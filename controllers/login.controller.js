const express = require('express');
const serviceLogin = require('../service/service.login');

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
    const { email, password } = req.body;

    const result = serviceLogin.postUser(email, password);
    res.status(200).json(result);
});

module.exports = loginRouter;