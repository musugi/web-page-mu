# web-page-mu

Hiromu Sugiyama's academic website, built with [Hugo](https://gohugo.io) and the
[HugoBlox Academic CV](https://github.com/HugoBlox/hugo-theme-academic-cv) template, deployed to GitHub Pages.

## Local development

Requires Hugo Extended, Go (for Hugo Modules), Node.js, and pnpm.

```bash
pnpm install
pnpm run dev   # hugo server --disableFastRender
```

Site is served at `http://localhost:1313/web-page-mu/`.

## Content

- `content/_index.md` — homepage (bio, featured publications, talks, news)
- `content/publications/` — papers / working papers
- `content/projects/` — projects
- `content/blog/` — blog posts
- `content/experience.md` — CV-style experience/education/skills page
- `data/authors/me.yaml` — profile data (name, bio, education, experience, skills, links)

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with Hugo
and publishes it to GitHub Pages. In the GitHub repo settings, under **Settings → Pages →
Build and deployment**, the source must be set to **GitHub Actions** (one-time setup).

Site: https://musugi.github.io/web-page-mu/
