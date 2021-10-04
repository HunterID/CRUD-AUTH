require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const dbConnect = require('./db/dbConnect');
const route = require('../src/routes/auth');
const app = express();

dbConnect();

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', route);

module.exports = app;
