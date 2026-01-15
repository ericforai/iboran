# Skill 05 — Sample Validation & Scale Strategy (先验证再规模化)

## Purpose
在批量生成前，先验证小样本（10个页面）的效果，确认信息增量、收录情况、排名表现后再规模化。

**核心原则**：先验证再规模化。先上 10 个样本页验证，效果好再做 1000 页。

## Input
- sample_pages (list): 10个样本页面的 page.md 路径
- schema.yaml (from Skill 02)
- config (Skill 00 JSON)
- optional: gsc_data (Google Search Console 数据)

## Output (JSON)
{
  "validation": {
    "sample_count": 10,
    "quality_scores": [8, 9, 7, ...],
    "avg_score": 8.5,
    "information_gain_check": {
      "passed": true,
      "issues": []
    },
    "template_shell_check": {
      "passed": true,
      "issues": []
    },
    "recommendation": "SCALE" | "REVISE" | "FAIL"
  },
  "scale_strategy": {
    "recommended_batch_size": 100,
    "quality_gate": 8.0,
    "human_review_required": ["money_page"],
    "auto_update_enabled": true
  }
}

## Validation Checks
1. **Quality Score Check**：10个样本的平均质量评分 >= 8.0
2. **Information Gain Check**：每个页面是否提供真实的信息增量
3. **Template Shell Check**：是否仅替换关键词的空壳模板
4. **Format Consistency Check**：所有样本是否遵循相同的 schema
5. **Brand Consistency Check**：是否都包含品牌身份锚点

## System Prompt
你是"验证器"，评估小样本是否达到规模化标准。

**关键判断**：
- 如果 avg_score >= 8.0 且 information_gain_check 通过 → 推荐 SCALE
- 如果 avg_score 在 6-8 之间 → 推荐 REVISE（修复问题后再验证）
- 如果 avg_score < 6 → 推荐 FAIL（重新设计 schema 或关键词策略）

**规模化策略**：
- 推荐批量大小：根据样本质量决定（通常 100-1000 页）
- 质量门槛：批量生成时，质量评分必须 >= 8.0
- 人工审核：Money Pages 必须人工审核
- 自动更新：排名好的内容，手动 review 多做 update，持续优化

## Implementation
可执行脚本：`scripts/pseo-validation.ts`

### Usage
```bash
# 验证 10 个样本页面
tsx scripts/pseo-validation.ts \
  --samples "output/sample1/page.md,output/sample2/page.md,..." \
  --schema output/schema.yaml \
  --config config.json \
  --output validation-report.json

# 基于验证结果决定是否规模化
tsx scripts/pseo-validation.ts \
  --samples "output/sample*/page.md" \
  --schema output/schema.yaml \
  --config config.json \
  --gsc-data gsc-export.csv \
  --output validation-report.json
```

### Validation Workflow
1. **生成 10 个样本页面**（使用 Skill 01-03）
2. **运行验证**（Skill 05）
3. **根据结果决定**：
   - SCALE：批量生成 100-1000 页
   - REVISE：修复问题后重新验证
   - FAIL：重新设计策略

### Best Practices
- **先验证再规模化**：永远不要直接批量生成 1000 页，先验证 10 个样本
- **持续监控**：批量生成后，持续监控收录、排名波动
- **及时优化**：不收录或排名差的内容，及时改或下线；排名好的，手动 review 多做 update



