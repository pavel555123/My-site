module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended'
    ],
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module'
    },
    plugins: [
        'react',
        'i18next',
        'react-hooks',
        'test-imports-plugin'
    ],
    rules: {
        indent: 'off',
        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        'test-imports-plugin/path-checker': ['error', { alias: '@' }],
        'test-imports-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx']
            }
        ],
        'test-imports-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing']
            }
        ],
        'import/order': [
            'error',
            {
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'external',
                        position: 'after'
                    }
                ],
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'unknown',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type'
                ]
            }
        ]
    }
}
