# eslint-config

Comprehensive ESLint 9 configuration for JavaScript, TypeScript, Vue.js, React and more. This configuration provides a complete setup for modern web development with security, best practices, and code quality rules.

## Features

- **ESLint 9** (flat config) support
- **TypeScript** with strict and stylistic rules
- **Vue.js** support with essential rules and custom configurations
- **React** support with accessibility (JSX A11Y)
- **JSON** files linting with eslint-plugin-jsonc
- **Security** rules for common vulnerabilities
- **Prettier** integration with Tailwind CSS support
- **Promise** best practices
- **Unicorn** plugin for advanced JavaScript rules
- **Import/export** ordering and resolution
- **Code quality** with SonarJS
- **Regular expressions** validation with eslint-plugin-regexp
- **Code organization** with perfectionist plugin
- **Security scanning** for secrets and unsanitized content

## Installation

### Install from npm

```bash
npm install --save-dev eslint-config
```

### Install from GitHub

```bash
npm install --save-dev github:your-username/eslint-config
```

### Local Development

```bash
# Clone the repository
git clone https://github.com/your-username/eslint-config.git
cd eslint-config

# Install dependencies
npm install

# Build the package
npm run build
```

## Usage

### Basic Setup

Create an `eslint.config.js` file in your project root:

```javascript
import config from 'eslint-config'

export default config()
```

### Nuxt.js Support

For Nuxt.js projects, use the nuxt parameter:

```javascript
import config from 'eslint-config'

export default config({ nuxt: true })
```

### Custom Configuration

You can extend the configuration with your own rules:

```javascript
import config from 'eslint-config'

export default [
  ...config(),
  {
    // Your custom rules here
    rules: {
      'your-custom-rule': 'warn'
    }
  }
]
```

### Package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Requirements

- Node.js >= 18.0.0
- ESLint ^9.0.0
- TypeScript ^5.0.0 (if using TypeScript)

## Included Plugins

- `@eslint/js` - ESLint JavaScript configurations
- `eslint-plugin-import` - Import/export rules
- `eslint-plugin-jsx-a11y` - Accessibility for JSX
- `eslint-plugin-jsonc` - JSON files linting
- `eslint-plugin-no-secrets` - Security for secrets detection
- `eslint-plugin-no-unsanitized` - Security for unsanitized content
- `eslint-plugin-prettier` - Prettier integration
- `eslint-plugin-promise` - Promise best practices
- `eslint-plugin-react` - React rules
- `eslint-plugin-regexp` - Regular expression rules
- `eslint-plugin-security` - Security rules
- `eslint-plugin-sonarjs` - Code quality analysis
- `eslint-plugin-unicorn` - Advanced JavaScript rules
- `eslint-plugin-vue` - Vue.js rules
- `eslint-plugin-perfectionist` - Code organization and sorting
- `typescript-eslint` - TypeScript support

## Configuration Structure

The configuration is organized into modular config files:

- `configs/jsConfig.ts` - JavaScript base configuration
- `configs/tsConfig.ts` - TypeScript strict and stylistic rules
- `configs/vue.ts` - Vue.js specific rules
- `configs/react.ts` - React specific rules
- `configs/importConfig.ts` - Import/export rules
- `configs/prettier.ts` - Prettier integration
- `configs/security.ts` - Security rules
- `configs/sonarjs.ts` - Code quality rules
- `configs/unicorn.ts` - Advanced JavaScript rules
- `configs/regexp.ts` - Regular expression validation
- `configs/perfectionist.ts` - Code organization
- `configs/noSecrets.ts` - Secrets detection
- `configs/nounsanitized.ts` - Unsanitized content detection
- `configs/jsonc.ts` - JSON file linting
- `configs/jsxA11y.ts` - JSX accessibility
- `configs/promiseConfig.ts` - Promise best practices

## Default Ignored Files

The configuration automatically ignores:
- `node_modules/**/*`
- `dist/**/*`
- `.nuxt/**/*`
- `.yarn`
- `static/sw.js`
- `src/types/backend/backendApi.ts`

## Development

### Build

```bash
npm run build
```

### Linting

```bash
npm run lint
npm run lint:fix
```

## Publishing

To publish this package to npm:

1. Update the package name in `package.json` if needed
2. Build the package: `npm run build`
3. Login to npm: `npm login`
4. Publish: `npm publish --access public`

## License

MIT
