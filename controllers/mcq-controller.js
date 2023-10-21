const mcqService = require('../services/mcq-service');
const ErrorHandler = require('../utils/error-handler');
const McqDto = require('../dtos/mcq-dto');
const mcqValidation = require('../validations/mcq-validation');

class McqController {

    findMcqs = async (req, res, next) => {
        const result = await mcqService.findMcqs();
        if (!result || result.length < 1)
            return next(ErrorHandler.notFound('No MCQ Found'));
        const data = result.map((x) => new McqDto(x));
        res.json({ success: true, message: "MCQ Found", data });
    }

    createMcq = async (req, res, next) => {
        const { question, answer, opOne, opTwo, opThree, opFoure } = req.body;
        if (!opOne && !opTwo && !opThree && !opFoure)
            return next(ErrorHandler.badRequest('Minimum One Answer Is Required'));
        if (!question)
            return next(ErrorHandler.badRequest('Question Is Required'));
        if (!answer)
            return next(ErrorHandler.badRequest('Answer Is Required'));
        req.body.addedBy = req.user.id;
        const preMcq = await mcqService.findMcq({ question: req.body.question.trim()});
        if (preMcq)
            await mcqService.updateMcq({ _id: preMcq._id }, { verified: false });
        const result = await mcqService.createMcq(req.body)
        if (!result)
            return next(ErrorHandler.serverError('Failed To Add This MCQ'));
        res.json({ success: true, message: 'MCQ Added' });
    }

}

module.exports = new McqController();