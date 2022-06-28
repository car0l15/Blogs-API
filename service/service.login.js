const { User } = require('../src/database/models');

const postUser = ({
    email,
    password,
}) => User.create({
    email,
    password,
});

module.exports = {
    postUser,
};