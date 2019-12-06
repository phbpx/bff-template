const statusCodeMessageError = {
  400: {
    status: 400,
    title: 'Ops!',
    detail: 'Erro no processamento!',
  },
  401: {
    status: 401,
    title: 'Sem autorização',
    detail: 'Você não tem autorização para acessar a página',
  },
  404: {
    status: 404,
    title: 'Ops!',
    detail: 'Rota errada!',
  },
  500: {
    status: 500,
    title: 'Erro interno',
    detail:
      'Todo mundo erra e dessa vez fomos nós. Por favor nos diga o que aconteceu!',
  },
  503: {
    status: 503,
    title: 'Servidor Desligado',
    detail:
      'Todo mundo erra e dessa vez fomos nós. Por favor nos diga o que aconteceu!',
  },
};

module.exports = { statusCodeMessageError };
