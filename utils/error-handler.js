
class ErroHandler extends Error {

    constructor(message, statusCode) {
        super(message),
            this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }

    static badRequest = (message = 'Bad Request') => new ErroHandler(message, 422);
    static notFound = (message = 'Resource Not Found') => new ErroHandler(message, 404);
    static serverError = (message = 'Oops..! something went wrong') => new ErroHandler(message, 500);
    static notAllowed = (message = 'Not Allowed') => new ErroHandler(message, 403);
    static unAuthorized = (message = 'Unauthorized Access') => new ErroHandler(message, 403);

}

module.exports = ErroHandler;