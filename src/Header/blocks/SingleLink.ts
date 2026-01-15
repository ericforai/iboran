import { Block } from 'payload'
import { link } from '@/fields/link'

export const SingleLink: Block = {
  slug: 'singleLink',
  labels: {
    singular: 'Link',
    plural: 'Links',
  },
  fields: [
    link({ appearances: false }),
  ],
}
