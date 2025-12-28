# 自动发布工作流

## 一键自动生成并发布到 Blog

无需手工操作，一个命令完成所有步骤！

## 快速开始

### 基本用法

```bash
# 使用真实数据
npx tsx scripts/pseo-auto-publish.ts \
  --keyword "用友ERP实施服务" \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json \
  --category industry-insights \
  --status published
```

### 使用 npm script

```bash
pnpm pseo:publish \
  --keyword "用友ERP实施服务" \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json \
  --category industry-insights \
  --status published
```

## 工作流步骤

自动执行以下步骤：

1. ✅ **生成配置** - 创建全局配置 JSON
2. ✅ **生成 Schema** - 创建页面结构定义和 Mock 数据
3. ✅ **渲染页面** - 根据真实数据渲染 Markdown 页面
4. ✅ **质量审查** - 自动检查页面质量（可选）
5. ✅ **导入到 Blog** - 自动导入到 Payload CMS（可选）

## 参数说明

| 参数 | 说明 | 必需 | 默认值 |
|------|------|------|--------|
| `--keyword` | 目标关键词 | ✅ | - |
| `--raw-data` | 真实数据文件路径 | ❌ | 使用 mock_data.json |
| `--page-type` | 页面类型 | ❌ | money_page |
| `--category` | 分类 slug | ❌ | industry-insights |
| `--status` | 发布状态 | ❌ | draft |
| `--output-dir` | 输出目录 | ❌ | output/auto |
| `--skip-review` | 跳过质量审查 | ❌ | false |
| `--skip-import` | 跳过导入到 blog | ❌ | false |

## 使用示例

### 示例 1: 完整流程（推荐）

```bash
pnpm pseo:publish \
  --keyword "用友ERP实施服务" \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json \
  --category industry-insights \
  --status published
```

### 示例 2: 使用 Mock 数据

```bash
pnpm pseo:publish \
  --keyword "YonSuite实施服务" \
  --page-type money_page \
  --category industry-insights \
  --status draft
```

### 示例 3: 仅生成，不导入

```bash
pnpm pseo:publish \
  --keyword "用友ERP实施服务" \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json \
  --skip-import
```

### 示例 4: 跳过质量审查

```bash
pnpm pseo:publish \
  --keyword "用友ERP实施服务" \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json \
  --skip-review \
  --status published
```

## 批量生成

基于 `pages_index.csv` 批量生成：

```bash
#!/bin/bash
# batch-publish.sh

while IFS=',' read -r keyword file intent page_type industry_hint; do
  if [ "$keyword" != "keyword" ]; then
    echo "处理: $keyword"
    
    pnpm pseo:publish \
      --keyword "$keyword" \
      --raw-data "docs/pseo/raw_data/docs/pseo/raw_data/pages/$file" \
      --page-type "$page_type" \
      --category industry-insights \
      --status draft \
      --output-dir "output/pages/$keyword"
  fi
done < docs/pseo/raw_data/docs/pseo/raw_data/pages_index.csv
```

## 质量审查

如果质量审查未通过（FAIL），工作流会：

1. 显示警告信息
2. 显示评分和问题数
3. **默认停止导入**（防止低质量内容发布）

### 强制导入（不推荐）

如果确实需要导入未通过审查的内容：

```bash
FORCE_IMPORT=true pnpm pseo:publish \
  --keyword "..." \
  --raw-data "..." \
  --status draft
```

### 自动修订

如果质量审查结果为 REVISE（6-8分），工作流会：

1. 自动生成修订版本
2. 使用修订版本替换原页面
3. 继续导入流程

## 输出文件

所有文件保存在 `output/auto/` 目录（或指定的 `--output-dir`）：

```
output/auto/
├── config.json          # 全局配置
├── schema.yaml          # 页面结构定义
├── mock_data.json       # 示例数据
├── page.md             # ⭐ 最终页面
└── review.json         # 质量审查报告
```

## 查看结果

### 在 Payload CMS Admin

访问：`http://localhost:3000/admin/collections/posts`

### 在前端

访问：`http://localhost:3000/posts/{slug}`

## 常见问题

### Q: 工作流失败怎么办？
**A:** 检查：
1. Payload CMS 是否运行
2. 数据库连接是否正常
3. 文件路径是否正确
4. 查看错误信息

### Q: 可以只生成不导入吗？
**A:** 可以，使用 `--skip-import` 参数

### Q: 质量审查失败还能导入吗？
**A:** 默认不能，需要设置 `FORCE_IMPORT=true`（不推荐）

### Q: 如何批量生成多个页面？
**A:** 使用循环脚本或批量处理脚本

## 优势

✅ **完全自动化** - 一个命令完成所有步骤  
✅ **质量保证** - 自动质量审查  
✅ **错误处理** - 自动检测和处理问题  
✅ **灵活配置** - 支持多种参数组合  
✅ **批量处理** - 支持批量生成

---

**现在你只需要一个命令就能完成从生成到发布的全部流程！** 🚀



