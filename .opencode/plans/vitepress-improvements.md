# VitePress Improvements Plan

## Overview
Apply 3 configuration improvements from `todo/vitepress-improvements.md` to bring qs-jwt docs in line with Butler SOS docs.

**Target file:** `docs/.vitepress/config.mjs`

---

## Change 1: Enable top-level `lastUpdated`

**Location:** After line 13 (`cleanUrls: true`)

**Add:**
```javascript
lastUpdated: true,
```

**Result:** Sitemap will include `<lastmod>` tags for each page.

---

## Change 2: Dynamic copyright year

**Location:** Line 133

**From:**
```javascript
copyright: "Copyright © 2026 Ptarmigan Labs",
```

**To:**
```javascript
copyright: `Copyright © 2026–${new Date().getFullYear()} Ptarmigan Labs`,
```

**Result:** Copyright year auto-updates each year.

---

## Change 3: Shorter date format

**Location:** Lines 142-144

**From:**
```javascript
formatOptions: {
  dateStyle: "full",
  timeStyle: "medium",
},
```

**To:**
```javascript
formatOptions: {
  dateStyle: "long",
  timeStyle: "short",
},
```

**Result:** "Updated at July 5, 2026 at 3:45 PM" instead of "Sunday, July 5, 2026 at 3:45:32 PM"

---

## Verification

After applying all changes:

```bash
npm run docs:build
```

Check sitemap for lastmod tags:
```bash
grep '<lastmod>' docs/.vitepress/dist/sitemap.xml | head -3
```

Check copyright in built HTML:
```bash
grep -r "Copyright" docs/.vitepress/dist/ | head -1
```

---

## Status

- [ ] Change 1: `lastUpdated: true` added
- [ ] Change 2: Dynamic copyright year
- [ ] Change 3: Shorter date format
- [ ] Build verification passed
