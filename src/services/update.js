const Users = require('../db/model/modelUser');

async function put(body) {
	const { email, name, lastName } = body;
	const user = { name, lastName };
	await Users.findOneAndUpdate(
		{
			email,
		},
		user,
		{ new: true },
	);
	return { name, lastName };
}

async function removeUser(body) {
	const { name } = body;
	return Users.findOneAndDelete({ name: name });
}

module.exports = {
	put,
	removeUser,
};
