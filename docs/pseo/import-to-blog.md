# 将生成的页面导入到 Blog

## 快速导入

### 方法 1: 使用命令行工具

```bash
# 导入已生成的页面
npx tsx scripts/pseo-import-to-blog.ts \
  --page output/demo/page.md \
  --category industry-insights \
  --status published
```

### 方法 2: 使用 npm script

```bash
pnpm pseo:import \
  --page output/demo/page.md \
  --category industry-insights \
  --status published
```

## 完整工作流：生成 + 导入

```bash
# 1. 生成配置
npx tsx scripts/pseo-config-generator.ts > output/demo/config.json

# 2. 生成页面结构
npx tsx scripts/pseo-schema-generator.ts \
  --keyword "用友ERP实施服务" \
  --config output/demo/config.json \
  --page-type money_page \
  --output-dir output/demo

# 3. 渲染页面
npx tsx scripts/pseo-page-renderer.ts \
  --schema output/demo/schema.yaml \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json \
  --config output/demo/config.json \
  --output output/demo/page.md

# 4. 质量审查
npx tsx scripts/pseo-review.ts \
  --schema output/demo/schema.yaml \
  --page output/demo/page.md \
  --config output/demo/config.json \
  --output output/demo/review.json

# 5. 导入到 Blog ⭐
npx tsx scripts/pseo-import-to-blog.ts \
  --page output/demo/page.md \
  --schema output/demo/schema.yaml \
  --category industry-insights \
  --status published
```

## 导入参数说明

| 参数 | 说明 | 必需 | 默认值 |
|------|------|------|--------|
| `--page` | page.md 文件路径 | ✅ | - |
| `--schema` | schema.yaml 文件路径 | ❌ | - |
| `--category` | 分类 slug | ❌ | industry-insights |
| `--status` | 发布状态 | ❌ | draft |
| `--slug` | 自定义 slug | ❌ | 自动生成 |

## 导入功能

### 自动转换

- ✅ **Markdown → Lexical**: 自动将 Markdown 转换为 Payload CMS 的 Lexical 格式
- ✅ **提取 TLDR**: 从"一句话结论"部分提取 TLDR
- ✅ **提取 FAQs**: 从"常见问题"部分提取 atomicFAQs
- ✅ **生成 Meta**: 自动生成 SEO meta 信息

### 支持的内容格式

- ✅ H1/H2/H3 标题
- ✅ 段落文本
- ✅ 列表（有序/无序）
- ✅ 粗体文本
- ✅ 表格
- ✅ Q/A 格式
- ✅ 水平线

## 查看导入结果

### 在 Payload CMS Admin 中

1. 访问：`http://localhost:3000/admin/collections/posts`
2. 找到新创建的 post
3. 点击编辑查看详情

### 在前端查看

访问：`http://localhost:3000/posts/{slug}`

## 批量导入

基于 `pages_index.csv` 批量生成并导入：

```bash
#!/bin/bash
# batch-import.sh

while IFS=',' read -r keyword file intent page_type industry_hint; do
  if [ "$keyword" != "keyword" ]; then
    echo "处理: $keyword"
    
    # 生成页面
    npx tsx scripts/pseo-schema-generator.ts \
      --keyword "$keyword" \
      --config output/demo/config.json \
      --page-type "$page_type" \
      --output-dir "output/pages/$keyword"
    
    # 渲染页面
    if [ -f "docs/pseo/raw_data/docs/pseo/raw_data/pages/$file" ]; then
      npx tsx scripts/pseo-page-renderer.ts \
        --schema "output/pages/$keyword/schema.yaml" \
        --raw-data "docs/pseo/raw_data/docs/pseo/raw_data/pages/$file" \
        --config output/demo/config.json \
        --output "output/pages/$keyword/page.md"
      
      # 导入到 Blog
      npx tsx scripts/pseo-import-to-blog.ts \
        --page "output/pages/$keyword/page.md" \
        --category industry-insights \
        --status draft
    fi
  fi
done < docs/pseo/raw_data/docs/pseo/raw_data/pages_index.csv
```

## 常见问题

### Q: 导入后在哪里查看？
**A:** 在 Payload CMS Admin (`/admin/collections/posts`) 或前端 (`/posts/{slug}`)

### Q: 可以导入为草稿吗？
**A:** 可以，使用 `--status draft` 参数

### Q: 如何修改分类？
**A:** 使用 `--category` 参数指定分类 slug

### Q: 导入失败怎么办？
**A:** 检查：
1. Payload CMS 是否运行
2. 数据库连接是否正常
3. 分类 slug 是否存在
4. 页面格式是否正确

### Q: 可以重新导入吗？
**A:** 可以，但需要先删除已存在的 post，或使用不同的 slug

## 下一步

1. ✅ 页面已导入到 Blog
2. 📝 在 Payload CMS Admin 中编辑和完善
3. 🖼️ 添加 Hero Image
4. 📊 调整 SEO 设置
5. 🚀 发布到生产环境





