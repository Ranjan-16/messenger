module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Make sure Prettier formatting is respected
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },
  plugins: ['react', 'import'],
  rules: {
    // Ensure imports are ordered properly
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'], // Order for built-in and external packages
          ['internal', 'parent', 'sibling'], // Order for internal imports, parent and sibling
          'index', // Index imports at the bottom
        ],
        'newlines-between': 'always', // Enforce a newline between each group
        alphabetize: {
          order: 'asc', // Alphabetize imports within each group
          caseInsensitive: true,
        },
      },
    ],
    'react/react-in-jsx-scope': 'off', // React 17 and above doesn't require React in scope
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};
