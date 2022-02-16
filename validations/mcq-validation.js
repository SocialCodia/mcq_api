const Joi = require('@hapi/joi');

class McqValidation {

    createMcq = Joi.object({
        question: Joi.string().min(2).required(),
        opOne: Joi.string().optional().default(''),
        opTwo: Joi.string().optional().default(''),
        opThree: Joi.string().optional().default(''),
        opFour: Joi.string().optional().default(''),
        answer: Joi.number().min(1).max(4).default(1),
        verified: Joi.bool().default(true)
    });

}

module.exports = new McqValidation();