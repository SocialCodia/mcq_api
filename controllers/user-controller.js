const userService = require('../services/user-service');
const UserDto = require('../dtos/user-dto');
const ErrorHandler = require('../utils/error-handler');

class UserController {

    findUsers = async (req, res, next) => {
        const users = await userService.findUsers();
        if (!users)
            return next(ErrorHandler.notFound('No User Found'));
        const data = users.map((x) => new UserDto(x));
        res.json({ success: true, message: 'Users Found', data });
    }

    updateUser = async (req, res, next) => {
        const user = await userService.findUserAndUpdate({ _id: req.body.id }, req.body);
        if (!user)
            return next(ErrorHandler.notFound('No User Found'));
        res.json({ success: true, message: `${user.name} has been ${user.status}` });
    }

}

module.exports = new UserController();