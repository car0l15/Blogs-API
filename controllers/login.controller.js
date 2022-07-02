const express = require('express');
const serviceLogin = require('../service/service.login');

const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await serviceLogin.Login({ email, password });

       return res.status(200).json({ token: result });
    } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
    }
});

module.exports = loginRouter;