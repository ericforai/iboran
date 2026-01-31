# 转化事件映射表

本文档记录所有转化事件在 GA4、百度统计和后端的映射关系。

## 事件命名规范

| 中文名称 | GA4 事件 | 百度统计事件 | 触发场景 | 参数说明 |
|----------|----------|-------------|----------|----------|
| 表单提交转化 | `generate_lead` | `lead_submit` | 白皮书下载、咨询表单 | form_type, form_id |
| 微信咨询打开 | `contact_open` | `wechat_open` | 打开微信咨询模态框 | location |
| 微信号复制 | `wechat_copy` | `wechat_copy` | 复制微信号 | location |
| 电话拨号点击 | `click_phone` | `phone_call` | 点击电话号码 | location |
| 页面浏览 | `page_view` | `pageview` | 页面加载 | page_path, page_title |

## 事件参数说明

### form_type 参数
- `whitepaper` - 白皮书下载表单
- `consultation` - 咨询表单
- `demo` - 演示请求表单
- `contact` - 联系表单

### location 参数
- `header` - 头部导航
- `footer` - 页脚
- `floating` - 悬浮按钮
- `modal` - 模态框内
- `hero` - 首屏区域
- `sidebar` - 侧边栏
- `mobile-sticky` - 移动端底部栏
- `navbar` - 导航栏

## UTM 参数说明

| 参数 | 用途 | 示例值 |
|------|------|--------|
| utm_source | 流量来源 | baidu, google, wechat, douyin, email |
| utm_medium | 媒介类型 | cpc, organic, social, email, qr |
| utm_campaign | 活动名称 | yonsuite_launch, spring_promo_2025 |
| utm_content | 内容标识 | hero_cta, sidebar_banner, floating_btn |
| utm_term | 关键词 | 用友实施, ERP系统 |

## 渠道命名规范（中文团队）

| 中文名 | utm_source | utm_medium |
|--------|------------|------------|
| 百度搜索 | baidu | organic |
| 百度竞价 | baidu | cpc |
| Google 搜索 | google | organic |
| Google Ads | google | cpc |
| 微信公众号 | wechat | social |
| 朋友圈广告 | wechat | cpc |
| 抖音 | douyin | social |
| 抖音信息流 | douyin | cpc |
| LinkedIn | linkedin | social |
| EDM 邮件 | email | email |
| 线下二维码 | direct | qr |

## 数据验证检查清单

### 开发环境测试
- [ ] 访问 `iboran.com?utm_source=test&utm_medium=cpc&utm_campaign=test`
- [ ] 打开浏览器控制台 → Application → Session Storage
- [ ] 验证 `boran_attribution` 存在并包含 UTM 数据
- [ ] 提交表单后检查 Payload Admin → Leads → 最新记录
- [ ] 验证 UTM 字段已正确存储

### 生产环境验证
- [ ] GA4 实时事件报告显示转化事件
- [ ] 百度统计 → 实时访客 → 事件跟踪
- [ ] 后端 Leads 数据包含 UTM 归因

## 事件发送位置

| 组件 | 事件 | 代码位置 |
|------|------|----------|
| WhitepaperClient | `generate_lead` | `src/app/(frontend)/resources/[slug]/client.tsx` |
| ConsultationModal | `wechat_copy`, `phone_call` | `src/components/ConsultationModal/index.tsx` |
| FloatingChatButton | `wechat_open` | `src/components/FloatingChatButton/index.tsx` |
| MobileStickyBar | `wechat_open`, `phone_call` | `src/components/MobileStickyBar/index.tsx` |
| Navbar | `wechat_open`, `phone_call` | `src/components/Navbar/NavbarClient.tsx` |
