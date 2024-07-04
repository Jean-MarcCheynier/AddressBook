module.exports = {
  ignorePatterns: ["*.js", "*.d.ts"],
  extends: ["universe", "plugin:react-hooks/recommended",   'plugin:prettier/recommended'],
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'prettier',
    'eslint-plugin-local-rules',
  ],
  root: true,
  rules: {
    'no-empty': 'error',
    'no-useless-catch': 'warn',
    'no-empty-pattern': 'warn',
    'no-console': 'warn',
    'prettier/prettier': 'warn',
    'prefer-const': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'no-useless-rename': 'warn',
    'object-shorthand': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/order': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-duplicate-imports': 'off',
    'no-restricted-imports': 'off', 
    '@typescript-eslint/no-shadow': 'off',
    'prefer-destructuring': 'off',
  },
};
