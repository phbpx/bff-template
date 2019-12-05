const http = require('http');
const app = require('./src/app');
const logger = require('./src/lib/logger');
const config = require('./src/config');

const onListening = () => logger.info(`${config.app} listening on port ${config.http.port}`);
const gracefulShutdown = server => (
    () => server.close(() => process.exit(0))
);

const server = http.createServer(app);

server.timeout = config.http.timeout;
server.listen(config.http.port);

server.on('listening', onListening);
process.on('SIGTERM', gracefulShutdown(server));
process.on('SIGINT', gracefulShutdown(server));
