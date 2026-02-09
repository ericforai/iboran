# UTM 转化跟踪系统实施计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

> **实施状态：** ✅ 已完成 (2025-01-31)

**Goal:** 构建完整的 UTM 转化跟踪系统，支持 GA4、百度统计和后端数据存储，跟踪表单提交、微信咨询和电话拨号等转化行为。

**Architecture:**
1. 扩展现有的 `AttributionProvider`，保持 UTM 参数捕获逻辑
2. 新增 `AnalyticsProvider` 统一管理 GA4 和百度统计事件发送
3. 扩展 `Leads` collection 存储 UTM 参数
4. 新增 `useConversionTracking` hook 简化事件调用
5. 新增内部 UTM 链接生成器工具页面

**Tech Stack:** Next.js 15 App Router, Payload CMS 3.x, GA4 gtag.js, 百度统计 HMT, TypeScript

---

## 转化事件映射表

| 中文名 | GA4 事件 | 百度统计 | 触发场景 |
|--------|----------|----------|----------|
| 表单提交 | `generate_lead` | `lead_submit` | 白皮书下载、咨询表单 |
| 微信打开 | `contact_open` | `wechat_open` | 模态框打开 |
| 微信复制 | `wechat_copy` | `wechat_copy` | 复制微信号 |
| 电话拨号 | `click_phone` | `phone_call` | 点击电话链接 |

## 渠道命名规范

以 `docs/analytics/conversion-events-mapping.md` 为唯一规范源，以下表格为同步摘录。

| 中文名 | utm_source | utm_medium | 使用场景 |
|--------|------------|------------|----------|
| 百度搜索 | `baidu` | `organic` | SEO 自然搜索结果 |
| 百度竞价 | `baidu` | `cpc` | 百度搜索竞价广告 |
| Google 搜索 | `google` | `organic` | Google SEO |
| Google Ads | `google` | `cpc` | Google Ads 竞价 |
| 微信公众号 | `wechat` | `social` | 公众号文章/菜单 |
| 朋友圈广告 | `wechat` | `cpc` | 朋友圈广告投放 |
| 抖音 | `douyin` | `social` | 抖音内容/视频 |
| 抖音信息流 | `douyin` | `cpc` | 抖音竞价广告 |
| LinkedIn | `linkedin` | `social` | LinkedIn 社交内容 |
| EDM 邮件 | `email` | `email` | 邮件营销 |
| 线下二维码 | `direct` | `qr` | 线下物料扫码 |
| 引荐链接 | `<域名>` | `referral` | 其他网站链接跳转 |

---

## Task 1: 扩展 Leads Collection 存储 UTM 参数

**Files:**
- Modify: `src/collections/Leads.ts`

**Step 1: 扩展 Leads 字段**

在现有 fields 数组中添加 UTM 参数字段：

```typescript
// 在 fields 数组中添加（resourceTitle 字段之后）
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
}
```

**Step 2: 更新 defaultColumns**

修改 `admin.defaultColumns` 添加新字段显示：

```typescript
defaultColumns: ['name', 'company', 'phone', 'utmData.utm_source', 'utmData.utm_campaign', 'createdAt'],
```

**Step 3: 生成新类型**

```bash
pnpm generate:types
```

**Step 4: 提交**

```bash
git add src/collections/Leads.ts src/payload-types.ts
git commit -m "feat(leads): add UTM attribution fields to Leads collection"
```

---

## Task 2: 创建 AnalyticsProvider 组件

**Files:**
- Create: `src/providers/Analytics/index.tsx`

**Step 1: 创建 AnalyticsProvider**

