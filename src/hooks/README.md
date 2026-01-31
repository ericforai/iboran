# Hooks 目录

> 一旦我所属的文件夹有所变化，请更新我。

## 目录功能

React Hooks，封装可复用的业务逻辑和状态管理。

---

## 文件清单

| 文件 | 类型 | 功能描述 |
|------|------|----------|
| `useConversionTracking.ts` | Hook | 转化跟踪接口，获取 UTM 归因数据，发送转化事件 |

---

## API 参考

### useConversionTracking()

```typescript
const {
  getAttributionData,      // 获取当前 UTM 归因数据
  trackLeadSubmit,          // 跟踪表单提交转化
  trackWeChatOpen,          // 跟踪微信咨询打开
  trackWeChatCopy,          // 跟踪微信号复制
  trackPhoneCall,           // 跟踪电话拨号点击
  trackEvent,               // 跟踪通用事件
} = useConversionTracking()
```

#### 返回值类型

```typescript
interface ConversionData {
  utm_source: string      // 流量来源
  utm_medium: string      // 媒介类型
  utm_campaign: string    // 活动名称
  utm_content: string     // 内容标识
  utm_term: string        // 关键词
  referrer: string        // 来源页面
  landingPage: string     // 着陆页面
  pageHistory: string[]   // 访问路径
}
```

---

## 使用示例

```typescript
// 在组件中使用
'use client'

import { useConversionTracking } from '@/hooks/useConversionTracking'

export function MyForm() {
  const { getAttributionData, trackLeadSubmit } = useConversionTracking()

  const handleSubmit = async () => {
    const utmData = getAttributionData()

    await fetch('/api/leads', {
      method: 'POST',
      body: JSON.stringify({ ...formData, utmData })
    })

    trackLeadSubmit('whitepaper', 'resource-slug')
  }

  return <form onSubmit={handleSubmit}>...</form>
}
```

---

## 依赖关系

```
组件 → useConversionTracking
  ↓ (使用)
useAnalytics() + useAttribution()
  ↓
AnalyticsProvider + AttributionProvider
```
