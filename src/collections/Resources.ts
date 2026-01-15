import { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const Resources: CollectionConfig = {
  slug: 'resources',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'updatedAt'],
    preview: (doc) => {
      return `${process.env.NEXT_PUBLIC_SERVER_URL}/resources/${doc.slug}`
    },
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media/resources',
    mimeTypes: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: '标题',
    },
    slugField(),
    {
      name: 'subtitle',
      type: 'text',
      label: '副标题',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: '白皮书 (Whitepaper)', value: 'whitepaper' },
        { label: '成功案例 (Case Study)', value: 'case-study' },
        { label: '产品手册 (Product Manual)', value: 'manual' },
        { label: '培训课件 (Training)', value: 'training' },
      ],
    },
    {
      name: 'coverImage',
      type: 'relationship',
      relationTo: 'media',
      label: '封面图',
    },
    {
      name: 'readTime',
      type: 'text',
      label: '阅读时长',
      defaultValue: '15分钟',
      admin: {
        description: '例如: 15分钟',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: '发布日期',
      admin: {
        date: {
          displayFormat: 'yyyy-MM-dd',
        },
      },
    },
    {
      name: 'gated',
      label: '门控内容 (需要留资)',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: '开启后用户需要填写表单才能查看完整内容',
      },
    },
    {
      name: 'summary',
      type: 'textarea',
      label: '简介',
      admin: {
        description: '显示在列表页的简短描述',
      },
    },
    {
      name: 'contentType',
      type: 'select',
      label: '内容类型',
      defaultValue: 'file',
      options: [
        { label: '文件下载', value: 'file' },
        { label: '网页内容', value: 'webpage' },
      ],
    },
    // 网页内容字段
    {
      name: 'previewContent',
      type: 'richText',
      label: '预览内容 (免费可见)',
      admin: {
        condition: (data) => data.contentType === 'webpage',
        description: '用户无需留资即可看到的内容，用于吸引留资',
      },
    },
    {
      name: 'fullContent',
      type: 'richText',
      label: '完整内容 (需要解锁)',
      admin: {
        condition: (data) => data.contentType === 'webpage' && data.gated === true,
        description: '用户留资后才能看到的完整内容',
      },
    },
    // 文件下载字段 (保持兼容)
    {
      name: 'url',
      type: 'text',
      label: '文件链接',
      admin: {
        condition: (data) => data.contentType === 'file',
        description: '文件的URL地址',
      },
    },
    {
      name: 'filesize',
      type: 'number',
      label: '文件大小 (字节)',
      admin: {
        condition: (data) => data.contentType === 'file',
      },
    },
    {
      name: 'relatedSolutions',
      type: 'relationship',
      relationTo: 'industry-solutions',
      hasMany: true,
      label: '关联解决方案',
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA按钮文案',
      defaultValue: '联系获取同款方案',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'CTA跳转链接',
      defaultValue: '/contact',
    },
  ],
  versions: {
    drafts: true,
  },
}
