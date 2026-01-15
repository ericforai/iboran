# 富文本组件模板

Payload CMS Lexical 格式的组件模板，用于构建高质量 B2B 博客文章。

---

## 1. TL;DR 摘要框

```json
{
  "type": "card",
  "style": "info",
  "children": [
    { "type": "heading", "tag": "h3", "children": [{ "type": "text", "text": "核心要点" }] },
    {
      "type": "list",
      "listType": "bullet",
      "children": [
        { "type": "listitem", "children": [{ "type": "text", "text": "要点 1" }] },
        { "type": "listitem", "children": [{ "type": "text", "text": "要点 2" }] }
      ]
    }
  ]
}
```

**用法**: 放在文章开头，5-7 条核心结论

---

## 2. 决策矩阵表格

```json
{
  "type": "table",
  "children": [
    {
      "type": "tablerow",
      "children": [
        { "type": "tablecell", "headerState": 1, "children": [{ "type": "text", "text": "条件" }] },
        { "type": "tablecell", "headerState": 1, "children": [{ "type": "text", "text": "建议动作" }] }
      ]
    },
    {
      "type": "tablerow",
      "children": [
        { "type": "tablecell", "children": [{ "type": "text", "text": "IF 年营收 > 1 亿" }] },
        { "type": "tablecell", "children": [{ "type": "text", "text": "THEN 考虑云 ERP" }] }
      ]
    }
  ]
}
```

---

## 3. FAQ 手风琴

Schema.org 友好格式：

```typescript
const atomicFAQs = [
  {
    question: "ERP 项目通常需要多长时间？",
    answer: "标准 U8/U9 项目 3-6 个月。具体取决于业务复杂度和集成深度。"
  },
  {
    question: "实施过程中最常见的问题是什么？",
    answer: "数据迁移和变革管理。约 70% 的项目延期与这两项相关。"
  }
]
```

---

## 4. 微案例卡片

```json
{
  "type": "card",
  "style": "neutral",
  "children": [
    { "type": "heading", "tag": "h4", "children": [{ "type": "text", "text": "📋 案例：某电子制造企业" }] },
    { "type": "paragraph", "children": [
      { "type": "text", "text": "背景：年营收 3 亿，主营 PCB 板生产，原用金蝶 K3。" }
    ]},
    { "type": "paragraph", "children": [
      { "type": "text", "text": "问题：成本核算滞后 15 天，无法满足客户快速报价需求。" }
    ]},
    { "type": "paragraph", "children": [
      { "type": "text", "text": "方案：U9 Cloud + MES 集成，实现工序级成本实时归集。" }
    ]},
    { "type": "paragraph", "children": [
      { "type": "text", "text": "结果：报价周期从 3 天缩短至 4 小时，订单转化率提升 22%。" }
    ]}
  ]
}
```

---

## 5. CTA 横幅

```json
{
  "type": "card",
  "style": "cta",
  "children": [
    { "type": "heading", "tag": "h3", "children": [
      { "type": "text", "text": "需要评估您的企业是否适合？" }
    ]},
    { "type": "paragraph", "children": [
      { "type": "text", "text": "预约一次 30 分钟的免费诊断，获取个性化建议。" }
    ]},
    { "type": "link", "url": "/demo", "children": [
      { "type": "text", "text": "预约专家评估 →" }
    ]}
  ]
}
```

---

## 6. 对比表格（适用/不适用）

```typescript
const boundaries = [
  { condition: "年营收 > 1 亿的离散制造业", type: "suitable" },
  { condition: "有专职 IT 团队（3 人以上）", type: "suitable" },
  { condition: "管理层支持数字化转型", type: "suitable" },
  { condition: "纯贸易型无复杂库存需求", type: "unsuitable" },
  { condition: "预算极低且对标准化接受度低", type: "unsuitable" },
  { condition: "人员流动率 > 50% 的初创团队", type: "unsuitable" }
]
```

---

## 7. 步骤流程

```json
{
  "type": "list",
  "listType": "number",
  "children": [
    {
      "type": "listitem",
      "children": [
        { "type": "text", "text": "第 1 阶段：需求调研（2-4 周）", "format": 1 },
        { "type": "text", "text": " — 产出物：《业务蓝图》、《差异分析报告》" }
      ]
    },
    {
      "type": "listitem",
      "children": [
        { "type": "text", "text": "第 2 阶段：系统配置（4-8 周）", "format": 1 },
        { "type": "text", "text": " — 产出物：《配置手册》、《测试用例》" }
      ]
    },
    {
      "type": "listitem",
      "children": [
        { "type": "text", "text": "第 3 阶段：数据迁移（2-4 周）", "format": 1 },
        { "type": "text", "text": " — 产出物：《数据清洗报告》、《迁移验证》" }
      ]
    }
  ]
}
```

---

## 8. 关键指标表

```json
{
  "type": "table",
  "children": [
    {
      "type": "tablerow",
      "children": [
        { "type": "tablecell", "headerState": 1, "children": [{ "type": "text", "text": "指标" }] },
        { "type": "tablecell", "headerState": 1, "children": [{ "type": "text", "text": "基准值" }] },
        { "type": "tablecell", "headerState": 1, "children": [{ "type": "text", "text": "达标标准" }] }
      ]
    },
    {
      "type": "tablerow",
      "children": [
        { "type": "tablecell", "children": [{ "type": "text", "text": "月结时间" }] },
        { "type": "tablecell", "children": [{ "type": "text", "text": "15 天" }] },
        { "type": "tablecell", "children": [{ "type": "text", "text": "≤ 5 天" }] }
      ]
    },
    {
      "type": "tablerow",
      "children": [
        { "type": "tablecell", "children": [{ "type": "text", "text": "库存准确率" }] },
        { "type": "tablecell", "children": [{ "type": "text", "text": "85%" }] },
        { "type": "tablecell", "children": [{ "type": "text", "text": "≥ 98%" }] }
      ]
    }
  ]
}
```

---

## 使用说明

1. 每篇文章至少使用 **3 种以上** 组件
2. **TL;DR + FAQ + CTA** 是必选三件套
3. 案例卡片增加社会证明
4. 表格增加结构化数据（SEO 友好）
