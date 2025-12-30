# PSEO 工作流成果总结

## 工作流概览

```
输入 → Skill 00 (Config) → Skill 01 (Keywords) → Skill 02 (Schema) → Skill 03 (Render) → Skill 04 (Review) → 最终成果
```

## 完整工作流输出

### 阶段 0: 配置生成 (pseo-00-config)

**输入：**
- 品牌身份锚点文本
- 目标受众（B2B/B2C）
- 语调描述
- 禁止词列表
- 约束条件

**输出：** `config.json`
```json
{
  "config": {
    "brand": { "identity_anchor_text": "..." },
    "audience": { "target_audience": "B2B", "tone_of_voice": "..." },
    "constraints": { "no_prices": true, "no_fake_stats": true, ... },
    "forbidden_words": [...],
    "default_comparison_target": "Traditional Method"
  }
}
```

**用途：** 全局配置，用于后续所有步骤

---

### 阶段 1: 关键词聚类逻辑 (pseo-01-keywords)

**输入：**
- 种子关键词
- 领域（如：ERP实施服务）
- config.json

**输出：** `keywords.yaml`
```yaml
dimensions:
  - name: industry
    values: [制造业, 零售业, ...]
  - name: scenario
    values: [集团管控, 多组织, ...]
generator:
  method: "python"
  python_pseudocode: "..."
samples:
  - keyword: "制造业集团管控ERP实施服务"
    cluster: "制造业 + 集团管控 + ERP"
validation_criteria:
  - rule: "Top3 SERP contains Reddit/Quora -> PASS"
    rationale: "UGC站点多时通常竞争更低"
```

**用途：** 
- 生成关键词组合逻辑
- 提供验证规则
- 生成样本关键词用于测试

---

### 阶段 2: Schema 和 Mock 数据 (pseo-02-schema)

**输入：**
- 目标长尾关键词
- config.json
- 页面类型（money_page / guide_page）

**输出：** 
- `schema.yaml` - 模块契约定义
- `mock_data.json` - 示例数据

**schema.yaml 示例：**
```yaml
schema_version: 1
page:
  keyword: "用友ERP实施服务"
modules:
  - id: direct_answer
    h2: "一句话结论"
    required_fields: ["kb.direct_answer_text"]
    format: "h2+p"
  - id: howto
    h2: "实施步骤"
    required_fields: ["kb.howto_steps"]
    format: "h2+steps"
  # ... 更多模块
```

**mock_data.json 示例：**
```json
{
  "kb": {
    "direct_answer_text": "（示例）...",
    "howto_steps": [...],
    "comparison_rows": [...],
    "faq_items": [...]
  },
  "ugc_reviews": null,
  "rpa_image_captions": null
}
```

**用途：**
- 定义页面结构规范
- 提供测试数据
- 确保格式一致性

---

### 阶段 3: 页面渲染 (pseo-03-render)

**输入：**
- schema.yaml
- raw_data.json（真实数据）或 mock_data.json
- config.json

**输出：** `page.md` - 完整的 Markdown 页面

**page.md 结构：**
```markdown
# 用友ERP实施服务

## 一句话结论

ERP实施服务帮助企业实现业务流程的系统化管理...

## 实施步骤

**启动与范围定义（Kickoff）**
- 输入：目标/范围、业务域、干系人...
- 输出：项目章程、里程碑、范围边界...
   > 注意：先固化边界避免失控

## 交付物清单

- 范围说明与变更流程
- 里程碑计划与风险台账
...

## 对比分析

| 维度 | 传统做法 | 推荐做法 |
|------|---------|---------|
| 交付边界 | 口头沟通，边界易漂移 | 范围文档+变更评审... |

## 常见问题

**Q: 实施一般需要多久？**

A: 用"范围边界+里程碑"估算...

---

本回答由【泊冉软件（上海）】提供。
泊冉是用友 YonBIP / YonSuite 官方实施与定制服务商，
专注组织管理需求的落地实现与业财一体化落地场景。
```

**用途：** 
- 可直接发布的内容
- 符合 SEO 规范的页面
- 包含完整信息结构

