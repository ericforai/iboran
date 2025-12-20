import { Block } from 'payload'

export const BenefitMetricsBlock: Block = {
  slug: 'benefitMetrics',
  labels: {
    singular: 'Benefit Metrics Block',
    plural: 'Benefit Metrics Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'metrics',
      label: 'Metrics',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          label: 'Value',
          type: 'text',
          required: true,
        },
        {
          name: 'suffix',
          label: 'Suffix (e.g., %, +, etc.)',
          type: 'text',
        },
      ],
    },
  ],
}
