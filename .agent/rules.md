# 📌 泊冉官网项目核心规则 (iboran.com)

> 本文件是项目的最核心制度，所有工作必须严格遵守。

---

## 0. 数据安全与环境维护 [最高优先级]

### 🚨 绝对禁令 (Iron Rule)
- **严禁直接运行 `docker compose down -v`**。该命令会永久删除数据库持久化卷，导致所有内容丢失。
- **环境修复流程**：如遇 `ELOOP` 或启动失败，必须先运行 `pnpm db:safe-reset`。该脚本已内置自动备份逻辑。
- **备份优先**：在进行任何破坏性操作（如删除 `node_modules`、重置卷、迁移数据库）前，必须手动确认 `backups/` 目录下有最新的 `.archive` 文件。

### 🔧 环境维护
- 遇到 `ELOOP` 错误时，优先在 Host 端执行 `rm -rf .next node_modules`，然后重新 `pnpm install`。
- 确保 `NEXT_PUBLIC_SERVER_URL` 与 `docker-compose.yml` 中的映射端口保持一致（默认 3000）。

---

## 1. 项目定位 [核心]

### 1.1 身份定位
- **泊冉是用友生态中的专业实施服务商，不是用友官网的复制品**
- 差异点：用友提供标准化产品，泊冉提供**场景化落地与本地服务**
- 用户认知：访客应能快速识别泊冉的独立服务商身份

### 1.2 可量化目标
| 指标 | 目标 |
|------|------|
| SEO | 核心业务词进入百度首页，新页面收录率 > 90% |
| 内容扩展 | 支持通过 CMS 批量生产 200+ 方案页，无需逐页开发 |
| 线索分级 | 高意向客户转人工，低意向客户进入自动培育流程 |

---

## 2. 视觉设计规则

### 2.1 色彩比例 [强制]
```
70% 白/灰 — 基础背景
20% 蓝色 (#0052D9) — 功能与科技感
10% 红色 (#E60012) — 品牌与 CTA
```

### 2.2 继承与差异

**继承用友部分：**
- 色彩体系（用友红/灰）
- 字体规范
- 栅格系统

**泊冉差异部分：**
- 首屏必须展示泊冉的独立价值主张
- 配图要求：真实系统截图、架构图、客户现场照片、团队实景
- ⚠️ **禁止使用通用商务图库素材**

### 2.3 组件样式规则

#### 按钮层级
| 类型 | 样式 | 使用规则 |
|------|------|----------|
| Primary CTA ("预约专家演示") | 实心 #E60012 背景, 白色文字, rounded-md (4px) | **每个页面仅限 1 个** |
| Secondary CTA ("查看解决方案") | 边框 #0052D9, 或 Ghost 样式蓝色文字 | 辅助引导 |

**代码示例：**
```jsx
// ✅ Primary CTA - 每个视图仅限 1 个
<button className="bg-[#E60012] text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
  预约专家演示
</button>

// ✅ Secondary CTA - 边框样式
<button className="border-2 border-[#0052D9] text-[#0052D9] px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
  查看解决方案
</button>

// ✅ Secondary CTA - Ghost 样式
<button className="text-[#0052D9] px-6 py-3 font-medium hover:underline">
  了解更多 →
</button>
```

#### 字体规范
- **Font Family**: `Inter, Noto Sans SC, sans-serif`
- **Headings**: `text-brand-dark`, `font-bold`, tight tracking
- **Body**: `text-brand-gray`, `leading-relaxed`

#### 布局与间距
- 使用充足留白 (section padding-y: 80px 或 96px)
- Cards: 白色背景, 微阴影 (`shadow-sm`), hover 悬浮效果 (`hover:shadow-md`), `rounded-lg`

**代码示例：**
```jsx
// ✅ Section 间距
<section className="py-20 lg:py-24 bg-white">
  {/* 内容 */}
</section>

// ✅ Card 样式
<div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
  {/* 卡片内容 */}
</div>
```

### 2.4 关键组件规范

#### Navbar
- 白色背景
- 右侧：红色按钮 "预约演示"

