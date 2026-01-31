# 转化事件映射表

本文档记录所有转化事件在 GA4、百度统计和后端的映射关系。**本文档与代码实现保持同步，如有修改请同步更新。**

---

## 事件命名规范

| 中文名称 | GA4 事件 | 百度统计调用 | 触发场景 | 参数说明 |
|----------|----------|-------------|----------|----------|
| 表单提交转化 | `generate_lead` | `_trackEvent('conversion', 'generate_lead')` | 白皮书下载、咨询表单 | form_type, form_id |
| 微信咨询打开 | `contact_open` | `_trackEvent('conversion', 'contact_open')` | 打开微信咨询模态框 | location |
| 微信号复制 | `wechat_copy` | `_trackEvent('conversion', 'wechat_copy')` | 复制微信号 | location |
| 电话拨号点击 | `click_phone` | `_trackEvent('conversion', 'click_phone')` | 点击电话号码 | location |
| 页面浏览 | `page_view` | (自动处理) | 页面加载 | page_path, page_title |

**说明：** 百度统计使用 `_hmt.push(['_trackEvent', category, action, label])` 格式，事件名称由 category 和 action 组合。

---

## 事件参数说明

### form_type 参数
| 值 | 含义 | 使用位置 |
|----|------|----------|
| `whitepaper` | 白皮书下载表单 | `WhitepaperClient` |
| `consultation` | 咨询表单 | (预留) |
| `demo` | 演示请求表单 | (预留) |
| `contact` | 联系表单 | (预留) |

### location 参数（已实现）
| 值 | 含义 | 使用组件 | 代码位置 |
|----|------|----------|----------|
| `floating` | 悬浮按钮 | `FloatingChatButton` | `src/components/FloatingChatButton/index.tsx` |
| `mobile-sticky` | 移动端底部栏 | `MobileStickyBar` | `src/components/MobileStickyBar/index.tsx` |
| `navbar` | 导航栏 | `NavbarClient` | `src/components/Navbar/NavbarClient.tsx` |
| `modal` | 咨询模态框 | `ConsultationModal` | `src/components/ConsultationModal/index.tsx` |

### location 参数（预留）
| 值 | 含义 | 状态 |
|----|------|------|
| `header` | 头部导航 | 未使用 |
| `footer` | 页脚 | 未使用 |
| `hero` | 首屏区域 | 未使用 |
| `sidebar` | 侧边栏 | 未使用 |

---

## UTM 参数说明

| 参数 | 用途 | 示例值 | 数据库字段 |
|------|------|--------|----------|
| utm_source | 流量来源 | baidu, google, wechat, douyin, email | `utmData.utm_source` |
| utm_medium | 媒介类型 | cpc, organic, social, email, qr, referral | `utmData.utm_medium` |
| utm_campaign | 活动名称 | yonsuite_launch, spring_promo_2025 | `utmData.utm_campaign` |
| utm_content | 内容标识 | hero_cta, sidebar_banner, floating_btn | `utmData.utm_content` |
| utm_term | 关键词 | 用友实施, ERP系统 | `utmData.utm_term` |
| referrer | 来源页面 URL | https://baidu.com | `utmData.referrer` |
| landingPage | 首次访问页面 | https://iboran.com/solution/erp | `utmData.landingPage` |
| pageHistory | 访问路径历史 | ["/", "/solution", "/contact"] | `utmData.pageHistory` |

---

## 渠道命名规范（中文团队）

**规范说明：** 以下命名规范适用于营销团队创建 UTM 链接。使用 `/tools/utm-builder` 工具可快速生成符合规范的链接。

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

## 数据流架构

```
用户访问 URL
   ↓
AttributionProvider 捕获 UTM → sessionStorage
   ↓
用户行为 → useConversionTracking hook
   ↓
┌─────────────────┬─────────────────┬─────────────────┐
│                 │                 │                 │
GA4              百度统计         后端 API         控制台日志
gtag()          _hmt.push()      /api/leads      (dev only)
```

---

## 数据验证检查清单

### 开发环境测试
```bash
# 1. 启动开发服务器
pnpm dev

# 2. 访问测试 URL（带 UTM 参数）
http://localhost:3000?utm_source=test&utm_medium=cpc&utm_campaign=test123&utm_content=floating_btn&utm_term=测试关键词

# 3. 验证 sessionStorage
# 打开浏览器控制台 → Application → Session Storage
# 检查 boran_attribution 是否存在并包含完整数据

# 4. 验证控制台日志（开发环境）
# 应看到 [Analytics] Event tracked: { category: 'conversion', action: 'contact_open', ... }

# 5. 提交表单后检查 Payload Admin
# 访问 http://localhost:3000/admin
# 进入 Leads collection，查看最新记录的 utmData 字段
```

### 生产环境验证
- [ ] GA4 实时事件报告显示转化事件（报告 → 实时 → 事件）
- [ ] 百度统计 → 实时访客 → 事件跟踪（有 5-10 分钟延迟）
- [ ] 后端 Leads 数据包含 UTM 归因字段

---

## 事件发送位置（已实现）

| 组件 | 事件 | 代码位置 | 触发条件 |
|------|------|----------|----------|
| WhitepaperClient | `generate_lead` | `src/app/(frontend)/resources/[slug]/client.tsx:503` | 表单提交成功 |
| ConsultationModal | `wechat_copy` | `src/components/ConsultationModal/index.tsx:29` | 复制微信号 |
| ConsultationModal | `click_phone` | `src/components/ConsultationModal/index.tsx:43` | 点击电话链接 |
| FloatingChatButton | `contact_open` | `src/components/FloatingChatButton/index.tsx:23` | 打开模态框 |
| MobileStickyBar | `contact_open` | `src/components/MobileStickyBar/index.tsx:17` | 打开模态框 |
| MobileStickyBar | `click_phone` | `src/components/MobileStickyBar/index.tsx:22` | 点击电话链接 |
| Navbar | `contact_open` | `src/components/Navbar/NavbarClient.tsx:154` | 打开模态框 |
| Navbar | `click_phone` | `src/components/Navbar/NavbarClient.tsx:151` | 点击电话链接 |

---

## 工具与配置

### UTM 链接生成器
- **访问地址：** `/tools/utm-builder`
- **功能：** 可视化选择参数，一键生成 UTM 链接

### 环境变量配置
```bash
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_BAIDU_SITE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 实施状态

✅ 已完成：2025-01-31

- [x] Leads collection 扩展
- [x] AnalyticsProvider 组件
- [x] useConversionTracking hook
- [x] /api/leads UTM 支持
- [x] 白皮书表单集成
- [x] ConsultationModal 跟踪
- [x] FloatingChatButton 跟踪
- [x] MobileStickyBar 跟踪
- [x] Navbar 跟踪
- [x] UTM 链接生成器工具

---

## 相关文档

- [实施计划](../plans/2025-01-31-utm-conversion-tracking.md)
- [项目 CLAUDE.md](../../CLAUDE.md)
