import type { CollectionConfig } from 'payload'

import { authenticated } from '@/access/authenticated'

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
