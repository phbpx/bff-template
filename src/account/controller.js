const makeResponse = (body) => ({
  body,
  status: 200,
  headers: {},
  nome: '',
});

const getAccounts = ({ body }) => {
  return new Promise((resolve, reject) => {
    if (sucesso) {
      resolve(makeResponse(montarJsonApi(body)));
      return;
    }

    resolve(montarResFail(montarJsonApi(body)));
  });
};

module.exports = {
  '/payment': {
    method: 'get',
    resolver: getAccounts,
  },
};
