const js = require('@eslint/js')
const react = require('eslint-plugin-react')
const jest = require('eslint-plugin-jest')
const globals = require('globals')

module.exports = [
  {
    ignores: [
      'webpack.config.js',
      'eslint.config.js',
      '.eslintrc.js',
      'node_modules/**',
      'dist/**'
    ]
  },
  js.configs.recommended,
  {
    files: ['app.js'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.jest,
      }
    },
    rules: {
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      // 'quotes': ['error', 'single'],
      'quotes': 'off',
      // 'semi': ['error', 'never'],
      'semi': 'off',
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'no-console': 0
    }
  },
  {
    files: ['src/**/*.{js,jsx}', 'test/**/*.{js,jsx}'],
    plugins: {
      react,
      jest
    },
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.es6,
        ...globals.jest
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...react.configs.recommended.rules,
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      // 'quotes': ['error', 'single'],
      'quotes': 'off',
      // 'semi': ['error', 'never'],
      'semi': 'off',
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'no-console': 'off',
      'react/prop-types': 0
    }
  },
  {
    files: ["jest.setup.js"],
    languageOptions: {
      globals: {
        global: "readonly" // allow 'global'
      },
      env: {
        node: true,      // allow 'require'
        jest: true       // allow Jest globals if used here
      }
    }
  }
]
