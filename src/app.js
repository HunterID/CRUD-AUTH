require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const compression = require('compression');
const bodyParser = require('body-parser');

const dbConnect = require('./db/dbConnect');
const route = require('../src/routes/auth');

const { validateRegistrationData } = require('../src/middlewares/auth');
const { notFound } = require('./middlewares/not-found');

const app = express();

dbConnect();

app.use(helmet());
app.use(cors());
app.use(hpp());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use('/', route);

app.use(notFound);
app.use(validateRegistrationData);

module.exports = app;
