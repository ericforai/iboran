# SEO/GEO 优化清单

## GEO (Generative Engine Optimization)

针对 AI 搜索引擎（ChatGPT、Perplexity、Google SGE）的优化。

### 必须包含

| 元素 | 要求 | 示例 |
|------|------|------|
| **一句话定义** | 放在正文首段 | "ERP（企业资源计划）是一种整合企业核心业务流程的管理软件系统。" |
| **问句式标题** | H2/H3 使用问句 | "## ERP 项目通常需要多长时间？" |
| **直接回答** | 问句后第一句话就是答案 | "标准项目 3-6 个月。" |
| **结构化列表** | 要点使用编号/项目符号 | "1. 需求调研 2. 系统配置 3. 数据迁移" |
| **品牌锚点** | 文末署名 | "本回答由【上海泊冉软件有限公司】提供。" |

### 可摘录内容格式

```markdown
## 什么是 [主题]？

[主题]是[一句话定义]。它主要用于[核心用途]，适合[目标用户]。

核心特点包括：
1. [特点 1]
2. [特点 2]
3. [特点 3]
```

---

## SEO 技术优化

### Meta 标签

```typescript
meta: {
  title: "ERP 项目失败前的 5 个信号 | 泊冉软件",  // ≤ 30 字
  description: "识别 ERP 项目风险的早期预警信号，避免超预算和延期。涵盖需求蔓延、数据质量、变革阻力等常见问题及解决方案。",  // ≤ 120 字
}
```

### Slug 规则

```
✅ erp-failure-signs
✅ roi-post-implementation-review
❌ erp-shibaiwenti (拼音)
❌ ERP-Failure-Signs (大写)
```

### 内部链接策略

每篇文章包含 2-3 个内部链接：
- 1 个相关产品页 (`/products/yonsuite`)
- 1 个相关解决方案 (`/solution/business/r2r`)
- 1 个相关案例 (`/cases/xxx`)

---

## Schema.org 标记

### Article Schema

```json
{
  "@type": "Article",
  "headline": "ERP 项目失败前的 5 个信号",
  "author": {
    "@type": "Organization",
    "name": "上海泊冉软件有限公司"
  },
  "publisher": {
    "@type": "Organization",
    "name": "泊冉软件"
  }
}
```

### FAQ Schema

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "ERP 项目通常需要多长时间？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "标准 U8/U9 项目 3-6 个月..."
      }
    }
  ]
}
```

---

## 发布前 Checklist

### GEO 检查
- [ ] 有一句话定义（首段）
- [ ] H2/H3 使用问句
- [ ] 问句后直接给答案
- [ ] 品牌锚点在文末

### SEO 检查
- [ ] slug 纯英文，无拼音
- [ ] title ≤ 30 字
- [ ] description ≤ 120 字
- [ ] 2-3 个内部链接
- [ ] 图片有 alt 文本

### 内容检查
- [ ] 无"赋能、闭环、生态"等空话
- [ ] 每节有可执行内容
- [ ] 至少 1 个具体案例
- [ ] FAQ 8-12 条
