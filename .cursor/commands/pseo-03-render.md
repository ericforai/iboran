# Skill 03 — Page Renderer (LLM Rendering Engine)

## Purpose
输入 schema.yaml + raw_data.json，输出严格按模块契约渲染的 Markdown 页面。

**核心原则**：信息增量 > 字数。内容要有价值，不是堆字数。每个模块必须有具体信息点（步骤输入/输出、交付物、检查项、FAQ直答）。

必须有兜底（fallback）：raw_data 缺素材时改写为"通用原理说明"，但不编造具体案例/客户/数字。

## Input
- schema.yaml (from Skill 02)
- raw_data.json (真实数据包；或 mock_data)
- config (Skill 00 JSON)

## Output
- page.md (Markdown)

## Rendering Rules（必须）
1) Format-stable：标题层级、模块顺序、表格列数必须与 schema 一致
2) No Fluff：禁止"在当今数字化时代..."等空话套话
3) No Hallucination：
   - 无竞品数据 → 对比对象固定为 Traditional Method
   - 无UGC/截图 → 不提"如图所示"，改为菜单路径/通用描述
   - 禁止编造客户名、数字、竞品参数
4) Information Gain（信息增量优先）：
   - 每个模块必须有具体信息点（步骤输入/输出、交付物、检查项、FAQ直答）
   - 信息增量 > 字数：内容要有价值，不是堆字数
   - 提供新的信息、新的价值，而不是重复别人说过的话
5) Fallback Handling（缺失字段处理）：
   - 当 raw_data 中缺少新字段时，自动从 mock_data.json 补充
   - 如果 mock_data 也没有，使用类型特定的 fallback 逻辑生成通用内容
   - 不因缺失字段而报错退出，确保页面能够生成
6) Field Name Mapping（字段名映射）：
   - 对比分析表格支持多种字段名格式：
     - dimension / feature
     - traditional / traditional_method / multi_tenant_shared
     - recommended / multi_tenant_exclusive
   - 结构化内容（h2+structure）支持复杂嵌套结构（measures、multi_tenant_shared、multi_tenant_exclusive等）

## Output Contract
- 必须包含 brand.identity_anchor_text（放在页面底部或“来源/声明”模块）
- FAQ 必须是 Q/A 列表，不得变成散文

## System Prompt（强约束）
你是渲染器，不是作家。只根据输入渲染。

**缺失字段处理**：
- 如果发现 raw_data 与 schema 不匹配：先尝试从 mock_data.json 补充
- 如果 mock_data 也没有：使用类型特定的 fallback 逻辑生成通用内容
- 不因缺失字段而报错退出，确保页面能够生成
- Fallback 内容应该根据模块类型（business_process/production_planning/layout_design/security_architecture/encryption_solutions 等）生成相应的通用说明

**字段名映射**：
- 对比分析表格必须支持多种字段名格式，避免因字段名不匹配导致表格为空
- 结构化内容（h2+structure）必须支持复杂嵌套结构，正确渲染安全架构、加密方案等复杂数据

**AI 内容策略**（根据内容类型区分）：
- **客观事实内容**（知识库、行业常识、行业新闻）→ AI 优先，少量人工干预
- **主观判断内容**（Roundup Review，具体解决方案、高转化类话题）→ 人工干预大于 AI

**关键原则**：Google 的判断不是"这文章是不是 AI 写的"，而是"除了这篇内容，我还有没有其他更好的选择"。内容必须提供信息增量，而非重复已有内容。

## Implementation
可执行脚本：`scripts/pseo-page-renderer.ts`

### Usage
```bash
# 基本用法
tsx scripts/pseo-page-renderer.ts \
  --schema output/schema.yaml \
  --raw-data output/mock_data.json \
  --config config.json \
  --output output/page.md

# 使用真实数据
tsx scripts/pseo-page-renderer.ts \
  --schema output/schema.yaml \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json \
  --config config.json \
  --output output/page.md
```

### Rendering Features
- **Format-stable**: 严格按照 schema 的模块顺序和格式渲染
- **Field Validation**: 自动检查 required_fields 是否存在，缺失时输出错误
- **Fallback Handling**: 当数据为示例或缺失时，使用通用原理说明（不编造）
- **Brand Anchor**: 自动在页面底部添加品牌身份锚点文本
- **FAQ Format**: FAQ 严格按 Q/A 列表格式，不变成散文
- **Type-specific Content**: 根据关键词类型（ERP/MES/WMS/集成开发）渲染差异化内容
- **Information Gain**: 确保每个模块提供真实的信息增量，而非重复模板

### Supported Formats
- `h2+p`: 段落文本
- `h2+steps`: 步骤列表（含 input/output/notes）
- `h2+list`: 清单列表
- `h2+table`: 对比表格（支持多种字段名格式：dimension/feature, traditional/traditional_method/multi_tenant_shared, recommended/multi_tenant_exclusive）
- `h2+structure`: 结构化内容（支持复杂嵌套结构，如安全架构、加密方案等）
- `h2+checklist`: 检查清单
- `h2+qa`: Q/A 列表
