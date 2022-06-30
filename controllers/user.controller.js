const express = require('express');
const serviceUser = require('../service/service.user');

const userRouter = express.Router();

userRouter.post('/', async (req, res) => {
 try {
    const { displayName, email, password, image } = req.body;
    const result = await serviceUser.postUser({ displayName, email, password, image });
    res.status(201).json({ token: result });
 } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
 }
});

module.exports = userRouter;