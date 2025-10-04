# 🚀 Astro Starter

A modern, SEO-optimized Astro starter template with comprehensive meta tags, social media integration, and essential web development tools.

[![Netlify Status](https://api.netlify.com/api/v1/badges/7959683b-efbb-402e-8e87-dfb1910e041d/deploy-status)](https://app.netlify.com/projects/astro-starter-ap/deploys)

<div align="center">
  <h2>Made with ❤ by <a href="https://github.com/alipiry">Ali Piry</a></h2>
</div>

## ✨ Features

- **🎯 SEO Optimized**: Complete OpenGraph, Twitter Cards, and meta tag setup
- **🔍 Search Engine Friendly**: Automated sitemap and robots.txt generation
- **⚡ Modern Tooling**: ESLint, Prettier, and TypeScript configuration
- **🚀 CI/CD Ready**: GitHub Actions workflows for quality checks and builds
- **🎨 Clean Architecture**: Organized component structure with layouts
- **🌐 Social Media Integration**: Twitter and OpenGraph meta tags configured
- **🔧 Git Hooks**: Husky and lint-staged for automated pre-commit quality checks

## 🏗️ Project Structure

```text
/
├── .github/                   # GitHub workflows and templates
│   └── workflows/             # CI/CD automation
│       ├── quality.yml        # Code quality checks
│       ├── build.yml          # Build verification
├── public/                    # Static assets
│   ├── favicon.ico            # Traditional favicon
│   ├── favicon-16x16.png      # Browser favicon (16x16)
│   ├── favicon-32x32.png      # Browser favicon (32x32)
│   ├── apple-touch-icon.png   # iOS home screen icon
│   ├── android-chrome-*.png   # Android icons (192x192, 512x512)
│   ├── og.png                 # OpenGraph/Twitter image
│   └── favicon.svg            # SVG favicon
├── src/
│   ├── assets/                # Build-time assets
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/            # Reusable Astro components
│   │   └── Welcome.astro
│   ├── layouts/               # Page layouts
│   │   └── Layout.astro       # Main layout with SEO
│   └── pages/                 # File-based routing
│       └── index.astro
├── astro.config.mjs           # Astro configuration
├── eslint.config.mjs          # ESLint configuration
├── tsconfig.json              # TypeScript configuration
├── .prettierrc.mjs            # Prettier configuration
├── .prettierignore            # Prettier ignore patterns
├── lint-staged.config.js      # Lint-staged configuration
├── .env.example               # Environment variables template
└── package.json
```

## 🔧 Tech Stack

- **Framework**: [Astro](https://astro.build/) - Modern static site generator
- **SEO**: [astro-seo](https://github.com/jonasmerlin/astro-seo) - Comprehensive SEO component
- **Integrations**:
  - `@astrojs/sitemap` - Automatic sitemap generation
  - `astro-robots-txt` - Robots.txt generation
- **Development Tools**:
  - ESLint with Astro plugin
  - Prettier with Astro formatting
  - TypeScript support
  - Husky for Git hooks
  - lint-staged for pre-commit quality checks
- **Package Manager**: pnpm for fast installations

## 🚀 Quick Start

1. **Clone and install dependencies**

   ```bash
   pnpm install
   ```

2. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📋 Available Commands

| Command                 | Action                                           |
| :---------------------- | :----------------------------------------------- |
| `pnpm install`          | Installs dependencies                            |
| `pnpm dev`              | Starts local dev server at `localhost:4321`      |
| `pnpm build`            | Build your production site to `./dist/`          |
| `pnpm preview`          | Preview your build locally, before deploying     |
| `pnpm run lint`         | Run ESLint to check code quality                 |
| `pnpm run lint:fix`     | Fix ESLint issues automatically                  |
| `pnpm run format`       | Format code with Prettier                        |
| `pnpm run format:check` | Check if code is properly formatted              |
| `pnpm run type-check`   | Run Astro's TypeScript checker                   |
| `pnpm astro ...`        | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`  | Get help using the Astro CLI                     |

## 🪝 Git Hooks & Pre-commit Checks

This project uses **Husky** and **lint-staged** to ensure code quality before commits:

### Automated Quality Checks

When you commit changes, the following checks run automatically:

- **Type Checking**: Astro's TypeScript checker validates all `.ts`, `.tsx`, and `.astro` files
- **Linting**: ESLint fixes code style issues automatically
- **Formatting**: Prettier formats code according to project standards

### Configuration

The pre-commit hooks are configured in `lint-staged.config.js`:

```javascript
{
  "**/*.{ts,tsx,astro}": "pnpm run type-check",
  "**/*.astro": ["eslint --fix", "prettier --write"],
  "**/*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
  "**/*.{md,json,yaml,yml,css,scss,sass}": "prettier --write"
}
```

### Setup

Git hooks are automatically installed when you run `pnpm install` via the `prepare` script. If you need to reinstall them manually:

```bash
pnpm run prepare
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```bash
SITE_URL=https://your-domain.com
APP_ENV=production
```

### SEO Configuration

The `Layout.astro` includes comprehensive SEO setup:

- **Meta Tags**: Title, description, keywords, author
- **OpenGraph**: Complete social media preview setup
- **Twitter Cards**: Large image cards with metadata
- **Favicons**: Full cross-platform icon support
- **Structured Data**: Basic website structured data

### Customization

1. **Update site information** in `src/layouts/Layout.astro`
2. **Modify social media handles** in the Twitter configuration
3. **Replace favicon files** in the `public/` directory
4. **Update the OpenGraph image** (`public/og.png`)

## 📦 Dependencies

### Production

- `astro` - Core framework
- `astro-seo` - SEO component library
- `@astrojs/sitemap` - Sitemap generation
- `astro-robots-txt` - Robots.txt generation

### Development

- `eslint` + `eslint-plugin-astro` - Code linting
- `prettier` + `prettier-plugin-astro` - Code formatting
- `typescript-eslint` - TypeScript linting
- `husky` - Git hooks management
- `lint-staged` - Pre-commit quality checks
- Various configuration plugins

## 🌐 Deployment

This starter includes automated GitHub Actions workflows for continuous integration and deployment:

### **GitHub Workflows**

The `.github/workflows/` directory contains the following CI/CD pipelines:

- **Code Quality** (`quality.yml`): Automated code quality checks
  - Runs on push/PR to main/develop branches
  - TypeScript checking with `astro check`
  - ESLint code linting
  - Prettier formatting validation
  - Security audit with `pnpm audit`

- **Build** (`build.yml`): Build verification
  - Runs after Code Quality workflow completes successfully
  - Uses pnpm to install dependencies and build the project
  - Validates that the project compiles correctly

### **Deployment Options**

**Recommended platforms:**

- **Netlify**: Automatic builds from repository with Git integration
- **Cloudflare Workers**: Serverless deployment with global CDN
- **GitHub Pages**: Static site hosting
- **Any static hosting provider**

### **Setup Instructions**

1. **GitHub Actions** run automatically on push/PR:
   - Quality checks must pass before builds run
   - Failed quality checks prevent unnecessary builds

2. **For Netlify deployment**:
   - Connect repository to Netlify
   - Set `SITE_URL` and `APP_ENV` environment variable in Netlify dashboard
   - Netlify will build directly from source

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord Community](https://astro.build/chat)
- [SEO Best Practices](https://docs.astro.build/en/guides/content/#seo)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
