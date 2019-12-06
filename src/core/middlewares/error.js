const { statusCodeMessageError, neonCodeMessages } = require('../../messages');
​
const getNeonCodeMessage = (data) => {
  const formated = data.map((v) => ({
    status: neonCodeMessages[v.code].status,
    source: neonCodeMessages[v.code].source,
    title: neonCodeMessages[v.code].title,
    detail: neonCodeMessages[v.code].detail,
  }));
  return formated;
};
​
const errorHandler = (error, _req, res, next) => {
  const { status } = error.response;
  const { data } = error.response;
​
  const msg = typeof data.errors !== 'undefined'
    ? getNeonCodeMessage(data.errors)
    : { errors: [statusCodeMessageError[status]] };
​
  res.status(status).json(msg);
  res.end();
​
  next();
};

module.exports = errorHandler;
​