// .eslintrc.js
module.exports = {
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',     // Core libraries
          'external',    // Third-party libraries
          'internal',    // Aliased paths
          'parent',      // Relative imports from parent directories
          'sibling',     // Relative imports from sibling files
          'index',       // Index files
          'object',      // Object imports (e.g., TypeScript types)
          'type',        // Type imports
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
};
