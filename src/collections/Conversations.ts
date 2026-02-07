import type { CollectionConfig } from 'payload'

import { authenticated } from '@/access/authenticated'

export const Conversations: CollectionConfig = {
  slug: 'conversations',
  admin: {
    useAsTitle: 'visitorId',
    defaultColumns: ['visitorId', 'mode', 'handoffStatus', 'needsHuman', 'lastMessageAt', 'updatedAt'],
    listSearchableFields: ['visitorId', 'sourcePage'],
  },
  access: {
    read: authenticated,
    create: () => true,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'visitorId',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'sourcePage',
      type: 'text',
    },
    {
      name: 'mode',
      type: 'select',
      required: true,
      defaultValue: 'ai',
      options: [
        {
          label: 'AI',
          value: 'ai',
        },
        {
          label: 'Human',
          value: 'human',
        },
        {
          label: 'Hybrid',
          value: 'hybrid',
        },
      ],
    },
    {
      name: 'handoffStatus',
      type: 'select',
      required: true,
      defaultValue: 'none',
      index: true,
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Requested',
          value: 'requested',
        },
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Closed',
          value: 'closed',
        },
      ],
    },
    {
      name: 'needsHuman',
      type: 'checkbox',
      defaultValue: false,
      index: true,
    },
    {
      name: 'lastMessageAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      index: true,
    },
    {
      name: 'assignedAgent',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'handoffReminderSent',
      type: 'checkbox',
      defaultValue: false,
      index: true,
    },
    {
      name: 'handoffReminderSentAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
  timestamps: true,
}
