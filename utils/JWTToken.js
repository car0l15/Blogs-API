const JWT = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtconfig = { algorithm: 'HS256' };

const generationToken = (payload) => JWT.sign(payload, secret, jwtconfig);

module.exports = { generationToken };