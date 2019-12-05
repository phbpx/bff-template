const morgan = require('morgan');
const { slice, indexOf } = require('ramda');
const logger = require('../lib/logger');

const formatMessage = (message) => slice(0, indexOf('/n', message), message);

logger.stream = {
  write: (message) => logger.info(formatMessage(message)),
};

module.exports = morgan(
  ':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms',
  { stream: logger.stream },
);
