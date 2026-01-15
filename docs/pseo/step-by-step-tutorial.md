# PSEO 工作流实战教程

## 🎯 目标

一步步完成 PSEO 工作流，生成一个高质量的 SEO 页面。

## 📋 前置条件

- 已安装依赖：`pnpm install`
- 有真实 raw_data（可选，可以使用 mock_data）

## 🚀 完整流程

### Step 0: 生成全局配置

**目的**：定义品牌、受众、约束等全局变量

```bash
pnpm pseo:config > output/tutorial/config.json
```

**输出**：`config.json`
- 品牌身份锚点文本
- 目标受众（B2B/B2C）
- 约束（禁止价格、禁止虚假数据等）
- 禁止词列表

**验证**：
```bash
cat output/tutorial/config.json
```

---

### Step 1: 生成关键词簇

**目的**：围绕 SEED KEYWORDS 进行关键词挖掘和分类

```bash
pnpm pseo:keywords \
  --seed-keyword "MES实施" \
  --domain "MES实施服务" \
  --config output/tutorial/config.json \
  --output output/tutorial/keywords.yaml
```

**输出**：`keywords.yaml`
- 维度设计（3-6个）
- 每个维度的枚举值
- 组合生成逻辑（Excel 或 Python）
- 样本关键词（最多 20 条）
- 验证规则

**验证**：
```bash
cat output/tutorial/keywords.yaml
```

---

### Step 2: 生成页面结构（Schema）

**目的**：根据关键词类型生成差异化的模块结构

```bash
pnpm pseo:schema \
  --keyword "MES 实施服务" \
  --config output/tutorial/config.json \
  --page-type money_page \
  --output-dir output/tutorial
```

**输出**：
- `schema.yaml`：模块契约定义
- `mock_data.json`：示例数据

**关键特性**：
- ✅ 根据关键词类型（MES）自动生成不同的模块
- ✅ MES 特有模块：生产计划流程、工序数据采集、质量追溯体系
- ✅ 不是模板化，每个类型有独特结构

**验证**：
```bash
cat output/tutorial/schema.yaml | grep -E "^  - id:|^    h2:"
```

**对比不同类型**：
- ERP → 业务流程梳理、系统配置方案、数据迁移策略
- MES → 生产计划流程、工序数据采集、质量追溯体系
- WMS → 仓储布局设计、库存管理策略、出入库流程

---

### Step 3: 渲染页面

**目的**：使用真实数据渲染 Markdown 页面

```bash
pnpm pseo:render \
  --schema output/tutorial/schema.yaml \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/mes_.json \
  --config output/tutorial/config.json \
  --output output/tutorial/page.md
```

**输出**：`page.md`

**关键特性**：
- ✅ 严格按照 schema 的模块顺序渲染
- ✅ 如果 raw_data 缺少字段，自动从 mock_data 补充
- ✅ 如果都没有，使用类型特定的 fallback
- ✅ 确保信息增量，而非模板化内容

**验证**：
```bash
head -60 output/tutorial/page.md
```

---

### Step 4: 质量审查

**目的**：AI 初审，检查格式、信息增量、幻觉等问题

```bash
pnpm pseo:review \
  --schema output/tutorial/schema.yaml \
  --page output/tutorial/page.md \
  --config output/tutorial/config.json \
  --output output/tutorial/review.json
```

**输出**：`review.json`
- 评分（0-10）
- 问题清单
- 修订内容（如果 6-8 分）

**质量标准**：
- ✅ 信息增量 > 字数
- ✅ 格式与 schema 一致
- ✅ 无幻觉（无编造数据）
- ✅ 无空话套话
- ✅ 包含品牌锚点

**验证**：
```bash
cat output/tutorial/review.json
```

**结果判断**：
- **PASS** (score > 8)：可以直接使用
- **REVISE** (6 <= score <= 8)：使用修订版本
- **FAIL** (score < 6)：需要重新生成

---

### Step 5: 验证样本（可选）

**目的**：先验证 10 个样本，效果好再批量生成

```bash
# 生成 10 个样本页面
# 然后运行验证
npx tsx scripts/pseo-validation.ts \
  --samples "output/sample*/page.md" \
  --schema output/tutorial/schema.yaml \
  --config output/tutorial/config.json \
  --output output/tutorial/validation-report.json
```

**输出**：`validation-report.json`
- 平均质量评分
- 信息增量检查
- 模板空壳检查
- 推荐：SCALE / REVISE / FAIL

---

### Step 6: 导入到 Blog（可选）

**目的**：将生成的页面导入到 Payload CMS

```bash
pnpm pseo:import \
  --page output/tutorial/page.md \
  --schema output/tutorial/schema.yaml \
  --category industry-insights \
  --status published
```

**输出**：
- Post 已创建/更新
- URL: `/posts/{slug}`

**关键特性**：
- ✅ 导入前检查是否已存在相同标题
- ✅ 如果存在，更新而非创建（避免重复）

---

## 🎯 一键完成（自动发布）

如果想一键完成所有步骤：

```bash
pnpm pseo:publish \
  --keyword "MES 实施服务" \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/mes_.json \
  --page-type money_page \
  --category industry-insights \
  --status published
```

这将自动执行：
1. 生成配置
2. 生成 Schema
3. 渲染页面
4. 质量审查
5. 导入到 Blog

---

## 📊 验证差异化

### 对比不同关键词类型

```bash
# ERP 实施服务
pnpm pseo:schema --keyword "ERP 实施服务" --config config.json --page-type money_page --output-dir output/test-erp

# MES 实施服务
pnpm pseo:schema --keyword "MES 实施服务" --config config.json --page-type money_page --output-dir output/test-mes

# WMS 实施服务
pnpm pseo:schema --keyword "WMS 实施服务" --config config.json --page-type money_page --output-dir output/test-wms

# 对比模块结构
echo "=== ERP ===" && grep "h2:" output/test-erp/schema.yaml
echo "=== MES ===" && grep "h2:" output/test-mes/schema.yaml
echo "=== WMS ===" && grep "h2:" output/test-wms/schema.yaml
```

**应该看到不同的模块结构！**

---

## ✅ 成功标准

1. ✅ Schema 根据关键词类型自动差异化
2. ✅ 每个页面有独特的内容结构
3. ✅ 提供真实的信息增量
4. ✅ 质量评分 >= 8
5. ✅ 无重复内容

---

## 🚨 常见问题

### Q: Schema 生成的都是相同模块？

**A**: 检查关键词类型识别是否正确。确保关键词包含类型标识（如 "MES"、"WMS"、"ERP"）。

### Q: 渲染时提示 missing_fields？

**A**: 正常，会自动从 mock_data 补充或使用 fallback。这是修复后的特性。

### Q: 质量评分很低？

**A**: 检查：
- 是否使用了真实 raw_data
- 内容是否提供信息增量
- 是否包含品牌锚点

---

## 📚 相关文档

- `docs/pseo/template-fix-summary.md` - 模板化问题修复总结
- `docs/pseo/regeneration-complete.md` - 页面重新生成报告
- `.cursor/commands/pseo-principles.md` - PSEO 核心原则



