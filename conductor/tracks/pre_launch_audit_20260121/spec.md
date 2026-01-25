# Pre-launch Audit Specification (2026-01-21)

## 1. Audit Conclusion
**Verdict:** **Conditionally Ready for Launch**
- **Status:** Tech and content architecture are 90% ahead of competitors.
- **Key Gap:** "Last mile" conversion logic needs tightening.

## 2. Key Issues Identified (P0 - Critical)
1.  **Value Proposition:** The Hero text "Building Digital Enterprises, Choose Boran Software" is too generic. It fails to address pain points like "delivery difficulties" or "high failure rates".
2.  **Conversion Pathways:** Call-to-actions (CTAs) are dispersed. High-traffic pages like ERP Migration lack specific hooks (e.g., "Free Assessment") and rely on generic "Contact Us".
3.  **GEO/AI Readiness:** While `GEOJsonLd` exists, verification is needed to ensure FAQ and Definition data is correctly correctly propagated for AI Search engines (SearchGPT/Perplexity).

## 3. Modification Checklist (The "7-Day Plan")

### P0: Critical Fixes
- **GEO Data Verification:** Randomly check 3 core pages (Product, Solution, Case) using Google Rich Results Test to verify `GEOJsonLd` output.
- **Hero Copy Refinement:** Optimize Homepage H1 from "Building Digital Enterprises..." to a more value-driven statement (e.g., emphasizing delivery guarantee or business reshaping).

### P1: High Priority
- **Case Study CTA:** Add a "Related Solutions" card at the bottom of Case Study pages to close the loop.
- **Image Accessibility:** Audit `LogoWall` and core architecture diagrams for missing `alt` attributes.

### P2: Medium Priority / Optimization
- **404 Experience:** Ensure 404 page has search or recommended articles.
- **Mobile Form Test:** Verify iOS/Android input experience (keyboard occlusion, validation).

## 4. Strengths to Preserve
- **Sales Tools:** Whitepapers and Case Studies are excellent hooks.
- **Tech Stack:** Strong SEO/GEO foundation (Sitemaps, OrganizationJsonLd, Semantic URLs).
- **Trust Elements:** Methodology visualization, certifications, and specific contact info are very strong.
