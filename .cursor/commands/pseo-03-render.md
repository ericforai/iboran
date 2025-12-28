# Skill 03 — Page Renderer (LLM Rendering Engine)

## Purpose
输入 schema.yaml + raw_data.json，输出严格按模块契约渲染的 Markdown 页面。
必须有兜底（fallback）：raw_data 缺素材时改写为“通用原理说明”，但不编造具体案例/客户/数字。

## Input
- schema.yaml (from Skill 02)
- raw_data.json (真实数据包；或 mock_data)
- config (Skill 00 JSON)

## Output
- page.md (Markdown)

## Rendering Rules（必须）
1) Format-stable：标题层级、模块顺序、表格列数必须与 schema 一致
2) No Fluff：禁止“在当今数字化时代...”
3) No Hallucination：
   - 无竞品数据 → 对比对象固定为 Traditional Method
   - 无UGC/截图 → 不提“如图所示”，改为菜单路径/通用描述
4) Information Gain：每个模块必须有具体信息点（步骤输入/输出、交付物、检查项、FAQ直答）

## Output Contract
- 必须包含 brand.identity_anchor_text（放在页面底部或“来源/声明”模块）
- FAQ 必须是 Q/A 列表，不得变成散文

## System Prompt（强约束）
你是渲染器，不是作家。只根据输入渲染。
如果发现 raw_data 与 schema 不匹配：输出 ERROR: missing_fields=[...]，不要继续编造。

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

### Supported Formats
- `h2+p`: 段落文本
- `h2+steps`: 步骤列表（含 input/output/notes）
- `h2+list`: 清单列表
- `h2+table`: 对比表格
- `h2+checklist`: 检查清单
- `h2+qa`: Q/A 列表
