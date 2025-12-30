---
description: "从内容链接/文档直接生成解决方案页面"
---

# 内容生成解决方案页面工作流

从微信公众号文章、官网链接或 MD 文档或 PDF ，直接生成符合主站规范的解决方案页面。

> [!TIP]
> 与 `/integrate-showcase` 不同，本工作流从**原始内容**生成页面，无需 Showcase ZIP 包。

---

## 输入方式

| 类型 | 示例 | 处理方式 |
|------|------|----------|
| **微信公众号** ⭐ | `mp.weixin.qq.com/s/xxx` | 浏览器读取 |
| **官网链接** | 用友/致远产品页 | URL 抓取 |
| **MD 文档** | 本地 `.md` 文件 | 直接解析 |
| **图片** | 产品截图/架构图 | 识别 + 嵌入 |

---

## B2B 解决方案页面结构（参考 SAP 最佳实践）

```
┌─────────────────────────────────────────┐
│  Hero Section                           │
│  - 主标题 + 价值主张                      │
│  - 副标题（1-2句产品定位）                 │
│  - 双 CTA（主: 预约演示 / 次: 下载白皮书） │
│  - 视觉核心：Coded UI Mockup (代码模拟界面) │
├─────────────────────────────────────────┤
│  Pain Points（痛点分析）                  │
│  - 3-4 个行业痛点卡片                     │
│  - 图标 + 标题 + 简短描述                 │
├─────────────────────────────────────────┤
│  Core Features（核心功能）                │
│  - Tab 切换 或 功能网格                   │
│  - 每个功能: 图标 + 标题 + 描述 + 效果指标 │
├─────────────────────────────────────────┤
│  How It Works（工作原理）[必选]           │
│  - 流程图 / 架构图                        │
│  - 分步骤说明                            │
├─────────────────────────────────────────┤
│  Customer Success（客户案例）[必选]       │
│  - Logo 墙                               │
│  - 1-2 个简短案例引用                     │
├─────────────────────────────────────────┤
│  Value Metrics（业务价值）                │
│  - 3-4 个数据指标卡片                     │
│  - 如：效率提升 XX%，周期缩短 XX 天        │
├─────────────────────────────────────────┤
│  CTA Section（行动号召）                  │
│  - 大尺寸 CTA 区块                        │
│  - 预约专家演示 Modal                     │
└─────────────────────────────────────────┘
```

---

## 工作流步骤

### Step 1: 获取内容

**方式 A: 微信公众号链接**

> [!NOTE]
> 微信文章需要通过浏览器工具读取，直接 HTTP 请求可能被拦截。

```
请提供微信公众号文章链接，我将使用浏览器读取内容。
```

**方式 B: 官网链接**
```
直接提供 URL，使用 read_url_content 获取。
```

**方式 C: MD 文档**
```
请提供 MD 文件路径，如 /path/to/content.md
```

### Step 2: 提取结构化信息

从内容中提取以下字段：

```typescript
interface SolutionContent {
  // 基础信息
  name: string          // 产品名称，如 "营收云"
  slug: string          // URL slug，如 "revenue-cloud"
  tagline: string       // 一句话定位
  description: string   // 详细描述（SEO 用）
  
  // 痛点
  painPoints: {
    title: string
    description: string
    icon: string        // Lucide icon 名称
  }[]
  
  // 核心功能
  features: {
    title: string
    description: string
    metric?: string     // 效果指标，如 "效率提升 80%"
  }[]
  
  // 业务价值
  valueMetrics: {
    value: string       // 如 "98%"
    label: string       // 如 "交付成功率"
  }[]
  
  // 可选
  architectureImage?: string  // 架构图 URL
  customerLogos?: string[]    // 客户 Logo
}
```

### Step 3: 创建页面目录

// turbo
```bash
mkdir -p src/app/\(frontend\)/solution/[slug]
```

### Step 4: 生成页面组件

生成以下文件：

| 文件 | 用途 |
|------|------|
| `page.tsx` | 页面入口 + SEO metadata |
| `Hero.tsx` | 首屏 Hero |
| `PainPoints.tsx` | 痛点分析 |
| `Features.tsx` | 核心功能 |
| `ValueSection.tsx` | 业务价值 |
| `CTASection.tsx` | 底部 CTA |
| `[Slug]DashboardMockup.tsx` | **代码化高保真界面模拟** (核心亮点) |
| `HowItWorks.tsx` | 流程/架构图 |
| `CustomerSuccess.tsx` | 客户案例与 Logo 墙 |

#### 视觉策略：Coded UI Mockups ⭐

**不要等待截图，直接用代码绘制高保真界面。**

- **优势**：加载快、无限清晰、可交互、易维护。
- **技术栈**：Tailwind CSS (布局) + Lucide Icons (图标) + Framer Motion (微动效)。
- **应用场景**：
  - `Hero` 右侧：展示系统概览。
  - `Features` 区域：Tab 切换时联动展示不同功能模块。

#### 组件规范

**必须遵循的 Rules**：
- 设计系统：`02-design-system.md`
- 内容规范：`03-content-guidelines.md`
- SEO：`04-seo-strategy.md`
- 组件模式：`06-component-patterns.md`

**色彩比例**：70% 白/灰 + 20% 蓝 + 10% 红

**CTA 按钮**：
```tsx
import { DemoRequestModal } from '@/components/DemoRequestModal'

// 主 CTA: 红色按钮
<button className="bg-[#E60012] text-white ...">预约专家演示</button>

// 次 CTA: 蓝色边框
<button className="border-2 border-[#0052D9] text-[#0052D9] ...">下载白皮书</button>
```

### Step 5: SEO Metadata

