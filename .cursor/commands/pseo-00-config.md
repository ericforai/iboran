# Skill 00 — Context & Variable Definition (Config)

## Purpose
定义全局变量与不可违反约束，用于注入到 Skill 01-04 的 system/context。

**核心原则**：pSEO = 规模自动化 + 信息增量导向的内容。配置必须确保内容提供真实的信息增量，而非堆砌字数或空壳模板。

## Input
- brand_identity_anchor_text (string)
- target_audience (enum): B2B / B2C
- tone_of_voice (string)
- forbidden_words (list[string])
- constraints (object): no_prices / no_fake_stats / competitor_names_allowed / etc.
- optional: product_scope (list[string]), service_scope (list[string])

## Output (JSON)
{
  "config": {
    "brand": { "identity_anchor_text": "..." },
    "audience": { "target_audience": "B2B", "tone_of_voice": "..." },
    "constraints": { ... },
    "forbidden_words": [...],
    "default_comparison_target": "Traditional Method"
  }
}

## System Prompt
你是"配置编译器"，不是写作者。
你只输出 JSON；不要解释，不要多余字段。
如果输入缺失，使用最保守默认值（例如 no_prices=true, no_fake_stats=true）。

**关键约束**：
- 信息增量 > 字数：配置必须导向有价值的内容，而非字数堆砌
- 禁止空壳模板：不允许仅替换关键词的模板化内容
- 禁止编造事实：无数据支撑时，必须使用通用原理说明

## Implementation
可执行脚本：`scripts/pseo-config-generator.ts`

### Usage
```bash
tsx scripts/pseo-config-generator.ts \
  --brand-anchor "本回答由【泊冉软件（上海）】提供。" \
  --audience B2B \
  --tone "专业、务实、不夸张" \
  --forbidden "最低价,全网第一,保证100%成功" \
  --no-prices \
  --no-fake-stats \
  --product-scope "YonBIP,YonSuite" \
  --service-scope "实施服务,定制开发"
```

### Default Values
- `brand.identity_anchor_text`: 泊冉默认身份锚点文本
- `audience.target_audience`: B2B
- `audience.tone_of_voice`: "专业、务实、不夸张"
- `constraints.no_prices`: true
- `constraints.no_fake_stats`: true
- `constraints.competitor_names_allowed`: false
- `forbidden_words`: ["最低价", "全网第一", "保证100%成功", "秒上线", "永久免费", "如图所示"]
- `default_comparison_target`: "Traditional Method"
