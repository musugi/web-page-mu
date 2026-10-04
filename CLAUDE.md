# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Purpose of the site

This is Hiromu Sugiyama's academic website. It has two jobs:

1. **Present my research.** Working papers, presentations, CV, and contact info for colleagues,
   collaborators, and hiring committees (Research, CV, Presentations, Contact pages).
2. **Introduce my field to anyone who is curious.** Political science, especially political
   methodology (conjoint experiments, bureaucratic accountability, voting systems), explained for
   people outside it. The main place for this is the blog (`content/posts/`), especially the
   Japanese series 「Lv.1 研究者の備忘録」 (`content/series/lv1-kenkyuusha-note/`), written from
   the view of someone who came into political science from computer science.

### Audiences

- **English-speaking political scientists.** Possible research collaborators. They read the
  English site: research, CV, presentations, contact. Write for peers: precise, professional, and
  not over-explained.
- **Japanese-speaking readers in general.** Possible corporate or research collaborators, inside
  or outside academia. They read the Japanese site and the blog. Write in a friendly, easy-to-follow
  way and do not assume they already know the field.

Both groups should be able to see quickly what I work on and how to contact me.

### Language policy

- Pages (About, Research, CV, Presentations, Contact) exist in both English (`*.md`) and Japanese
  (`*.ja.md`). Keep the two versions in sync.
- **Blog posts are Japanese-only** (`content/posts/*.ja.md`). Do not create English translations
  of posts. The English site should still show the posts, so English visitors can see they exist
  and open them.

## Stack

- Hugo (Extended, v0.163.3 in CI) with the Blowfish v2 theme, pulled in as a Hugo Module
  (`config/_default/module.toml`). There is no Node.js.
- Bilingual: English is the default (`*.md`) and Japanese is the translation (`*.ja.md`).
  Each language has its own `languages.<lang>.toml` and `menus.<lang>.toml`.
- Run locally with `hugo server --disableFastRender`. The site is served at
  `http://localhost:1313/web-page-mu/`.
- Pushing to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`.

## Working principles

These rules are adapted from the "Markdown as source of truth" approach in
https://qiita.com/Kawashima_RPA/items/e2c7da94bfa59bd3859e. In that approach, Markdown files hold
the content and design, and the HTML/CSS is derived from them.

### Content: the Markdown files are the source of truth

- All text lives in `content/**/*.md` and in the `config/_default/*.toml` files. Never hardcode
  copy in templates, partials, or shortcodes.
- **Do not invent content.** Never add or change research claims, paper abstracts, coauthors,
  affiliations, dates, venues, or CV entries unless I gave you the information. If something
  seems to be missing, ask me instead of filling it in.
- Do not rewrite the meaning of my prose without asking. Fixing typos and formatting is fine.
  Keep my voice, including the casual tone and pop-culture references in the Japanese posts.
- When you edit a page (not a post) in one language, also update the other language's version or
  tell me it needs updating. Do not machine-translate content without asking.

### Design: theme settings first, no ad-hoc styling

- Visual design is set by Blowfish parameters in `config/_default/params.toml` (color scheme,
  layouts, header and footer options). Change the design there first.
- Do not write arbitrary colors, sizes, or one-off CSS into templates or content. If the theme
  cannot do something and custom styling is needed, record the decision in `DESIGN.md` first.
  That file is the design source of truth: color tokens, fonts, layout. Then implement only what
  it defines, for example in `assets/css/custom.css` or a custom scheme in `assets/css/schemes/`.
- Override theme layouts in `layouts/` only when there is no other way. Never edit the theme
  module itself.
- Check Japanese typography (line breaks, letter spacing, font fallback) separately from English.

### Workflow

1. Read the relevant content and config files before you change anything.
2. Make the change in the source of truth (the content `.md`, the `.toml`, or `DESIGN.md`)
   before you touch templates or CSS.
3. Run `hugo` (or `hugo server`) to confirm the build passes. Check both `/` and `/ja/` for the
   pages you touched.
4. **Never commit or push unless I explicitly ask.** Pushing to `main` publishes the site.

## Content conventions

- Posts use this front matter: `title`, `date`, `draft`, `description`, `tags`, and optionally
  `series`.
- Put images in `assets/img/` and reference them with the `figure` shortcode, as in
  `content/research.md`.
- Put downloadable files (such as the CV PDF) in `static/files/`.
- Every new top-level page needs an entry in both `menus.en.toml` and `menus.ja.toml`.
