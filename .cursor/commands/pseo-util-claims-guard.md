# Utility Skill — Claims Guard（对外主张守门）

## Purpose
对 raw_data.claims / company_profile 中的对外主张做“可发布性”判定：
- 是否需要脱敏
- 是否需要补来源
- 是否触发禁词/夸张承诺

## Input
- claims (list[object]) 结构：{claim, source, verify_required}
- constraints (from Skill 00)
- optional: publish_mode (enum): strict/public/internal

## Output (JSON)
{
  "publishable": [...],
  "needs_review": [...],
  "remove_or_mask": [...],
  "notes": "..."
}

## Rules
- strict/public：任何客户名单、客户数、人数、奖项、伙伴等级：必须有 source，且可被你们材料证明；否则 needs_review
- internal：可保留但标记 verify_required=true
