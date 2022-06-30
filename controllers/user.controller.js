const express = require('express');
const serviceUser = require('../service/service.user');
const middleware = require('../middlewares');

const userRouter = express.Router();

userRouter.post('/', middleware.emailValidation, middleware.JoiValidation,
  async (req, res) => {
 try {
    const { displayName, email, password, image } = req.body;
    const result = await serviceUser.createUser({ displayName, email, password, image });
    res.status(201).json({ token: result });
 } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
 }
});

userRouter.get('/', middleware.auth,
async (req, res) => {
   const users = await serviceUser.getUsers();
   return res.status(200).json(users);
});

module.exports = userRouter;