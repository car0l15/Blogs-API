const Joi = require('joi');

const userDTO = Joi.object({
 displayName: Joi.string().label('displayName').min(8).required(),
 email: Joi.string().label('email').required(),
 password: Joi.string().label('password').min(6).required(),
 image: Joi.string().label('image').required(),
}).messages({
 'any.required': '{{#label}} is required',
 displayName: '{{#label}} length must be at least 8 characters long',
 password: '{{#label}} length must be at least 6 characters long',
});

const userValidation = (req, res, next) => {
    const { error } = userDTO.validate(req.body, { abortEarly: true });

    if (!error) {
        return next();
    }

    if (error.message.includes('required')) {
        return res.status(400).json({ message: error.message });
    }

    if (error.message === '"password" length must be at least 6 characters long') {
        return res.status(400).json(
            { message: '"password" length must be at least 6 characters long' },
);
    }

    return res.status(400).json(
        { message: '"displayName" length must be at least 8 characters long' },
);
};
 
 module.exports = userValidation;