const { checkSchema } = require('express-validator');

const validateBody = (newAttributes) => {
  const defaultBody = {
    data: {
      in: ['body'],
      exists: true,
      errorMessage: {
        status: 422,
        source: { pointer: '' },
        title: 'Erro interno',
        detail: 'Erro na estrutura do request',
      },
    },
    'data.attributes': {
      in: ['body'],
      exists: true,
      errorMessage: {
        status: 422,
        source: { pointer: '/data/attributes' },
        title: 'Erro interno',
        detail: 'Atributos ausentes',
      },
    },
    'data.type': {
      in: ['body'],
      exists: true,
      errorMessage: {
        status: 422,
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
