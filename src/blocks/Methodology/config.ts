import { Block } from 'payload'

export const MethodologyBlock: Block = {
  slug: 'methodology',
  labels: {
    singular: 'Methodology Block',
    plural: 'Methodology Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'steps',
      label: 'Steps',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'title',
          label: 'Step Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Step Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          label: 'Step Image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
