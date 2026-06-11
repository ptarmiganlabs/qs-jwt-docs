# QS-JWT Documentation Site

QS-JWT Documentation is a VitePress-based documentation site for the [qs-jwt](https://github.com/ptarmiganlabs/qs-jwt) command line tool. The site provides comprehensive documentation, examples, and guides for creating JWTs (JSON Web Tokens) for authentication with Qlik Sense.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Build Commands
Run these commands in order to set up and build the repository:

1. **Install dependencies**:
   ```bash
   npm install
   ```
   Takes approximately 18 seconds. Set timeout to 60+ seconds.

2. **Build the documentation**:
   ```bash
   npm run docs:build
   ```
   Takes approximately 5 seconds. Set timeout to 30+ seconds.

### Development Commands

- **Start development server**:
  ```bash
  npm run docs:dev
  ```
  Starts development server at http://localhost:5173/
  Server starts immediately (1-2 seconds). Set timeout to 30+ seconds.

- **Preview production build**:
  ```bash
  npm run docs:preview
  ```
  Serves production build at http://localhost:4173/
  Must run `npm run docs:build` first. Set timeout to 30+ seconds.

### No Linting or Testing
- **No linting tools**: This project does not have ESLint, Prettier, or similar tools configured.
- **No test suite**: The `npm test` command returns an error and exits. Do not attempt to run tests.
- **No code formatting**: No automatic code formatting is available.

## Validation

### Manual Testing Requirements
ALWAYS test documentation changes by:

1. **Start development server and navigate**:
   ```bash
   npm run docs:dev
   ```
   
2. **Test navigation scenarios**:
    - Visit http://localhost:5173/
    - Navigate through main sections: Guide, Commands, Examples
   - Test sidebar navigation and page links
   - Verify search functionality works (Ctrl+K)
   - Test both light and dark themes

3. **Test production build**:
   ```bash
   npm run docs:build && npm run docs:preview
   ```
   - Verify build completes without errors
   - Test that preview server serves all pages correctly
   - Check that assets load properly

### Build Validation
- **Build output location**: `docs/.vitepress/dist/`
- **Expected files**: `index.html`, `assets/`, `guide/`, `img/`
- **Build must complete without warnings or errors**

## Repository Structure

### Frequently Modified Files
- `docs/.vitepress/config.mjs` - Site configuration, navigation, sidebar
- `docs/index.md` - Homepage content and hero section
- `docs/guide/*.md` - Documentation pages
- `package.json` - Dependencies and build scripts

## Common Tasks

## Deployment

### Automatic Deployment
- Automatically deploys to Cloudflare Pages on push to `main` branch
- Site available at: https://qs-jwt.ptarmiganlabs.com

## Expected Command Outputs

### Available npm Scripts
```
$ npm run
Lifecycle scripts included in qs-jwt-docs@1.0.0:
  test
    echo "Error: no test specified" && exit 1
available via `npm run-script`:
  docs:dev
    vitepress dev ./docs
  docs:build
    vitepress build ./docs
  docs:preview
    vitepress preview ./docs
```

## Important Notes

- **No complex build system**: This is a simple VitePress site with minimal configuration
- **Fast builds**: All commands complete in under 10 seconds typically
- **No database or backend**: Static site generation only
- **Node.js version**: Uses Node.js 22 in Cloudflare Pages
- **VitePress version**: Currently using VitePress 1.6.4

## Troubleshooting

### Common Issues
1. **Port already in use**: Kill existing development servers before starting new ones
2. **Build artifacts missing**: Run `npm run docs:build` before `npm run docs:preview`
3. **Navigation not working**: Check `docs/.vitepress/config.mjs` sidebar configuration
4. **Images not loading**: Verify images are in `docs/public/` and paths are correct

### Development Server Issues
- Development server must be stopped before starting preview server (different ports)
- Allow 1-2 seconds for server startup before testing navigation
- Browser may cache old content - hard refresh if changes don't appear

Always build and test your changes before committing to ensure the documentation site works correctly for users.