const { EnumHttpStatusCode } = require('../../../../common/enums/generics');
const { POST_PAYMENT_SLIPS } = require('../../../../messages');
const { middlewareValidation } = require('../../core/middlewares/validators');
const { validateBody } = require('../../../../helpers/jsonApi');

const paymentSlipRules = [
  validateBody({
    'data.attributes.collectionValue': {
      in: ['body'],
      isString: true,
      errorMessage: {
        status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
        source: { pointer: '/data/attributes/collectionValue' },
        title: POST_PAYMENT_SLIPS.COLLECTION_VALUE.TITLE,
        detail: POST_PAYMENT_SLIPS.COLLECTION_VALUE.GENERAL,
      },
    },
    'data.attributes.expirationDate': {
      in: ['body'],
      isString: true,
      errorMessage: {
        status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
        source: { pointer: '/data/attributes/expirationDate' },
        title: POST_PAYMENT_SLIPS.EXPIRATION_DATE.TITLE,
        detail: POST_PAYMENT_SLIPS.EXPIRATION_DATE.GENERAL,
      },
    },
    'data.attributes.description': {
      in: ['body'],
      isString: true,
      errorMessage: {
        status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
        source: { pointer: '/data/attributes/description' },
        title: POST_PAYMENT_SLIPS.DESCRIPTION.TITLE,
        detail: POST_PAYMENT_SLIPS.DESCRIPTION.GENERAL,
      },
    },
    'data.attributes.latePayment': {
      in: ['body'],
      exists: true,
      errorMessage: {
        status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
        source: { pointer: '/data/attributes/latePayment' },
        title: 'Erro interno',
        detail: 'Atributos ausentes',
      },
    },
    'data.attributes.latePayment.penalty': {
      in: ['body'],
      isString: true,
      errorMessage: {
        status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
        source: { pointer: '/data/attributes/latePayment/penalty' },
        title: POST_PAYMENT_SLIPS.PENALTY.TITLE,
        detail: POST_PAYMENT_SLIPS.PENALTY.GENERAL,
      },
    },
    'data.attributes.latePayment.interestRate': {
      in: ['body'],
      isString: true,
      errorMessage: {
        status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
        source: { pointer: '/data/attributes/latePayment/interestRate' },
        title: POST_PAYMENT_SLIPS.INTEREST_RATE.TITLE,
        detail: POST_PAYMENT_SLIPS.INTEREST_RATE.GENERAL,
      },
    },
    'data.attributes.debtor': {
      in: ['body'],
      isString: true,
      errorMessage: {
        status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
        source: { pointer: '/data/attributes/debtor' },
        title: POST_PAYMENT_SLIPS.DEBTOR.TITLE,
        detail: POST_PAYMENT_SLIPS.DEBTOR.GENERAL,
      },
    },
  }),
  middlewareValidation,
];

module.exports = paymentSlipRules;
