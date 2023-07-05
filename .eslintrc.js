const RULE = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
  ALWAYS: 'always',
  SINGLE: 'single'
}

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  'extends': [
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue-scoped-css/vue3-recommended',
    '@vue/typescript/recommended',
    'eslint:recommended'
  ],
  plugins: [ '@typescript-eslint', 'simple-import-sort', ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? RULE.WARN : RULE.OFF,
    'no-debugger': process.env.NODE_ENV === 'production' ? RULE.WARN : RULE.OFF,
    'no-var': RULE.ERROR,
    'no-unused-vars': RULE.WARN,
    'vue/multi-word-component-names': RULE.OFF,
    'object-curly-spacing': [ RULE.ERROR, RULE.ALWAYS ],
    'array-bracket-spacing': [ RULE.ERROR, RULE.ALWAYS ],
    'comma-spacing': [ RULE.ERROR, { 'before': false, 'after': true } ],
    'keyword-spacing': [ RULE.WARN, { 'after': true } ],
    indent: [ RULE.ERROR, 2 ],
    quotes: [ RULE.ERROR, RULE.SINGLE ],
    'vue/valid-v-slot': [
      RULE.ERROR,
      {
        allowModifiers: false,
      },
    ],
    'simple-import-sort/imports': RULE.WARN,
    'simple-import-sort/exports': RULE.WARN,
    semi: [ RULE.ERROR, 'never' ],
    'linebreak-style': [ RULE.ERROR, 'unix' ],
    'no-restricted-imports': [
      RULE.ERROR,
      {
        patterns: [
          {
            group: [ 'src/*' ],
            message: '경로는 최초 @로 시작해주십시오.',
          },
          {
            group: [ '../*' ],
            message: '경로는 최초 @로 시작해주십시오.',
          },
        ],
      },
    ],
  }
}
