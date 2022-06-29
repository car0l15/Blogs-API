const JWT = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
// const jwtconfig

const generationToken = (payload) => JWT.sign(payload, secret);

module.exports = generationToken;