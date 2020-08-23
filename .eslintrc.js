module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser

  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features

    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],

  rules: {
    'react/prop-types': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  env: {
    jest: true,
  },
}
