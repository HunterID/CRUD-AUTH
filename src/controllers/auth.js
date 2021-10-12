const { STATUS_CODES } = require('../common/constants');
const auth = require('../services/auth');
const change = require('../services/update');

async function registration(req, res, next) {
	const { body } = req;
	try {
		const newUser = await auth.registration(body);
		res.status(STATUS_CODES.CREATED).json(newUser);
	} catch (err) {
		next(err);
	}
}

async function login(req, res, next) {
	const { body } = req;
	try {
		const data = await auth.login(body);
		res.status(STATUS_CODES.OK).json({ data });
	} catch (err) {
		next(err);
	}
}

async function updateUsers(req, res, next) {
	const { body } = req;
	try {
		const data = await change.put(body);
		res.status(STATUS_CODES.OK).json({ data });
	} catch (err) {
		next(err);
	}
}
async function deleteUsers(req, res, next) {
	const { body } = req;
	try {
		const data = await change.removeUser(body);
		res.status(STATUS_CODES.OK).json({ data });
	} catch (err) {
		next(err);
	}
}

module.exports = { registration, login, updateUsers, deleteUsers };
