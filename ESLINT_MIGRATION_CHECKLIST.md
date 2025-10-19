# ESLint Migration Checklist - ESLint 8 to ESLint 9

This document contains all configurations from the old ESLint config file and serves as a migration checklist for moving to ESLint 9.

## Configuration Overview

### Environment Settings

- [x] `browser: true`
- [x] `es2021: true`
- [x] `node: true`

### Parser Options

- [x] `ecmaVersion: 6` (updated to 2024)
- [x] `ecmaFeatures: { jsx: true }`
- [x] `parser: "@typescript-eslint/parser"`

### Extended Configurations

#### Core Configurations

- [ ] `"airbnb-base"`
- [ ] `"google"`
- [ ] `"prettier"`

#### Plugin Configurations

- [ ] `"plugin:regexp/all"` (Regular expressions)
- [ ] `"plugin:optimize-regex/all"` (Regular expressions)
- [ ] `"plugin:lodash/recommended"` (Lodash usage)
- [ ] `"plugin:promise/recommended"` (Promises)
- [ ] `"plugin:import/recommended"` (Import statements)
- [ ] `"plugin:import/typescript"` (TypeScript imports)
- [ ] `"plugin:eslint-comments/recommended"` (ESLint comments)
- [ ] `"plugin:sonarjs/recommended"`
- [ ] `"plugin:unicorn/all"`
- [ ] `"plugin:no-unsanitized/recommended-legacy"` (Security)
- [ ] `"plugin:jsonc/base"` (JSON)
- [ ] `"plugin:jsx-a11y/strict"` (JSX accessibility)
- [x] `"plugin:@typescript-eslint/recommended"` (TypeScript)
- [ ] `"plugin:nuxt/recommended"` (Nuxt.js)
- [x] `"plugin:vue/vue3-recommended"` (Vue 3)

### Plugins

- [x] `"no-secrets"` (Security)
- [ ] `"xss"` (Security) - Not compatible with ESLint 9
- [x] `"react"`
- [x] `"@typescript-eslint"`
- [x] `"unicorn"`
- [x] `"regexp"`

### Ignore Patterns

- [x] `"static/sw.js"`
- [x] `"node_modules"`
- [x] `".nuxt"`
- [x] `"dist"`
- [x] `"src/types/backend/backendApi.ts"`

### Settings

- [ ] `import/resolver: { typescript: true, node: { extensions: [".js", ".jsx", ".ts", ".tsx", "vue"] } }`

## Rules Configuration

### Enabled Rules

#### Standard ESLint

- [x] `"linebreak-style": ["error", "unix"]`
- [x] `"comma-dangle": ["warn", "always-multiline"]`
- [x] `"eol-last": "warn"`
- [x] `"quotes": ["error", "double", { "avoidEscape": true }]`
- [x] `"no-duplicate-imports": "error"`
- [x] `"no-console": ["warn", { "allow": ["debug", "error", "warn"] }]`
- [x] `"camelcase": "warn"`
- [ ] `"no-use-before-define": ["error", { "functions": false, "classes": true, "variables": true }]`
- [ ] `"import/no-duplicates": "warn"`

#### Security Rules

- [x] `"no-secrets/no-secrets": "error"`
- [ ] `"xss/no-mixed-html": "error"` - Not compatible with ESLint 9
- [ ] `"xss/no-location-href-assign": "error"` - Not compatible with ESLint 9

#### Unicorn Rules

- [x] `"unicorn/filename-case": ["error", { "cases": { "kebabCase": true, "camelCase": true, "snakeCase": true, "pascalCase": true } }]`
- [x] `"unicorn/consistent-function-scoping": "warn"`

#### React Rules

- [ ] `"react/jsx-sort-props": "warn"`

#### TypeScript Rules

- [ ] `"@typescript-eslint/no-shadow": "error"`
- [ ] `"@typescript-eslint/no-unused-vars": "warn"`

#### Additional TypeScript ESLint Configurations

- [x] `typescript-eslint/strict` configuration
- [x] `typescript-eslint/stylistic` configuration

#### Vue Rules

- [ ] `"vue/html-self-closing": ["error", { "html": { "normal": "always", "void": "always" }, "svg": "always", "math": "always" }]`
- [ ] `"vue/max-attributes-per-line": [2, { "singleline": 20, "multiline": { "max": 2 } }]`

### Disabled Rules

- [x] `"vue/no-v-html": "off"`
- [ ] `"lodash/prefer-lodash-method": "off"`
- [ ] `"require-jsdoc": "off"`
- [ ] `"valid-jsdoc": "off"`
- [x] `"unicorn/prefer-dom-node-text-content": "off"`
- [ ] `"security/detect-object-injection": "off"`
- [ ] `"no-shadow": "off"`
- [ ] `"import/extensions": "off"`
- [ ] `"vue/multi-word-component-names": "off"`
- [ ] `"import/no-extraneous-dependencies": "off"`
- [ ] `"no-restricted-syntax": "off"`
- [ ] `"import/prefer-default-export": "off"`
- [ ] `"no-undef": "off"`
- [x] `"unicorn/prefer-json-parse-buffer": "off"`
- [x] `"unicorn/no-useless-undefined": "off"`
- [ ] `"no-duplicate-imports": "off"`
- [x] `"max-len": "off"`
- [ ] `"vue/max-len": "off"`
- [ ] `"vue/require-default-prop": "off"`
- [ ] `"vue/singleline-html-element-content-newline": "off"`
- [ ] `"vue/html-indent": "off"`

## Migration Notes

### ESLint 9 Changes to Consider

1. **Flat Config System**: ESLint 9 uses flat config format instead of traditional config files
2. **Plugin Compatibility**: Check if all plugins support ESLint 9
3. **Rule Changes**: Some rules may be deprecated or have different behavior
4. **Parser Updates**: Ensure TypeScript parser is compatible
5. **Import Resolver**: May need different configuration format

### Priority Migration Order

1. Core ESLint configurations and environments
2. TypeScript and Vue.js configurations
3. Security plugins
4. Code quality plugins (SonarJS, Unicorn)
5. Import and module resolution
6. Individual rule customizations

### Testing Strategy

- [ ] Test with TypeScript files
- [ ] Test with Vue components
- [ ] Test with React components (if applicable)
- [ ] Test security rules
- [ ] Test import resolution
- [ ] Verify all ignore patterns work correctly
