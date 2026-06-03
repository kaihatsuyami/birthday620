import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import neostandard from 'neostandard'

const config = [

  { ignores: ['build/*', '**/public/*', 'launch.config.*js'] },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...neostandard({}),

  {
    rules: {
      'object-shorthand': 'off',
      'no-unused-vars': 'off',
      '@stylistic/object-curly-newline': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/multi-word-component-names': 'off',
    }
  },

  {
    files: [
      '*.vue',
      '**/*.vue',
    ],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        sourceType: 'module'
      },
    },
  },

  {
    files: ['frontend/**/*'],
    languageOptions: { globals: { ...globals.browser, ROSLIB: 'readonly' } }
  },
  {
    files: ['server/**/*'],
    languageOptions: { globals: { ...globals.node } }
  },
]
export default config
