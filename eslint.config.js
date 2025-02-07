import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];


// export default [
//   {
//     files: ['**/*.js', '**/*.vue'],
//     ignores: ['node_modules/', 'dist/'],
//     languageOptions: {
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//     },
//     plugins: {
//       vue: vuePlugin,
//     },
//     rules: {
//       // Add your custom rules here
//     },
//   },
// ];


// import vuePlugin from 'eslint-plugin-vue';
// import tsParser from '@typescript-eslint/parser';
// import tsPlugin from '@typescript-eslint/eslint-plugin';
// import prettierPlugin from 'eslint-plugin-prettier';

// export default [
//   {
//     files: ['**/*.js', '**/*.ts', '**/*.vue'],
//     ignores: ['node_modules/', 'dist/'],
//     languageOptions: {
//       parser: tsParser,
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//     },
//     plugins: {
//       vue: vuePlugin,
//       ts: tsPlugin,
//       prettier: prettierPlugin,
//     },
//     rules: {
//       'prettier/prettier': 'error',
//       // Add your custom rules here
//     },
//   },
// ];