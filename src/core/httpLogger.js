const morgan = require('morgan');
const { slice, indexOf, compose } = require('ramda');
const { logInfo } = require('./logger');

const formatMessage = (message) => slice(0, indexOf('/n', message), message);
const writeStream = compose(logInfo, formatMessage);

const httpLogger = morgan(
  ':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms',
  { stream: { write: writeStream } }
);

module.exports = {
  httpLogger,
};
