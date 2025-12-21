import { CollectionConfig } from 'payload'

export const Resources: CollectionConfig = {
  slug: 'resources',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media/resources',
    mimeTypes: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: '白皮书 (Whitepaper)', value: 'whitepaper' },
        { label: '成功案例 (Case Study)', value: 'case-study' },
        { label: '产品手册 (Product Manual)', value: 'manual' },
        { label: '培训课件 (Training)', value: 'training' },
      ],
    },
    {
      name: 'relatedSolutions',
      type: 'relationship',
      relationTo: 'industry-solutions',
      hasMany: true,
    },
    {
      name: 'gated',
      label: 'Gated Content (Requires lead form)',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'summary',
      type: 'textarea',
    },
  ],
}
