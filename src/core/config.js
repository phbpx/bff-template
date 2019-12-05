const config = {
  app: process.env.APP_NAME || 'bff-sample',
  env: process.env.NODE_ENV || 'production',
  log: {
    level: process.env.LOG_LEVEL || 'info',
  },
  http: {
    port: process.env.HTTP_PORT || 3000,
    timeout: (process.env.HTTP_TIMEOUT || 60) * 1000,
  },
};

module.exports = config;
