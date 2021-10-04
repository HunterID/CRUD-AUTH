const route = require('express').Router();
const authController = require('../controllers/auth');

route.post('/registr', authController.registration);
route.post('/login', authController.login);
route.put('/change', authController.updateUsers);
route.delete('/delete', authController.deleteUsers);

module.exports = route;
