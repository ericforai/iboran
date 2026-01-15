# Architecture Defense - Quick Start

## What Is This?

Automatic architecture validation that blocks bad code patterns before they're committed.

## One-Minute Guide

### Check Your Code

```bash
npm run architecture:check
```

### Fix Violations

```bash
# Generate visual report
npm run architecture:check:html
open architecture-report.html

# Or see architecture graph
npm run architecture:check:archi
open architecture-graph.html
```

### Commit (Auto-Validates)

```bash
git add .
git commit -m "my changes"
# Pre-commit hook runs automatically
```

## Common Violations & Fixes

### Circular Dependency ❌

**Error:**
```
error no-circular-dependencies:
  src/blocks/A/Component.tsx →
  src/components/X.tsx →
  src/blocks/A/Component.tsx
```

**Fix:** Break the cycle
- Move shared logic to utilities
- Create a third module that both import
- Use composition instead of direct imports

### Utility Depends on Feature ⚠️

**Warning:**
```
warn utilities-must-be-agnostic:
  src/utilities/foo.ts → src/collections/bar
```

**Fix:**
- Move feature-specific logic out of utilities
- Or accept the warning if it's intentional (Payload CMS config)

### Next.js Internals ❌

**Error:**
```
error no-nextjs-internals:
  src/components/Foo.tsx → next/dist/compiled/...
```

**Fix:** Use public Next.js API
- Instead of: `import { foo } from 'next/dist/...'`
- Use: `import { foo } from 'next'`

## File Locations

| File | Location | Purpose |
|------|----------|---------|
| Pages manifest | `src/collections/Pages/manifest.config.ts` | Declares Pages collection API |
| Posts manifest | `src/collections/Posts/manifest.config.ts` | Declares Posts collection API |
| Users manifest | `src/collections/Users/manifest.config.ts` | Declares Users collection API |
| Form manifest | `src/blocks/Form/manifest.config.ts` | Declares Form block API |
| Components manifest | `src/components/manifest.config.ts` | Declares all UI components |
| Cruiser config | `dependency-cruiser.config.cjs` | Architecture rules |
| Pre-commit hook | `.git/hooks/pre-commit` | Auto-validation on commit |

## Architecture Rules

| Rule | Severity | Description |
|------|----------|-------------|
| no-circular-dependencies | ERROR | No circular imports anywhere |
| no-nextjs-internals | ERROR | Don't import from `next/dist/compiled` |
| utilities-must-be-agnostic | WARN | Utilities shouldn't depend on features |
| no-app-internals-in-components | WARN | Components shouldn't import from API routes |

## Current Status

✅ **Active:** Pre-commit validation
⚠️  **3 Errors:** Circular dependencies (RichText component)
⚠️  **3 Warnings:** Utilities importing Payload config (acceptable)

## Emergency Bypass

```bash
git commit --no-verify -m "emergency fix"
```

Use only in emergencies. Fix violations after!

## Need Help?

- Full documentation: `ARCHITECTURE_DEFENSE_SETUP.md`
- Generate report: `npm run architecture:check:html`
- View manifest: `cat src/components/manifest.config.ts`
