# Architecture Defense Setup (J1-J4 Framework)

This document describes the architecture governance setup for the Next.js + Payload CMS project using the J1-J4 framework.

## Overview

The architecture defense system enforces clean module boundaries and prevents architectural erosion through:

- **J1: Self-Description** - Modules declare their own purpose and dependencies via `manifest.config.ts`
- **J2: Self-Check** - dependency-cruiser validates import rules
- **J3: Closed Rules** - Pre-commit hooks enforce validation
- **J4: Reflex** - Violations block commits automatically

## Files Created

### 1. Manifest Files (J1: Self-Description)

Located in each major module:

- `/Users/user/iboran/src/collections/Pages/manifest.config.ts`
  - Declares Pages collection purpose: static pages, SEO, live preview
  - Public API: Pages collection, revalidate hooks
  - Internal API: populatePublishedAt hook
  - Dependencies: blocks (Archive, CallToAction, Content, Form, Media)

- `/Users/user/iboran/src/collections/Posts/manifest.config.ts`
  - Declares Posts collection purpose: blog content, GEO optimization
  - Public API: Posts collection, revalidate/populate hooks
  - Internal API: populateAuthors hook
  - Dependencies: blocks (Banner, Code, Media)

- `/Users/user/iboran/src/collections/Users/manifest.config.ts`
  - Declares Users collection purpose: authentication, access control
  - Privacy rule: no direct user exports

- `/Users/user/iboran/src/blocks/Form/manifest.config.ts`
  - Declares Form block purpose: dynamic forms with validation
  - Internal components: Text, Email, Textarea, Select, Checkbox, Country, Number

- `/Users/user/iboran/src/components/manifest.config.ts`
  - Declares all reusable UI components
  - 40+ public components (Link, Navbar, Footer, Cards, Modals, etc.)
  - Architecture rules: no collection internals, no direct Payload access

### 2. dependency-cruiser Configuration (J2 + J3: Self-Check + Closed Rules)

**Location:** `/Users/user/iboran/dependency-cruiser.config.cjs`

**Rules Implemented:**

1. **no-circular-dependencies** (error)
   - Prevents circular imports between modules
   - Currently detects 3 circular dependencies involving RichText component

2. **no-nextjs-internals** (error)
   - Prevents importing from `next/dist/compiled`
   - Forces use of public Next.js API

3. **utilities-must-be-agnostic** (warn)
   - Warns when utilities depend on features
   - Currently 3 warnings: utilities importing payload.config.ts

4. **no-app-internals-in-components** (warn)
   - Warns when components import from API routes

### 3. NPM Scripts (J3: Closed Rules)

**Location:** `/Users/user/iboran/package.json`

```json
{
  "architecture:check": "depcruise --config dependency-cruiser.config.cjs src",
  "architecture:check:html": "depcruise --config dependency-cruiser.config.cjs src --output-type err-html > architecture-report.html",
  "architecture:check:archi": "depcruise --config dependency-cruiser.config.cjs src --output-type archi > architecture-graph.html",
  "architecture:visualize": "depcruise --config dependency-cruiser.config.cjs src --output-type dot | dot -T svg > architecture-graph.svg",
  "validate": "npm run architecture:check && npm run lint"
}
```

### 4. Pre-commit Hook (J4: Reflex)

**Locations:**
- `/Users/user/iboran/.git/hooks/pre-commit` (active hook)
- `/Users/user/iboran/scripts/pre-commit.sh` (reusable script)

**Behavior:**
- Runs `architecture:check` before every commit
- Blocks commit if violations found
- Provides helpful error messages and fix suggestions
- Only runs when TypeScript/JavaScript files are staged

## Current Violations

### Errors (3 - Block Commits)

1. **Circular Dependency: MediaBlock Component**
   ```
   src/blocks/MediaBlock/Component.tsx →
   src/components/RichText/index.tsx →
   src/blocks/MediaBlock/Component.tsx
   ```

2. **Circular Dependency: CallToAction Component**
   ```
   src/blocks/CallToAction/Component.tsx →
   src/components/RichText/index.tsx →
   src/blocks/CallToAction/Component.tsx
   ```

3. **Circular Dependency: Banner Component**
   ```
   src/blocks/Banner/Component.tsx →
   src/components/RichText/index.tsx →
   src/blocks/Banner/Component.tsx
   ```

**Fix:** Create a shared `RichTextBlock` or move RichText to a different layer to break the cycle.

### Warnings (3 - Informational)

1. **src/utilities/getRedirects.ts → src/payload.config.ts**
2. **src/utilities/getGlobals.ts → src/payload.config.ts**
3. **src/utilities/getDocument.ts → src/payload.config.ts**

