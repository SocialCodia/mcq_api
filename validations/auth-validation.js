const Joi = require('@hapi/joi');


class AuthValidation {

    register = Joi.object({
        name: Joi.string().min(4).max(30).required(),
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(6).max(50).required()
    });

    login = Joi.object({
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(6).max(30).required()
    });



}


module.exports = new AuthValidation();