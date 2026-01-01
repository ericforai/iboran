/**
 * J1: SELF-DESCRIPTION
 *
 * Posts collection - Blog content management with SEO and GEO optimization
 * Location: src/collections/Posts/manifest.config.ts
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
  id: 'collections/posts',
  name: 'Posts',
  version: '1.0.0',
  type: 'collection',

  // Purpose Statement
  purpose: [
    'Blog and article content management',
    'Rich text editing with lexical editor',
    'SEO optimization with meta fields',
    'GEO optimization (TL;DR, FAQs, decision frameworks)',
    'Related posts and categories',
    'Author management and attribution'
  ],

  // Public API
  publicAPI: {
    collections: ['Posts'],
    hooks: ['revalidatePost', 'revalidateDelete', 'populateAuthors']
  },

  // Internal API
  internalAPI: {
    hooks: ['populateAuthors'],
    utils: ['generatePreviewPath']
  },

  // Dependencies
  dependencies: {
    blocks: ['Banner', 'Code', 'MediaBlock'],
    collections: ['media', 'users', 'categories'],
    utilities: ['generatePreviewPath'],
    external: [
      'payload',
      '@payloadcms/plugin-seo',
      '@payloadcms/richtext-lexical'
    ]
  },

  // Architecture Rules
  rules: {
    noDirectUserAccess: {
      target: ['index.ts'],
      forbidden: ['collections/Users/index'],
      message: 'Use populatedAuthors instead of direct user access for privacy'
    }
  },

  metadata: {
    owner: 'content-team',
    lastReviewed: '2025-12-31',
    nextReview: '2026-03-31'
  }
} as Manifest
