/**
 * J1: SELF-DESCRIPTION
 *
 * Users collection - User management and authentication
 * Location: src/collections/Users/manifest.config.ts
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
  id: 'collections/users',
  name: 'Users',
  version: '1.0.0',
  type: 'collection',

  // Purpose Statement
  purpose: [
    'User authentication and authorization',
    'User profile management',
    'Access control and permissions',
    'Author attribution for posts'
  ],

  // Public API
  publicAPI: {
    collections: ['Users']
  },

  // Internal API
  internalAPI: {
    hooks: ['accessControl']
  },

  // Dependencies
  dependencies: {
    utilities: ['authenticated'],
    external: ['payload']
  },

  // Architecture Rules
  rules: {
    strictPrivacy: {
      target: ['**/*.ts'],
      forbidden: ['direct-user-export'],
      message: 'User data must not be directly exposed. Use populatedAuthors instead.'
    }
  },

  metadata: {
    owner: 'auth-team',
    lastReviewed: '2025-12-31',
    nextReview: '2026-03-31'
  }
} as Manifest
