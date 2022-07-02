const { BlogPost, User, Category } = require('../src/database/models');

const create = () => {
};

const getAll = async () => {
 const teste = await BlogPost.findAll({
    include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },    
    ],
 });
 return teste;
};

module.exports = {
    create,
    getAll,
};