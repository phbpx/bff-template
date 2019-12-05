const express = require('express');
const { httpLogger } = require('./middlewares');

const app = express();

app.use(httpLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');

app.get('/healthcheck', (_req, res) => res.sendStatus(200));

module.exports = app;
