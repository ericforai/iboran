---
description: "将 Gemini 生成的 Showcase ZIP 包集成到主站"
---

# Showcase 页面集成工作流

将 AI 生成的独立 Showcase 页面（Vite 项目）集成为主站的二级解决方案页面。

> [!IMPORTANT]
> **架构差异**：Gemini 生成的是 Vite + React (CSR) 项目，主站是 Next.js (SSR)。
> 必须按照本工作流转换，否则**百度 SEO 将失效**！

---

## 前置条件

- [ ] 拥有 Gemini/Bolt 等工具生成的 Showcase ZIP 包
- [ ] ZIP 包含 `App.tsx` 入口和 `components/` 目录
- [ ] 主站开发服务器运行中 (`pnpm dev`)

---

## 工作流步骤

### Step 1: 解压 Showcase 包

```bash
# 创建临时目录
mkdir -p /tmp/showcase-import

# 解压到临时目录
unzip /path/to/showcase.zip -d /tmp/showcase-import
```

### Step 2: 确定页面路径

根据 `metadata.json` 中的 `name` 确定 URL slug：

| Showcase 名称 | URL 路径 | 目录位置 |
|--------------|----------|----------|
| Revenue Cloud | `/solution/revenue-cloud` | `src/app/(frontend)/solution/revenue-cloud/` |
| Finance Cloud | `/solution/finance-cloud` | `src/app/(frontend)/solution/finance-cloud/` |
| MES | `/solution/mes` | `src/app/(frontend)/solution/mes/` |

// turbo
```bash
# 创建解决方案页面目录
mkdir -p src/app/\(frontend\)/solution/[slug]
```

### Step 3: 迁移组件

**需要迁移的组件**（仅内容部分，排除 Header/Footer）：

```
/tmp/showcase-import/components/
├── Hero.tsx         → 保留
├── PainPoints.tsx   → 保留
├── FeatureHub.tsx   → 保留
├── DetailModel.tsx  → 保留
├── RollingDiff.tsx  → 保留
├── ValueSection.tsx → 保留
├── Header.tsx       → ❌ 删除（使用主站 Header）
├── Footer.tsx       → ❌ 删除（使用主站 Footer）
```

```bash
# 复制内容组件到解决方案目录
cp /tmp/showcase-import/components/Hero.tsx src/app/\(frontend\)/solution/[slug]/
cp /tmp/showcase-import/components/PainPoints.tsx src/app/\(frontend\)/solution/[slug]/
# ... 其他组件
```

### Step 4: 创建页面入口

创建 `page.tsx`，组合主站布局和 Showcase 内容：

```tsx
// src/app/(frontend)/solution/[slug]/page.tsx
import { Metadata } from 'next'

// 导入迁移的内容组件
import Hero from './Hero'
import PainPoints from './PainPoints'
import FeatureHub from './FeatureHub'
import DetailModel from './DetailModel'
import RollingDiff from './RollingDiff'
import ValueSection from './ValueSection'

// 导入主站共享组件
import { DemoRequestModal } from '@/components/DemoRequestModal'

export const metadata: Metadata = {
  title: '营收云解决方案 | 泊冉软件',
  description: '用友 BIP 营收云 8.0，AI 智能对账，全球业务管理',
}

export default function SolutionPage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <FeatureHub />
      <DetailModel />
      <RollingDiff />
      <ValueSection />
    </>
  )
}
```

### Step 5: SSR 兼容性转换 ⚠️

> [!CAUTION]
> 这是最关键的一步！错误的转换会导致 SEO 失效。

#### 5.1 基础转换规则

| Vite 原代码 | Next.js 转换 |
|-------------|--------------|
| `import React from 'react'` | 删除（不需要） |
| `const Hero: React.FC = () => {}` | `export default function Hero() {}` |
| `<img src="..." />` | `<Image src="..." alt="..." />` (from `next/image`) |

#### 5.2 客户端组件标记

**只有使用以下功能的组件才需要 `'use client'`**：

```tsx
// 需要 'use client' 的情况：
'use client'
import { useState, useEffect } from 'react'

export default function InteractiveComponent() {
  const [active, setActive] = useState(0)  // ← useState
  useEffect(() => { ... }, [])             // ← useEffect
  return <button onClick={() => ...}>      // ← onClick
}
```

