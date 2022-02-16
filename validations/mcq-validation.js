const Joi = require('@hapi/joi');

class McqValidation {

    createMcq = Joi.object({
        question: Joi.string().min(2).required(),
        opOne: Joi.string().optional(),
        opTwo: Joi.string().optional(),
        opThree: Joi.string().optional(),
        opFour: Joi.string().optional(),
        answer: Joi.number().min(1).max(2).default(1),
        verified: Joi.bool().default(true)
    });

}

module.exports = new McqValidation();