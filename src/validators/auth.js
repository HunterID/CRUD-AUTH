const Joi = require('joi');

const registrationSchema = Joi.object().keys({
	name: Joi.string().required().messages({
		'string.empty': 'User name is not allowed to be empty',
		'any.required': 'User name is required',
	}),
	email: Joi.string().email().required().messages({
		'string.empty': 'Email is not allowed to be empty',
		'string.email': 'Invalid Email',
		'any.required': 'Email is required',
	}),
	password: Joi.string().required().messages({
		'string.empty': 'Password is not allowed to be empty',
		'string.pattern.base': 'Password must be at least 3 characters long',
		'any.required': 'Password is required',
	}),
});

module.exports = { registrationSchema };
