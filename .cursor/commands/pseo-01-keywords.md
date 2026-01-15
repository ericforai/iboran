# Skill 01 — Keyword Cluster Logic Builder (Cluster-First)

## Purpose
围绕 {topic} 关键词簇规划，基于 SEED KEYWORDS 进行关键词挖掘和分类。

**核心原则**：理解"词根"和"SEED KEYWORDS"。进入一个行业，基于行业 SEED KEYWORDS 进行关键词挖掘，然后分类。这一流程下来，你自然对这个行业的搜索需求有一定认知了，更容易挖掘到真正有价值的词。

让模型输出：
1) 维度设计（3-6个）
2) 每个维度枚举（10-30个）
3) 组合生成逻辑（Excel公式 或 Python 伪代码）
4) 20条高差异样本
5) validation_criteria（可程序判断的阈值/规则）

## Input
- seed_keyword (string)
- domain (string) 例：ERP实施服务 / 用友YonSuite实施 / 业财一体化
- config (from Skill 00) JSON

## Output (YAML)
dimensions:
  - name: industry
    values: [ ... ]
  - name: scenario
    values: [ ... ]
generator:
  method: "excel" | "python"
  excel_formula: "..."
  python_pseudocode: "..."
samples:
  - keyword: "..."
    cluster: "..."
validation_criteria:
  - rule: "Top3 contains Reddit/Quora -> PASS"
    rationale: "UGC站点多时通常竞争更低"
  - rule: "Title match rate < 0.6 -> PASS"
    rationale: "SERP不集中说明可用差异化切入"

## System Prompt（强约束）
- 不输出超过 25 条 samples
- 必须输出 generator（excel_formula 或 python_pseudocode 至少一个）
- validation_criteria 必须是可编程判断的规则（不能只写一句"看一下竞争度"）
- 不要编造搜索量/难度数字；只给规则，不给虚数。

**关键词矩阵打法**：
- 核心在于理解"词根"、"SEED KEYWORDS"
- 基于行业 SEED KEYWORDS 进行关键词挖掘，然后分类
- 通过这一流程，自然对这个行业的搜索需求有一定认知，更容易挖掘到真正有价值的词

## Implementation
可执行脚本：`scripts/pseo-keywords-generator.ts`

### Usage
```bash
# 基本用法
tsx scripts/pseo-keywords-generator.ts \
  --seed-keyword "ERP实施" \
  --domain "ERP实施服务" \
  --config config.json \
  --output keywords.yaml

# 使用 Excel 方法
tsx scripts/pseo-keywords-generator.ts \
  --seed-keyword "YonSuite实施" \
  --domain "用友YonSuite实施" \
  --config config.json \
  --method excel \
  --output keywords.yaml

# 使用 JSON 字符串作为配置
tsx scripts/pseo-keywords-generator.ts \
  --seed-keyword "业财一体化" \
  --domain "业财一体化" \
  --config '{"config":{...}}' \
  --output keywords.yaml
```

### Features
- **智能维度生成**：根据领域自动选择维度模板，或基于 config 中的 product_scope/service_scope 生成
- **组合逻辑生成**：支持 Excel 公式或 Python 伪代码两种方法
- **样本生成**：自动生成最多 20 条高差异样本关键词
- **验证规则**：内置 5 条可编程判断的验证规则（SERP 分析、竞争度判断等）

### Default Dimension Templates
- **ERP实施服务**：industry, scenario, product
- **用友YonSuite实施**：industry, scenario, scale
- **业财一体化**：industry, scenario, product

### Output Format
输出 YAML 格式，包含：
- `dimensions`: 维度设计（3-6个）
- `generator`: 组合生成逻辑（Excel 或 Python）
- `samples`: 样本关键词（最多 20 条）
- `validation_criteria`: 验证规则（可编程判断）
