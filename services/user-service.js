const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');

class UserService {

    createUser = async user => await UserModel.create(user);

    updateUser = async (_id, user) => await UserModel.updateOne({ _id }, user);

    findUserAndUpdate = async (_id,user) => await UserModel.findOneAndUpdate({_id},user,{new:true});

    findUser = async filter => await UserModel.findOne(filter);

    findUsers = async filter => await UserModel.find(filter);

    verifyPassword = async (password, hashPassword) => await bcrypt.compare(password, hashPassword);

}

module.exports = new UserService();