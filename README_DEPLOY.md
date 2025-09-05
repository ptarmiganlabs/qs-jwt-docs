# Deployment Guide

This guide explains how to deploy the QS-JWT documentation site to GitHub Pages.

## Prerequisites

- Node.js and npm installed
- Repository cloned locally
- Push access to the GitHub repository

## Automatic Deployment (Recommended)

The repository includes GitHub Actions workflow for automatic deployment on push to main branch.

### Setting up GitHub Actions

1. **Enable GitHub Pages**:

   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **The workflow will automatically**:
   - Build the VitePress site
   - Deploy to GitHub Pages
   - Site will be available at your custom domain if configured (for example, `https://qs-jwt.ptarmiganlabs.com/`). If no custom domain is set, it will be published under the repository Pages URL.

### Manual Trigger

You can manually trigger deployment through GitHub Actions:

1. Go to Actions tab in GitHub repository
2. Select "Deploy VitePress site to Pages" workflow
3. Click "Run workflow"

## Manual Deployment

If you prefer to deploy manually from your local machine:

### One-time Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Configure git for gh-pages** (if not already done):

   ```bash
   git config user.name "Your Name"
   git config user.email "your.email@example.com"
   ```

### Deploy Steps

1. **Build and deploy**:

   ```bash
   npm run deploy
   ```

This command will:

- Build the documentation (`npm run docs:build`)
- Push the built files to the `gh-pages` branch
- GitHub Pages will automatically serve the site

### Alternative: Build only

If you want to build without deploying:

```bash
npm run docs:build
```

Built files will be in `docs/.vitepress/dist/`

## Development

For local development and testing:

1. **Start development server**:

   ```bash
   npm run docs:dev
   ```

2. **Preview production build**:

   ```bash
   npm run docs:preview
   ```

## Troubleshooting

### Common Issues

1. **Build fails**: Check that all image references are correct and images exist in `docs/public/img/`

2. **Deployment fails**: Ensure you have push permissions to the repository

3. **Site not updating**:
   - Check GitHub Actions logs
   - Verify GitHub Pages is enabled and set to GitHub Actions
   - Clear browser cache

### Checking Deployment Status

1. **GitHub Actions**: Check the Actions tab for build status
2. **GitHub Pages**: Go to Settings → Pages to see deployment status
3. **Live site**: Visit `https://ptarmiganlabs.github.io/qs-jwt-docs/`

## Configuration

### Base URL

The site is configured to be served at the domain root. In `docs/.vitepress/config.mjs`:

```javascript
export default defineConfig({
  base: "/",
  // ...
});
```

### Search

Local search is enabled by default. No additional configuration needed.

### GitHub Integration

- Edit links point to this repository
- Social links point to the main qs-jwt repository
- Issues and discussions link to main project

## Manual Steps Required

When setting up for the first time:

1. **Enable GitHub Pages** in repository settings
2. **Set Pages source** to "GitHub Actions"
3. **Verify repository settings** for proper permissions

No additional manual steps are required for subsequent deployments - they happen automatically on push to main.

## Custom Domain (GitHub Pages)

Serve the docs on your own domain (for example, `docs.example.com`). This works with the existing GitHub Actions workflow.

### 1) DNS setup

- Subdomain (recommended): Create a CNAME DNS record for your chosen subdomain pointing to your GitHub Pages host, for example:
  - `docs.example.com CNAME ptarmiganlabs.github.io`
- Apex/root domain: Use your DNS provider's ALIAS/ANAME (preferred) or A/AAAA records per the official GitHub Pages documentation.

Tip: DNS changes can take time to propagate (often up to 24 hours, usually faster).

### 2) GitHub Pages settings

1. In your repository, go to Settings → Pages
2. Under "Custom domain", enter your domain (for example, `docs.example.com`) and Save
3. Enable "Enforce HTTPS" once the certificate is issued (may take a few minutes)

### 3) Add a CNAME file to the site

VitePress will publish any static files under `docs/public/`. Add a `CNAME` file there with your domain so it is included in each deployment artifact.

Create the file `docs/public/CNAME` with exactly this content (no trailing spaces):

```text
docs.example.com
```

Commit and push. The next deployment will include the CNAME file automatically.

### 4) Adjust VitePress base (if moving to the domain root)

If your site will be served at the domain root (for example, `https://docs.example.com/`), set `base` to `/` in `docs/.vitepress/config.mjs`:

```js
export default defineConfig({
  // ...
  base: "/",
});
```

If you instead host under a path (for example, `https://ptarmiganlabs.github.io/qs-jwt-docs/`), set `base` to `/qs-jwt-docs/`.

### Troubleshooting custom domains

- Certificate pending: Wait a few minutes, then refresh the Pages settings page and re-check "Enforce HTTPS".
- Domain not resolving: Verify DNS records, allow time for propagation, and confirm the `CNAME` file was deployed (check the built artifact or the published site path `https://docs.example.com/CNAME`).
- Mixed content or broken links: Ensure `base` matches where the site is actually served.
