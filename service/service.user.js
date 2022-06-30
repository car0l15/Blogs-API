const { User } = require('../src/database/models');
const { generationToken } = require('../utils/JWTToken');

const createUser = async ({ displayName, email, password, image }) => {
 const user = await User.findOne({
 where: { email },
 });

 if (user) {
    const error = { status: 409, message: 'User already registered' };
    throw error;
 }

  const newUser = await User.create({
    displayName, email, password, image,
  });

  const token = generationToken(newUser.dataValues);
//  console.log(token, 'here');
  return token;
};

const getUsers = async () => {
  const users = await User.findAll({
        attributes: ['id', 'displayName', 'email', 'image'],
    });

  return users;
};

module.exports = {
    createUser,
    getUsers,
};