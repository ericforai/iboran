import type { CollectionConfig } from 'payload'
import { Code } from '../blocks/Code/config'
import { CallToAction } from '../blocks/CallToAction/config'
import { Content } from '../blocks/Content/config'
import { MediaBlock } from '../blocks/MediaBlock/config'

export const SuccessStories: CollectionConfig<'success-stories'> = {
  slug: 'success-stories',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'clientName', 'updatedAt'],
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
      admin: {
        description: 'MUST be English kebab-case (e.g., zhukuang-finance-operations)',
      },
    },
    {
      name: 'clientName',
      type: 'text',
      label: 'Client Name',
    },
    {
      name: 'industry',
      type: 'text',
      label: 'Industry',
    },
    {
      name: 'logoUrl',
      type: 'text',
      label: 'Client Logo URL',
      admin: {
        description: 'Customer logo for trust signal in hero section',
      },
    },
    {
      name: 'tldr',
      label: 'TL;DR / Executive Summary',
      type: 'textarea',
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Published Date',
      admin: {
        description: 'Display in meta information bar',
      },
    },
    {
      name: 'testimonial',
      type: 'textarea',
      label: 'Customer Testimonial',
      admin: {
        description: 'Quote from customer for social proof',
      },
    },
    {
      name: 'testimonialAuthor',
      type: 'text',
      label: 'Testimonial Author',
      admin: {
        description: 'Name and title (e.g., "张三 - CIO")',
      },
    },
    {
      name: 'projectOverview',
      type: 'group',
      fields: [
        { name: 'client', type: 'text' },
        { name: 'industry', type: 'text' },
        { name: 'scope', type: 'text' },
        { name: 'cycle', type: 'text' },
        { name: 'deliveryMode', type: 'text' },
        { name: 'keyConstraints', type: 'text' },
      ],
    },
    {
      name: 'challenges',
      type: 'array',
      fields: [{ name: 'challenge', type: 'text' }],
    },
    {
      name: 'goals',
      type: 'group',
      fields: [
        { name: 'objectives', type: 'array', fields: [{ name: 'item', type: 'text' }] },
        { name: 'acceptance', type: 'array', fields: [{ name: 'item', type: 'text' }] },
      ],
    },
    {
      name: 'solution',
      type: 'group',
      fields: [
        { name: 'oneLiner', type: 'text' },
        { name: 'modules', type: 'array', fields: [{ name: 'item', type: 'text' }] },
        { name: 'keyDesign', type: 'text' },
      ],
    },
    {
      name: 'deliveryProcess',
      type: 'array',
      fields: [
        { name: 'milestone', type: 'text' },
        { name: 'detail', type: 'textarea' },
      ],
    },
    {
      name: 'integration',
      type: 'group',
      fields: [
        { name: 'list', type: 'array', fields: [{ name: 'item', type: 'text' }] },
        { name: 'architecture', type: 'textarea' },
        { name: 'methods', type: 'text' },
      ],
    },
    {
      name: 'keyResults',
      type: 'group',
      fields: [
        { name: 'efficiency', type: 'text' },
        { name: 'quality', type: 'text' },
        { name: 'risk', type: 'text' },
        { name: 'business', type: 'text' },
      ],
    },
    {
      name: 'whyBoran',
      type: 'array',
      fields: [{ name: 'reason', type: 'text' }],
    },
    {
      name: 'methodology',
      type: 'group',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'steps', type: 'array', fields: [{ name: 'item', type: 'text' }] },
        { name: 'targets', type: 'array', fields: [{ name: 'item', type: 'text' }] },
        { name: 'deliverables', type: 'array', fields: [{ name: 'item', type: 'text' }] },
      ],
    },
    {
      name: 'relatedCases',
      type: 'array',
      label: 'Related Cases',
      fields: [
        {
          name: 'case',
          type: 'relationship',
          relationTo: 'success-stories',
          label: 'Related Case',
        },
      ],
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [Code, CallToAction, Content, MediaBlock],
    },
  ],
}
