# VitePress Configuration Improvements

Source: butler-sos-docs repo (applied July 2026)
Target: qs-jwt-docs repo

---

## 1. Enable lastUpdated at Top Level

**Problem:** `lastUpdated` format is configured in themeConfig (lines 140-146), but the top-level `lastUpdated: true` flag is missing. Without it, lastmod dates won't appear in the sitemap.

**Solution:** Add `lastUpdated: true` to the top-level config.

**File:** `docs/.vitepress/config.mjs`

**Change:**
```javascript
// Add after line 13 (cleanUrls: true):
lastUpdated: true,
```

**Verification:**
1. Run `npm run docs:build`
2. Open `docs/.vitepress/dist/sitemap.xml`
3. Verify URLs have `<lastmod>` tags: `grep '<lastmod>' docs/.vitepress/dist/sitemap.xml | head -3`

---

## 2. Dynamic Copyright Year

**Problem:** Copyright year is hardcoded: `"Copyright © 2026 Ptarmigan Labs"` (line 133) — will go stale.

**Solution:** Use `new Date().getFullYear()` for dynamic year.

**File:** `docs/.vitepress/config.mjs`

**Change:**
```javascript
// FROM (line 133):
copyright: "Copyright © 2026 Ptarmigan Labs",

// TO:
copyright: `Copyright © 2026–${new Date().getFullYear()} Ptarmigan Labs`,
```

**Verification:**
1. Run `npm run docs:build`
2. Open any HTML page in `docs/.vitepress/dist/`
3. Search for "Copyright" in the footer
4. Verify year shows "2026–2026" (or current year)

---

## 3. Cleaner Date Format

**Problem:** Last updated date format is verbose: "Sunday, July 5, 2026 at 3:45:32 PM"

**Solution:** Use shorter format: "July 5, 2026 at 3:45 PM"

**File:** `docs/.vitepress/config.mjs`

**Change:**
```javascript
// FROM (lines 142-144):
lastUpdated: {
  text: "Updated at",
  formatOptions: {
    dateStyle: "full",
    timeStyle: "medium",
  },
},

// TO:
lastUpdated: {
  text: "Updated at",
  formatOptions: {
    dateStyle: "long",
    timeStyle: "short",
  },
},
```

**Verification:**
1. Run `npm run docs:build`
2. Open any page in dev mode: `npm run docs:dev`
3. Look for "Updated at" text on a page
4. Verify format is "July 5, 2026 at 3:45 PM" (not "Sunday, July 5, 2026 at 3:45:32 PM")

---

## Summary Checklist

- [ ] 1. `lastUpdated: true` added at top level
- [ ] 2. Copyright year made dynamic
- [ ] 3. Date format shortened

**Final verification:** Run `npm run docs:build` and confirm no errors.
