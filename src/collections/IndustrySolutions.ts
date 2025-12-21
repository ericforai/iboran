import type { CollectionConfig } from 'payload'
import { PainPointsBlock } from '../blocks/PainPoints/config'
import { MethodologyBlock } from '../blocks/Methodology/config'
import { BenefitMetricsBlock } from '../blocks/BenefitMetrics/config'
import { Code } from '../blocks/Code/config'
import { CallToAction } from '../blocks/CallToAction/config'
import { Content } from '../blocks/Content/config'
import { MediaBlock } from '../blocks/MediaBlock/config'

export const IndustrySolutions: CollectionConfig<'industry-solutions'> = {
  slug: 'industry-solutions',
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
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'summary',
      type: 'textarea',
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [
        PainPointsBlock,
        MethodologyBlock,
        BenefitMetricsBlock,
        Code,
        CallToAction,
        Content,
        MediaBlock,
      ],
    },
    {
      name: 'relatedSuccessStories',
      type: 'relationship',
      relationTo: 'success-stories',
      hasMany: true,
    },
  ],
}
