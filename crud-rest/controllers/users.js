const UserModel = require('../models/users')

const getUserById = (id) => {
	return UserModel.findOne({_id:id});
};
const getUser = (req, res) => {
	getUserById(req.params.id).then((user) => {
		if (!user) res.status(404).json({ "message": "User does not exist" });
		res.status(200).json(user);
	}).catch((e) => {
		res.status(400).json(e);
	});
};
const getUserByUsername = (username) => {
	return UserModel.findOne({username:username});
};
const getUserWithUsername = (req, res) => {
	getUserByUsername(req.params.username).then((user) => {
		if (!user) res.status(404).json({ "message": "User does not exist" });
		res.status(200).json(user);
	}).catch((e) => {
		res.status(400).json(e);
	});
};
module.exports = {
    getUser,
    getUserWithUsername
}