const { checkSchema } = require('express-validator');

const { EnumHttpStatusCode } = require('../common/enums/generics');

const validateBody = (newAttributes) => {
  const defaultBody = {
    data: {
      in: ['body'],
      exists: true,
      errorMessage: {
        status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
        source: { pointer: '' },
        title: 'Erro interno',
        detail: 'Erro na estrutura do request',
      },
    },
    'data.attributes': {
      in: ['body'],
      exists: true,
      errorMessage: {
        status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
        source: { pointer: '/data/attributes' },
        title: 'Erro interno',
        detail: 'Atributos ausentes',
      },
    },
    'data.type': {
      in: ['body'],
      exists: true,
      errorMessage: {
        status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
        source: { pointer: '/data/type' },
        title: 'Erro interno',
        detail: 'Type ausente',
      },
    },
  };

  const json = { ...defaultBody, ...newAttributes };

  return checkSchema(json);
};

module.exports = { validateBody };
