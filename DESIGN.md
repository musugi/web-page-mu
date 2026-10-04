# DESIGN.md

The design system for this site. It records the current design, which is the stock Blowfish v2
look (theme v2.105.0) with the settings below. Update this file **before** you change any styling.
Then implement only what is defined here.

## Principles

- Keep the look quiet and academic. The content (research and writing) should stand out, not the
  decoration.
- Use the theme's settings and color tokens. Do not hardcode hex/RGB values or pixel sizes in
  templates, content, or CSS.
- Light mode is the default. Dark mode follows the visitor's OS setting, and visitors can switch it
  in the footer.

## Theme settings (`config/_default/params.toml`)

| Setting                | Value     |
| ---------------------- | --------- |
| `colorScheme`          | `slate`   |
| `defaultAppearance`    | `light`   |
| `autoSwitchAppearance` | `true`    |
| `header.layout`        | `basic`   |
| `homepage.layout`      | `profile` (photo, name, headline, links, then the bio from `content/_index.md`) |
| `homepage.showRecent`  | `true`, 5 items |
| List pages             | card view, grouped by year, with summaries |
| Articles               | date, author, reading time, table of contents, taxonomies, heading anchors; no word count, comments, or breadcrumbs |
| Footer                 | copyright, theme attribution, appearance switcher, scroll-to-top |

## Color tokens (Blowfish `slate` scheme)

Colors are set as CSS variables (`--color-<group>-<step>`, RGB triplets) and used through
Tailwind classes such as `text-primary-600`. Refer to colors by token, never by raw value.

**Primary (Slate):** links, accents, quote borders

| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| `#f8fafc` | `#f1f5f9` | `#e2e8f0` | `#cbd5e1` | `#94a3b8` | `#64748b` | `#475569` | `#334155` | `#1e293b` | `#0f172a` |

**Neutral and secondary (Gray):** text, backgrounds, borders, inline code

| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| `#f9fafb` | `#f3f4f6` | `#e5e7eb` | `#d1d5db` | `#9ca3af` | `#6b7280` | `#4b5563` | `#374151` | `#1f2937` | `#111827` |

`neutral` (DEFAULT) = `#ffffff`.

### Roles

| Role            | Light          | Dark           |
| --------------- | -------------- | -------------- |
| Page background | `neutral` (white) | `neutral-800` |
| Body text       | `neutral-700`  | `neutral-300`  |
| Headings        | `neutral-800`  | `neutral-50`   |
| Links           | `primary-600`  | `primary-400`  |
| Quote border    | `primary-500`  | `primary-600`  |
| Inline code     | `secondary-700`| (theme default) |
| Code block bg   | `neutral-50`   | (theme default) |

## Typography

- The theme's default fonts are Tailwind's system stacks (`font-sans` for text, `font-mono` for
  code). No web fonts are loaded.
- Japanese text uses the OS's Japanese fallback font (Hiragino on macOS/iOS, Yu Gothic or Meiryo on
  Windows). Check Japanese pages separately: line breaks, letter spacing, and how headings with
  mixed Japanese and Latin text look.
- Math is written with passthrough delimiters (`\( \)`, `\[ \]`, `$$ $$`). See
  `config/_default/markup.toml`.

## Layout

- Breakpoints (from the theme): `sm` 640px, `md` 853px, `lg` 1024px, `xl` 1280px, `2xl` 1536px.
- The same menu order is used in both languages: About, Research, CV, Presentations, Post,
  Contact, Search.

## Images

- Put images in `assets/img/` and insert them with the `figure` shortcode, which needs `alt` text
  and a `caption`.
- Author photo: `assets/img/author.png`.

## Customizations

None yet. If you add any, record them here first. Typical cases are a custom scheme in
`assets/css/schemes/<name>.css` with `colorScheme` set to it, or `assets/css/custom.css`.
