# QA & Validation Notes

## What was checked

The rebuilt site was validated in the working environment using a combination of structural parsing, relative-link checks and Chromium/Playwright rendering with the production CSS inlined for visual QA.

### Structural checks

- Every production page has a `<title>`.
- Every main production page has a single `<main>` landmark.
- Internal relative links were checked against files in the rebuilt package.
- Legacy snapshot files are intentionally excluded from production-link validation because they preserve dead/old routes for documentation purposes.
- The previous placeholder `projects/project-1/index.html` route now contains a valid document and redirects visitors to `work.html`.

### Visual checks

Rendered and inspected at:

- desktop homepage: 1440px viewport;
- narrow mobile homepage: 390px viewport;
- desktop Work page: 1440px viewport;
- desktop Résumé page: 1440px viewport.

Preview captures are stored in `docs/previews/`.

### Responsive checks performed

- hero changes from two columns to one;
- metric strip collapses without overflow;
- work cards become single-column on narrow mobile;
- capability grid collapses cleanly;
- timeline converts from a two-column layout into a compact vertical track;
- CTA buttons wrap without clipping;
- desktop navigation becomes a mobile Menu control;
- résumé side navigation becomes non-sticky / stacked on smaller screens.

## Known integration note

The sandbox rebuild package does not duplicate the source repository's large binary IBM coursework files. The production migration guide explicitly preserves the original `IBM_Project_Manager_Project/` directory, and the Work page links back to those existing repository artefacts.

This is intentional: the rebuild changes the web experience while leaving the original evidence files intact in the source repository.
