import type { Block } from 'payload'

export const Code: Block = {
  slug: 'code',
  interfaceName: 'CodeBlock',
  fields: [
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      defaultValue: 'code-snippet',
      options: [
        {
          label: 'Code Snippet',
          value: 'code-snippet',
        },
        {
          label: 'Raw HTML',
          value: 'raw-html',
        },
      ],
    },
    {
      name: 'language',
      type: 'select',
      defaultValue: 'typescript',
      options: [
        {
          label: 'Typescript',
          value: 'typescript',
        },
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'CSS',
          value: 'css',
        },
        {
          label: 'HTML',
          value: 'html',
        },
      ],
      admin: {
        condition: ({ type }) => type === 'code-snippet',
      },
    },
    {
      name: 'code',
      type: 'textarea',
      label: false,
      required: true,
    },
  ],
}
