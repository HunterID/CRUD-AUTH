const route = require('express').Router();
const authController = require('../controllers/auth');
const { validateRegistrationData } = require('../middlewares/auth');

route.post('/registration', validateRegistrationData, authController.registration);
route.post('/login', authController.login);
route.put('/put', authController.updateUsers);
route.delete('/delete', authController.deleteUsers);

module.exports = route;
