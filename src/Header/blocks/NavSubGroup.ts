import { Block } from 'payload'
import { SingleLink } from './SingleLink'

export const NavSubGroup: Block = {
  slug: 'navSubGroup',
  labels: {
    singular: 'Sub Group',
    plural: 'Sub Groups',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      type: 'blocks',
      blocks: [SingleLink],
    },
  ],
}
