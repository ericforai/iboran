# iboran.com Content Standards & Guidelines

This document summarizes the standards for creating high-quality, B2B-focused content for iboran.com, covering technical articles (blog posts), solution pages, and product pages.

---

## 1. Role & Voice
**Identity**: B2B Enterprise Management Software Implementation Consultant + Editor-in-Chief.
- **Goal**: Write "implementation-oriented" content that decision-makers can use for judgment and project managers can follow for execution.
- **Tone**: Professional, authoritative, "real-world," and low "AI flavor." Avoid "marketing fluff."
- **Constraints**: 
  - **No jargon-dumping**: Avoid overused buzzwords like "empowerment," "closed-loop," "ecosystem," "starting point" (unless used as a counter-example).
  - **Actionable**: Every section must include a step, template, checklist, example, or precaution.
  - **Human-like Flow**: Use varying sentence lengths; professional but slightly conversational where appropriate.

---

## 2. Technical Articles (Blog Posts)
*Reference: `.agent/workflows/generate-blog-post.md`*

### Structure
- **TL;DR**: 5-7 key takeaways (what the reader will gain).
- **Definition**: One-sentence definition of the topic/solution.
- **Core Body**:
  - 3 questions decision-makers care most about (H2/H3).
  - Scenario/Pain point analysis (Why traditional methods fail).
  - 5+ common pitfalls/failure causes + how to avoid them.
  - Implementation path (Stages + Outputs + Roles).
  - Copyable Checklist.
  - Micro Case Study (~300 words).
  - 5-10 Quantifiable metrics for acceptance.
  - Next steps + soft CTA.

### Technical Meta (Payload CMS)
- **Categories**: Select from predefined list (e.g., `industry-insights`, `u9-cloud-series`, `digital-transformation`).
- **Slug**: Pure English, hyphenated (e.g., `erp-failure-signs`). No Pinyin.
- **Decision Framework**: Lexical JSON format with Scenario, Logic (If...Then...), and Key Metrics.
- **Boundaries**: Array of objects describing suitable/unsuitable company profiles.
- **FAQs**: 8-12 questions with direct answers and 2-3 bullet points.

---

## 3. Case Studies & Solutions
*References: `.agent/workflows/create-solution.md`, `.agent/workflows/create-product.md`*

### Structure (12-Section High-Trust Model)
1. **Hero**: Static title (SEO friendly) + Value Proposition + Dual CTA (Demo/Whitepaper).
2. **Pain Points**: Scene-based cards (Symptom-Consequence), not just a list.
3. **Architecture**: Visualization of data flow or system topology (SVG/Mermaid/Code-generated).
4. **Capabilities**: Deep functional features with corresponding UI images/mockups.
5. **Methodology**: Visual implementation roadmap.
6. **Delivery Scope**: Clearly defined Included/Optional/Excluded items.
7. **Tech Specs**: Integration protocols (API/EDI), deployment, and security.
8. **Customer Stories**: Case cards with Logos + Testimonials + Hard Data.
9. **Resources**: Links to whitepapers or demo videos.
10. **FAQ**: Technical and service-oriented questions.
11. **CTA**: Large section with lead generation form.

### Visual Standards
- **Coded UI Mockups**: Preferred over screenshots. High-fidelity, vector-clear, interactive (Tailwind + Lucide + Framer Motion).
- **Color Palette**: 70% White/Grey + 20% Blue + 10% Red (Professional B2B).
- **Contextual Images**: Capabilities and Architecture **must** have visuals.

---

## 4. SEO & Verification
- **SSR Friendly**: Content must be static in the source code (View Source). Do not hide key text behind `useState` or dynamic client-side fetches that render empty on the server.
- **Meta**: 
  - Title: `<30 chars`.
  - Description: `<120 chars`.
- **H1**: Must contain the primary product/solution name.
- **Interlinking**: Always link back to the main solutions/blog list.
