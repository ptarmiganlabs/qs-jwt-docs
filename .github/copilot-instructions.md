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
  Starts development server at http://localhost:5173/qs-jwt-docs/
  Server starts immediately (1-2 seconds). Set timeout to 30+ seconds.

- **Preview production build**:
  ```bash
  npm run docs:preview
  ```
  Serves production build at http://localhost:4173/qs-jwt-docs/
  Must run `npm run docs:build` first. Set timeout to 30+ seconds.

- **Deploy (CI environment)**:
  ```bash
  npm run deploy:ci
  ```
  Only builds the site. Used in GitHub Actions workflow.

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
   - Visit http://localhost:5173/qs-jwt-docs/
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

### Key Directories and Files
```
/
├── .github/
│   └── workflows/deploy.yml     # GitHub Actions deployment
├── docs/                        # VitePress source
│   ├── .vitepress/
│   │   └── config.mjs          # VitePress configuration
│   ├── guide/                  # Documentation pages
│   ├── public/                 # Static assets  
│   └── index.md               # Homepage
├── package.json               # Dependencies and scripts
├── README.md                  # Main repository README
└── README_DEPLOY.md          # Deployment instructions
```

### Frequently Modified Files
- `docs/.vitepress/config.mjs` - Site configuration, navigation, sidebar
- `docs/index.md` - Homepage content and hero section
- `docs/guide/*.md` - Documentation pages
- `package.json` - Dependencies and build scripts

## Common Tasks

### Adding New Documentation Pages
1. Create new `.md` file in `docs/guide/`
2. Update sidebar configuration in `docs/.vitepress/config.mjs`
3. Test navigation in development server
4. Build and preview to verify

### Modifying Site Configuration
- **Navigation**: Edit `themeConfig.nav` in `docs/.vitepress/config.mjs`
- **Sidebar**: Edit `themeConfig.sidebar` in `docs/.vitepress/config.mjs`
- **Site metadata**: Edit root properties in `docs/.vitepress/config.mjs`

### Working with Assets
- Place images in `docs/public/img/`
- Reference as `/qs-jwt-docs/img/filename.ext` in Markdown
- Test image loading in both development and production builds

## Deployment

### Automatic Deployment
- Automatically deploys to GitHub Pages on push to `main` branch
- Uses GitHub Actions workflow in `.github/workflows/deploy.yml`
- Site available at: https://ptarmiganlabs.github.io/qs-jwt-docs/

### Manual Deployment (if needed)
```bash
npm run deploy
```
This builds the site and pushes to `gh-pages` branch.

## Expected Command Outputs

### Repository Root
```
$ ls -la
total 123
drwxr-xr-x  6 user user  4096 date .
drwxr-xr-x  3 user user  4096 date ..
drwxr-xr-x  8 user user  4096 date .git
drwxr-xr-x  3 user user  4096 date .github
-rw-r--r--  1 user user  2839 date .gitignore
-rw-r--r--  1 user user  1069 date LICENSE
-rw-r--r--  1 user user  1587 date README.md
-rw-r--r--  1 user user  3565 date README_DEPLOY.md
drwxr-xr-x  5 user user  4096 date docs
drwxr-xr-x  175 user user  4096 date node_modules
-rw-r--r--  1 user user 76543 date package-lock.json
-rw-r--r--  1 user user   878 date package.json
```

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
  deploy
    npm run docs:build && gh-pages -d docs/.vitepress/dist
  deploy:ci
    npm run docs:build
```

### Build Output Structure
```
$ ls -la docs/.vitepress/dist/
total 48
drwxr-xr-x 5 user user  4096 date .
drwxr-xr-x 4 user user  4096 date ..
-rw-r--r-- 1 user user  3541 date 404.html
drwxr-xr-x 3 user user  4096 date assets
drwxr-xr-x 2 user user  4096 date guide
-rw-r--r-- 1 user user   465 date hashmap.json
drwxr-xr-x 2 user user  4096 date img
-rw-r--r-- 1 user user 14611 date index.html
-rw-r--r-- 1 user user   900 date vp-icons.css
```

## Important Notes

- **No complex build system**: This is a simple VitePress site with minimal configuration
- **Fast builds**: All commands complete in under 10 seconds typically
- **Base URL**: Site is configured with base URL `/qs-jwt-docs/` for GitHub Pages
- **No database or backend**: Static site generation only
- **Node.js version**: Uses Node.js 20 in GitHub Actions
- **VitePress version**: Currently using VitePress 1.6.4

## Troubleshooting

### Common Issues
1. **Port already in use**: Kill existing development servers before starting new ones
2. **Build artifacts missing**: Run `npm run docs:build` before `npm run docs:preview`
3. **Navigation not working**: Check `docs/.vitepress/config.mjs` sidebar configuration
4. **Images not loading**: Verify images are in `docs/public/` and paths include base URL

### Development Server Issues
- Development server must be stopped before starting preview server (different ports)
- Allow 1-2 seconds for server startup before testing navigation
- Browser may cache old content - hard refresh if changes don't appear

Always build and test your changes before committing to ensure the documentation site works correctly for users.