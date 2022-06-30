const { User } = require('../src/database/models');
const { generationToken } = require('../utils/JWTToken');

const Login = async ({ email, password }) => {
  // console.log
  if (!email || !password) {
    const errorMsg = { status: 400, message: 'Some required fields are missing' };
    throw errorMsg;
  }

   const user = await User.findOne({
   where: { email, password },
   });

   if (!user) {
   const error = { status: 400, message: 'Invalid fields' };
   throw error;
   }

  //  console.log(user.dataValues, 'user dataValue');
   const token = generationToken(user.dataValues);
  //  console.log(token, 'token');
   return token;
};

module.exports = {
    Login,
};