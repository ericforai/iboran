import { Block } from 'payload'

export const CollectionMenu: Block = {
  slug: 'collectionMenu',
  labels: {
    singular: 'Collection Menu',
    plural: 'Collection Menus',
  },
  fields: [
    {
      name: 'linkLabel',
      type: 'text',
      label: 'Menu Label',
      required: true, 
    },
    {
      name: 'collectionSlug',
      type: 'select',
      options: [
        { label: 'Industry Solutions', value: 'industry-solutions' },
        { label: 'Success Stories', value: 'success-stories' },
      ],
      required: true,
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 20,
    },
  ],
}
