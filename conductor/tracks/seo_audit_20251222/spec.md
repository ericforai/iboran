# Specification: Technical SEO Audit & Enhancement

## Overview
This track involves conducting a comprehensive technical SEO audit and implementing necessary enhancements to improve the website's search engine visibility. The focus is on metadata management, dynamic routing synchronization, and automated sitemap/robots generation.

## Functional Requirements

### 1. Metadata Branding & Defaults
- Update the default meta title suffix from "Payload Website Template" to "泊冉软件" or the appropriate corporate name defined in `product.md`.
- Implement a hybrid metadata management system using `@payloadcms/plugin-seo`:
    - **Automated Defaults:** Generate meta titles and descriptions based on the document's title and summary if not manually provided.
    - **Manual Overrides:** Ensure the SEO tab is visible and functional for editors in the CMS.

### 2. Collection SEO Integration
- Enable and configure the SEO plugin for the following collections:
    - `Pages`
    - `Posts`
    - `IndustrySolutions` (Targeting `/solution/industry/[slug]`)
    - `SuccessStories` (Targeting `/success-stories/[slug]`)
    - `Resources` (Targeting `/resources/[slug]` if applicable)

### 3. Dynamic URL Synchronization
- Fix `generateURL` logic in the SEO plugin to reflect the recent routing restructure (e.g., ensuring Industry Solutions point to `/solution/industry/[slug]`).
- Ensure canonical URLs are correctly generated for all dynamic pages to prevent duplicate content issues.

### 4. Automated Sitemap & Robots.txt
- Configure `next-sitemap` to:
    - Automatically generate `sitemap.xml` during the post-build phase.
    - Include all public routes from the dynamic collections.
    - Generate a standard `robots.txt` that points to the sitemap.

## Acceptance Criteria
- [ ] All public-facing pages have unique `<title>` and `<meta name="description">` tags.
- [ ] No pages contain the string "Payload Website Template" in their metadata.
- [ ] The `sitemap.xml` is accessible at the root and contains links to all published solutions and stories.
- [ ] The `robots.txt` is accessible and correctly configured.
- [ ] Canonical URL tags are present and point to the correct restructured paths.

## Out of Scope
- On-Page content optimization (heading hierarchy, keyword density).
- Performance/Core Web Vitals optimization.
- Image alt-text audit.
