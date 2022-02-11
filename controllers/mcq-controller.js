const mcqService = require('../services/mcq-service');
const ErrorHandler = require('../utils/error-handler');
const McqDto = require('../dtos/mcq-dto');

class McqController {

    findMcqs = async (req, res, next) => {
        const result = await mcqService.findMcqs();
        if (!result)
            return next(ErrorHandler.notFound('No MCQ Found'));
        const data = result.map((x) => new McqDto(x));
        res.json({ success: true, message: "MCQ Found", data });
    }

    createMcq = async (req, res, next) => {
        const { question, opOne, opTwo, opThree, opFoure, answer } = req.body;
        if (!question)
            return next(ErrorHandler.badRequest('Question Is Required'));
        if (!opOne && !opTwo && !opThree && !opFoure)
            return next(ErrorHandler.badRequest('Minimum One Answer Is Required'));
        if (!answer)
            return next(ErrorHandler.badRequest('Answer Is Required'));
        const result = await mcqService.createMcq(req.body)
        if (!result)
            return next(ErrorHandler.serverError('Failed To Add This MCQ'));
        res.json({ success: true, message: 'MCQ Added' });
    }

}

module.exports = new McqController();