**Note:** These are acceptable for Payload CMS utilities (need access to Payload config), but consider refactoring if utilities grow.

## Usage

### Check Architecture

```bash
# Basic check
npm run architecture:check

# Generate HTML report
npm run architecture:check:html
open architecture-report.html

# Generate architecture graph
npm run architecture:check:archi
open architecture-graph.html

# Generate SVG dependency graph (requires graphviz)
npm run architecture:visualize
```

### Validate Before Push

```bash
npm run validate
```

This runs both architecture check and linting.

### Pre-commit Behavior

The pre-commit hook automatically runs when you commit:

```bash
git add .
git commit -m "my changes"
# 🔍 Running architecture validation...
# ✅ Architecture validation passed
# [Commit proceeds]
```

If violations are found:

```bash
git commit -m "my changes"
# 🔍 Running architecture validation...
# ❌ Architecture violations detected!
#
# Available commands:
#   npm run architecture:check:html    - Detailed HTML report
#   npm run architecture:check:archi   - Architecture visualization
#   npm run architecture:visualize     - Dependency graph (SVG)
#
# [Commit blocked]
```

## Next Steps

### 1. Fix Circular Dependencies (Priority: High)

The RichText component creates circular dependencies with multiple blocks. Options:

- **Option A:** Create a `src/components/blocks/RichTextBlock` that wraps both
- **Option B:** Move RichText to `src/blocks/RichText` and have blocks import it
- **Option C:** Use composition instead of direct imports

### 2. Refactor Utilities (Priority: Low)

Current warnings about utilities importing `payload.config.ts` are acceptable for Payload CMS, but consider:

- Creating a `src/utilities/payload.ts` for Payload-specific utilities
- Keeping pure utilities separate from Payload-dependent ones

### 3. Add More Rules (Optional)

As the codebase grows, consider adding:

- No imports from `collections/*/hooks` in components
- No imports from `blocks/*/components` across blocks
- Layer hierarchy enforcement (UI → Business → Data)

### 4. Set Up CI Integration (Optional)

Add to GitHub Actions (`.github/workflows/architecture.yml`):

```yaml
name: Architecture Check
on: [pull_request]
jobs:
  architecture:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npm run architecture:check
```

## Architecture Principles

### Collections (src/collections)

- **Purpose:** Data models and business logic
- **Public API:** Collection config, revalidate hooks
- **Internal API:** Lifecycle hooks (beforeChange, afterChange)
- **Dependencies:** Other collections, blocks, utilities

### Blocks (src/blocks)

- **Purpose:** Reusable content blocks for Pages/Posts
- **Public API:** Component, config
- **Internal API:** Sub-components (e.g., Form fields)
- **Dependencies:** Components, utilities

### Components (src/components)

- **Purpose:** Reusable UI components
- **Public API:** Exported components
- **Internal API:** Helper components
- **Dependencies:** Other components, utilities
- **Constraints:** No collection internals, no direct Payload access

### Utilities (src/utilities)

- **Purpose:** Pure functions and helpers
- **Dependencies:** None (ideal) or only other utilities
- **Note:** Payload-dependent utilities are acceptable in CMS projects

## Troubleshooting

### Pre-commit Hook Not Running

1. Check if hook is executable:
   ```bash
   ls -la .git/hooks/pre-commit
   ```

2. Make it executable:
   ```bash
   chmod +x .git/hooks/pre-commit
   ```

3. Check if it points to the right script:
   ```bash
   cat .git/hooks/pre-commit
   ```

### Bypass Pre-commit Hook (Emergency Only)

```bash
git commit --no-verify -m "emergency fix"
```

Use only for genuine emergencies. Fix violations afterward.

### dependency-cruiser Not Found

```bash
npm install --save-dev dependency-cruiser
```

## Resources

- [dependency-cruiser documentation](https://github.com/sverweij/dependency-cruiser)
- [Architecture Defense Skill](/Users/user/.claude/skills/architecture-defense/)
- [J1-J4 Framework](/Users/user/.claude/skills/architecture-defense/README.md)

## Summary

✅ **Installed:** dependency-cruiser v17.3.5
✅ **Created:** 5 manifest files for major modules
✅ **Created:** dependency-cruiser configuration with 4 rules
✅ **Created:** Pre-commit hook for automatic validation
✅ **Created:** 5 NPM scripts for checking and visualizing architecture
⚠️  **Detected:** 3 errors (circular deps) + 3 warnings (utilities)

The architecture defense system is now active and will automatically block commits with architectural violations.