```typescript
'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface ConversionEvent {
  category: string
  action: string
  label?: string
}

const AnalyticsContext = React.createContext<{
  trackEvent: (event: ConversionEvent) => void
  trackConversion: (type: string, details?: Record<string, any>) => void
}>({
  trackEvent: () => {},
  trackConversion: () => {},
})

export const useAnalytics = () => React.useContext(AnalyticsContext)

// GA4 事件发送
const sendGA4Event = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', eventName, params)
  }
}

// 百度统计事件发送
const sendBaiduEvent = (category: string, action: string, label?: string) => {
  if (typeof window !== 'undefined' && (window as any)._hmt) {
    ;(window as any)._hmt.push(['_trackEvent', category, action, label])
  }
}

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname()

  useEffect(() => {
    const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    if (gaMeasurementId && !(window as any).gtagInitialized) {
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || []
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date())
        gtag('config', '${gaMeasurementId}')
      `
      document.head.appendChild(script2)
      ;(window as any).gtagInitialized = true
    }

    const baiduSiteId = process.env.NEXT_PUBLIC_BAIDU_SITE_ID
    if (baiduSiteId && !(window as any).baiduInitialized) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://hm.baidu.com/hm.js?${baiduSiteId}`
      document.head.appendChild(script)
      ;(window as any).baiduInitialized = true
    }
  }, [])

  // 页面浏览跟踪
  useEffect(() => {
    if (!pathname) return

    // GA4 pageview
    sendGA4Event('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pathname,
    })

    // 百度统计 pageview (自动处理，无需手动)
  }, [pathname])

  const trackEvent = React.useCallback((event: ConversionEvent) => {
    // 发送到 GA4
    const gaEventName = `${event.category}_${event.action}`
    sendGA4Event(gaEventName, {
      event_category: event.category,
      event_label: event.label,
    })

    // 发送到百度统计
    sendBaiduEvent(event.category, event.action, event.label)

    // 控制台日志（开发环境）
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics] Event tracked:', event)
    }
  }, [])

  const trackConversion = React.useCallback((type: string, details?: Record<string, any>) => {
    trackEvent({
      category: 'conversion',
      action: type,
      label: details?.label,
    })
  }, [trackEvent])

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackConversion }}>
      {children}
    </AnalyticsContext.Provider>
  )
}
```

**Step 2: 在 layout.tsx 中集成**

修改 `src/app/(frontend)/layout.tsx`，将 `AnalyticsProvider` 嵌套：

```typescript
// 在 imports 中添加
import { AnalyticsProvider } from '@/providers/Analytics'

// 在 JSX 中，将 AttributionProvider 包在 AnalyticsProvider 内
<Suspense fallback={<div />}>
  <AnalyticsProvider>
    <AttributionProvider>
      <Navbar contactData={contactData} />
      {children}
      <Footer />
      {/* ... 其他组件 ... */}
    </AttributionProvider>
  </AnalyticsProvider>
</Suspense>
```

**Step 3: 提交**

```bash
git add src/providers/Analytics/index.tsx src/app/(frontend)/layout.tsx
git commit -m "feat(analytics): add AnalyticsProvider for GA4 and Baidu tracking"
```

---

## Task 3: 创建 useConversionTracking Hook

**Files:**
- Create: `src/hooks/useConversionTracking.ts`

**Step 1: 创建 hook**

```typescript
'use client'

import { useCallback } from 'react'
import { useAnalytics } from '@/providers/Analytics'
import { useAttribution } from '@/providers/Attribution'

export interface ConversionData {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  utm_term: string
  referrer: string
  landingPage: string
  pageHistory: string[]
}

/**
 * 转化跟踪 Hook - 统一处理转化事件和数据获取
 */
export const useConversionTracking = () => {
  const analytics = useAnalytics()
  const attribution = useAttribution()

  const getAttributionData = useCallback((): ConversionData => {
    return {
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      utm_content: attribution.utm_content,
      utm_term: attribution.utm_term,
      referrer: attribution.referrer,
      landingPage: attribution.landing_page,
      pageHistory: attribution.history,
    }
  }, [attribution])

  const trackLeadSubmit = useCallback((formType: string, formId?: string) => {
    analytics.trackConversion('generate_lead', {
      label: `${formType}${formId ? `:${formId}` : ''}`,
      form_type: formType,
    })
  }, [analytics])

  const trackWeChatOpen = useCallback((location: string = 'unknown') => {
    analytics.trackConversion('contact_open', {
      label: `wechat:${location}`,
      contact_method: 'wechat',
    })
  }, [analytics])

  const trackWeChatCopy = useCallback((location: string = 'unknown') => {
    analytics.trackConversion('wechat_copy', {
      label: `wechat_copy:${location}`,
      contact_method: 'wechat',
    })
  }, [analytics])

  const trackPhoneCall = useCallback((location: string = 'unknown') => {
    analytics.trackConversion('click_phone', {
      label: `phone:${location}`,
      contact_method: 'phone',
    })
  }, [analytics])

  const trackEvent = useCallback((category: string, action: string, label?: string) => {
    analytics.trackEvent({ category, action, label })
  }, [analytics])

  return {
    getAttributionData,
    trackLeadSubmit,
    trackWeChatOpen,
    trackWeChatCopy,
    trackPhoneCall,
    trackEvent,
  }
}
```

**Step 2: 提交**

```bash
git add src/hooks/useConversionTracking.ts
git commit -m "feat(hooks): add useConversionTracking hook for unified event tracking"
```

---

## Task 4: 扩展 /api/leads 接收 UTM 数据

**Files:**
- Modify: `src/app/(frontend)/api/leads/route.ts`

**Step 1: 扩展接口和请求类型**

```typescript
export interface LeadRequestData {
  name: string
  company: string
  phone: string
  source?: string
  resourceTitle?: string
  // 新增 UTM 数据
  utmData?: {
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    utm_content?: string
    utm_term?: string
    referrer?: string
    landingPage?: string
    pageHistory?: string[]
  }
}
```

**Step 2: 修改创建 lead 的逻辑**

将 `payload.create` 调用更新为：

```typescript
// Create the lead with UTM data
await payload.create({
  collection: 'leads',
  data: {
    name: body.name,
    company: body.company,
    phone: body.phone,
    source: body.source || 'unknown',
    resourceTitle: body.resourceTitle || '',
    utmData: body.utmData || {
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_content: '',
      utm_term: '',
      referrer: '',
      landingPage: '',
      pageHistory: [],
    },
  },
})
```

**Step 3: 提交**

```bash
git add src/app/(frontend)/api/leads/route.ts
git commit -m "feat(api): extend /api/leads to accept UTM attribution data"
```

---

## Task 5: 更新白皮书表单附带 UTM 数据

**Files:**
- Modify: `src/app/(frontend)/resources/[slug]/client.tsx`
- Modify: `src/app/(frontend)/whitepapers/business-finance-strategic-restructuring/client.tsx`

**Step 1: 修改 resources/[slug]/client.tsx**

在 `handleUnlock` 函数中添加 UTM 数据：

```typescript
// 在文件顶部导入
import { useConversionTracking } from '@/hooks/useConversionTracking'

