const express = require('express');
const servicePost = require('../service/service.post');
const middleware = require('../middlewares');

const postRouter = express.Router();

// postRouter.post('/', async (req, res) => {
  
// });

postRouter.get('/', middleware.auth,
 async (req, res) => {
  try {
    const result = await servicePost.getAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
    }
  });

  postRouter.get('/:id', middleware.auth,
   async (req, res) => {
   try {
    const { id } = req.params;
    const result = await servicePost.getByid(id);
    return res.status(200).json(result);
   } catch (error) {
    return res.status(error.status || 500).json({ message: error.message }); 
   }
  });

module.exports = postRouter;