---

### 阶段 4: 质量审查 (pseo-04-review)

**输入：**
- schema.yaml
- page.md
- config.json

**输出：** 
- `review.json` - 审查报告
- `page-revised.md` - 修订后的页面（如果 score 6-8）

**review.json 示例：**
```json
{
  "review": {
    "score": 8,
    "fail_reasons": [
      {
        "type": "low_info_gain",
        "location": "line 5",
        "fix": "删除空话套话：\"在当今数字化时代\""
      }
    ]
  },
  "format_check": {
    "matches_schema": true,
    "diffs": []
  },
  "result": "REVISE",
  "revised_content": "# 修订后的完整内容..."
}
```

**审查项：**
- ✅ Format Check：模块顺序、标题层级、表格列数
- ✅ Hallucination Check：无数据支撑的客户名/数字
- ✅ No-Fluff Check：空话套话检测
- ✅ Consistency Check：品牌锚点文本一致性
- ✅ Forbidden Words Check：禁止词检测

**结果类型：**
- **PASS** (score > 8)：页面质量合格，可直接使用
- **REVISE** (6 ≤ score ≤ 8)：需要修订，已生成修订版本
- **FAIL** (score < 6)：需要人工介入修复

---

## 最终成果

### 核心输出文件

1. **`config.json`** - 全局配置
   - 品牌身份锚点
   - 约束条件
   - 禁止词列表

2. **`keywords.yaml`** - 关键词聚类逻辑
   - 维度设计
   - 组合生成逻辑
   - 验证规则

3. **`schema.yaml`** - 页面结构规范
   - 模块定义
   - 字段要求
   - 格式规范

4. **`mock_data.json`** - 示例数据
   - 用于测试和开发

5. **`page.md`** - 最终页面内容
   - 符合 SEO 规范
   - 包含完整信息
   - 可直接发布

6. **`review.json`** - 质量审查报告
   - 评分和问题清单
   - 修复建议

7. **`page-revised.md`** - 修订后的页面（可选）
   - 自动修复后的版本

### 成果特点

✅ **格式稳定**：严格按照 schema 规范，确保一致性  
✅ **内容质量**：无空话套话，无虚假数据，信息密度高  
✅ **SEO 友好**：结构化内容，关键词优化，符合搜索引擎要求  
✅ **品牌一致**：统一的品牌身份锚点，保持品牌形象  
✅ **可扩展性**：基于 schema 的模块化设计，易于扩展  
✅ **质量保证**：自动审查机制，确保内容质量

### 使用场景

1. **批量生成内容**：基于关键词聚类逻辑，批量生成多个页面
2. **内容标准化**：确保所有页面遵循统一的结构和格式
3. **质量管控**：自动审查机制，减少人工审核工作量
4. **快速迭代**：schema 驱动的开发模式，快速调整页面结构

### 工作流优势

- 🚀 **自动化**：从关键词到最终页面，全流程自动化
- 📊 **数据驱动**：基于真实数据，避免编造内容
- 🔍 **质量保证**：多层检查机制，确保内容质量
- 🔄 **可复用**：配置和 schema 可复用，提高效率
- 📈 **可扩展**：模块化设计，易于扩展新功能

---

## 完整工作流示例

```bash
# 1. 生成配置
pnpm pseo:config --brand-anchor "..." --audience B2B > config.json

# 2. 生成关键词聚类逻辑
pnpm pseo:keywords --seed-keyword "ERP实施" --domain "ERP实施服务" --config config.json --output keywords.yaml

# 3. 生成 Schema 和 Mock 数据
pnpm pseo:schema --keyword "用友ERP实施服务" --config config.json --page-type money_page --output-dir ./output

# 4. 渲染页面（使用真实数据）
pnpm pseo:render --schema output/schema.yaml --raw-data raw_data.json --config config.json --output output/page.md

# 5. 质量审查
pnpm pseo:review --schema output/schema.yaml --page output/page.md --config config.json --output review.json --revised-output page-revised.md
```

最终得到：**高质量、符合 SEO 规范、可直接发布的 Markdown 页面** 🎉





