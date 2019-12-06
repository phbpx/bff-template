const express = require('express');
const helmet = require('helmet');
const { httpLogger } = require('./core/middlewares/httpLogger');
const initSwagger = require('./common/swagger/SwaggerBootstrap');

const app = express();

app.use(httpLogger);
app.use(helmet);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/healthcheck', (_req, res) => res.sendStatus(200));
const controllers = [
  require('./account/accountController'),
  require('./account/paymenteController'),
]

constrolers.forEach(controller => {
  Object.keys(controller).forEach(nomeController => {
    app.get()
    app['get']()
    app[controller[nomeController].metodo](nomeController, controller[nomeController].controller)
  })
})


module.exports = app;
