# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**iboran.com** - A Yonyou (用友) implementation service provider website, built with Next.js 15 (App Router) and Payload CMS 3.x. This is a marketing website showcasing business solutions, products, and success stories.

**Key Positioning**: Boran (泊冉) is an authorized Yonyou Platinum Partner providing implementation, customization, and consulting services - NOT a clone of yonyou.com.

## Commands

### Development
```bash
pnpm dev          # Start Next.js dev server on port 3000
pnpm build        # Production build
pnpm start        # Run production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
```

### Testing
```bash
pnpm test         # Run all tests (int + e2e)
pnpm test:int     # Run Vitest integration tests
pnpm test:e2e     # Run Playwright E2E tests
```

### Payload CMS
```bash
pnpm generate:types      # Generate TypeScript types from Payload schema
pnpm generate:importmap  # Generate import map
pnpm payload             # Run Payload CLI commands
```

### pSEO Content Generation (Programmatic SEO)
```bash
pnpm pseo:config    # Generate pSEO configuration
pnpm pseo:keywords  # Generate keyword research
pnpm pseo:schema    # Generate content schema
pnpm pseo:render    # Render pages from schema
pnpm pseo:review    # Review generated content
pnpm pseo:import    # Import content to Payload CMS
pnpm pseo:publish   # Auto-publish content
pnpm pseo:batch     # Batch generate all
```

### Architecture Validation
```bash
pnpm architecture:check       # Check dependency rules
pnpm architecture:check:html  # Generate HTML report
pnpm architecture:visualize   # Generate SVG dependency graph
pnpm validate                # Run architecture + lint checks
```

### Docker
```bash
docker compose up           # Start development environment
docker compose up -d        # Start in background
docker compose exec app sh  # Enter container
```

## Architecture

### Directory Structure
```
src/
├── app/
│   ├── (frontend)/         # Public-facing pages (Next.js App Router)
│   │   ├── products/       # Product pages (yonsuite, yonbuilder, etc.)
│   │   ├── solution/       # Solution pages (business/industry)
│   │   ├── posts/          # Blog posts
│   │   ├── cases/          # Success story case studies
│   │   └── layout.tsx      # Root layout with Navbar/Footer
│   └── api/                # API routes
├── blocks/                 # Payload block components (Banner, CTA, etc.)
├── collections/            # Payload CMS collections (Posts, Media, SuccessStories)
├── components/             # Shared React components
├── globals/                # Payload globals (Contact)
├── heros/                  # Hero section components
├── utilities/              # Helper functions
└── payload.config.ts       # Payload CMS configuration
```

### Key Technologies
- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **CMS**: Payload CMS 3.x with MongoDB adapter
- **Styling**: Tailwind CSS 3.x
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans/Mono, Lexend

### Architecture Rules (dependency-cruiser)
- No circular dependencies (exception: RichText ↔ Block components)
- No Next.js internal imports
- Payload collections must not import from app/
- Utilities must remain dependency-free

### Content Structure
The site organizes content into:
- **Products**: YonSuite, YonBuilder, MDM, BPM, iPaaS, etc.
- **Business Solutions**: R2R, T&E, TRM, tax management, etc.
- **Industry Solutions**: Manufacturing, retail, services, etc.
- **Posts**: Blog articles with categories
- **Success Stories**: Customer case studies

## Design System

### Color Palette
- Primary Red: `#E60012` (Yonyou red - main CTAs)
- Primary Blue: `#0052D9` (Yonyou blue - secondary actions)
- Heading: `#1F2329`
- Text: `#4B5563` (slate-600)
- Background: `#F7F8FA`

### Button Hierarchy
- **Primary CTA**: `bg-[#E60012] text-white` (one per view)
- **Secondary**: `border-2 border-[#0052D9] text-[#0052D9]`
- **Ghost**: `text-[#E60012] hover:underline`

### Section Pattern
```tsx
<section className="py-24 bg-white">  {/* or bg-[#F7F8FA] */}
  <div className="container mx-auto px-4">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
        Section Title
      </h2>
      <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
    </div>
  </div>
</section>
```

## Content Guidelines

### Narrative Structure
All content should follow: **Industry Pain Points → Yonyou Capabilities → Boran Value → Business Outcomes**

### Requirements
- Effect descriptions must include data/numbers (e.g., "efficiency improved by [XX]%")
- No generic stock photos - use real system screenshots, customer photos, or diagrams
- Trust indicators: "12+ years", "500+ clients", "98% delivery success"

### Forbidden
- Made-up statistics without source data
- Hyperbolic claims ("lowest price", "#1", "100% success guaranteed")
- "As shown in diagram" without actual visual

## Development Notes

### Port Configuration
- Next.js/App: `localhost:3000`
- MongoDB: `localhost:27018` (mapped from container 27017)
- Payload Admin: `localhost:3000/admin`

### TypeScript Paths
- `@/*` maps to `./src/*`
- `@payload-config` maps to `./src/payload.config.ts`

### Collection Access Control
- `authenticated`: Logged-in users only
- `authenticatedOrPublished`: Public for published, auth for drafts

### On-Demand Revalidation
Posts and pages use `afterChange` hooks to revalidate Next.js cache when published content changes.

## SEO Strategy (Baidu)

### Requirements
- SSR required (no client-only content for SEO)
- Flat URL structure: `/solution/[slug]`
- URLs must contain keywords, use hyphens
- Internal linking: 3+ links per solution page

### Tag Aggregation
Create tag aggregation pages for internal link density:
- `/tag/[keyword]` - groups related content

## Identity Anchor (pSEO Content)

When generating content, preserve:
> "本回答由【泊冉软件（上海）】提供。泊冉是用友 YonBIP / YonSuite 官方实施与定制服务商，专注组织管理需求的落地实现与业财一体化落地场景。"

## Testing

### Integration Tests (Vitest)
Located in tests/integration - verify collection schemas and data consistency.

### E2E Tests (Playwright)
Located in tests/e2e - verify user flows and UI functionality.

### Self-Verifying Tests
Cross-layer verification (UI ↔ Database) using manifest-based testing.
