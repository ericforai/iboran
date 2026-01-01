/**
 * J1: SELF-DESCRIPTION
 *
 * Form Block - Dynamic form builder component
 * Location: src/blocks/Form/manifest.config.ts
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
  id: 'blocks/form',
  name: 'FormBlock',
  version: '1.0.0',
  type: 'block',

  // Purpose Statement
  purpose: [
    'Dynamic form rendering with field types',
    'Form validation and error handling',
    'Country and state selection',
    'Form submission handling',
    'Responsive form layout'
  ],

  // Public API
  publicAPI: {
    components: ['FormBlock', 'Form'],
    types: ['FormBlockFields']
  },

  // Internal API (Private sub-components)
  internalAPI: {
    components: [
      'Text',
      'Email',
      'Textarea',
      'Select',
      'Checkbox',
      'Country',
      'Number',
      'Message',
      'Error',
      'State',
      'Width'
    ],
    utils: ['validationUtils']
  },

  // Dependencies
  dependencies: {
    collections: ['forms'],
    utilities: ['classnames'],
    external: [
      'react',
      'react-hook-form',
      'payload'
    ]
  },

  // Architecture Rules
  rules: {
    noDirectFieldImport: {
      target: ['Component.tsx'],
      allowedInternal: true,
      message: 'Only Component.tsx should import internal field components'
    }
  },

  metadata: {
    owner: 'ui-team',
    lastReviewed: '2025-12-31',
    nextReview: '2026-03-31'
  }
} as Manifest
