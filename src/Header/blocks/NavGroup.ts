import { Block } from 'payload'
import { SingleLink } from './SingleLink'
import { CollectionMenu } from './CollectionMenu'
import { NavSubGroup } from './NavSubGroup'

export const NavGroup: Block = {
  slug: 'navGroup',
  labels: {
    singular: 'Group',
    plural: 'Groups',
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
      blocks: [SingleLink, CollectionMenu, NavSubGroup],
    },
  ],
}
