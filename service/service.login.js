const { User } = require('../src/database/models');
const { generationToken } = require('../utils/JWTToken');

const postUser = async ({ email, password }) => {
  if (!email || !password) {
    const errorMsg = { status: 400, message: 'Some required fields are missing' };
    throw errorMsg; // verificar se a camada de middleware pega certinho
  }

   const user = await User.findOne({
    // atrributes: []
    where: { email, password },
   });

   if (!user) {
   const error = { status: 400, message: 'Invalid fields' };
   throw error;
   }

   // gerar o token
   const token = generationToken(user.dataValues);
   return token;
};

module.exports = {
    postUser,
};