# Skill 02 — Schema & Mock Data Generator (Schema-first)

## Purpose
输出 CMS 可用的模块契约 YAML；并生成 mock_data.json 便于在没有真实素材时测试 Skill 03。

**核心原则**：把内容模块化做成可抽取的事实块。每个模块必须是可复用的信息单元，而非空壳模板。

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
- **关键词类型识别**：必须优先识别特殊主题（数据安全、加密等），再识别产品类型，避免误识别
- **数据安全类型模块**：当识别为 '数据安全' 类型时，应生成：安全架构、加密方案、BYOX 解决方案、实施步骤、对比分析、常见问题

**模块化原则**：
- 每个模块必须是可抽取的事实块（fact block），而非空壳模板

**关键词类型识别原则**：
- 必须优先识别特殊主题（数据安全、加密、隐私等），再识别产品类型（ERP、MES、WMS等）
- 关键词类型识别顺序：
  1. 特殊主题：数据安全、数据加密、安全、加密、防护、隐私 → '数据安全' 类型
  2. 产品类型：MES、WMS、集成开发、协同、ERP → 对应类型
  3. 默认：'通用' 类型
- 避免误识别：包含产品名称（如 YonSuite）但主题是数据安全的关键词，应识别为 '数据安全' 而非 'ERP'
- 模块设计要支持"功能 × 场景 × 行业"的组合范式（参考 pollo.ai、n8n.io、framer.com）
- 模块必须包含真实的信息增量，而非仅替换关键词

**关键词类型识别与差异化**：
- 自动识别关键词类型（ERP/MES/WMS/集成开发/协同/数据安全）
- **识别顺序**：优先识别特殊主题（数据安全、加密、隐私等），再识别产品类型（ERP、MES、WMS等）
- 根据关键词类型生成不同的模块结构
- 避免所有页面使用相同的模板结构
- 每个类型应该有独特的内容模块，提供真实的信息增量
- **避免误识别**：包含产品名称（如 YonSuite）但主题是数据安全的关键词，应识别为 '数据安全' 而非 'ERP'

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

### 模块生成策略（根据关键词类型自动差异化）

**核心原则**：根据关键词类型（ERP/MES/WMS/集成开发/协同）自动生成不同的模块，避免模板化。

#### ERP 实施服务模块
- `direct_answer`: 一句话结论
- `business_process`: 业务流程梳理
- `system_configuration`: 系统配置方案
- `data_migration`: 数据迁移策略
- `comparison`: 对比分析
- `faq`: 常见问题

#### MES 实施服务模块
- `direct_answer`: 一句话结论
- `production_planning`: 生产计划流程
- `process_data_collection`: 工序数据采集
- `quality_traceability`: 质量追溯体系
- `erp_integration`: ERP 集成方案
- `faq`: 常见问题

#### WMS 实施服务模块
- `direct_answer`: 一句话结论
- `warehouse_layout`: 仓储布局设计
- `inventory_management`: 库存管理策略
- `inbound_outbound`: 出入库流程
- `comparison`: 对比分析
- `faq`: 常见问题

#### 集成开发服务模块
- `direct_answer`: 一句话结论
- `api_integration`: API 对接方案
- `message_push`: 消息推送机制
- `approval_workflow`: 审批流程设计
- `data_sync`: 数据同步策略
- `faq`: 常见问题

#### 协同实施服务模块
- `direct_answer`: 一句话结论
- `collaboration_setup`: 协同平台搭建
- `workflow_design`: 工作流设计
- `integration_points`: 集成对接点
- `comparison`: 对比分析
- `faq`: 常见问题

#### 数据安全类型模块
- `direct_answer`: 一句话结论
- `security_architecture`: 安全架构（四层安全架构：应用层、数据层、网络层、基础设施层）
- `encryption_solutions`: 加密方案（数据库透明加密、存储桶文件加密等）
- `byox_solution`: BYOX 解决方案（BYOK/BYOS/BYOM）
- `howto_steps`: 实施步骤
- `comparison`: 对比分析
- `faq`: 常见问题

#### 默认模块（通用或未识别类型）
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
