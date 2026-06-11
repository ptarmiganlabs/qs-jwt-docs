# AGENTS.md

## Build & Dev

```bash
npm install              # Install dependencies
npm run docs:dev         # Dev server at http://localhost:5173
npm run docs:build       # Production build → docs/.vitepress/dist/
npm run docs:preview     # Preview production build (requires docs:build first)
```

**No lint, test, or format tools configured.** `npm test` fails by design.

## Version Fetch

Build scripts run `scripts/fetch-qsjwt-version.mjs` which fetches the latest qs-jwt release tag from GitHub API and writes `docs/.vitepress/version.js`. Provide `GITHUB_TOKEN` env var locally to avoid rate limits (falls back to `v0.0.0` if unavailable).

## Adding Documentation Pages

1. Create `.md` file in `docs/guide/`
2. **Manually update sidebar** in `docs/.vitepress/config.mjs` under `themeConfig.sidebar`
3. Test with `npm run docs:dev`
4. Verify build with `npm run docs:build`

## Content Style

- Concise, task-oriented instructions
- Show both PowerShell and Bash examples for commands
- Cross-reference related sections with relative links
- Use VitePress callouts: `::: tip`, `::: danger`, `::: warning`
- Keep code examples complete and copyable

## Deployment

Auto-deploys via Cloudflare Pages on push to `main`. Site: https://qs-jwt.ptarmiganlabs.com
