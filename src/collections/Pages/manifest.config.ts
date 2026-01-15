/**
 * J1: SELF-DESCRIPTION
 *
 * Pages collection - Core content management for landing pages and static pages
 * Location: src/collections/Pages/manifest.config.ts
 */

export interface Manifest {
  id: string
  name: string
  version: string
  type: 'collection' | 'block' | 'component' | 'utility'
  purpose: string[]
  publicAPI: {
    components?: string[]
    services?: string[]
    types?: string[]
    hooks?: string[]
    collections?: string[]
  }
  internalAPI: {
    hooks?: string[]
    utils?: string[]
    config?: string[]
  }
  dependencies: {
    blocks?: string[]
    collections?: string[]
    components?: string[]
    utilities?: string[]
    external?: string[]
  }
  rules?: Record<string, unknown>
  metadata?: {
    owner?: string
    lastReviewed?: string
    nextReview?: string
  }
}

export default {
  // Module Identity
  id: 'collections/pages',
  name: 'Pages',
  version: '1.0.0',
  type: 'collection',

  // Purpose Statement
  purpose: [
    'Manage static pages and landing pages',
    'Support hero sections and block-based layouts',
    'SEO optimization with meta fields',
    'Live preview and draft versioning'
  ],

  // Public API (What others can import)
  publicAPI: {
    collections: ['Pages'],
    hooks: ['revalidatePage', 'revalidateDelete']
  },

  // Internal API (Private)
  internalAPI: {
    hooks: ['populatePublishedAt'],
    utils: ['generatePreviewPath']
  },

  // Dependencies
  dependencies: {
    blocks: [
      'ArchiveBlock',
      'CallToAction',
      'Content',
      'FormBlock',
      'MediaBlock'
    ],
    collections: ['media'],
    utilities: [
      'generatePreviewPath',
      'populatePublishedAt'
    ],
    external: [
      'payload',
      '@payloadcms/plugin-seo',
      '@payloadcms/richtext-lexical'
    ]
  },

  // Architecture Rules
  rules: {
    noDirectBlockImport: {
      target: ['index.ts', '**/*.ts'],
      allow: ['blocks/ArchiveBlock', 'blocks/CallToAction', 'blocks/Content', 'blocks/FormBlock', 'blocks/MediaBlock'],
      message: 'Pages collection should only import configured blocks'
    }
  },

  // Metadata
  metadata: {
    owner: 'content-team',
    lastReviewed: '2025-12-31',
    nextReview: '2026-03-31'
  }
} as Manifest
