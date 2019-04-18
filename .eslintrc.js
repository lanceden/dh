// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    sourceType: 'module'
  },
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-s
  // tyle
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    "no-undef": "warn",
    "no-unused-vars": "warn",
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production'
      ? 2
      : 0,
    'keyword-spacing': 0,
    "space-before-function-paren": 0
  }
}
