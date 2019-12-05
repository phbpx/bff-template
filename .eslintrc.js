module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2019,
  },
  rules: {
    'global-require': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'linebreak-style': 0,
  },
  plugins: [],
};
