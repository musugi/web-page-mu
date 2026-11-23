# Chibi + motion — v3 (original front page restored)

Copy everything in this zip into the root of the `web-page-mu` repo. It merges with what's there and
**replaces** the files listed under "Changed content". The site was test-built with Hugo 0.170 and the
current Blowfish theme.

## 1. Config (three small edits)

See `config_snippets/`:

- `params.toml` → `[homepage] layout = "profile"` and light mode by default.
- `languages.en.toml` / `languages.ja.toml` → author image + headline (now "Data Scientist at VETA", typed out on the homepage).

## 2. What's new in v2

- **Front page**: the original Blowfish profile layout (round chibi avatar, name, typed headline, bio) on a
  plain white background — the v2 editorial homepage and dot-grid background were removed.
- **Inner pages**: serif page titles, numbered `##` headings (01, 02, …) with a hairline, quiet outlined
  buttons. Say the word if you'd rather have these back to plain Blowfish too.
- **CV**: Rust is added, and programming languages show as icon chips via the new `{{< skills >}}`
  shortcode. "Analytical Engineer" is now "Data Scientist", and VETA and WINPEC are linked.
- **Links added elsewhere**: MACRM and HCDE programmes, Prof. Fouirnaies, Sourojit Ghosh,
  co-authors Yamamoto, Hino and Fahey, and Bansak et al. 2023 (DOI).
- **Favicon**: the chibi avatar, as `favicon.ico`, 16/32 px, Apple touch icon, Android 192/512 px, and
  `site.webmanifest`, all in `static/`.

## Files

```
config_snippets/                         # paste into your config (not copied by Hugo)
content/_index.md, _index.ja.md          # CHANGED: links, Data Scientist
content/cv.md, cv.ja.md                  # CHANGED: Data Scientist, links, Rust, skill icons
content/research.md, research.ja.md      # CHANGED: co-author + citation links
content/contact*, presentations*         # unchanged copies
assets/css/custom.css                    # chibi motion + editorial theme
assets/js/chibi-motion.js                # motion + floating chibi
assets/icons/lang-*.svg                  # language icons (Simple Icons, CC0 — see LICENSES/)
assets/img/author.png                    # chibi avatar
static/img/chibi/*.png                   # transparent chibi + head crop
static/favicon*, apple-touch-icon.png, android-chrome-*.png, site.webmanifest
layouts/partials/extend-head.html        # fonts (cached by Blowfish)
layouts/partials/extend-head-uncached.html  # per-page chibi config (page kind + language)
layouts/partials/extend-footer.html      # loads the script
layouts/shortcodes/skills.html           # {{< skills "python|Python" "rust|Rust" >}}
layouts/404.html                         # chibi 404 (EN/JA)
```

## Notes

- Blowfish caches `extend-footer.html`. The v1 buddy markup lived there, so every page would have
  shown the same language. v2 moves page and language data to `extend-head-uncached.html`, and the
  script builds the buddy itself.
- If your `languages.ja.toml` has no `params.author.headline`, the JA homepage shows the English one.
- Visitors with "reduce motion" turned on see a still version.

## Check locally

```bash
hugo server --disableFastRender
# http://localhost:1313/web-page-mu/  ·  /web-page-mu/cv/  ·  /web-page-mu/ja/  ·  /web-page-mu/404.html
```
