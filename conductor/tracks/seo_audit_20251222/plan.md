# Plan: Technical SEO Audit & Enhancement

## Phase 1: Foundation & Brand Updates [checkpoint: 7e003de]
- [x] Task: Update Global Branding Defaults [c7836b4]
    - [x] Subtask: Update `generateTitle` suffix to "泊冉软件" in `src/plugins/index.ts`
    - [x] Subtask: Write unit tests to verify default title generation for Pages and Posts
- [x] Task: Enhance Metadata Logic [8eff2d1]
    - [x] Subtask: Implement hybrid logic in `generateTitle` and `generateDescription` to use document fields as fallback
    - [x] Subtask: Write unit tests for fallback logic
- [x] Task: Conductor - User Manual Verification 'Foundation & Brand Updates' (Protocol in workflow.md)

## Phase 2: Routing Alignment & Canonicalization [checkpoint: 8d703bb]
- [x] Task: Synchronize dynamic URLs [baee277]
    - [x] Subtask: Update `generateURL` in `src/plugins/index.ts` to handle `/solution/industry/` prefix for `industry-solutions`
    - [x] Subtask: Update `generateURL` for `success-stories` and `resources`
    - [x] Subtask: Write unit tests verifying URL generation for all dynamic collections
- [x] Task: Verify Canonical Tags [baee277]
    - [x] Subtask: Ensure `<link rel="canonical">` is rendered correctly in the frontend layout/head
    - [x] Subtask: Add integration test for canonical tag presence on restructured routes
- [x] Task: Conductor - User Manual Verification 'Routing Alignment & Canonicalization' (Protocol in workflow.md)

## Phase 3: Sitemap & Discovery Automation [checkpoint: e1e568b]
- [x] Task: Configure `next-sitemap` [f590a5a]
    - [x] Subtask: Update `next-sitemap.config.cjs` to include all dynamic routes and set correct `siteUrl`
    - [x] Subtask: Verify `robots.txt` generation settings
- [x] Task: End-to-End Validation [f590a5a]
    - [x] Subtask: Run a production build and verify the content of `public/sitemap.xml` and `public/robots.txt`
    - [x] Subtask: Verify no "Payload Website Template" remains in generated static HTML
- [x] Task: Conductor - User Manual Verification 'Sitemap & Discovery Automation' (Protocol in workflow.md)
