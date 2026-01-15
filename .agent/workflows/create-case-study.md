---
description: "从 MD/PDF 文档直接生成客户案例详情页"
---

# 客户案例页面生成工作流

从 Markdown 交付文档、PDF 或现有文章中，直接生成符合主站规范的客户案例详情页 (Case Study)。

> [!TIP]
> 本工作流专注于将**已有的案例素材**（通常是文档形式）转化为高质量的**Web 页面**。

---

## 输入方式

| 类型 | 示例 | 处理方式 |
|------|------|----------|
| **MD 文档** ⭐ | `docs/case-study/xxx.md` | 直接解析结构 |
| **PDF 文档** | 销售案例 PPT/PDF | 提取文本后解析 |
| **Excel 表格** | `docs/case-study/泊冉案例.xlsx` | 自动化脚本生成 |
| **外部链接** | 微信公众号/飞书文档 | 浏览器读取 |

---

## B2B 客户案例页面结构

```
┌─────────────────────────────────────────┐
│  Hero Section                           │
│  - 客户 Logo + 行业标签                   │
│  - 核心成果标题 (如: 效率提升 200%)       │
│  - 背景图: 客户场景/抽象办公场景           │
├─────────────────────────────────────────┤
│  At a Glance (概览/TL;DR)               │
│  - 客户简介 | 行业 | 规模 | 实施周期      │
│  - 3 个核心关键指标 (高亮展示)            │
├─────────────────────────────────────────┤
│  Challenge & Background (背景与挑战)      │
│  - 业务痛点列表                          │
│  - 实施前后的对比描述                     │
├─────────────────────────────────────────┤
│  Solution (解决方案)                     │
│  - 实施架构图 / 流程图                    │
│  - 关键模块与功能点                       │
│  - 泊冉服务内容 (咨询/实施/二开)           │
├─────────────────────────────────────────┤
│  Results & Impact (价值与成果)            │
│  - 定量指标 (数据卡片)                    │
│  - 定性收益 (业务流程优化)                │
├─────────────────────────────────────────┤
│  Testimonial (客户证言)                  │
│  - 客户评价引用                          │
│  - 发言人职位                            │
├─────────────────────────────────────────┤
│  Related Products (相关产品)             │
│  - 关联的行业解决方案链接                  │
├─────────────────────────────────────────┤
│  CTA Section                             │
│  - "获取同款解决方案" / "下载完整案例"      │
└─────────────────────────────────────────┘
```

---

## 工作流步骤

### Step 1: 获取内容

**方式 A: MD 文档 (推荐)**
```
请提供 MD 文件路径，如 docs/case-study/mining.md
```

**方式 B: Excel 表格 (批量/快速)**
```bash
# 使用脚本直接从表格生成页面
python3 scripts/generate_case_from_excel.py --client "捷太格特"
```

**方式 C: PDF/其他**
```
请先提取 PDF 内容为 Markdown 格式，然后提供文件路径。
```

### Step 2: 提取结构化信息

从内容中提取以下字段：

```typescript
interface CaseStudyContent {
  // 基础信息
  clientName: string    // 客户名称
  industry: string      // 行业
  slug: string          // URL slug (英文，如 sumitomo-mining)
  title: string         // 页面标题 (通常是 "客户名 x 泊冉：...")
  summary: string       // TL;DR 摘要

  // 关键指标 (At a Glance & Results)
  keyMetrics: {
    label: string       // 如 "关账时间"
    value: string       // 如 "2天"
    change?: string     // 如 "↓ 70%" (可选)
  }[]

  // 背景与挑战
  challenges: {
    title: string
    description: string
  }[]

  // 解决方案
  solution: {
    overview: string
    modules: string[]   // 使用的模块/产品
    architectureImage?: string // 架构图 URL
    highlights: string[] // 方案亮点
  }

  // 客户证言 (可选)
  testimonial?: {
    quote: string
    author?: string
    role?: string
  }
}
```

### Step 3: 创建页面目录

// turbo
```bash
mkdir -p src/app/\(frontend\)/case-study/[slug]
```

### Step 4: 生成页面组件

生成以下文件：

| 文件 | 用途 |
|------|------|
| `page.tsx` | 页面入口 + SEO metadata |
| `Hero.tsx` | 首屏 (Logo + 标题 + 背景) |
| `Overview.tsx` | 概览 + 核心指标 (TL;DR) |
| `Challenge.tsx` | 痛点分析 |
| `Solution.tsx` | 解决方案架构与亮点 |
| `Results.tsx` | 详细成果展示 |
| `Testimonial.tsx` | 客户证言 (如果有) |
| `CTA.tsx` | 底部转化 |

#### 视觉策略

- **专业感**：使用企业蓝/深灰为主色调，强调 B2B 的稳重。
- **数据可视化**：核心指标使用大号字体和强调色（泊冉红 #E60012）。
- **结构清晰**：使用图标和卡片布局来拆解复杂的业务挑战。

### Step 5: SEO Metadata

```tsx
// page.tsx
export const metadata: Metadata = {
  title: `${clientName}数字化转型案例 | 泊冉软件`,
  description: `了解${clientName}如何通过泊冉软件实现${keyMetrics[0]?.label || '业务'}提升...`,
  // ...
}
```

### Step 6: 验证

```bash
npm run lint
```

```bash
open http://localhost:3000/case-study/[slug]
```

---

## 模板代码参考

### Overview.tsx 模板 (概览与指标)

```tsx
import { TrendingDown, TrendingUp, Clock, CheckCircle } from 'lucide-react'

interface Metric {
  label: string
  value: string
  change?: string
}

export default function Overview({ client, industry, metrics }: { client: string, industry: string, metrics: Metric[] }) {
  return (
    <section className="py-16 bg-white relative -mt-20 z-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-8 grid md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          <div className="md:col-span-1 pr-4">
            <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-2">Client</div>
            <div className="text-xl font-bold text-slate-900">{client}</div>
            <div className="text-sm text-blue-600 mt-1">{industry}</div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 pl-0 md:pl-4">
            {metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="text-sm text-slate-500 mb-1">{m.label}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#E60012]">{m.value}</span>
                  {m.change && (
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
                      {m.change}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}
```

### Challenge.tsx 模板

```tsx
interface Challenge {
  title: string
  description: string
}

export default function Challenge({ items }: { items: Challenge[] }) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">业务挑战</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-[#E60012] font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```
