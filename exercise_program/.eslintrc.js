module.exports = {
  root: true,

  env: {
    node: true,
    es6: true,
  },

  extends: ['eslint:recommended', 'plugin:vue/essential', 'prettier'],
  plugins: ['vue'],

  parserOptions: {
    parser: '@babel/eslint-parser',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
  },
}
