const tokenService = require('../services/token-service');
const ErrorHandler = require('../utils/error-handler');

const auth = async (req, res, next) => {
    const { accessToken: accessTokenFromCookie, refreshToken: refreshTokenFromCookie } = req.cookies;

    try {
        const tokenUser = tokenService.verifyAccessToken(accessTokenFromCookie);
        if (!tokenUser)
            return next(ErrorHandler.unAuthorized());
        req.user = tokenUser;
    }
    catch (e) {
        return next(ErrorHandler.unAuthorized());
    }

    return next();
}

const authRole = (role) => {
    return (req, res, next) => {
        if (req.user.type != role)
            return next(ErrorHandler.notAllowed());
        next();
    }
}


module.exports = { auth, authRole };