const express = require('express');
const helmet = require('helmet');
const { httpLogger } = require('./core/middlewares');

const app = express();

app.use(httpLogger);
app.use(helmet);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/healthcheck', (_req, res) => res.sendStatus(200));

module.exports = app;
