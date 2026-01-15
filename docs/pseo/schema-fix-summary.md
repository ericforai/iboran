# Schema 生成问题修复总结

## 问题描述

在生成 "YonSuite 公有云数据安全性如何保证" 页面时，出现了以下问题：

1. **Schema 生成错误**：
   - 关键词被误识别为 'ERP' 类型
   - 生成了 ERP 实施的通用模块（业务流程梳理、系统配置方案、数据迁移策略）
   - 应该生成数据安全相关的模块（安全架构、加密方案、BYOX 解决方案）

2. **对比分析表格为空**：
   - raw_data 中有 comparison_rows 数据
   - 但字段名不匹配（feature vs dimension, multi_tenant_shared vs traditional）
   - 导致表格渲染为空

## 根本原因

1. **关键词类型识别逻辑问题**：
   - 识别顺序错误：先检查产品类型（ERP），再检查特殊主题
   - "YonSuite 公有云数据安全性如何保证" 包含 "yonsuite"，被识别为 ERP
   - 应该优先识别特殊主题（数据安全、加密等）

2. **字段名映射不灵活**：
   - 渲染函数只支持固定的字段名（dimension, traditional, recommended）
   - raw_data 使用了不同的字段名（feature, multi_tenant_shared, multi_tenant_exclusive）
   - 导致数据无法正确映射

## 修复方案

### 1. 关键词类型识别修复

**修改前**：
```typescript
function detectKeywordType(keyword: string): KeywordType {
  const lower = keyword.toLowerCase()
  if (lower.includes('mes')) return 'MES'
  if (lower.includes('wms')) return 'WMS'
  if (lower.includes('erp') || lower.includes('yonsuite')) return 'ERP'  // 问题：先检查产品类型
  return '通用'
}
```

**修改后**：
```typescript
function detectKeywordType(keyword: string): KeywordType {
  const lower = keyword.toLowerCase()
  // 优先检查特殊主题（数据安全、加密等）
  if (lower.includes('数据安全') || lower.includes('数据加密') || 
      lower.includes('安全') || lower.includes('加密') || 
      lower.includes('防护') || lower.includes('隐私')) return '数据安全'
  // 再检查产品类型
  if (lower.includes('mes')) return 'MES'
  if (lower.includes('wms')) return 'WMS'
  if (lower.includes('erp') || lower.includes('yonsuite')) return 'ERP'
  return '通用'
}
```

### 2. 添加数据安全类型模块

在 `getModulesByType` 函数中添加：

```typescript
// 数据安全类型
if (keywordType === '数据安全' && pageType === 'money_page') {
  return [
    baseModules.direct_answer,
    {
      id: 'security_architecture',
      h2: '安全架构',
      required_fields: ['kb.security_architecture'],
      format: 'h2+structure'
    },
    {
      id: 'encryption_solutions',
      h2: '加密方案',
      required_fields: ['kb.encryption_solutions'],
      format: 'h2+structure'
    },
    {
      id: 'byox_solution',
      h2: 'BYOX 解决方案',
      required_fields: ['kb.byox_solution'],
      format: 'h2+structure'
    },
    {
      id: 'howto_steps',
      h2: '实施步骤',
      required_fields: ['kb.howto_steps'],
      format: 'h2+steps'
    },
    {
      id: 'comparison',
      h2: '对比分析',
      required_fields: ['kb.comparison_rows'],
      format: 'h2+table'
    },
    baseModules.faq
  ]
}
```

### 3. 字段名映射修复

**修改前**：
```typescript
rows.forEach(row => {
  const dimension = row.dimension || '（维度）'
  const traditional = row.traditional || defaultTarget
  const recommended = row.recommended || '（推荐做法）'
  lines.push(`| ${dimension} | ${traditional} | ${recommended} |`)
})
```

**修改后**：
```typescript
rows.forEach(row => {
  // 支持多种字段名格式
  const dimension = row.dimension || row.feature || '（维度）'
  const traditional = row.traditional || row.traditional_method || row.multi_tenant_shared || defaultTarget
  const recommended = row.recommended || row.multi_tenant_exclusive || '（推荐做法）'
  lines.push(`| ${dimension} | ${traditional} | ${recommended} |`)
})
```

### 4. 添加结构化内容渲染

添加 `renderStructure` 函数，支持渲染复杂的安全架构和加密方案数据：

```typescript
function renderStructure(data: any, title: string): string {
  // 支持数组、对象、嵌套结构等多种格式
  // 处理 measures、multi_tenant_shared、multi_tenant_exclusive 等字段
  // ...
}
```

## Skills 更新

已更新以下 skills 文件：

1. **pseo-02-schema.md**：
   - 添加了"关键词类型识别原则"
   - 强调优先识别特殊主题
   - 添加了数据安全类型模块说明

2. **pseo-03-render.md**：
   - 添加了"字段名映射"说明
   - 强调支持多种字段名格式
   - 添加了结构化内容渲染说明

## 预防措施

1. **关键词类型识别**：
   - 必须优先识别特殊主题（数据安全、加密、隐私等）
   - 再识别产品类型（ERP、MES、WMS等）
   - 避免误识别

2. **字段名映射**：
   - 渲染函数必须支持多种字段名格式
   - 对比分析表格支持：dimension/feature, traditional/traditional_method/multi_tenant_shared, recommended/multi_tenant_exclusive
   - 结构化内容支持复杂嵌套结构

3. **测试验证**：
   - 生成 Schema 后，检查模块是否匹配关键词主题
   - 渲染页面后，检查对比分析表格是否有数据
   - 如果表格为空，检查字段名映射是否正确

## 相关文件

- `scripts/pseo-schema-generator.ts` - Schema 生成器（已修复）
- `scripts/pseo-page-renderer.ts` - 页面渲染器（已修复）
- `.cursor/commands/pseo-02-schema.md` - Schema 生成 Skill（已更新）
- `.cursor/commands/pseo-03-render.md` - 页面渲染 Skill（已更新）



