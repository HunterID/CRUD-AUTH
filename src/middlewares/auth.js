const { STATUS_CODES } = require('../common/constants');
const { registrationSchema } = require('../validators/auth');

async function validateRegistrationData(req, res, next) {
	const { body } = req;
	try {
		await registrationSchema.validateAsync(body);

		next();
	} catch (error) {
		return res.status(STATUS_CODES.BAD_REQUEST).json({
			message: 'BAD_REQUEST',
			error: await sendError(error),
		});
	}

	async function sendError(err) {
		const arr = err.details;
		return arr.map(({ message }) => message);
	}
}

module.exports = { validateRegistrationData };
