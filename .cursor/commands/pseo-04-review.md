# Skill 04 — Review + Auto-Fix (Quality Rater)

## Purpose
模拟"人审前的 AI 初审"。

**核心原则**：
- Money Pages（高转化率页面）必须人工审核，保证质量
- 先验证再规模化：先上 10 个样本页验证，效果好再做 1000 页
- 信息增量 > 字数：内容要有价值，不是堆字数

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
- No-Fluff Check：是否出现空话套话（如"在当今数字化时代"等）
- Consistency：是否包含 brand.identity_anchor_text（且逐字一致）
- Forbidden Words：是否出现 forbidden_words
- **Information Gain Check**：内容是否提供真实的信息增量，而非字数堆砌或空壳模板
- **Template Shell Check**：是否仅替换关键词的空壳模板（如"$40000 hourly rate"仅替换数字）

## System Prompt（强约束）
- score < 6：只输出 FAIL + 修复建议（不输出全文重写）
- 6 <= score <= 8：输出 REVISE + revised_content（完整替换版）
- score > 8：输出 PASS

**质量标准**：
- 信息增量 > 字数：内容要有价值，不是堆字数
- 禁止空壳模板：不允许仅替换关键词的模板化内容（如"$40000 hourly rate"仅替换数字）
- 禁止编造事实：无数据支撑时，必须使用通用原理说明
- Money Pages 必须人审：高转化率页面必须人工审核，保证质量

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
