import { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'phone', 'source', 'createdAt'],
    listSearchableFields: ['name', 'company', 'phone', 'source'],
  },
  access: {
    read: authenticated,
    create: () => true,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: '姓名',
    },
    {
      name: 'company',
      type: 'text',
      required: true,
      label: '公司名称',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: '联系电话',
    },
    {
      name: 'source',
      type: 'text',
      label: '来源',
      admin: {
        description: '例如: whitepaper:business-finance-strategic-restructuring',
      },
    },
    {
      name: 'resourceTitle',
      type: 'text',
      label: '资源标题',
    },
  ],
  timestamps: true,
}
