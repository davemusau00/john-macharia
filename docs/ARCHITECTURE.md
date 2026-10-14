# Architecture & Design System

## Why static HTML

The site is a content-led professional portfolio. It does not need a framework runtime, database, API or build process. Static HTML/CSS/JS gives the project the smallest operational surface while matching GitHub Pages perfectly.

This architecture optimises for:

- longevity;
- low maintenance;
- fast rendering;
- crawlable content;
- accessible semantics;
- ease of handoff.

## Core files

### `assets/css/styles.css`

Contains the entire design system and layout layer.

Key token groups:

- colour: `--bg`, `--surface`, `--ink`, `--muted`, `--brand`, `--accent`;
- sizing: `--container`, `--nav-h`;
- radius: `--radius-sm`, `--radius-md`, `--radius-lg`;
- fluid type scale: `--step--1` through `--step-5`.

Reusable layout classes include:

- `.container`, `.narrow`;
- `.grid-2`, `.grid-3`, `.grid-4`;
- `.cluster`, `.stack`;
- `.section`, `.section-tight`.

Reusable components include:

- buttons;
- cards;
- work cards;
- capability cards;
- metric strip;
- timeline;
- Project Lab cards;
- CTA panel;
- case-study result cards;
- résumé role rows;
- filter controls.

### `assets/js/main.js`

Intentionally small and dependency free.

Responsibilities:

1. theme persistence using `localStorage`;
2. mobile navigation open/close state;
3. Escape-key dismissal;
4. scroll progress;
5. active navigation state;
6. viewport reveal effects via `IntersectionObserver`;
7. case-study filtering;
8. résumé print action;
9. dynamic year.

There is no business-critical behaviour in JavaScript. If it fails or is disabled, navigation and all content still work.

## Responsive system

The stylesheet uses fluid values first, then two structural breakpoints:

- `980px`: desktop grids begin collapsing;
- `760px`: mobile navigation and one-column content patterns activate.

This avoids dozens of device-specific breakpoints. Typography, margins and section spacing already scale continuously through `clamp()`.

## Theme system

The site supports light and dark palettes by changing CSS variables on `html[data-theme="dark"]`.

Selection order:

1. saved user preference;
2. operating-system preference;
3. light theme fallback.

The theme toggle updates its accessible label as state changes.

## Accessibility model

### Keyboard

- skip link is first focusable element;
- native links and buttons are used rather than clickable divs;
- mobile menu can be dismissed with Escape;
- no interaction requires pointer hover.

### Motion

`prefers-reduced-motion: reduce` disables decorative movement and reveal effects.

### Semantics

Case studies use definition lists for metadata, articles for discrete units, proper page landmarks and ordered heading levels.

### Print

Print CSS:

- removes navigation and decorative UI;
- expands the résumé to page width;
- removes background decoration;
- reduces typography for document density;
- avoids breaks inside experience blocks where possible.

## Content model

The site has three levels of evidence:

1. **Summary evidence** — metrics and capabilities on the homepage.
2. **Narrative evidence** — About and Work pages.
3. **Detailed evidence** — case-study and résumé pages.

This prevents the homepage from becoming a CV dump while ensuring detail is still one click away.

## Asset strategy

The supplied raster monogram is retained as the source asset and a transparent web version is generated for flexible placement. Favicon sizes are pre-generated rather than asking the browser to resize the large source asset on every request.

Future asset recommendations:

- add a verified portrait at 800–1200px wide in WebP/AVIF;
- add redacted case-study screenshots in WebP;
- create a dedicated 1200×630 Open Graph image;
- preserve original working files outside the production web directory when possible.

## Security / privacy notes

## CMS publishing layer

Decap CMS stores structured content in `_content/` and uses GitHub pull requests for editorial review. The public site remains static and GitHub Pages-compatible. GitHub OAuth is handled by the Worker template in `infrastructure/oauth-worker`; secrets stay in Worker configuration and are never committed.

The current email and phone details were already public in the source repository. If privacy requirements change, remove or obfuscate them consistently across:

- `about.html`;
- `resume.html`;
- homepage CTA destinations;
- any structured-data additions.

The site contains no forms, cookies, analytics or third-party scripts by default.
