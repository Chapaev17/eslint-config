# @your-username/eslint-config

Comprehensive ESLint 9 configuration for JavaScript, TypeScript, Vue.js, React and more. This configuration provides a complete setup for modern web development with security, best practices, and code quality rules.

## Features

- **ESLint 9** (flat config) support
- **TypeScript** with strict rules
- **Vue.js** support with essential rules
- **React** support with accessibility
- **JSON** files linting
- **Security** rules for common vulnerabilities
- **Prettier** integration
- **Promise** best practices
- **Unicorn** plugin for advanced rules
- **Import/export** ordering
- **Code quality** with SonarJS

## Installation

### Option 1: Install from npm (recommended)

```bash
npm install --save-dev @your-username/eslint-config
```

### Option 2: Install from GitHub

```bash
npm install --save-dev github:your-username/eslint-config
```

### Option 3: Use locally (for development)

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
import config from '@your-username/eslint-config'

export default config
```

### Custom Configuration

You can extend the configuration with your own rules:

```javascript
import config from '@your-username/eslint-config'

export default [
  ...config,
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

- `eslint-plugin-import` - Import/export rules
- `eslint-plugin-jsx-a11y` - Accessibility for JSX
- `eslint-plugin-jsonc` - JSON files linting
- `eslint-plugin-no-secrets` - Security for secrets
- `eslint-plugin-no-unsanitized` - Security for unsanitized content
- `eslint-plugin-prettier` - Prettier integration
- `eslint-plugin-promise` - Promise best practices
- `eslint-plugin-react` - React rules
- `eslint-plugin-regexp` - Regular expression rules
- `eslint-plugin-security` - Security rules
- `eslint-plugin-sonarjs` - Code quality
- `eslint-plugin-unicorn` - Advanced JavaScript rules
- `eslint-plugin-vue` - Vue.js rules

### Plugins Not Yet Migrated

The following plugins from the original ESLint 8 configuration have not been migrated to ESLint 9:

- **eslint-plugin-lodash** - Plugin for Lodash usage optimization
- **eslint-plugin-xss** - Security plugin for XSS prevention (not compatible with ESLint 9)
- **eslint-config-airbnb-base** - Not compatible with ESLint 9
- **eslint-config-google** - Not compatible with ESLint 9
- **eslint-plugin-optimize-regex** - Not compatible with ESLint 9
- **eslint-plugin-eslint-comments** - Not compatible with ESLint 9

## Publishing

To publish this package to npm:

1. Update the package name in `package.json`
2. Build the package: `npm run build`
3. Login to npm: `npm login`
4. Publish: `npm publish --access public`

## Development

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

## License

MIT
