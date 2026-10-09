# Portfolio Modernisation — Detailed Improvements

## 1. Executive summary

The source repository contained useful professional material but the live experience did not communicate its value. The homepage was a generic HTML starter, the project section contained placeholders, one expected project route did not exist, the About page had invalid document structure, and the résumé was effectively an unstyled CV dump.

The rebuild treats the website as an **executive credibility system** rather than a coding exercise. Every major design decision answers one of four questions:

1. Who is John professionally?
2. What outcomes has he delivered?
3. What capabilities can another organisation hire or partner with him for?
4. What evidence is available behind those claims?

## 2. Positioning overhaul

### Before

The homepage positioned John simply as a developer and pointed to generic "Project 1" / "Project 2" links.

### After

The site now positions him around the strongest patterns in the existing résumé:

- programme and project leadership;
- international partnership management;
- customer experience and service operations;
- digital transformation;
- CRM and business-process improvement;
- AI and data capability;
- governance and risk-aware delivery.

The primary headline, supporting copy and CTA hierarchy are designed for recruiters, programme partners, hiring managers and consulting prospects rather than only technical peers.

## 3. Information architecture

### New top-level structure

- **Home** — positioning, proof, selected impact, capabilities, career arc and contact CTA.
- **Work** — case-study index and Project Lab.
- **About** — professional narrative, operating philosophy and capability areas.
- **Résumé** — structured, printable web résumé.
- **Projects** — four case-study detail pages.

The old placeholder project URL remains valid as a redirect, avoiding a dead legacy path.

## 4. Homepage improvements

The new homepage adds:

- a clear senior-level value proposition;
- immediate location and professional-domain context;
- two primary calls to action;
- a career metric strip;
- four evidence-based selected-work cards;
- a four-part capability model;
- a chronological career arc;
- a direct contact / LinkedIn call to action;
- a branded visual treatment using the supplied JG mark.

### Metrics surfaced

Metrics already present in the original résumé are moved closer to the top of the experience:

- 15+ years of experience;
- 92% CSAT;
- 98% onboarding completed within 72 hours;
- leadership of 20+ staff in a support environment;
- approximately £100K annual programme expenditure monitored.

This converts the homepage from biography-first to evidence-first.

## 5. Case-study conversion

The résumé contained significant transformation work but did not package it as a portfolio. The rebuild creates four case studies:

1. **KNBS × ONS Partnership & Digital Transformation**
2. **British High Commission Customer Experience Transformation**
3. **GardaWorld Customer Operations & CRM**
4. **Telkom Kenya Service & Network Change**

Each page uses a consistent case-study system:

- role;
- period;
- sector;
- focus areas;
- context;
- work undertaken;
- selected outcomes;
- transferable value;
- a provenance notice to avoid implying unpublished confidential detail.

The content is intentionally conservative. It reorganises published résumé claims instead of fabricating deeper project data.

## 6. Project Lab

The repository already contains a large collection of IBM project-management coursework and artefacts. Previously those files were effectively invisible to normal site visitors.

The Work page now surfaces this material as a **Project Lab** with grouped entry points for:

- risk registers and risk matrices;
- Gantt and network planning;
- project charters;
- stakeholder registers and RACI;
- SWOT / project-failure analysis;
- communication-effectiveness work.

This changes a folder of files into evidence of method.

## 7. About-page improvements

### Before

The About page had:

- two `<body>` elements;
- long unstructured paragraphs;
- several grammar / spelling issues;
- contact details mixed directly into content;
- no hierarchy beyond headings and bold text.

### After

The page is organised into:

- professional focus;
- transformation approach;
- core capability areas;
- education and continued development;
- contact card.

It also uses a sticky visual / contact rail on larger screens and collapses naturally on mobile.

## 8. Résumé improvements

The original résumé contained strong content but was difficult to scan on screen.

The rebuilt résumé adds:

