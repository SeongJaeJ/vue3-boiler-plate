module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['src/*'],
            message: '경로는 최초 @로 시작해주십시오.',
          },
          {
            group: ['../*'],
            message: '경로는 최초 @로 시작해주십시오.',
          },
        ],
      },
    ],
  }
}
