const { User } = require('../src/database/models');
const { generationToken } = require('../utils/JWTToken');

const postUser = async ({ displayName, email, password, image }) => {
 const newUser = await User.create(
    displayName, email, password, image,
 );

  const checkEmail = await User.findOne({ where: { email } });

  if (checkEmail) {
    const error = { status: 409, message: 'User already registered' };
    throw error;
  }
 const token = generationToken(newUser.dataValues);
 console.log('token here', token);
 return token;
};

module.exports = {
    postUser,
};