```tsx
// page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${name}解决方案 | 泊冉软件`,
  description: description.slice(0, 120),
  keywords: [name, '泊冉软件', '用友', ...relatedKeywords],
  openGraph: {
    title: `${name}解决方案`,
    description: description.slice(0, 120),
  },
}
```

### Step 6: Payload CMS 表单集成

> [!IMPORTANT]
> 表单提交通过 Payload Form Builder 插件写入 MongoDB。

**使用现有表单组件**：
```tsx
import { DemoRequestModal } from '@/components/DemoRequestModal'
```

**表单数据结构**（已在 Payload 中配置）：
```typescript
// collections/FormSubmissions
{
  form: 'demo-request',
  submissionData: [
    { field: 'name', value: '张三' },
    { field: 'phone', value: '13800138000' },
    { field: 'company', value: '某某公司' },
    { field: 'solution', value: 'revenue-cloud' },  // 来源页面
  ],
  createdAt: Date
}
```

### Step 7: 更新导航菜单

在 `src/components/Navbar/index.tsx` 添加新页面：

```tsx
const solutionItems = [
  // 现有项...
  { label: '[新产品名]', href: '/solution/[slug]', desc: '[一句话描述]' },
]
```

### Step 8: 验证

// turbo
```bash
npm run lint
```

```bash
open http://localhost:3000/solution/[slug]
```

**SEO 检查**：
- [ ] View Source 中可见完整 HTML
- [ ] `<title>` 和 `<meta description>` 正确
- [ ] `<h1>` 包含产品名称

---

## 示例：生成请求格式

```
/create-solution

内容来源：https://mp.weixin.qq.com/s/xxxxx
产品名称：营收云
URL Slug：revenue-cloud

附加信息（可选）：
- 客户案例：汉盛科技、久事集团
- 特色功能：AI 对账
```

---

## 模板代码参考

### Hero.tsx 模板

```tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'

interface HeroProps {
  title: string
  tagline: string
  description: string
}

export default function Hero({ title, tagline, description }: HeroProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="bg-white pt-20 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            {/* 静态标题 - SEO 友好 */}
            <h1 className="text-5xl font-bold text-[#1F2329] mb-4">
              {title}
            </h1>
            <p className="text-2xl text-[#0052D9] font-semibold mb-4">
              {tagline}
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            {/* CTA 按钮 */}
            <div className="flex gap-4">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition-all"
              >
                预约专家演示
              </button>
              <button className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-semibold rounded-md hover:bg-blue-50 transition-all">
                下载解决方案白皮书
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </>
  )
}
```

### PainPoints.tsx 模板

```tsx
import { AlertTriangle, Clock, DollarSign, Users } from 'lucide-react'

interface PainPoint {
  icon: React.ElementType
  title: string
  description: string
}

interface PainPointsProps {
  points: PainPoint[]
}

export default function PainPoints({ points }: PainPointsProps) {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            行业痛点
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-[#E60012]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-2">
                {point.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### DashboardMockup.tsx 模板 (简化版)

```tsx
'use client'

import { motion } from 'framer-motion'
import { BarChart3, Users, Settings, Bell } from 'lucide-react'

// 接收 activeTab 或 type 属性来动态切换显示内容
export default function DashboardMockup({ type = 'default' }: { type?: string }) {
  return (
    <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden w-full aspect-[16/10] flex text-xs">
      {/* Sidebar - 深色专业感 */}
      <div className="w-16 md:w-48 bg-[#001529] text-slate-400 flex flex-col border-r border-slate-800">
        <div className="h-12 flex items-center justify-center border-b border-slate-800 font-bold text-white tracking-wider">
          BIP CLOUD
        </div>
        <div className="p-2 space-y-1">
          <div className="px-3 py-2 bg-[#1890FF] text-white rounded flex items-center gap-2 cursor-pointer">
            <BarChart3 size={14} /> <span className="hidden md:inline">工作台</span>
          </div>
          <div className="px-3 py-2 hover:bg-slate-800 rounded flex items-center gap-2 cursor-pointer transition-colors">
            <Users size={14} /> <span className="hidden md:inline">客户管理</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-slate-50 flex flex-col">
        {/* Header */}
        <div className="h-12 bg-white border-b border-slate-200 flex items-center justify-between px-4 shadow-sm">
          <div className="font-bold text-slate-700">仪表盘 / {type === 'default' ? '总览' : type}</div>
          <div className="flex gap-3 text-slate-400">
            <Bell size={16} />
            <div className="w-6 h-6 rounded-full bg-slate-200"></div>
          </div>
        </div>
        
        {/* Dashboard Content Grid */}
        <div className="p-4 grid grid-cols-2 gap-4 flex-1 overflow-hidden">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex flex-col justify-between"
          >
            <div className="text-slate-500 mb-1">本月营收</div>
            <div className="text-xl font-bold text-slate-800">¥ 1,280,000</div>
            <div className="text-green-500 text-[10px]">+12.5% 较上月</div>
          </motion.div>
          {/* Card 2 */}
           <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-4 rounded-lg shadow-sm border border-slate-100"
          >
            <div className="h-full w-full bg-blue-50 rounded flex items-center justify-center text-blue-300">
              Chart Placeholder
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
```

---

## 常见问题

### Q: 微信文章无法读取？

**解决**：使用浏览器工具手动访问页面，或请用户复制文章内容到 MD 文件。

### Q: 内容不完整，缺少数据指标？

**解决**：使用占位符格式 `[XX]%`，并在页面添加注释提醒后续补充：

```tsx
{/* TODO: 补充真实数据 */}
<span>效率提升 [XX]%</span>
```

### Q: 需要添加自定义组件？

**解决**：在 `src/components/` 创建新组件，遵循 `06-component-patterns.md` 规范。