// 在组件内部
export function WhitepaperClient({ resource }: WhitepaperClientProps) {
  const { getAttributionData, trackLeadSubmit } = useConversionTracking()

  // 修改 handleUnlock 函数
  const handleUnlock = async (data: { name: string; company: string; phone: string }) => {
    setIsUnlocking(true)

    try {
      const attributionData = getAttributionData()

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source: `whitepaper:${resource.slug}`,
          resourceTitle: resource.title,
          utmData: attributionData,
        }),
      })

      if (!response.ok) {
        throw new Error('提交失败，请稍后重试')
      }

      trackLeadSubmit('whitepaper', resource.slug)

      // ... 其余代码保持不变 ...
    } catch (err) {
      throw err
    } finally {
      setIsUnlocking(false)
    }
  }

  // ... 其余代码保持不变 ...
}
```

**Step 2: 提交**

```bash
git add src/app/\(frontend\)/resources/\[slug\]/client.tsx
git commit -m "feat(forms): attach UTM data to whitepaper lead submissions"
```

---

## Task 6: 更新 ConsultationModal 跟踪事件

**Files:**
- Modify: `src/components/ConsultationModal/index.tsx`

**Step 1: 添加转化跟踪**

```typescript
import { useConversionTracking } from '@/hooks/useConversionTracking'

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, data }) => {
  const [copied, setCopied] = React.useState(false)
  const { trackWeChatCopy, trackPhoneCall } = useConversionTracking()

  const handleCopy = () => {
    navigator.clipboard.writeText(wechatId)
      .then(() => {
        setCopied(true)
        trackWeChatCopy('modal')
        setTimeout(() => setCopied(false), 2000)
        window.location.href = 'weixin://'
      })
      .catch(() => {
        setCopied(true)
        trackWeChatCopy('modal')
        setTimeout(() => setCopied(false), 2000)
      })
  }

  // 电话链接添加 onClick
  <a
    href={`tel:${phone.replace(/\s+/g, '')}`}
    onClick={() => trackPhoneCall('modal')}
    className="..."
  >
```

**Step 2: 提交**

```bash
git add src/components/ConsultationModal/index.tsx
git commit -m "feat(modal): add conversion tracking to ConsultationModal"
```

---

## Task 7: 更新其他转化点

**Files:**
- Modify: `src/components/FloatingChatButton/index.tsx`
- Modify: `src/components/MobileStickyBar/index.tsx`
- Modify: `src/components/Navbar/NavbarClient.tsx`

**Step 1: 添加微信咨询打开跟踪**

```typescript
import { useConversionTracking } from '@/hooks/useConversionTracking'

export const FloatingChatButton = ({ contactData }: Props) => {
  const { trackWeChatOpen } = useConversionTracking()

  const handleOpen = () => {
    trackWeChatOpen('floating')
    // ... 现有打开逻辑 ...
  }
}
```

**Step 2: 提交**

```bash
git add src/components/FloatingChatButton/index.tsx src/components/MobileStickyBar/index.tsx src/components/Navbar/index.tsx
git commit -m "feat(components): add conversion tracking to navbar and sticky bars"
```

---

## Task 8: 创建 UTM 链接生成器工具

**Files:**
- Create: `src/app/(frontend)/tools/utm-builder/page.tsx`

**Step 1: 创建页面**

```typescript
'use client'

import React, { useState, useMemo } from 'react'
import { Copy, Check } from 'lucide-react'

const SOURCE_OPTIONS = [
  { value: 'baidu', label: '百度', description: '百度搜索/竞价' },
  { value: 'google', label: 'Google', description: 'Google 搜索/广告' },
  { value: 'wechat', label: '微信', description: '微信公众号/朋友圈' },
  { value: 'douyin', label: '抖音', description: '抖音信息流' },
  { value: 'email', label: '邮件', description: 'EDM 邮件营销' },
]

const MEDIUM_OPTIONS = [
  { value: 'cpc', label: '点击付费 (CPC)' },
  { value: 'organic', label: '自然搜索' },
  { value: 'social', label: '社交媒体' },
  { value: 'email', label: '邮件' },
  { value: 'qr', label: '二维码' },
]

export default function UTMBuilderPage() {
  const [params, setParams] = useState({
    url: 'https://www.iboran.com',
    utm_source: 'baidu',
    utm_medium: 'cpc',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
  })
  const [copied, setCopied] = useState(false)

  const generatedUrl = useMemo(() => {
    const url = new URL(params.url)
    Object.entries(params).forEach(([key, value]) => {
      if (key !== 'url' && value) url.searchParams.set(key, value)
    })
    return url.toString()
  }, [params])

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#F7F8FA] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-[#1F2329] mb-2">UTM 链接生成器</h1>
          <p className="text-[#4B5563] mb-8">为营销活动生成带 UTM 参数的跟踪链接</p>

          <div className="space-y-6">
            {/* 表单字段 */}
            <input
              type="url"
              value={params.url}
              onChange={(e) => setParams({ ...params, url: e.target.value })}
              placeholder="https://www.iboran.com/solution/erp"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <select
              value={params.utm_source}
              onChange={(e) => setParams({ ...params, utm_source: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg"
            >
              {SOURCE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label} ({opt.value})</option>
              ))}
            </select>
            <select
              value={params.utm_medium}
              onChange={(e) => setParams({ ...params, utm_medium: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg"
            >
              {MEDIUM_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <input
              type="text"
              value={params.utm_campaign}
              onChange={(e) => setParams({ ...params, utm_campaign: e.target.value })}
              placeholder="活动名称: yonsuite_launch / spring_promo_2025"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <input
              type="text"
              value={params.utm_content}
              onChange={(e) => setParams({ ...params, utm_content: e.target.value })}
              placeholder="内容标识: hero_cta / sidebar_banner"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <input
              type="text"
              value={params.utm_term}
              onChange={(e) => setParams({ ...params, utm_term: e.target.value })}
              placeholder="关键词: 用友实施 / ERP系统"
              className="w-full px-4 py-3 border rounded-lg"
            />

            {/* 生成的 URL */}
            <div className="bg-slate-50 rounded-xl p-6 border">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium">生成的 UTM 链接</label>
                <button onClick={handleCopy} className="flex items-center gap-2 px-3 py-1.5 bg-white border rounded-lg">
                  {copied ? <><Check className="w-4 h-4 text-green-500" /><span>已复制</span></> : <><Copy className="w-4 h-4" /><span>复制</span></>}
                </button>
              </div>
              <code className="block text-sm text-[#0052D9] break-all bg-white p-4 rounded-lg">
                {generatedUrl}
              </code>
            </div>
          </div>
        </div>

        {/* 使用指南 */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mt-6">
          <h2 className="text-xl font-bold mb-4">渠道命名规范</h2>
          <table className="w-full text-sm">
            <thead><tr className="border-b"><th className="text-left py-2">渠道</th><th className="text-left py-2">utm_source</th><th className="text-left py-2">utm_medium</th></tr></thead>
            <tbody>
              <tr className="border-b"><td className="py-2">百度搜索</td><td><code>baidu</code></td><td><code>organic</code></td></tr>
              <tr className="border-b"><td className="py-2">百度竞价</td><td><code>baidu</code></td><td><code>cpc</code></td></tr>
              <tr className="border-b"><td className="py-2">微信公众号</td><td><code>wechat</code></td><td><code>social</code></td></tr>
              <tr className="border-b"><td className="py-2">EDM 邮件</td><td><code>email</code></td><td><code>email</code></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
```

**Step 2: 提交**

```bash
git add src/app/\(frontend\)/tools/utm-builder/page.tsx
git commit -m "feat(tools): add UTM link builder tool for marketing team"
```

---

## Task 9: 添加环境变量配置

**Files:**
- Modify: `.env.example`

**Step 1: 添加环境变量**

```bash
# .env.example
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# 百度统计
NEXT_PUBLIC_BAIDU_SITE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Step 2: 提交**

```bash
git add .env.example
git commit -m "chore: add environment variables for GA4 and Baidu Analytics"
```

---

## Task 10: 创建事件映射文档

**Files:**
- Create: `docs/analytics/conversion-events-mapping.md`

**Step 1: 创建文档**

```markdown
# 转化事件映射表

## 事件命名规范

| 中文名称 | GA4 事件 | 百度统计 | 触发场景 | 参数说明 |
|----------|----------|----------|----------|----------|
| 表单提交转化 | `generate_lead` | `lead_submit` | 白皮书下载、咨询表单 | form_type, form_id |
| 微信咨询打开 | `contact_open` | `wechat_open` | 打开微信咨询模态框 | location |
| 微信号复制 | `wechat_copy` | `wechat_copy` | 复制微信号 | location |
| 电话拨号点击 | `click_phone` | `phone_call` | 点击电话号码 | location |
| 页面浏览 | `page_view` | `pageview` | 页面加载 | page_path, page_title |

## UTM 参数说明

| 参数 | 用途 | 示例值 |
|------|------|--------|
| utm_source | 流量来源 | baidu, google, wechat, douyin, email |
| utm_medium | 媒介类型 | cpc, organic, social, email, qr |
| utm_campaign | 活动名称 | yonsuite_launch, spring_promo_2025 |
| utm_content | 内容标识 | hero_cta, sidebar_banner, floating_btn |
| utm_term | 关键词 | 用友实施, ERP系统 |
```

**Step 2: 提交**

```bash
git add docs/analytics/conversion-events-mapping.md
git commit -m "docs: add conversion events mapping documentation"
```

---

## 验证清单

### 技术验证
- [ ] GA4 Measurement ID 配置正确
- [ ] 百度统计 Site ID 配置正确
- [ ] UTM 参数正确捕获到 sessionStorage
- [ ] 表单提交附带 UTM 数据到后端
- [ ] Leads collection 正确存储 UTM 字段
- [ ] 转化事件正确发送到 GA4
- [ ] 转化事件正确发送到百度统计
- [ ] 所有测试通过

### SEO 验证
- [ ] Canonical URL 不含 UTM 参数
- [ ] Sitemap.xml 不含 UTM 参数
- [ ] UTM 参数不影响页面 SEO

### 数据验证
- [ ] 使用 UTM 链接访问网站
- [ ] 提交表单后检查数据库
- [ ] GA4 实时事件显示
- [ ] 百度统计转化显示

---

## 实施状态

✅ **已完成：2025-01-31**

所有 10 个任务已完成：

- [x] Task 1: 扩展 Leads Collection 存储 UTM 参数 (`b2cfb0f`)
- [x] Task 2: 创建 AnalyticsProvider 组件 (`3a890c3`)
- [x] Task 3: 创建 useConversionTracking Hook (`66fea8d`)
- [x] Task 4: 扩展 /api/leads 接收 UTM 数据 (`8ea0bda`)
- [x] Task 5: 更新白皮书表单附带 UTM 数据 (`0bdaeb8`)
- [x] Task 6: 更新 ConsultationModal 跟踪事件 (`844d1ab`)
- [x] Task 7: 更新其他转化点组件 (`c5e9243`)
- [x] Task 8: 创建 UTM 链接生成器工具 (`4422f8b`)
- [x] Task 9: 添加环境变量配置 (`6f27cca`)
- [x] Task 10: 创建事件映射文档 (`33c91d0`)

---

## 预期提交记录

```
feat(leads): add UTM attribution fields to Leads collection
feat(analytics): add AnalyticsProvider for GA4 and Baidu tracking
feat(hooks): add useConversionTracking hook for unified event tracking
feat(api): extend /api/leads to accept UTM attribution data
feat(forms): attach UTM data to whitepaper lead submissions
feat(modal): add conversion tracking to ConsultationModal
feat(components): add conversion tracking to navbar and sticky bars
feat(tools): add UTM link builder tool for marketing team
chore: add environment variables for GA4 and Baidu Analytics
docs: add conversion events mapping documentation
```

---

## 相关文档

- [转化事件映射表](../analytics/conversion-events-mapping.md)
- [项目 CLAUDE.md](../../CLAUDE.md)
