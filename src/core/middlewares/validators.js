const { validationResult } = require('express-validator');

const middlewareValidation = (req, res, next) => {
  const errorValidation = validationResult(req);

  if (!errorValidation.isEmpty()) {
    const format = { errors: errorValidation.array().map((v) => v.msg) };
    return res.status(422).json(format);
  }

  return next();
};

module.exports = { middlewareValidation };
