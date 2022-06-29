const express = require('express');
const serviceLogin = require('../service/service.login');

const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
    const { email, password } = req.body;

    const result = await serviceLogin.postUser(email, password);
    res.status(200).json(result);
});

module.exports = loginRouter;