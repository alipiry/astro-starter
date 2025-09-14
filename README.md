# 🚀 Astro Starter

A modern, SEO-optimized Astro starter template with comprehensive meta tags, social media integration, and essential web development tools.

## ✨ Features

- **🎯 SEO Optimized**: Complete OpenGraph, Twitter Cards, and meta tag setup
- **🔍 Search Engine Friendly**: Automated sitemap and robots.txt generation
- **⚡ Modern Tooling**: ESLint, Prettier, and TypeScript configuration
- **🎨 Clean Architecture**: Organized component structure with layouts
- **🌐 Social Media Integration**: Twitter and OpenGraph meta tags configured

## 🏗️ Project Structure

```text
/
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
- **Package Manager**: Bun for fast installations

## 🚀 Quick Start

1. **Clone and install dependencies**

   ```bash
   bun install
   ```

2. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your site URL
   ```

3. **Start development server**

   ```bash
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📋 Available Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `bun install`          | Installs dependencies                            |
| `bun dev`              | Starts local dev server at `localhost:4321`      |
| `bun build`            | Build your production site to `./dist/`          |
| `bun preview`          | Preview your build locally, before deploying     |
| `bun run lint`         | Run ESLint to check code quality                 |
| `bun run lint:fix`     | Fix ESLint issues automatically                  |
| `bun run format`       | Format code with Prettier                        |
| `bun run format:check` | Check if code is properly formatted              |
| `bun run type-check`   | Run Astro's TypeScript checker                   |
| `bun astro ...`        | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help`  | Get help using the Astro CLI                     |

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```bash
PUBLIC_SITE_URL=https://your-domain.com
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
- Various configuration plugins

## 🌐 Deployment

This starter includes automated GitHub Actions workflows for:

### **Continuous Integration**

- **Code Quality** (`quality.yml`): Runs first on push/PR to main/develop
  - TypeScript checking with `astro check`
  - ESLint code linting
  - Prettier formatting validation
  - Security audit with `bun audit`

- **Build** (`build.yml`): Runs after Code Quality passes
  - Waits for Code Quality workflow to succeed
  - Builds the project with Bun to validate compilation

### **Ready for other platforms:**

- **Netlify**: Zero-config deployment
- **Vercel**: Automatic builds from Git
- **Any static hosting provider**

### **GitHub Actions Setup**

1. **Workflows run automatically** with quality gates:
   - Code Quality runs first on push/PR
   - Build & Test runs only after quality checks pass
   - Failed quality checks prevent unnecessary builds

2. **For Vercel deployment** (recommended):
   - Connect repository to Vercel
   - Set `PUBLIC_SITE_URL` environment variable in Vercel dashboard
   - Vercel will build directly from source

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord Community](https://astro.build/chat)
- [SEO Best Practices](https://docs.astro.build/en/guides/content/#seo)
