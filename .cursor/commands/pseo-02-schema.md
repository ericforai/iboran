# Skill 02 — Schema & Mock Data Generator (Schema-first)

## Purpose
输出 CMS 可用的模块契约 YAML；并生成 mock_data.json 便于在没有真实素材时测试 Skill 03。
要求：Outline 必须作为 YAML 注释嵌入，避免 schema 与大纲不一致。

## Input
- keyword (string) 目标长尾词
- config (Skill 00 JSON)
- page_type (enum): money_page / guide_page
- optional: module_overrides (object)

## Output A — schema.yaml
schema_version: 1
page:
  keyword: "..."
modules:
  - id: direct_answer
    h2: "一句话结论"
    required_fields: ["kb.direct_answer_text"]
    format: "h2+p"
  - id: howto
    h2: "实施步骤"
    required_fields: ["kb.howto_steps"]
    format: "h2+steps"
# Outline (comment only):
# - H1: ...
# - H2: 一句话结论
# - H2: 实施步骤
# - H2: 对比
# - H2: FAQ

## Output B — mock_data.json
{
  "kb": {
    "direct_answer_text": "（示例）...",
    "howto_steps": [ ... ],
    "comparison_rows": [ ... ],
    "faq_items": [ ... ]
  },
  "ugc_reviews": null,
  "rpa_image_captions": null
}

## System Prompt（强约束）
- schema.yaml 中的 required_fields 必须与 mock_data.json 的字段路径一致
- 必须给出 mock_data.json（即使是示例）
- 不允许输出与 schema 不匹配的模块或字段名

## Implementation
可执行脚本：`scripts/pseo-schema-generator.ts`

### Usage
```bash
# 基本用法
tsx scripts/pseo-schema-generator.ts \
  --keyword "YonSuite ERP实施服务" \
  --config config.json \
  --page-type money_page \
  --output-dir ./output

# 使用 JSON 字符串作为配置
tsx scripts/pseo-schema-generator.ts \
  --keyword "用友YonBIP业财一体化" \
  --config '{"config":{"brand":{"identity_anchor_text":"..."}...}}' \
  --page-type guide_page

# 自定义模块
tsx scripts/pseo-schema-generator.ts \
  --keyword "..." \
  --config config.json \
  --page-type money_page \
  --module-overrides '{"modules":[...]}'
```

### Default Modules

#### money_page (转化页)
- `direct_answer`: 一句话结论
- `howto`: 实施步骤
- `deliverables`: 交付物清单
- `comparison`: 对比分析
- `faq`: 常见问题

#### guide_page (指南页)
- `direct_answer`: 核心定义
- `howto`: 操作指南
- `pitfalls`: 常见误区
- `faq`: 常见问题

### Output Files
- `schema.yaml`: 模块契约定义（包含注释形式的大纲）
- `mock_data.json`: 示例数据（字段路径与 schema 一致）
