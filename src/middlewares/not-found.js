const { STATUS_CODES } = require('../common/constants');
const HttpException = require('../errors/CustomAPIError');

async function notFound(req, res, next) {
	res.send(new HttpException('Page Not Found'));
}

module.exports = { notFound };
