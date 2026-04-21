import { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

// HTML escape function to prevent XSS attacks in email content
const escapeHtml = (unsafe: string | undefined): string => {
  if (typeof unsafe !== 'string') return ''
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// Source code to Chinese label mapping
const getSourceLabel = (source: string | undefined): string => {
  if (!source) return '未知来源'

  const sourceMap: Record<string, string> = {
    // Modal sources (dynamic based on page)
    'demo-modal': '演示请求弹窗',
    'blog-post-demo': '博客文章演示',
    'product-yonsuite-demo': 'YonSuite产品演示',
    'product-u8cloud-demo': 'U8Cloud产品演示',
    'product-yonbuilder-demo': 'YonBuilder产品演示',
    'product-bip-demo': 'YonBIP产品演示',
    'product-collaborative-office-demo': '协同办公产品演示',
    'product-enterprise-portal-demo': '企业门户产品演示',
    'solution-page-demo': '解决方案演示',
    'case-study-demo': '成功案例演示',
    'about-page-demo': '关于我们演示',
    'exit-intent-modal': '离开意图弹窗',

    // Page sources
    'contact-page': '联系我们页面',

    // Product pages
    'Product_YonSuite': 'YonSuite 产品页',
    'Product_YonSuite_Bottom': 'YonSuite 底部CTA',
    'Product_YonBuilder': 'YonBuilder 产品页',
    'Product_U8Cloud': 'U8Cloud 产品页',
    'Product_BIP': 'YonBIP 产品页',
    'Product_BIP_Bottom': 'YonBIP 底部CTA',
    'Product_Collaborative_Office': '协同办公产品页',
    'Product_Collaborative_Office_Footer': '协同办公底部CTA',
    'CTA_U8Cloud': 'U8Cloud CTA',

    // Industry solutions
    'industry-catering': '餐饮行业方案',
    'industry-catering-cta': '餐饮行业方案CTA',
    'industry-beer': '啤酒行业方案',
    'industry-beer-cta': '啤酒行业方案CTA',
    'industry-baijiu': '白酒行业方案',
    'industry-baijiu-cta': '白酒行业方案CTA',
    'industry-cosmetics': '化妆品行业方案',
    'industry-cosmetics-cta': '化妆品行业方案CTA',
    'industry-home-appliances': '家电行业方案',
    'industry-home-appliances-cta': '家电行业方案CTA',
    'biomedical-cdmo': '生物医药CDMO方案',
    'biomedical-cdmo-hero': '生物医药CDMO首屏',
    'biomedical-cdmo-cta': '生物医药CDMO CTA',
    'industry-business-services': '商务服务业方案',
    'industry-business-services-bottom': '商务服务业底部CTA',
    'industry-medical-device': '医疗器械行业方案',
    'industry-medical-device-cta': '医疗器械行业CTA',
    'industry-electronic-ic': '电子IC行业方案',
    'industry-electronic-ic-cta': '电子IC行业CTA',
    'industry-state-owned': '国企央企方案',
    'industry-internet': '互联网行业方案',
    'industry-internet-cta': '互联网行业CTA',
    'industry-professional-services': '专业服务业方案',
    'industry-professional-services-cta': '专业服务业CTA',
    'industry-tech-services': '科技服务业方案',
    'industry-traditional-chinese-medicine': '中医药行业方案',

    // Business solutions
    'AdvantageSection_DeliveryConsultation': '交付咨询',

    // Default fallback - show original code with description prefix
  }

  return sourceMap[source] || `${source}`
}

type LeadData = {
  id: string
  name: string
  company: string
  phone: string
  source?: string
  sourcePath?: string
  sourcePageUrl?: string
  resourceTitle?: string
  pageSlug?: string
  utmData?: {
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    utm_content?: string
    utm_term?: string
    referrer?: string
    landingPage?: string
    pageHistory?: string
  }
  notes?: string
  createdAt: string
}

const sendLeadEmail = [
  async ({ doc, operation, req }: { doc: any; operation: string; req: any }) => {
    if (operation !== 'create') return

    const lead = doc as LeadData
    const adminEmail = process.env.LEAD_EMAIL_TO || 'hzwyz@qq.com, zsw@in-sun.com'
    // Support multiple recipients (comma-separated or array)
    const emailRecipients = adminEmail.includes(',') ? adminEmail.split(',').map((e: string) => e.trim()) : adminEmail
    const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.iboran.com'

    // Fetch post title for blog posts
    let postTitle: string | null = null
    if (lead.source === 'blog-post-demo' && lead.pageSlug) {
      try {
        const post = await req.payload.findByID({
          collection: 'posts',
          slug: lead.pageSlug,
          depth: 0,
        })
        if (post && typeof post === 'object' && 'title' in post) {
          postTitle = (post as any).title as string
        }
      } catch (e) {
        // Silently fail if post not found
        console.log(`Post not found for slug: ${lead.pageSlug}`)
      }
    }

    // Escape all user-provided data to prevent XSS
    const utmRows = lead.utmData ? [
      lead.utmData.utm_source ? `<tr><td style="padding: 4px 0; color: #666;">来源:</td><td>${escapeHtml(lead.utmData.utm_source)}</td></tr>` : '',
      lead.utmData.utm_medium ? `<tr><td style="padding: 4px 0; color: #666;">媒介:</td><td>${escapeHtml(lead.utmData.utm_medium)}</td></tr>` : '',
      lead.utmData.utm_campaign ? `<tr><td style="padding: 4px 0; color: #666;">活动:</td><td>${escapeHtml(lead.utmData.utm_campaign)}</td></tr>` : '',
      lead.utmData.landingPage ? `<tr><td style="padding: 4px 0; color: #666;">落地页:</td><td>${escapeHtml(lead.utmData.landingPage)}</td></tr>` : '',
    ].filter(Boolean).join('') : ''

    const escapedName = escapeHtml(lead.name)
    const escapedCompany = escapeHtml(lead.company)
    // Generate source label with title for blog posts
    let sourceLabel = getSourceLabel(lead.source)
    if (lead.source === 'blog-post-demo' && postTitle) {
      sourceLabel = `博客文章: ${postTitle}`
    }
    const escapedSource = escapeHtml(sourceLabel)
    
    // Notes block for extra info
    const notesBlock = lead.notes ? `<div style="background-color: #fff8e1; padding: 15px; border-radius: 4px; margin-bottom: 20px;"><h4 style="margin: 0 0 10px 0; color: #f57f17;">备注信息</h4><p style="margin: 0; color: #555; font-size: 14px; white-space: pre-wrap;">${escapeHtml(lead.notes)}</p></div>` : ''

    try {
      await req.payload.sendEmail({
        from: process.env.SMTP_FROM || 'noreply@iboran.com',
        to: emailRecipients,
        subject: `🔔 新客户咨询 - ${escapedCompany} - ${escapedName}`,
        html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;"><div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><h2 style="color: #E60012; margin: 0 0 20px 0;">🔔 新客户咨询</h2><div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-bottom: 20px;"><h3 style="margin: 0 0 10px 0; color: #1F2329;">客户信息</h3><table style="width: 100%; border-collapse: collapse;"><tr><td style="padding: 8px 0; color: #666;"><strong>姓名:</strong></td><td style="padding: 8px 0;">${escapedName}</td></tr><tr><td style="padding: 8px 0; color: #666;"><strong>公司:</strong></td><td style="padding: 8px 0;">${escapedCompany}</td></tr><tr><td style="padding: 8px 0; color: #666;"><strong>电话:</strong></td><td style="padding: 8px 0;"><a href="tel:${lead.phone}" style="color: #0052D9;">${escapeHtml(lead.phone)}</a></td></tr>${escapedSource ? `<tr><td style="padding: 8px 0; color: #666;"><strong>来源:</strong></td><td style="padding: 8px 0;">${escapedSource}</td></tr>` : ''}</table></div>${notesBlock}${utmRows ? `<div style="background-color: #f0f7ff; padding: 15px; border-radius: 4px; margin-bottom: 20px;"><h4 style="margin: 0 0 10px 0; color: #0052D9;">UTM 归因信息</h4><table style="width: 100%; border-collapse: collapse; font-size: 14px;">${utmRows}</table></div>` : ''}<p style="color: #999; font-size: 12px; margin: 20px 0 0 0;">提交时间: ${new Date(lead.createdAt).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p><div style="text-align: center; margin-top: 30px;"><a href="${siteUrl}/admin/collections/leads/${lead.id}" style="display: inline-block; padding: 12px 30px; background-color: #E60012; color: #ffffff; text-decoration: none; border-radius: 4px;">查看详情</a></div></div></div>`,
      })

      console.log(`✅ Lead email sent to ${adminEmail} for ${lead.name} from ${lead.company}`)
    } catch (error) {
      console.error('❌ Failed to send lead email:', error)
    }
  },
]

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'phone', 'source', 'sourcePath', 'sourcePageUrl', 'pageSlug', 'utmData.utm_source', 'utmData.utm_campaign', 'createdAt'],
    listSearchableFields: ['name', 'company', 'phone', 'source', 'sourcePath', 'sourcePageUrl', 'pageSlug'],
  },
  access: {
    read: authenticated,
    create: () => true,
    update: authenticated,
    delete: authenticated,
  },
  hooks: {
    afterChange: sendLeadEmail,
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
      name: 'sourcePath',
      type: 'text',
      label: '来源路径',
      admin: {
        description: '例如: /products/bip',
      },
    },
    {
      name: 'sourcePageUrl',
      type: 'text',
      label: '来源页面URL',
      admin: {
        description: '提交时页面完整 URL',
      },
    },
    {
      name: 'resourceTitle',
      type: 'text',
      label: '资源标题',
    },
    {
      name: 'pageSlug',
      type: 'text',
      label: '页面Slug',
      admin: {
        description: '文章或产品页面的URL标识，用于查找标题',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      label: '备注 / 额外信息',
      admin: {
        description: '用于存储表单中的行业、岗位、具体痛点等其他自定义字段信息',
      },
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
