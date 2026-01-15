import { Block } from 'payload'

export const PainPointsBlock: Block = {
  slug: 'painPoints',
  labels: {
    singular: 'Pain Point Block',
    plural: 'Pain Point Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'points',
      label: 'Pain Points',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      required: true,
      fields: [
        {
          name: 'icon',
          label: 'Icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          label: 'Point Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Point Description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
