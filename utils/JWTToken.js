const JWT = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtconfig = { algorithm: 'HS256' };

const generationToken = (payload) => JWT.sign(payload, secret, jwtconfig);

const authenticateToken = async (token) => {
    if (!token) {
    const error = { status: 401, message: 'Token not found' };
    throw error;
 }
   try {
    const introspection = JWT.verify(token, secret);
    return introspection; // a introspection vai ser o nosso payload
   } catch (e) {
    const error = { status: 401, message: 'Expired or invalid token' };
    throw error;
   }
};

module.exports = { generationToken, authenticateToken };