#### Hero Section
- 背景：纯白或极淡渐变 (白到淡蓝)
- 文字：黑/深灰色，**不允许红底白字**
- 右侧图像：以泊冉蓝 (#0052D9) 为主色调的高科技等距插画

#### Trust Bar
- 客户 Logo 使用灰度版本
- "用友白金伙伴" 文字高亮为红色

### ✅ 视觉设计检查清单
- [ ] 页面只有 1 个红色 Primary CTA
- [ ] 色彩比例符合 70/20/10 规则
- [ ] Hero 区域无红底白字
- [ ] 无通用商务图库素材
- [ ] Cards 有 hover 效果

---

## 3. 内容编写规则

### 3.1 标准文案结构 [强制]
```
行业痛点 → 用友产品能力 → 泊冉增值服务（二开/实施/咨询） → 业务价值
```

### 3.2 数据约束 [强制]
- ✅ 所有效果描述**必须带数据**或预留数据占位符（如：效率提升 [XX]%）
- ❌ **禁止**出现无数据支撑的 "提升效率"、"降低成本" 等空泛表述

**正确/错误示例：**

| ❌ 错误 | ✅ 正确 |
|---------|---------|
| 大幅降低运营成本 | 运营成本降低 35% |
| 显著提升工作效率 | 效率提升 [XX]%（待补充数据） |
| 有效缩短周期 | 项目周期从 6 个月缩短至 3 个月 |
| 帮助企业降本增效 | 人力成本节省 ¥50 万/年 |

### 3.3 CMS 解决方案数据模型
```json
{
  "title": "String",
  "painPoints": ["String"],
  "coreFeatures": ["String"],
  "techArchitecture": "Image URL",
  "successMetric": "String",
  "relatedTags": ["String"]
}
```

### 3.4 合规性约束 [强制]
- **严禁违禁词**：严格遵守《中华人民共和国广告法》，禁止使用绝对化用语。
- **禁止词汇**："第一"、"最"（如最好/最佳/最强）、"顶级"、"独家"、"完美"、"遥遥领先"、"首选" 等。
- **替代方案**：使用数据或客观叙述。
  - ❌：市场占有率第一
  - ✅：服务超过 3000+ 家企业客户

### ✅ 内容编写检查清单
- [ ] 遵循「痛点→能力→服务→价值」结构
- [ ] 所有数据描述带具体数字或 [XX] 占位符
- [ ] 无空泛的"提升效率"类表述
- [ ] CMS 数据符合 Schema 结构
- [ ] **检查无广告法违禁词**（第一/最佳/顶级/绝对等）

---

## 4. 技术架构规则

### 4.1 技术选型 [已确定]

| 层级 | 选型 | 版本 | 理由 |
|------|------|------|------|
| **框架** | Next.js (App Router) | 15.4.10 | 支持 SSR/SSG，百度爬虫可直接抓取渲染后的 HTML |
| **CMS** | Payload CMS | 3.68.5 | TypeScript 原生，与 Next.js 深度集成，支持 API 批量导入 |
| **前端** | React | 19.2.1 | 最新稳定版，支持 Server Components |
| **数据库** | MongoDB (via @payloadcms/db-mongodb) | 3.68.5 | 灵活 Schema，适合 CMS 内容存储 |
| **样式** | Tailwind CSS | 3.4.3 | 原子化 CSS，开发效率高 |
| **动画** | Framer Motion | 12.23.26 | 声明式动画，交互体验提升 |
| **图标** | Lucide React | 0.378.0 | 轻量、一致的图标库 |
| **语言** | TypeScript | 5.7.3 | 类型安全，提升代码质量 |
| **容器化** | Docker | - | 开发/生产环境一致性 (docker-compose.yml) |
| **测试** | Playwright + Vitest | 1.56.1 / 3.2.3 | E2E 测试 + 单元/集成测试 |

**Payload CMS 插件：**
- `@payloadcms/plugin-form-builder` — 表单构建（留资/预约演示）
- `@payloadcms/plugin-seo` — SEO 元数据管理
- `@payloadcms/plugin-nested-docs` — 嵌套文档结构
- `@payloadcms/plugin-redirects` — 重定向管理
- `@payloadcms/plugin-search` — 站内搜索
- `@payloadcms/richtext-lexical` — 富文本编辑器

### 4.2 实现要求
- 使用 React + Tailwind CSS + Lucide Icons
- 确保代码反映 "70% 白/灰, 20% 蓝, 10% 红" 的色彩比例

### 4.3 文件与目录命名规范

```
/src
├── app
│   └── (frontend)
│       ├── page.tsx                    # 首页
│       └── solutions
│           └── [slug]
│               └── page.tsx            # 解决方案详情页
├── components
│   ├── ui/                             # 通用 UI 组件
│   │   ├── Button.tsx                  # PascalCase
│   │   └── Card.tsx
│   ├── Navbar.tsx                      # 全局导航
│   ├── Footer.tsx                      # 全局页脚
│   └── solutions/                      # 解决方案相关组件
│       ├── Hero.tsx
│       ├── PainPoints.tsx
│       ├── Features.tsx
│       └── ValueSection.tsx
└── styles
    └── globals.css
```

**命名规则：**
| 类型 | 规则 | 示例 |
|------|------|------|
| 组件文件 | PascalCase | `HeroSection.tsx`, `FeatureCard.tsx` |
| 页面目录 | kebab-case | `/solutions/finance-cloud` |
| 工具函数 | camelCase | `formatDate.ts`, `useScrollPosition.ts` |
| 常量文件 | camelCase | `siteConfig.ts` |

---

## 5. SEO 规则 (百度优先)

### 5.1 技术层面
- **SSR 直出**：确保 View Source 可见完整 HTML 内容
- **URL 规范**：
  - 扁平化：`iboran.com/solution/finance-cloud`
  - 包含关键词：拼音或英文均可

### 5.2 内容层面
- **标签聚合系统**：建立横向标签聚合页
- 示例：点击 "新零售" 标签 → 聚合财务云、营销云、库存管理中所有相关内容
- 目的：增加内链密度，提升长尾词权重

### 5.3 页面 SEO 元数据模板
```tsx
export const metadata: Metadata = {
  title: '[方案名称] - 泊冉科技 | 用友白金伙伴',
  description: '[80-150字描述，包含核心关键词]',
  keywords: ['用友', '泊冉', '[产品名]', '[行业词]', '[场景词]'],
}
```

### ✅ SEO 检查清单
- [ ] 页面有正确的 title 和 description
- [ ] URL 使用 kebab-case 且包含关键词
- [ ] View Source 可见完整渲染内容
- [ ] 内链指向相关方案/标签页

---

## 6. 转化系统规则

### 6.1 AI 客服分级逻辑
| 场景 | 用户行为 | 系统响应 |
|------|----------|----------|
| A | 浏览 < 30 秒 | 静默，仅显示悬浮入口 |
| B | 浏览方案页并滚动到底部 | AI 弹出："需要了解 [方案名] 的报价或实施周期吗？" |
| C | 提问涉及 "价格"、"试用" | 停止 AI 回复，推送顾问企微或表单 |

### 6.2 CTA 设计规则 [强制]
全站**仅保留两类 CTA**：

1. **低门槛**：获取方案白皮书/架构图（留资）
2. **高门槛**：预约演示（高意向筛选）

**路径约束**：任意页面到表单提交 **≤ 2 次点击**

### ✅ 转化系统检查清单
- [ ] CTA 符合两类限制（留资 / 预约演示）
- [ ] 表单提交路径 ≤ 2 次点击
- [ ] 高意向关键词触发人工接入

---

## 7. 成功标准

> 用户能够识别泊冉是用友体系内的专业服务商，并认为通过泊冉实施比直接联系原厂更专业、响应更快。

---

## 8. 关联工作流

以下工作流遵循本规则文件，可直接使用：

| 工作流 | 用途 | 路径 |
|--------|------|------|
| `/create-industry-solution` | 从资料生成行业解决方案页面 | `.agent/workflows/create-industry-solution.md` |
| `/create-product-solution` | 从内容生成产品解决方案页面 | `.agent/workflows/create-product-solution.md` |
| `/generate-blog-post` | 根据 B2B & SEO 专家视角生成博客文章 | `.agent/workflows/generate-blog-post.md` |
| `/integrate-showcase` | 集成 Gemini 生成的 Showcase ZIP 包 | `.agent/workflows/integrate-showcase.md` |

---

## 附录：项目团队职能

- **品牌策略**：处理用友品牌资产与泊冉差异化定位的关系
- **全栈开发**：负责 Next.js/Nuxt + Headless CMS 架构实施
- **SEO 执行**：针对百度收录规则进行优化
- **转化设计**：负责从流量到线索的路径设计

---

*最后更新：2025-12-26*
