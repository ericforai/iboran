---
description: "从产品文档/需求生成产品详情页（交付型）"
---

# 产品详情页生成工作流

从产品文档、需求清单或竞品链接，生成符合“交付型”标准的产品详情页。
**核心定位**：回答“我们靠什么交付、怎么交付、交付到什么程度”，区别于泛解决方案页。

---

## Step 1: 提取与定义

根据输入资料，提取以下 10 个核心变量（用于生成页面内容）：

| 变量 | 说明 |
|------|------|
| **{产品名}** | 核心产品词，如“用友 YonSuite” |
| **{一句话定位}** | 把什么问题，用什么方式，解决到什么程度 |
| **{目标人群}** | 规模/系统现状/管理诉求 |
| **{典型现状}** | 客户面临的具体问题（症状 + 损失） |
| **{可量化结果}** | 3条可验证的价值点 |
| **{涉及系统}** | 需要集成或替换的系统平台 |
| **{信任数据}** | 客户数量/团队规模/资质认证 |
| **{案例}** | 2-3个代表性案例（行业+结果） |
| **{能力清单}** | 6-9项核心能力（按客户关心程度排序） |
| **{FAQ}** | 至少6条高频问答（实施、周期、费用等） |

---

## Step 2: 创建目录与 Layout 检查

**重要**：产品页必须继承全局导航和页脚。

// turbo
```bash
mkdir -p src/app/\(frontend\)/products/[slug]
```

**Layout 检查：**
必须确保 `src/app/(frontend)/products/layout.tsx` 存在，并包含 Navbar 和 Footer。如不存在，需创建：

```tsx
// src/app/(frontend)/products/layout.tsx
import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Contact } from '@/payload-types'
import { PageClientWrapper } from '../page.client.wrapper'
import { Footer } from '@/components/Footer'

export default async function ProductLayout({ children }: { children: React.ReactNode }) {
  const contactData = await getCachedGlobal('contact', 1)() as Contact
  return (
    <div className="flex flex-col min-h-screen">
       <PageClientWrapper contactData={contactData}>
          <main className="flex-grow">{children}</main>
       </PageClientWrapper>
       <Footer />
    </div>
  )
}
```

---

## Step 3: 页面结构与组件映射

产品页采用 **10段式** 结构，请按以下对应关系生成组件：

| 序号 | 模块名称 | 对应组件文件 | 内容重点 |
|------|----------|--------------|----------|
| 0 | **SEO** | `page.tsx (metadata)` | Title, Meta Description, JSON-LD |
| 1 | **首屏 Hero** | `Hero.tsx` | 30秒讲清定位 + 3个核心价值 + 双CTA |
| 2/3 | **适用与痛点** | `TargetAudience.tsx` | 适用对象筛选 + 典型问题（症状描述） |
| 4 | **交付方法论** | `DeliveryMethodology.tsx` | **核心**：4阶段流程（诊断/设计/实施/运维）+ 产出物 |
| 5 | **能力清单** | `Capabilities.tsx` | 6-9项核心能力，不堆砌功能 |
| 6 | **交付范围** | `DeliveryScope.tsx` | 明确包含/可选/不包含，减少扯皮 |
| 7 | **技术集成** | `TechSpecs.tsx` | 系统对接、部署方式、权限安全 |
| 8 | **交付证据** | `TrustProof.tsx` | 信任数据 + 案例卡片 |
| 9 | **FAQ** | `FAQ.tsx` | 实施周期、费用结构、边界问题 |
| 10 | **底部 CTA** | `CTASection.tsx` | 强引导表单：交付清单下载/演示预约 |
| - | **页面入口** | `page.tsx` | 组合以上所有组件 |

---

## Step 4: 组件开发规范

### 4.1 视觉规范 (参考 `.agent/rules.md`)
- **色彩**：严格遵循 70% 白/灰 + 20% 蓝 + 10% 红。
- **Hero**：左文右图（或居中布局），右侧配图需体现“系统/架构/交付感”，禁止通用商务图。
- **CTA**：
  - 主按钮（红）：预约专家演示
  - 次按钮（蓝框）：获取报价/下载清单

### 4.2 内容规范
- **交付感**：文案要具体、落地。避免“赋能”、“重塑”等空词，多用“导出”、“配置”、“上线”。
- **量化**：所有价值点必须带数据占位符 `[XX]%`。
- **排他性**：在 `TargetAudience` 中明确写出“不适用情况”，提升专业度。

---

## Step 5: 更新导航数据

在 `src/data/products.ts` 中添加新产品条目，确保 URL 可访问。

```typescript
// 找到对应的大类（如 'ERP 与业务系统'）
items: [
  // ...
  { 
    label: '[产品名]', 
    href: '/products/[slug]', // ⚠️ 必须对应 Step 2 的 slug
    desc: '[一句话定位]', 
    icon: [LucideIcon] 
  }
]
```

---

## Step 6: 验证流程

必须依次执行以下检查：

1.  **代码质量检查**：
    // turbo
    ```bash
    npm run lint
    ```
2.  **URL 挂载检查**：
    确保 `/products/[slug]` 路由已注册，且 `layout.tsx` 生效（即包含 Header/Footer）。
    可以简单检查文件是否存在：
    // turbo
    ```bash
    ls -la src/app/\(frontend\)/products/[slug]/page.tsx
    ls -la src/app/\(frontend\)/products/layout.tsx
    ```
3.  **导航菜单检查**：
    检查 `src/data/products.ts` 中是否已包含指向 `/products/[slug]` 的链接。
4.  **内容完整性**：
    - Hero 区清晰传达了“我们做什么”。
    - “交付方法论”模块步骤清晰。
    - “交付范围”模块明确了边界。
    - CTA 按钮能正确唤起咨询弹窗。
