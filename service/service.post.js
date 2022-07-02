const { BlogPost, User, Category } = require('../src/database/models');

const create = () => {
};

const getAll = async () => {
 const result = await BlogPost.findAll({
    include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },    
    ],
 });
 return result;
};

const getByid = async (id) => {
  const result = await BlogPost.findOne({
    include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },    
    ],
    where: { id },
  });

  if (!result) {
    const error = { status: 404, message: 'Post does not exist' };
    throw error;
  }
return result;
};

module.exports = {
    create,
    getAll,
    getByid,
};