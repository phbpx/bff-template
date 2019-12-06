const express = require('express');
const helmet = require('helmet');
const { httpLogger } = require('./core/httpLogger');
const initSwagger = require('../docs');
const controllers = [require('./account/controller')];
const { httpResponse, error } = require('./core/middlewares');

const app = express();

app.use(initSwagger);
app.use(httpLogger);
app.use(helmet);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/healthcheck', (_req, res) => res.sendStatus(200));

controllers.forEach((controller) => {
  Object.keys(controller).forEach((path) => {
    app[controller[path].method](path, controller[path].resolver);
  });
});

app.use(errorMiddleware);
app.use(httpResponseMiddleware);

module.exports = app;
