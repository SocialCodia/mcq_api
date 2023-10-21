const authValidation = require('../validations/auth-validation');
const userService = require('../services/user-service');
const ErrorHandler = require('../utils/error-handler');
const tokenService = require('../services/token-service');
const UserDto = require('../dtos/user-dto');
class AuthController {

    register = async (req, res, next) => {
        const body = await authValidation.register.validateAsync(req.body);
        const { name, email } = body;
        const data = await userService.createUser(body);
        if (!data) return next(ErrorHandler.serverError('Failed To Create An Account'));
        return res.json({ success: true, message: 'Account Created, Now You can logged in' });
    }

    login = async (req, res, next) => {
        const body = await authValidation.login.validateAsync(req.body);
        const user = await userService.findUser({ email: body.email });
        if (!user)
            return next(ErrorHandler.notFound("No User Found"));
        const isValidPassword = await userService.verifyPassword(body.password, user.password);
        if (!isValidPassword)
            return next(ErrorHandler.unAuthorized('Invalid Password'));
        if (user.status == 'banned')
            return next(ErrorHandler.notAllowed('Your Account Has Been Banned'));
        if (user.status == 'unverified')
            return next(ErrorHandler.notAllowed("Admin Didn't Verify your account yet. Please contact to the admin to give access"));
        const payload = {
            id: user._id,
            name: user.name,
            email: user.email,
            type: user.type
        }
        const { accessToken } = tokenService.generateToken(payload);
        res.cookie('accessToken', accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            sameSite: 'none',
            secure:true
        });
        const data = new UserDto(user);
        data.accessToken = accessToken;
        res.json({ success: true, message: 'Login Successfull', data });
    }
}

module.exports = new AuthController();