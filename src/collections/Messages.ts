import type { CollectionConfig } from 'payload'

import { authenticated } from '@/access/authenticated'

/**
 * Create compound indexes for better query performance.
 * This should be called after the collection is created.
 * Run in MongoDB shell or through a migration script.
 *
 * db.messages.createIndex({ conversation: 1, createdAt: 1 })
 */
const ensureIndexes = async () => {
  // This would be called in a migration script or database setup
  // For now, documenting the required index
  console.log('Messages collection requires compound index: { conversation: 1, createdAt: 1 }')
}

export const Messages: CollectionConfig = {
  slug: 'messages',
  admin: {
    useAsTitle: 'clientMessageId',
    defaultColumns: ['conversation', 'role', 'clientMessageId', 'createdAt'],
  },
  access: {
    read: authenticated,
    create: () => true,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'conversation',
      type: 'relationship',
      relationTo: 'conversations',
      required: true,
      index: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Visitor',
          value: 'visitor',
        },
        {
          label: 'AI',
          value: 'ai',
        },
        {
          label: 'Agent',
          value: 'agent',
        },
        {
          label: 'System',
          value: 'system',
        },
      ],
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'clientMessageId',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'meta',
      type: 'json',
    },
  ],
  timestamps: true,
}
