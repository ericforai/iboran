import type { CollectionConfig } from 'payload'
import { Code } from '../blocks/Code/config'
import { CallToAction } from '../blocks/CallToAction/config'
import { Content } from '../blocks/Content/config'
import { MediaBlock } from '../blocks/MediaBlock/config'

export const SuccessStories: CollectionConfig<'success-stories'> = {
  slug: 'success-stories',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'clientName',
      type: 'text',
    },
    {
      name: 'industry',
      type: 'text', // Keeping it simple for now, can be a relationship later
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [Code, CallToAction, Content, MediaBlock],
    },
  ],
}