**纯展示组件不需要 `'use client'`**（保持 Server Component）：

```tsx
// 无需 'use client'
export default function StaticSection() {
  return (
    <section>
      <h2>痛点分析</h2>
      <p>这是静态内容，SEO 友好</p>
    </section>
  )
}
```

#### 5.3 SEO 关键内容规则

> [!IMPORTANT]
> **核心原则**：SEO 关键内容必须是静态的，不依赖客户端状态！

```tsx
// ❌ 错误：标题依赖 useState，SSR 时可能为空
const [title, setTitle] = useState('')
<h1>{title}</h1>

// ✅ 正确：标题是静态的，SSR 可直接渲染
<h1>用友 BIP 营收云 8.0</h1>
```

```tsx
// ❌ 错误：关键描述在动态加载的 tab 中
{activeTab === 0 && <p>AI 智能对账...</p>}

// ✅ 正确：所有 tab 内容都渲染，用 CSS 控制显示
<div className={activeTab === 0 ? 'block' : 'hidden'}>
  <p>AI 智能对账...</p>
</div>
```

#### 5.4 动画库兼容

Framer Motion 需要保持客户端：

```tsx
'use client'
import { motion } from 'framer-motion'

// 动画只影响视觉，不影响 SEO 内容
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  <h2>静态标题仍可被 SEO 抓取</h2>  {/* ← 内容是静态的 */}
</motion.div>
```

### Step 6: 替换 CTA 按钮

将 Showcase 中的 CTA 按钮替换为主站统一组件：

```tsx
// 替换前（Showcase 原有）
<button>预约演示</button>

// 替换后（主站组件）
import { DemoRequestModal } from '@/components/DemoRequestModal'

const [isDemoOpen, setIsDemoOpen] = useState(false)

<button onClick={() => setIsDemoOpen(true)}>预约专家演示</button>
<DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
```

### Step 7: 更新导航菜单

在 `src/components/Navbar/index.tsx` 中添加新页面：

```tsx
const solutionItems = [
  { label: '营收云', href: '/solution/revenue-cloud', desc: 'AI 智能对账' },
  { label: '财务云', href: '/solution/finance-cloud', desc: '业财一体化' },
  // 新增页面在这里添加
]
```

### Step 8: SEO 验证 ✅

> [!WARNING]
> 必须完成所有验证项才能上线！

#### 8.1 检查 HTML 源码

```bash
# 构建生产版本
npm run build

# 或直接查看 View Source
# 在浏览器中访问页面，右键 → 查看页面源代码
```

**验证点**：
- [ ] `<title>` 标签包含页面标题和"泊冉软件"
- [ ] `<meta name="description">` 包含关键描述
- [ ] `<h1>` 标签包含主标题（非空）
- [ ] 核心产品特性文字可见（不是 `{}`）

#### 8.2 TypeScript 检查

// turbo
```bash
npm run lint
```

#### 8.3 访问测试

```bash
open http://localhost:3000/solution/[slug]
```

---

## SEO 检查清单

- [ ] `metadata.title` 包含关键词 + 品牌名
- [ ] `metadata.description` 120 字以内
- [ ] URL slug 使用英文/拼音
- [ ] `<h1>` 是静态文本，非客户端渲染
- [ ] 产品核心特性在 View Source 中可见
- [ ] 页面内有返回解决方案列表的内链
- [ ] 所有图片有 alt 属性

---

## 常见问题

### Q: View Source 看到的是空的 `<div id="root"></div>`？

**原因**：组件仍按 Vite SPA 方式运行，未正确转换。

**解决**：确保：
1. 主入口是 `page.tsx`（不是 `App.tsx`）
2. 使用 Next.js 的路由结构
3. 静态内容不依赖 `useState` 初始值

### Q: 动态 Tab/轮播的内容 SEO 抓不到？

**解决**：渲染所有内容，用 CSS 控制显示：

```tsx
{tabs.map((tab, i) => (
  <div key={i} className={activeTab === i ? 'block' : 'hidden'}>
    {tab.content}  {/* 所有 tab 内容都在 HTML 中 */}
  </div>
))}
```

---

## 清理

```bash
# 删除临时目录
rm -rf /tmp/showcase-import
```
