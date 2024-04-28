// @ts-check
import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    unocss: true,
    formatters: true,
  },
  ...compat.config({
    // extends: [
    //   'eslint:recommended',
    //   // Other extends...
    // ],
    rules: {
      'node/prefer-global/process': 'off',
    },
    env: {
      node: true,
    },
  }),
)
