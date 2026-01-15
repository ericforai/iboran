# 模板化问题修复总结

## ✅ 已修复的问题

### 1. Schema 生成现在根据关键词类型自动差异化

**修复前**：
- 所有页面使用相同的 5 个模块（一句话结论、实施步骤、交付物清单、对比分析、常见问题）
- 内容高度重复，只有标题不同

**修复后**：
- 根据关键词类型（ERP/MES/WMS/集成开发/协同）自动生成不同的模块结构
- 每个类型有独特的内容模块，提供真实的信息增量

### 2. 不同类型的关键词有不同的模块结构

#### ERP 实施服务
- 一句话结论
- **业务流程梳理**（而非通用"实施步骤"）
- **系统配置方案**（而非通用"交付物清单"）
- **数据迁移策略**（ERP 特有）
- 对比分析
- 常见问题

#### MES 实施服务
- 一句话结论
- **生产计划流程**（MES 特有）
- **工序数据采集**（MES 特有）
- **质量追溯体系**（MES 特有）
- **ERP 集成方案**（MES 特有）
- 常见问题

#### WMS 实施服务
- 一句话结论
- **仓储布局设计**（WMS 特有）
- **库存管理策略**（WMS 特有）
- **出入库流程**（WMS 特有）
- 对比分析
- 常见问题

#### 集成开发服务
- 一句话结论
- **API 对接方案**（集成开发特有）
- **消息推送机制**（集成开发特有）
- **审批流程设计**（集成开发特有）
- **数据同步策略**（集成开发特有）
- 常见问题

### 3. Mock 数据也根据类型生成差异化内容

- ERP 类型：生成业务流程、系统配置、数据迁移相关的示例数据
- MES 类型：生成生产计划、工序数据、质量追溯相关的示例数据
- WMS 类型：生成仓储布局、库存管理、出入库相关的示例数据
- 集成开发类型：生成 API 对接、消息推送、审批流程相关的示例数据

## 🔧 技术实现

### 关键词类型识别

```typescript
function detectKeywordType(keyword: string): KeywordType {
  const lower = keyword.toLowerCase()
  if (lower.includes('mes') || lower.includes('制造执行')) return 'MES'
  if (lower.includes('wms') || lower.includes('仓储')) return 'WMS'
  if (lower.includes('集成') || lower.includes('对接') || lower.includes('钉钉')) return '集成开发'
  if (lower.includes('协同') || lower.includes('致远')) return '协同'
  if (lower.includes('erp') || lower.includes('yonsuite') || lower.includes('yonbip')) return 'ERP'
  return '通用'
}
```

### 模块生成策略

```typescript
function getModulesByType(keywordType: KeywordType, pageType: PageType): SchemaModule[] {
  // 根据类型返回不同的模块
  if (keywordType === 'ERP' && pageType === 'money_page') {
    return [业务流程梳理, 系统配置方案, 数据迁移策略, ...]
  }
  if (keywordType === 'MES' && pageType === 'money_page') {
    return [生产计划流程, 工序数据采集, 质量追溯体系, ...]
  }
  // ...
}
```

## 📋 更新的 Skills

### pseo-02-schema.md
- 添加了"模块生成策略（根据关键词类型自动差异化）"章节
- 详细说明了每种类型的模块结构
- 强调了避免模板化的原则

### pseo-03-render.md
- 添加了"Type-specific Content"渲染特性
- 强调了信息增量原则

## 🚀 使用方法

### 重新生成页面（应用新的差异化结构）

```bash
# 重新生成所有页面
pnpm pseo:batch --output-base output/batch-v2 --skip-import

# 或逐个生成测试
npx tsx scripts/pseo-schema-generator.ts \
  --keyword "MES 实施服务" \
  --config config.json \
  --page-type money_page \
  --output-dir output/test-mes
```

### 验证差异化

```bash
# 检查不同关键词生成的 schema 是否不同
for kw in "ERP 实施服务" "MES 实施服务" "WMS 实施服务"; do
  echo "=== $kw ==="
  npx tsx scripts/pseo-schema-generator.ts \
    --keyword "$kw" \
    --config config.json \
    --page-type money_page \
    --output-dir "output/test-$(echo $kw | tr ' ' '-')"
  cat "output/test-$(echo $kw | tr ' ' '-')/schema.yaml" | grep "h2:"
done
```

## ✅ 验证结果

测试显示：
- ✅ ERP 实施服务 → 业务流程梳理、系统配置方案、数据迁移策略
- ✅ MES 实施服务 → 生产计划流程、工序数据采集、质量追溯体系
- ✅ WMS 实施服务 → 仓储布局设计、库存管理策略、出入库流程
- ✅ 钉钉集成开发服务 → API 对接方案、消息推送机制、审批流程设计

**每个类型都有独特的模块结构，不再是模板化内容！**

## 📝 下一步

1. **重新生成所有页面**：使用新的差异化结构
2. **验证内容质量**：确保每个页面提供真实的信息增量
3. **持续优化**：根据实际效果调整模块设计



