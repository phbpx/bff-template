const { validationResult } = require('express-validator');
const { EnumHttpStatusCode } = require('../../../common/enums/generics');

const middlewareValidation = (req, res, next) => {
  const errorValidation = validationResult(req);

  if (!errorValidation.isEmpty()) {
    const format = { errors: errorValidation.array().map((v) => v.msg) };
    return res.status(EnumHttpStatusCode.CLIENT_ERROR_VALIDATION).json(format);
  }

  return next();
};

module.exports = { middlewareValidation };
