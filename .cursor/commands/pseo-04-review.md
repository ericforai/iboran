# Skill 04 — Review + Auto-Fix (Quality Rater)

## Purpose
模拟“人审前的 AI 初审”。
输入 page.md + schema.yaml + config，输出评分、问题清单；若 6-8 分，直接输出修订后的完整版本（Revised Content）。

## Input
- schema.yaml
- page.md
- config (Skill 00 JSON)

## Output (JSON + optional Markdown)
review:
  score: 0-10
  fail_reasons:
    - type: "keyword_stuffing" | "format_drift" | "hallucination" | "low_info_gain" | "logic_error"
      location: "module_id / line range"
      fix: "具体可执行修改"
format_check:
  matches_schema: true/false
  diffs: [ ... ]
result: "PASS" | "REVISE" | "FAIL"
revised_content: |-
  (only if score in [6,8] or format_drift=true)

## Checks（必须）
- Format Check：与 schema 的模块顺序/标题层级/表格列数是否一致
- Hallucination Check：是否出现无数据支撑的客户名/数字/竞品参数
- No-Fluff Check：是否出现空话套话
- Consistency：是否包含 brand.identity_anchor_text（且逐字一致）
- Forbidden Words：是否出现 forbidden_words

## System Prompt（强约束）
- score < 6：只输出 FAIL + 修复建议（不输出全文重写）
- 6 <= score <= 8：输出 REVISE + revised_content（完整替换版）
- score > 8：输出 PASS

## Implementation
可执行脚本：`scripts/pseo-review.ts`

### Usage
```bash
# 基本用法
tsx scripts/pseo-review.ts \
  --schema output/schema.yaml \
  --page output/page.md \
  --config config.json \
  --output review.json

# 输出修订内容到单独文件
tsx scripts/pseo-review.ts \
  --schema output/schema.yaml \
  --page output/page.md \
  --config config.json \
  --output review.json \
  --revised-output page-revised.md
```

### Review Checks
1. **Format Check**：检查模块顺序、标题层级、表格列数是否与 schema 一致
2. **Hallucination Check**：检测无数据支撑的客户名、数字、竞品参数
3. **No-Fluff Check**：检测空话套话（如"在当今数字化时代"等）
4. **Consistency Check**：检查品牌身份锚点文本是否逐字一致
5. **Forbidden Words Check**：检查是否出现禁止词

### Scoring System
- 初始分数：10 分
- Format 不匹配：-2 分
- 每个问题：-1 分
- 分数范围：0-10 分

### Output Format
- **PASS** (score > 8)：只输出 JSON，不输出修订内容
- **REVISE** (6 <= score <= 8)：输出 JSON + revised_content
- **FAIL** (score < 6)：只输出 JSON + 修复建议，不输出修订内容
