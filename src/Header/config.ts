import type { GlobalConfig } from 'payload'

import { revalidateHeader } from './hooks/revalidateHeader'
import { SingleLink } from './blocks/SingleLink'
import { NavGroup } from './blocks/NavGroup'
import { CollectionMenu } from './blocks/CollectionMenu'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'blocks',
      blocks: [
        SingleLink,
        NavGroup,
        CollectionMenu,
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}