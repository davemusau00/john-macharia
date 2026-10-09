# Deployment & Migration Guide

## Important: preserve the original IBM project files

The source repository contains a large `IBM_Project_Manager_Project/` directory with PDFs, spreadsheets and Word documents. The rebuilt website references those artefacts from the Work page.

When applying this rebuild to a real clone of the original repository, **do not delete that directory**.

## Recommended safe migration

### 1. Clone the real repository on a machine with GitHub access

```bash
git clone https://github.com/guches/John_Guchu_Macharia.github.io.git
cd John_Guchu_Macharia.github.io
```

### 2. Create a branch

```bash
git checkout -b portfolio-rebuild
```

### 3. Copy the rebuilt web files over the clone

Copy from this package:

```text
index.html
about.html
work.html
resume.html
404.html
assets/
projects/
docs/
README.md
robots.txt
sitemap.xml
site.webmanifest
.nojekyll
```

Do not replace or delete:

```text
IBM_Project_Manager_Project/
```

unless intentionally reorganising those files in a separate migration.

### 4. Preview locally

```bash
python -m http.server 8080
```

Open `http://localhost:8080` and test:

- desktop navigation;
- mobile navigation;
- light/dark theme;
- Work filters;
- all four case studies;
- About links;
- résumé print preview;
- Project Lab links;
- 404 page.

### 5. Commit

```bash
git add .
git commit -m "Rebuild professional portfolio experience"
```

### 6. Push branch

```bash
git push -u origin portfolio-rebuild
```

Open a pull request into the branch currently used by GitHub Pages.

## GitHub Pages settings

For a repository site of this form, Pages normally publishes from a branch and folder.

Recommended setup:

- Source: deploy from branch
- Branch: `main`
- Folder: `/ (root)`

No build command is required.

## Post-deployment verification

Check the live URLs:

```text
/
/work.html
/about.html
/resume.html
/projects/knbs-transformation.html
/projects/customer-experience.html
/projects/gardaworld-crm.html
/projects/telkom-transformation.html
/404.html
/sitemap.xml
/robots.txt
```

Also verify:

- no console errors;
- favicon loads;
- page titles change correctly;
- mobile menu is keyboard operable;
- old `/projects/project-1/index.html` redirects to `/work.html`;
- existing IBM artefacts still load from the repository.

## Rollback

If the changes are merged and a problem appears:

```bash
git revert <merge-commit-sha>
git push origin main
```

Because the site is static, rollback is immediate after GitHub Pages republishes the previous commit.

## Optional custom domain

A custom domain can be added later without changing the architecture. If one is configured:

1. add the domain in GitHub Pages settings;
2. create a `CNAME` file in the repository root;
3. update `SITE_URL`-derived values in `sitemap.xml`, `robots.txt` and Open Graph metadata;
4. enable HTTPS after DNS validation.

## Optional analytics

The rebuild ships without analytics or tracking scripts. This is intentional. If analytics is added, use a privacy-conscious setup and document the choice in the repository.
