module.exports = {
  env: {
    browser: true,
    es2023: true, // Habilita o ambiente ECMAScript 2023
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2023, // ECMAScript 2023
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint',
    'jsx-a11y',
    'import',
    'simple-import-sort',
    'prettier',
  ],
  rules: {
    // Personalize suas regras aqui
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__tests__/**',
          '**/__mocks__/**',
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.test.ts',
          '**/*.test.tsx',
        ],
      },
    ],
    'no-use-before-define': 'off',
    'no-unused-vars': 'false',
    'prettier/prettier': 'error',
    'func-names': 'off',
    'react/style-prop-object': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'off',
    'react-native/no-raw-text': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Agrupa as importações por ordem de hierarquia
          ['^react', '^@?\\w'], // Bibliotecas de terceiros e react
          ['^(@|components)(/.*|$)'], // Componentes
          ['^(@|utils)(/.*|$)'], // Utilitários
          ['^(@|hooks)(/.*|$)'], // Hooks
          ['^(@|assets)(/.*|$)'], // Assets
          ['^(@|styles)(/.*|$)'], // Estilos
          ['^[./]'], // Importações relativas
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
