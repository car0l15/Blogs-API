const emailValidation = require('./emailValidation');
const JoiValidation = require('./JoiValidation');
const auth = require('./auth');
const validateName = require('./nameValidation');

module.exports = {
    emailValidation,
    JoiValidation,
    auth,
    validateName,
};