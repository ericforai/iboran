# UTM 转化跟踪系统

**实施日期：** 2025-01-31
**版本：** 1.0.0
**状态：** ✅ 已上线

---

## 功能概述

UTM 转化跟踪系统为泊冉官网提供完整的流量归因和转化分析能力：

### 跟踪的转化行为

| 行为 | 说明 | 触发位置 |
|------|------|----------|
| 表单提交 | 白皮书下载、咨询表单提交 | 表单提交成功后 |
| 微信咨询打开 | 打开微信咨询模态框 | 悬浮按钮、导航栏、移动端底部栏 |
| 微信号复制 | 复制微信号到剪贴板 | 咨询模态框内 |
| 电话拨号 | 点击电话号码链接 | 导航栏、移动端底部栏、模态框 |
| 页面浏览 | 用户浏览页面 | 自动（每次页面跳转） |

### 数据去向

| 平台 | 用途 | 延迟 |
|------|------|------|
| GA4 | 转化事件分析 | 实时 |
| 百度统计 | 转化事件分析 | 5-10 分钟 |
| 后端数据库 | 线索归因数据存储 | 实时 |

---

## 技术架构

### 核心组件

```
src/
├── providers/
│   ├── Attribution/index.tsx        # UTM 参数捕获（已有）
│   └── Analytics/index.tsx           # GA4/百度统计事件发送
├── hooks/
│   └── useConversionTracking.ts      # 转化跟踪 Hook
├── collections/
│   └── Leads.ts                      # 线索 Collection（扩展 UTM 字段）
└── app/(frontend)/
    ├── api/leads/route.ts            # 线索提交 API（扩展 UTM 支持）
    └── tools/utm-builder/page.tsx    # UTM 链接生成器工具
```

### 数据流

```
用户访问 URL
    ↓
AttributionProvider 捕获 UTM → sessionStorage
    ↓
用户行为 → useConversionTracking hook
    ↓
    ├→ GA4 (gtag)
    ├→ 百度统计 (_hmt)
    └→ 后端 API (/api/leads) → MongoDB
```

---

## 使用指南

### 1. 创建 UTM 跟踪链接

访问 **UTM 链接生成器**：`/tools/utm-builder`

**示例：** 为百度竞价广告创建链接

| 参数 | 值 | 说明 |
|------|-----|------|
| 目标 URL | `https://www.iboran.com/solution/erp` | 落地页 |
| utm_source | `baidu` | 百度 |
| utm_medium | `cpc` | 点击付费 |
| utm_campaign | `erp_promotion_2025` | 活动名称 |
| utm_content | `hero_cta` | 首屏 CTA |
| utm_term | `ERP系统` | 关键词 |

**生成的 URL：**
```
https://www.iboran.com/solution/erp?utm_source=baidu&utm_medium=cpc&utm_campaign=erp_promotion_2025&utm_content=hero_cta&utm_term=ERP系统
```

### 2. 查看转化数据

#### GA4
1. 登录 [Google Analytics](https://analytics.google.com)
2. 进入 **报告 → 实时 → 事件**
3. 查看转化事件：`generate_lead`, `contact_open`, `wechat_copy`, `click_phone`

#### 百度统计
1. 登录 [百度统计](https://tongji.baidu.com)
2. 进入 **实时访客 → 事件跟踪**
3. 注意：有 5-10 分钟延迟

#### 后端数据库
1. 登录 Payload Admin：`/admin`
2. 进入 **Leads** Collection
3. 查看线索详情中的 **UTM 归因数据** 字段

---

## 配置说明

### 环境变量

在 `.env.local` 中配置：

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# 百度统计
NEXT_PUBLIC_BAIDU_SITE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 获取 ID 的方法

**GA4 Measurement ID：**
1. 登录 [Google Analytics](https://analytics.google.com)
2. 选择账号 → 数据流
3. 找到 **衡量 ID**，格式：`G-XXXXXXXXXX`

**百度统计 Site ID：**
1. 登录 [百度统计](https://tongji.baidu.com)
2. 网站管理中心 → 代码获取
3. 找到 `hm.js?` 后面的 32 位字符串

---

## 验证方法

### 开发环境验证

```bash
# 1. 启动开发服务器
pnpm dev

# 2. 访问带 UTM 参数的 URL
http://localhost:3000?utm_source=test&utm_medium=cpc&utm_campaign=test

# 3. 打开浏览器控制台验证
# - Application → Session Storage → 检查 boran_attribution
# - Console → 查看 [Analytics] Event tracked 日志
```

### 生产环境验证

- [ ] 配置 GA4 和百度统计环境变量
- [ ] 使用 UTM 链接访问网站
- [ ] 提交表单后检查数据库中的 UTM 字段
- [ ] GA4 实时事件显示转化
- [ ] 百度统计事件跟踪显示（有延迟）

---

## 渠道命名规范

营销团队请使用以下规范创建 UTM 链接：

| 渠道 | utm_source | utm_medium | 使用场景 |
|------|------------|------------|----------|
| 百度搜索 | `baidu` | `organic` | SEO |
| 百度竞价 | `baidu` | `cpc` | SEM |
| 微信公众号 | `wechat` | `social` | 公众号文章 |
| 朋友圈广告 | `wechat` | `cpc` | 朋友圈广告 |
| 抖音 | `douyin` | `social` | 抖音内容 |
| EDM 邮件 | `email` | `email` | 邮件营销 |
| 线下二维码 | `direct` | `qr` | 线下活动 |

---

## API 参考

### useConversionTracking Hook

```typescript
const {
  getAttributionData,      // 获取当前 UTM 归因数据
  trackLeadSubmit,          // 跟踪表单提交
  trackWeChatOpen,          // 跟踪微信咨询打开
  trackWeChatCopy,          // 跟踪微信号复制
  trackPhoneCall,           // 跟踪电话拨号点击
  trackEvent,               // 跟踪自定义事件
} = useConversionTracking()

// 获取归因数据用于表单提交
const utmData = getAttributionData()
await fetch('/api/leads', {
  method: 'POST',
  body: JSON.stringify({ ...formData, utmData })
})
```

---

## 故障排查

### 事件未显示在 GA4/百度统计

1. 检查环境变量是否配置
2. 打开浏览器控制台，检查是否有脚本加载错误
3. 确认网络请求未被拦截
4. 百度统计有 5-10 分钟延迟

### UTM 数据未保存到数据库

1. 检查 sessionStorage 中是否有 `boran_attribution`
2. 检查表单提交时是否调用了 `getAttributionData()`
3. 检查 `/api/leads` 接口返回的响应

---

## 相关文档

- [转化事件映射表](./conversion-events-mapping.md) - 详细的事件名称和参数说明
- [实施计划](../plans/2025-01-31-utm-conversion-tracking.md) - 技术实施细节
- [项目 CLAUDE.md](../../CLAUDE.md) - 项目总体说明

---

## 更新日志

| 版本 | 日期 | 变更 |
|------|------|------|
| 1.0.0 | 2025-01-31 | 初始版本，完成 UTM 转化跟踪系统 |
