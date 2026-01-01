/**
 * J1: SELF-DESCRIPTION
 *
 * Components module - Reusable UI components
 * Location: src/components/manifest.config.ts
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
  id: 'components/ui',
  name: 'Components',
  version: '1.0.0',
  type: 'component',

  // Purpose Statement
  purpose: [
    'Reusable UI components',
    'Navigation and header components',
    'Footer and layout components',
    'Media and rich text rendering',
    'Cards and content display',
    'Search and filtering',
    'Modals and interactive components',
    'Performance monitoring'
  ],

  // Public API (Key components that others import)
  publicAPI: {
    components: [
      // Core components
      'CMSLink',
      'Logo',
      'Media',
      'RichText',

      // Navigation
      'Navbar',
      'Footer',

      // Cards and Display
      'Card',
      'ResourceCard',
      'SolutionCard',
      'StoryCard',
      'NeuFeatureCard',
      'NeuStatCard',

      // Interactive
      'SearchBar',
      'CategoryFilter',
      'Pagination',
      'PageRange',

      // Modals
      'ConsultationModal',
      'DemoRequestModal',

      // Monitoring
      'WebVitals',
      'LivePreviewListener',
      'ReactScan'
    ],
    types: ['CMSLinkType', 'Page', 'Post']
  },

  // Internal API (Helper components and utilities)
  internalAPI: {
    components: [
      'AdminBar',
      'BeforeDashboard',
      'BeforeLogin',
      'CollectionArchive',
      'GEOJsonLd',
      'GEORenderer',
      'MetricDisplay',
      'MobileStickyBar',
      'NeuStepPill',
      'PayloadRedirects'
    ]
  },

  // Dependencies
  dependencies: {
    collections: ['pages', 'posts', 'media'],
    blocks: ['ArchiveBlock', 'Content'],
    utilities: ['classnames', 'cn'],
    external: [
      'react',
      'next/link',
      'next/image',
      'framer-motion',
      'lucide-react'
    ]
  },

  // Architecture Rules
  rules: {
    // Components should not import from pages/posts internals
    noCollectionInternals: {
      target: ['components/**/*'],
      forbidden: ['collections/**/hooks/**', 'collections/**/internal/**'],
      message: 'Components must use public API, not internal collection hooks'
    },

    // UI components should not access Payload CMS internals directly
    noDirectPayloadAccess: {
      target: ['components/**/*'],
      forbidden: ['payload/**'],
      allow: ['payload-types'],
      message: 'Components should use provided props, not direct Payload access'
    }
  },

  metadata: {
    owner: 'ui-team',
    lastReviewed: '2025-12-31',
    nextReview: '2026-03-31'
  }
} as Manifest
