# qs-jwt Docs

Documentation site for [qs-jwt](https://github.com/ptarmiganlabs/qs-jwt) – a cross-platform CLI for creating JWTs (JSON Web Tokens) used to authenticate with Qlik Sense (Cloud & QSEoW).

Primary site: <https://qs-jwt.ptarmiganlabs.com> (served via GitHub Pages).

## 📖 View Documentation

Documentation for QS JWT can be found at [https://qs-jwt.ptarmiganlabs.com](https://qs-jwt.ptarmiganlabs.com), which redirects to [https://ptarmiganlabs.github.io/qs-jwt-docs/](https://ptarmiganlabs.github.io/qs-jwt-docs/).

## ⚡ Quick Start

### Prerequisites

- Node.js LTS
- npm (bundled with Node.js)

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

The version fetch script populates `docs/.vitepress/version.js` with the latest qs-jwt release tag. Provide `GITHUB_TOKEN` locally to avoid GitHub API rate limits.

---

## 📁 Project Structure

| File/Path                         | Purpose                                                 |
| --------------------------------- | ------------------------------------------------------- |
| `package.json`                    | Scripts and dependencies for building the docs site     |
| `scripts/fetch-qsjwt-version.mjs` | Fetch latest release → `version.js` for UI display      |
| `README_DEPLOY.md`                | Deployment + operational details (GitHub Pages)         |
| `.github/workflows/deploy.yml`    | CI build + Pages deployment workflow                    |
| `docs/.vitepress/config.js`       | VitePress site config (nav, sidebar, theme)             |
| `docs/.vitepress/version.js`      | Auto‑generated during build (git-ignored if applicable) |
| `docs/index.md`                   | Landing page content                                    |
| `docs/guide`                      | Guide section content                                   |
| `docs/public/`                    | Static assets (favicon, images, CNAME, etc.)            |

---

## 🛠️ Development

### Local Development

The development server provides hot-reload and real-time preview:

```bash
npm run docs:dev
```

Access the site at `http://localhost:5173`

### Building

Build the static site for production:

```bash
npm run docs:build
```

Output is generated in `docs/.vitepress/dist/`

### Content Guidelines

- Use clear, concise language
- Concise, task-oriented instructions
- Show practical, complete, copyable command examples
- Use code blocks for commands, always both PowerShell (left) and Bash (right) examples
- Cross-reference related sections
- Prefer relative links within the site
- Keep code examples up-to-date
- Keep screenshots current with latest CLI output
- Use consistent formatting and style

## 📚 Content Organization

### Guide Section (`/guide/`)

Core usage, installation, examples (Cloud & QSEoW), API usage, security, logging.  
Focus areas include: certificate creation/management, platform differences, security rules, and calling Qlik APIs with generated JWTs.

---

## 🎨 Customization (Summary)

Site theming, navigation, and analytics are defined in `docs/.vitepress/config.js`. Add custom CSS/components via standard VitePress extension points if/when needed.

## 🚀 Deployment (GitHub Pages)

Deployed via GitHub Pages using the workflow in `.github/workflows/deploy.yml` + standard `gh-pages` branch publishing.

| Script                 | Purpose                                                 |
| ---------------------- | ------------------------------------------------------- |
| `npm run docs:dev`     | Start local dev server (runs version fetch first)       |
| `npm run docs:build`   | Build static site (generates version file)              |
| `npm run docs:preview` | Preview built site locally                              |
| `npm run deploy`       | Build then publish `docs/.vitepress/dist` to `gh-pages` |
| `npm run deploy:ci`    | Build only (used by Pages workflow)                     |

The build step runs `scripts/fetch-qsjwt-version.mjs` which writes `docs/.vitepress/version.js` with the latest QS JWT release tag (fallback `v0.0.0` if API unavailable). Provide `GITHUB_TOKEN` locally to avoid GitHub API rate limiting.

Full operational details (custom domain, env vars, troubleshooting) are in [README_DEPLOY.md](./README_DEPLOY.md). This repository intentionally only supports GitHub Pages for hosting.

## 🤝 Contributing (Docs)

1. Branch from `main`.
2. Edit or add markdown in `docs/`.
3. Run `npm run docs:dev` and verify navigation + sidebar.
4. Ensure external links work; keep screenshots lightweight.
5. Run `npm run docs:build` before opening PR.
6. Open a PR with a concise summary (link related issues if any).

---

## 🔗 Links

| Purpose                           | URL                                                                                |
| --------------------------------- | ---------------------------------------------------------------------------------- |
| Main project                      | [https://github.com/ptarmiganlabs/qs-jwt](https://github.com/ptarmiganlabs/qs-jwt) |
| Docs site                         | [https://qs-jwt.ptarmiganlabs.com](https://qs-jwt.ptarmiganlabs.com)               |
| Deployment details                | [README_DEPLOY.md](./README_DEPLOY.md)                                             |
| Issues (docs)                     | Use this repo's Issues tab                                                         |
| Main project issues / discussions | Use main project repository                                                        |
| Ptarmigan Labs                    | [https://ptarmiganlabs.com](https://ptarmiganlabs.com)                             |

---

## 🧭 Related Projects (Butler Ecosystem)

| Project            | Description                                                                             |
| ------------------ | --------------------------------------------------------------------------------------- |
| qs-jwt             | CLI for generating JWTs for Qlik Sense authentication                                   |
| Butler Sheet Icons | Auto-generates Qlik Sense sheet thumbnails                                              |
| (Others)           | See [https://github.com/ptarmiganlabs](https://github.com/ptarmiganlabs) for more tools |

---

## 📄 License

MIT License. See [LICENSE](./LICENSE).

---

For qs-jwt usage questions, use the [main repository](https://github.com/ptarmiganlabs/qs-jwt). For documentation site issues, open an issue here.
