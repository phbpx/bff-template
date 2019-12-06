const defineDocs = (app) => {
  if (process.env.DOCS) {
    const swaggerUi = require('swagger-ui-express');
    const swaggerJSDoc = require('swagger-jsdoc');

    const swaggerDefinition = {
      swagger: '2.0',
      info: {
        description: '',
        version: '1.0.0',
        title: 'Swagger BFF-payment-slips',
      },
      host: process.env.SWAGGER_HOST,
      basePath: '/payment-slips/v1/accounts/{id}',
      tags: [
        {
          name: 'Payment Slips',
        },
      ],
      schemes: ['https', 'http'],
      security: {
        paymentSlips_auth: {
          type: 'oauth2',
          flows: {
            implicit: {
              authorizationUrl: 'http://api.neondeveloper.com.br/oauth/dialog',
              scopes: {
                'write:paymentSlips': 'modify paymentSlip in your account',
                'read:paymentSlips': 'read your paymentSlip',
              },
            },
          },
        },
        api_key: {
          type: 'apiKey',
          name: 'api_key',
          in: 'header',
        },
      },
      externalDocs: {
        description: 'Find out more about Swagger',
        url: 'http://swagger.io',
      },
    };

    const options = {
      swaggerDefinition,
      apis: ['**/*.yaml'],
    };
    const swaggerSpec = swaggerJSDoc(options);

    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }
};

module.exports = defineDocs;
