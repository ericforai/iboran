import { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'phone', 'utmData.utm_source', 'utmData.utm_campaign', 'createdAt'],
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
    {
      name: 'utmData',
      type: 'group',
      label: 'UTM 归因数据',
      admin: {
        description: '自动捕获的 UTM 参数和归因信息',
      },
      fields: [
        {
          name: 'utm_source',
          type: 'text',
          label: 'UTM Source',
          admin: {
            description: '流量来源: baidu, google, wechat, douyin, email',
          },
        },
        {
          name: 'utm_medium',
          type: 'text',
          label: 'UTM Medium',
          admin: {
            description: '媒介类型: cpc, organic, social, email',
          },
        },
        {
          name: 'utm_campaign',
          type: 'text',
          label: 'UTM Campaign',
          admin: {
            description: '活动名称: yonsuite_launch, spring_promo',
          },
        },
        {
          name: 'utm_content',
          type: 'text',
          label: 'UTM Content',
          admin: {
            description: '内容标识: hero_cta, sidebar_banner',
          },
        },
        {
          name: 'utm_term',
          type: 'text',
          label: 'UTM Term',
          admin: {
            description: '关键词: 用友实施, ERP系统',
          },
        },
        {
          name: 'referrer',
          type: 'text',
          label: 'Referrer',
          admin: {
            description: '来源页面 URL',
          },
        },
        {
          name: 'landingPage',
          type: 'text',
          label: 'Landing Page',
          admin: {
            description: '首次访问页面 URL',
          },
        },
        {
          name: 'pageHistory',
          type: 'text',
          label: 'Page History',
          admin: {
            description: '访问路径历史 (JSON 数组)',
          },
        },
      ],
    },
  ],
  timestamps: true,
}
