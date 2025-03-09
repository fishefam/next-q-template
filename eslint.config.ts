import type { Linter } from 'eslint'

import { FlatCompat } from '@eslint/eslintrc'
import boundaries from 'eslint-plugin-boundaries'
import imprt from 'eslint-plugin-import'
import perfectionist from 'eslint-plugin-perfectionist'
import unicorn from 'eslint-plugin-unicorn'
import unusedImports from 'eslint-plugin-unused-imports'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

const config: Linter.Config[] = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  perfectionist.configs['recommended-alphabetical'],
  unicorn.configs.recommended,
  {
    rules: {
      'unicorn/prevent-abbreviations': [
        'error',
        { allowList: { ProcessEnv: true, props: true, utils: true } },
      ],
    },
  },
  {
    ignores: ['src/app/**/*', '*'],
    plugins: { import: imprt },
    rules: { 'import/no-default-export': 'error' },
  },
  {
    plugins: { 'unused-imports': unusedImports },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_|_$',
          vars: 'all',
          varsIgnorePattern: '^_|_$',
        },
      ],
    },
  },
  {
    plugins: { boundaries },
    rules: {
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            { allow: ['shared'], from: ['shared'] },
            {
              allow: ['shared', ['feature', { featureName: '${from.featureName}' }]],
              from: ['feature'],
            },
            {
              allow: ['feature', 'shared'],
              from: ['app', 'neverImport'],
            },
            {
              allow: [
                ['app', { fileName: `*.css` }],
                ['app', { fileName: `*.scss` }],
              ],
              from: ['app'],
            },
          ],
        },
      ],
      'boundaries/no-unknown': 'error',
      'boundaries/no-unknown-files': 'error',
    },
    settings: {
      'boundaries/elements': [
        {
          mode: 'full',
          pattern: ['src/shared/**/*'],
          type: 'shared',
        },
        {
          capture: ['_', 'fileName'],
          mode: 'full',
          pattern: ['src/app/**/*'],
          type: 'app',
        },
        {
          capture: ['featureName'],
          mode: 'full',
          pattern: ['src/features/*/**/*'],
          type: 'feature',
        },
        {
          mode: 'full',
          pattern: ['src/*'],
          type: 'neverImport',
        },
      ],
      'boundaries/include': ['src/**/*'],
    },
  },
  {
    rules: {
      'react/self-closing-comp': 'error',
      'require-await': 'error',
      'unicorn/no-nested-ternary': 'off',
    },
  },
  {
    ignores: ['**/*.d.ts', '**/*.js', '**/*.mjs', '**/*.cjs'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports',
          prefer: 'type-imports',
        },
      ],
    },
  },
]

export default config
