# web-page-mu

Hiromu Sugiyama's academic website, built with [Hugo](https://gohugo.io) and the
[Congo](https://github.com/jpanther/congo) theme, deployed to GitHub Pages.

## Local development

Requires Hugo Extended and Go (for Hugo Modules). No Node.js needed — Congo ships its
compiled CSS/JS assets directly.

```bash
hugo server --disableFastRender
```

Site is served at `http://localhost:1313/web-page-mu/`.

## Content

- `content/_index.md` — homepage / About (profile layout: name, headline, links, bio blurb)
- `content/research.md` — research interests and working papers
- `content/cv.md` — CV summary with a download link to `static/files/cv.pdf`
- `content/presentations.md` — talks
- `content/posts/` — blog posts (paper reviews, notes, etc.)
- `content/contact.md` — email / GitHub
- `config/_default/languages.en.toml` — site title, author name/headline/bio/links

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with Hugo
and publishes it to GitHub Pages. In the GitHub repo settings, under **Settings → Pages →
Build and deployment**, the source must be set to **GitHub Actions** (one-time setup).

Site: https://musugi.github.io/web-page-mu/
