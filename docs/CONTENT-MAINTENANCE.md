# Content Maintenance Guide

## Updating headline / positioning

Edit the hero block in `index.html`.

Keep the headline short enough to remain visually strong at large sizes. The current system works best with roughly 6–12 words and no more than two conceptual clauses.

## Updating career metrics

Homepage metrics live in the `.metric-strip` section of `index.html`.

Before changing a metric:

1. verify it against an approved CV, report or public source;
2. update the metric and its label;
3. update any matching case-study page;
4. update `resume.html` if the claim appears there too.

Avoid unsupported percentages or financial figures.

## Adding a case study

Create a new page under `projects/` using an existing case study as the template.

Every case study should include:

- title;
- one-sentence description;
- role;
- time period;
- sector;
- themes;
- context / challenge;
- work performed;
- verified outcomes;
- transferable value.

Then add a matching card to:

- `index.html` if it should be featured;
- `work.html` for the full portfolio.

If adding a new filter category, add the category token to the card's `data-filter-card` attribute and create a matching `data-filter` button.

## Updating the résumé

Edit `resume.html` directly.

Keep bullets outcome-oriented. A useful pattern is:

**Action + scope + mechanism + result**

Example:

> Re-engineered onboarding for arriving staff and dependants, reaching 98% completion within the first 72 hours.

When a new role is added, update the homepage career timeline as well.

## Certifications

Only list certifications that can be accurately named and defended. If certificate URLs change, link the verified destination rather than copying a long tracking URL into visible text.

## Project Lab

The Work page currently links to folders in the original GitHub repository so the existing project-management documents remain accessible.

When a Project Lab file becomes important enough to feature individually:

1. use a readable file name;
2. add a short description that states what the artefact is, not an exaggerated outcome;
3. link to the file in the repository;
4. optionally add a screenshot or redacted preview later.

## Contact details

The public contact details currently used are:

- Email: `John.g.macharia@gmail.com`
- Phone: `+254 726 396 674`
- LinkedIn: `https://www.linkedin.com/in/john-guchu-macharia/`

Search the project before changing them to avoid inconsistent contact information.

## Replacing the logo

Source asset:

`assets/img/jg-source.png`

Web asset:

`assets/img/jg-mark.png`

Favicons:

`assets/img/favicon-192.png`
`assets/img/favicon-512.png`

If a professional SVG master becomes available, prefer it and update references throughout the HTML. Retain equivalent favicon files for broad browser support.

## Adding a portrait

Do not generate or substitute a fake portrait. Use a real, approved image.

Recommended preparation:

- crop roughly 4:5 or 1:1;
- export WebP around 1200px on the long side;
- keep file size under ~250 KB when practical;
- add meaningful alt text;
- use it on About and optionally the homepage.

## Writing style

The current editorial voice is:

- concise;
- evidence-led;
- senior but not inflated;
- specific about outcomes;
- careful around confidential work.

Prefer concrete language such as "mapped", "managed", "redesigned", "monitored" and "delivered" over generic adjectives such as "world-class", "visionary" or "best-in-class" unless externally verified.
