# Implementation Plan: Pre-launch Audit Fixes

Based on the audit report from 2026-01-21.

## Phase 1: P0 Critical Fixes (Immediate)

- [x] **GEO Data Verification**
    - [x] Run Google Rich Results Test on `src/components/GEOJsonLd/index.tsx` logic validation.
    - [x] Verify `products/yonsuite` (Product).
    - [x] Verify `solution/erp-migration` (Solution).
    - [x] Verify `cases/[slug]` (Case Study).
    - [x] *Goal:* Ensure FAQ and Article schemas are correctly populated.

- [x] **Homepage Hero Copy Optimization**
    - [x] Edit `src/app/(frontend)/_sections/Hero.tsx`.
    - [x] Update H1 to be more punchy/pain-point focused (e.g., "Not just software delivery, but business reshaping").
    - [x] Update sub-copy if necessary to match the new tone.

## Phase 2: P1 High Priority (Before Launch)

- [x] **Case Study Conversion Loop**
    - [x] Edit `src/app/(frontend)/cases/[slug]/page.tsx` (or relevant template).
    - [x] Add a "Related Solutions" or "Get a Diagnosis" card at the bottom of the article.
    - [x] Ensure it links to the relevant Solution page or Contact form.

- [x] **Image Accessibility (SEO)**
    - [x] Check `src/components/LogoWall.tsx` for `alt` tags.
    - [x] Check architecture diagrams in `src/app/(frontend)/solution/` pages for `alt` tags.

## Phase 3: P2 Optimization (Polish)

- [x] **404 Page Experience**
    - [x] Review `src/app/not-found.tsx`.
    - [x] Add Search Bar or "Popular Links" if missing.

- [x] **Mobile Form Validation**
    - [x] Manual test of Contact/Lead forms on mobile view.
    - [x] Fix any layout shifts or keyboard occlusion issues.
