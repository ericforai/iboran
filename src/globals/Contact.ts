import type { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Admin',
  },
  fields: [
    {
      name: 'phone',
      type: 'text',
      label: '咨询热线',
      required: true,
      defaultValue: '400-9955-161',
    },
    {
      name: 'wechatId',
      type: 'text',
      label: '微信号',
      required: true,
      defaultValue: 'boran_software',
    },
    {
      name: 'wechatQR',
      type: 'upload',
      label: '企业微信二维码',
      relationTo: 'media',
      required: false,
    },
  ],
}
