const UserModel = require('../models/users')


const getUserById = (id) => {
	return UserModel.findOne({_id:id});
};
const getUserByUsername = (username) => {
	return UserModel.findOne({username:username});
};