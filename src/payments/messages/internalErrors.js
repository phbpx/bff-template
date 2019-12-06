const { EnumHttpStatusCode } = require('../common/enums/generics');

const neonCodeMessages = {
  100003: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    title: 'Exceção de Negócio',
    detail: 'Número de celular é obrigatório',
  },
  100004: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    title: 'Exceção de Negócio',
    detail: 'Documento é obrigatório',
  },
  100005: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    title: 'Exceção de Negócio',
    detail: 'Tipo de documento é obrigatório',
  },
  100007: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    title: 'Exceção de Negócio',
    detail: 'Equeti necessário',
  },
  100010: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    source: { pointer: 'data/attributes/member/email' },
    title: 'Exceção de Negócio',
    detail: 'E-mail Inválido',
  },
  100011: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    source: { pointer: 'data/attributes/member/mobilePhone' },
    title: 'Exceção de Negócio',
    detail: 'Celular Inválido',
  },
  100019: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    source: { pointer: '/data/attributes/cnpj' },
    title: 'Exceção de Negócio',
    detail: 'CNPJ inválido',
  },
  100039: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    source: { pointer: 'data/attributes/addresses/type' },
    title: 'Exceção de Negócio',
    detail: 'Tipo de endereço obrigatório',
  },
  100042: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    source: { pointer: 'data/attributes/cnpj' },
    title: 'Exceção de Negócio',
    detail: 'CNPJ já registrado',
  },
  100044: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    source: { pointer: 'data/attributes/addresses/zipCode' },
    title: 'Exceção de Negócio',
    detail: 'CEP inválido',
  },
  100047: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    source: { pointer: 'data/attributes/addresses/number' },
    title: 'Exceção de Negócio',
    detail: 'O número precisa conter apenas números',
  },
  100050: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    source: { pointer: 'data/attributes/addresses/additionalAddress' },
    title: 'Exceção de Negócio',
    detail: 'UF precisa ter 2 digítos',
  },
  100052: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    source: { pointer: 'data/attributes/addresses/type' },
    title: 'Exceção de Negócio',
    detail: 'Tipo de endereço inválido',
  },
  100054: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    title: 'Exceção de Negócio',
    detail: 'Senha é obrigatória',
  },
  100063: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    title: 'Exceção de Negócio',
    source: { pointer: 'data/attributes/addresses' },
    detail: 'Endereço já cadastrado',
  },
  100079: {
    status: EnumHttpStatusCode.CLIENT_ERROR_VALIDATION,
    title: 'Exceção de Negócio',
    detail: 'Registro incompleto',
  },
  999999: {
    status: EnumHttpStatusCode.SERVER_ERROR_INTERNAL,
    source: { pointer: '/' },
    title: 'Erro interno',
    detail:
      'Todo mundo erra e dessa vez fomos nós. Por favor nos diga o que aconteceu!',
  },
};

module.exports = { neonCodeMessages };
