require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const dbConnect = require('./db/dbConnect');
const route = require('../src/routes/auth');

const registrationMiddleware = require('../src/middlewares/auth');
const notFound = require('./middlewares/not-found');

const app = express();

dbConnect();

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/', route);

app.use(notFound);
app.use(registrationMiddleware.validateRegistrationData);

module.exports = app;
