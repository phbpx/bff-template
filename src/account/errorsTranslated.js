const neonCodeMessages = {
  100010: {
    code: 100010,
    source: { pointer: 'data/attributes/member/email' },
    title: 'Exceção de Negócio',
    detail: 'E-mail Inválido',
  },
  100011: {
    code: 100011,
    source: { pointer: 'data/attributes/member/mobilePhone' },
    title: 'Exceção de Negócio',
    detail: 'Celular Inválido',
  },
  100019: {
    code: 100019,
    source: { pointer: '/data/attributes/cnpj' },
    title: 'Exceção de Negócio',
    detail: 'CNPJ inválido',
  },
  100039: {
    code: 100039,
    source: { pointer: 'data/attributes/addresses/type' },
    title: 'Exceção de Negócio',
    detail: 'Tipo de endereço obrigatório',
  },
  100042: {
    code: 100042,
    source: { pointer: 'data/attributes/cnpj' },
    title: 'Exceção de Negócio',
    detail: 'CNPJ já registrado',
  },
  100044: {
    code: 100044,
    source: { pointer: 'data/attributes/addresses/zipCode' },
    title: 'Exceção de Negócio',
    detail: 'CEP inválido',
  },
  100047: {
    code: 100047,
    source: { pointer: 'data/attributes/addresses/number' },
    title: 'Exceção de Negócio',
    detail: 'O número precisa conter apenas números',
  },
  100050: {
    code: 100050,
    source: { pointer: 'data/attributes/addresses/additionalAddress' },
    title: 'Exceção de Negócio',
    detail: 'UF precisa ter 2 digítos',
  },
  100052: {
    code: 100052,
    source: { pointer: 'data/attributes/addresses/type' },
    title: 'Exceção de Negócio',
    detail: 'Tipo de endereço inválido',
  },
  100054: {
    code: 100054,
    title: 'Exceção de Negócio',
    detail: 'Senha é obrigatória',
  },
  100063: {
    code: 100063,
    title: 'Exceção de Negócio',
    source: { pointer: 'data/attributes/addresses' },
    detail: 'Endereço já cadastrado',
  },
  100079: {
    code: 100079,
    title: 'Exceção de Negócio',
    detail: 'Registro incompleto',
  },
  999999: {
    code: EnumHttpcodeCode.SERVER_ERROR_INTERNAL,
    source: { pointer: '/' },
    title: 'Erro interno',
    detail:
      'Todo mundo erra e dessa vez fomos nós. Por favor nos diga o que aconteceu!',
  },
};

module.exports = neonCodeMessages;
