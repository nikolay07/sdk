module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: false,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'airbnb',
    'airbnb/hooks'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    requireConfigFile: false,
    allowImportExportEverywhere: false,
    codeFrame: true,
    babelOptions: {
      presets: ['@babel/preset-react', '@babel/preset-env'],
      plugins: []
    }
  },
  plugins: [
    'eslint-plugin-react',
    'eslint-plugin-react',
    'eslint-plugin-jsx-a11y',
    'import'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/extensions': [
      '.js',
      '.jsx'
    ]
  },

  rules: {
    'react/prop-types': 1,
    'no-unused-vars': 1,
    'no-empty-pattern': 1,
    'react/jsx-no-target-blank': 1,
    'no-dupe-keys': 1,
    'react/jsx-key': 1,
    'react/no-unknown-property': 1,
    'linebreak-style': [1, 'windows'],
    'comma-dangle': [1, 'never'],
    'arrow-parens': [1, 'as-needed', { requireForBlockBody: true }],
    'max-len': [
      1,
      {
        code: 140,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'react/jsx-no-bind': [
      1,
      { allowArrowFunctions: true, allowFunctions: true, allowBind: true }
    ],
    'no-use-before-define': [
      1,
      { functions: false, classes: true, variables: true }
    ],
    'import/extensions': 1,
    'implicit-arrow-linebreak': 1,
    'prefer-destructuring': [
      0,
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: true
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'class-methods-use-this': [1, { exceptMethods: ['emit', 'unsubscribe', 'subscribe'] }],
    'react/forbid-prop-types': 1,
    'react/jsx-no-useless-fragment': [1, { allowExpressions: true }],
    'operator-linebreak': 1,
    'arrow-body-style': 1,
    'react/react-in-jsx-scope': 0
    // 'no-unused-expressions': 0,
    // 'default-param-last': 0,
    // 'no-console': 0,
    // 'no-return-assign': 0,
    // 'jsx-a11y/anchor-is-valid': 0,
    // 'no-param-reassign': 0,
    // 'no-nested-ternary': 0,
    // camelcase: 0,
    // 'no-loss-of-precision': 0,
    // 'jsx-a11y/no-static-element-interactions': 0,
    // 'jsx-a11y/click-events-have-key-events': 0,
    // 'jsx-a11y/label-has-associated-control': 0,
    // 'jsx-a11y/control-has-associated-label': 0,
    // 'react-hooks/exhaustive-deps': 0,
    // 'react/button-has-type': 0,
    // 'react/function-component-definition': 0,
    // 'react/jsx-props-no-spreading': 0,
    // 'react/no-array-index-key': 0,
    // 'object-curly-newline': 0,
    // 'import/prefer-default-export': 0,
    // 'import/no-unresolved': 0,
    // 'import/no-unused-modules': [0, { unusedExports: true }],
    // 'jsx-a11y/anchor-has-content': 0,
    // 'new-cap': [0, { newIsCap: false }],
    // 'func-names': [0, 'as-needed'],
    // 'jsx-a11y/aria-role': 0
  }
};
