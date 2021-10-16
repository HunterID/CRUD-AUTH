const Users = require('../db/model/modelUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { STATUS_CODES } = require('../common/constants');

const { SALTROUNDS, JWT_SECRET, JWT_EXPIRES_IN } = process.env;

async function registration(body) {
	const { password } = body;
	const hashPassword = bcrypt.hashSync(password, +SALTROUNDS);
	const { name, email } = await saveToDB({ ...body, password: hashPassword });
	return { email, name };
}

async function login(body) {
	const { password: bodyPassword } = body;

	const getUser = await findUser(body.email);
	if (!getUser) {
		return STATUS_CODES.BAD_REQUEST;
	}

	const isPasswordMatching = await bcrypt.compareSync(bodyPassword, getUser.password);
	if (!isPasswordMatching) {
		return STATUS_CODES.BAD_REQUEST;
	}

	const jwtToken = jwt.sign({ id: getUser._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
	return { token: jwtToken, email: getUser.email, name: getUser.name };
}

async function saveToDB(data) {
	const { name, lastName, email, price, password } = data;
	const user = new Users({ name, lastName, email, price, password });
	return user.save(user);
}

async function findUser(email) {
	return Users.findOne({ email });
}

async function getUsers() {
	return Users.find({});
}

module.exports = { registration, login, findUser, getUsers };
