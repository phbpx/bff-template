const montarJsonApi = ({ body }) => null;

const montarResOk = (body) => ({
  body,
  status: 200,
  headers: {},
  nome: 
});
const getAccounts = ({ body }) => {

  return new Promise((resolve, reject) => {
    if (sucesso) {
      resolve(montarResOk(montarJsonApi(body)));
      return;
    }

    resolve(montarResFail(montarJsonApi(body)));
  });
};

module.exports = {
  '/bfbfbf': [
    {
      metodo: 'post',
      controller: getAccounts, 
      rota: '/'
    },
    {
      metodo: 'get',
      controller: getAccounts, 
      rota: '/'
    }
  ],
  '/': [
    {
      metodo: 'get',
      controller: getAccounts, 
      rota: '/'
    }
  ],
};