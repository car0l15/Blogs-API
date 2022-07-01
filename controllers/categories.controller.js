const express = require('express');
const serviceCategories = require('../service/service.categories');
const middleware = require('../middlewares');

const categoriesRouter = express.Router();

categoriesRouter.post('/', middleware.auth, middleware.validateName,
async (req, res) => {
    try {
        const { name } = req.body;
        const result = await serviceCategories.createCategories({ name });
        return res.status(201).json(result);
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });  
    }
});

module.exports = categoriesRouter;