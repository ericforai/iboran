/**
 * J2: SELF-CHECK (Frontend)
 * J3: CLOSED RULES
 *
 * dependency-cruiser configuration for Next.js + Payload CMS architecture governance.
 * Validates import dependencies against architectural rules.
 *
 * Run: npx depcruise --config dependency-cruiser.config.cjs src
 * CI: Blocks PRs if violations are found (J4: Reflex)
 */

module.exports = {
  forbidden: [
    /* ========================================
     * RULE 1: No Circular Dependencies
     * Prevents: Circular dependencies between modules
     * ======================================== */
    {
      name: 'no-circular-dependencies',
      severity: 'error',
      from: {},
      to: {
        circular: true
      },
      comment: 'Circular dependencies detected - refactor module boundaries'
    },

    /* ========================================
     * RULE 1.1: Exception - RichText ↔ Block Components
     * Allows: Blocks need RichText for captions, RichText needs Blocks for inline rendering
     * This is an acceptable circular dependency pattern for React component composition
     * ======================================== */
    {
      name: 'richtext-block-exception',
      severity: 'ignore',
      from: {
        path: ['src/blocks/MediaBlock', 'src/blocks/CallToAction', 'src/blocks/Banner']
      },
      to: {
        path: 'src/components/RichText'
      },
      comment: 'RichText ↔ Blocks circular dependency is acceptable for component composition'
    },

    /* ========================================
     * RULE 2: No Next.js Internal Imports
     * Prevents: Breaking changes from Next.js internals
     * ======================================== */
    {
      name: 'no-nextjs-internals',
      severity: 'error',
      from: { path: 'src' },
      to: {
        path: ['next/dist/compiled']
      },
      comment: 'Do not import from Next.js internals - use public API only'
    },

    /* ========================================
     * RULE 3: Utilities Should Not Depend on Features
     * Prevents: Utility functions depending on UI/business logic
     * ======================================== */
    {
      name: 'utilities-must-be-agnostic',
      severity: 'warn',
      from: {
        path: ['src/utilities', 'src/globals']
      },
      to: {
        pathNot: ['src/utilities', 'src/globals', 'node_modules']
      },
      comment: 'Utilities should ideally not depend on features (warn level for gradual migration)'
    },

    /* ========================================
     * RULE 4: Components Should Not Import from App Router Internals
     * Prevents: Breaking Next.js patterns
     * ======================================== */
    {
      name: 'no-app-internals-in-components',
      severity: 'warn',
      from: {
        path: ['src/components', 'src/blocks']
      },
      to: {
        path: ['src/app/api']
      },
      comment: 'Components should not import from API routes'
    }
  ],

  options: {
    /* ========================================
     * EXCLUDE PATTERNS
     * ======================================== */
    exclude: [
      'node_modules',
      '.next',
      'dist',
      'build',
      'coverage',
      'output'
    ],

    /* ========================================
     * DO NOT FOLLOW
     * Don't follow dynamic require() in converters.tsx
     * to avoid false circular dependency detection
     * ======================================== */
    doNotFollow: [
      'node_modules',
      'src/components/RichText/converters' // Breaks RichText ↔ Block cycle detection
    ],

    /* ========================================
     * TS CONFIG
     * ======================================== */
    tsConfig: {
      fileName: 'tsconfig.json'
    }
  }
};
