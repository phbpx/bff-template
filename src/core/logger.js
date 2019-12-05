const { transports, format, createLogger } = require('winston');
const os = require('os');
const config = require('../../config');

const {
  combine,
  timestamp,
  json,
} = format;

module.exports = createLogger({
  level: config.log.level,
  format: combine(
    timestamp(),
    json(),
  ),
  defaultMeta: {
    application: config.app,
    hostname: os.hostname(),
  },
  transports: [new transports.Console()],
  exitOnError: false,
});
