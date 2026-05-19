# Portfolio

A custom [Jekyll](https://jekyllrb.com/) portfolio site with a modern build pipeline. The site automatically builds and deploys to GitHub Pages on every push via GitHub Actions.

**Key features:**
- Automated deployment via GitHub Actions (no manual deploy step needed)
- Fast, lightweight build using esbuild + SASS
- Zero npm vulnerabilities
- Live browser reload during development

## Contents

- [Quick start](#quick-start)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Build pipeline](#build-pipeline)
- [Credits](#credits)

## Quick start

```bash
git clone https://github.com/alex-linde/portfolio.git
cd portfolio
npm install
npm run build
```

## Setup

### Prerequisites

- **Node.js** 22+ ([download](https://nodejs.org/))
- **Ruby** 3.3+ ([install via Homebrew](https://brew.sh/): `brew install ruby`)
- **Git** ([download](https://git-scm.com/))

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. For local development, install Jekyll: `gem install jekyll`

**That's it!** The site is ready to build and deploy.

## Development

| Command | Description |
|---|---|
| `npm run dev` | Build once, then watch files with live browser reload |
| `npm start` | Watch mode only (run `npm run build` first) |
| `npm run build` | One-off full build (clean → compile CSS/JS/images → Jekyll) |
| `npm stop` | Stop the dev server |

### Development workflow

```bash
npm run dev
```

This will:
1. Clean previous build artifacts
2. Compile SASS, minify JS, copy images in parallel
3. Build Jekyll site
4. Start `jekyll serve` with live reload on port 4000
5. Auto-recompile and reload browser on file changes

Open http://localhost:4000 in your browser.

## Deployment

**Automatic:** Push to `master` branch and GitHub Actions automatically builds and deploys to GitHub Pages.

**Manual rebuild:** Run `npm run build` to test the full build locally.

## Build pipeline

The build process uses:
- **SASS** — compiles `_assets/styles/main.sass` to CSS
- **PostCSS** — adds vendor prefixes via autoprefixer
- **esbuild** — bundles and minifies `_assets/js/main.js`
- **Jekyll** — generates the static site from source files

Source files in `_assets/` are compiled to `assets/` during build, then Jekyll copies them to the final `_site/` directory.

## Credits

Theme and design inspiration:
- [Poole Hyde](https://github.com/poole/hyde) by [Mark Otto](https://github.com/mdo) — MIT license
- [Forty Jekyll theme](https://github.com/andrewbanchich/forty-jekyll-theme) by [Andrew Banchich](https://github.com/andrewbanchich) — Creative Commons Attribution 3.0
- CSS transitions inspired by [Riley Carroll](http://rileycarroll.co/)

## Recent changes

- **2026-05-19:** Replaced Gulp build pipeline with modern npm scripts (esbuild, SASS, PostCSS)
  - Eliminated 35+ npm vulnerabilities
  - Simplified setup (no global Gulp installation needed)
  - Faster builds with parallel compilation
  - Removed image optimization and critical CSS (no longer needed for small CSS)
  - GitHub Actions automatically deploys on push to master