- professional summary at the top;
- capability chips;
- consistent role / organisation / date hierarchy;
- outcome-focused bullets;
- sticky section navigation on larger screens;
- dedicated education and professional-development sections;
- a **Print / Save as PDF** control;
- print-specific CSS that removes navigation and UI chrome.

This means one document now works as both a web résumé and a clean printable source.

## 9. Visual design system

A complete visual system was introduced using CSS custom properties:

- warm ivory background;
- stone/taupe derived from the supplied JG mark;
- near-black typography;
- restrained green accent;
- fluid spacing and typography using `clamp()`;
- shared border, radius and shadow tokens;
- reusable cards, pills, buttons, timelines and metric components.

The result is intentionally closer to an executive consultancy / transformation portfolio than a generic developer template.

## 10. Responsive behaviour

The site is designed across three broad layout states:

### Desktop

- two-column hero;
- multi-column metric and capability grids;
- sticky About / case-study / résumé sidebars;
- four-column capability layout.

### Tablet

- reduced column counts;
- stacked hero and biography areas;
- two-column work and Project Lab grids;
- simplified sticky behaviour.

### Mobile

- compact header with accessible menu control;
- one-column content cards;
- two-column metric grid with graceful final-item spanning;
- single-column résumé and case studies;
- touch-friendly controls and spacing.

## 11. Navigation and interaction

The JavaScript layer adds:

- persistent light/dark theme selection;
- responsive mobile-menu state;
- Escape-key menu dismissal;
- current-page navigation highlighting;
- scroll-progress indicator;
- viewport reveal animations;
- reduced-motion compliance;
- client-side Work-page filtering;
- résumé print control;
- dynamic copyright year.

All essential content remains available when JavaScript is disabled.

## 12. Accessibility improvements

The rebuild adds or improves:

- semantic landmarks: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`;
- a keyboard-visible skip link;
- descriptive link text;
- ARIA labels for navigation and interactive controls;
- `aria-current` state for the active page;
- `aria-expanded` on the mobile menu;
- reduced-motion support via `prefers-reduced-motion`;
- high-contrast light and dark palettes;
- touch-friendly button sizing;
- proper heading hierarchy;
- content that does not depend on hover to be understood.

## 13. Performance improvements

The rebuilt site deliberately avoids a JavaScript framework and third-party libraries.

Benefits:

- no npm dependency graph;
- no hydration;
- no client-side router;
- no web-font blocking request;
- no build pipeline required for deployment;
- small CSS and JavaScript footprint;
- static HTML available immediately to browsers and search engines.

The supplied logo is processed into a transparent web asset and smaller favicon variants.

## 14. SEO and sharing improvements

Added:

- descriptive page titles;
- meta descriptions;
- Open Graph title, description and image metadata;
- Twitter summary-card metadata;
- sitemap;
- robots file;
- web manifest;
- page-specific semantic copy.

A future iteration can add a custom social preview image and a canonical custom domain.

## 15. Broken / placeholder route handling

The old homepage expected a `projects/project-2/index.html` path that did not exist. The redesign removes that dead link entirely.

The old `projects/project-1/index.html` route is retained as an immediate redirect to the real Work page, preventing an old bookmark from ending at the obsolete placeholder.

A new `404.html` provides a branded recovery route for any other missing path.

## 16. Maintainability improvements

Previously every page was effectively independent markup with no shared design layer.

Now:

- all visual tokens live in `assets/css/styles.css`;
- all interactive behaviour lives in `assets/js/main.js`;
- page content is separated by clear semantic sections;
- case studies use the same structural pattern;
- maintenance documentation explains common edits;
- no framework knowledge is required.

## 17. Items intentionally not invented

The rebuild does not add:

- a fabricated portrait;
- fake client logos;
- fictional testimonials;
- confidential programme screenshots;
- unsupported revenue / budget claims;
- made-up technical stacks for projects where the résumé does not name them.

Those can be added later when verified source material is available.
