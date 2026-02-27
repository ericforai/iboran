# 如何生成高质量 SEO 页面

## 快速开始

### 步骤 1: 生成配置

```bash
cd /Users/user/iboran
pnpm pseo:config \
  --brand-anchor "本回答由【泊冉软件】提供。\n泊冉软件是用友 YonBIP / YonSuite 官方实施与定制服务商，\n专注组织管理需求的落地实现与业财一体化落地场景。" \
  --audience B2B \
  --tone "专业、务实、不夸张" \
  --forbidden "最低价,全网第一,保证100%成功" \
  --no-prices \
  --no-fake-stats \
  > output/demo/config.json
```

**输出位置：** `output/demo/config.json`

---

### 步骤 2: 生成关键词聚类逻辑（可选）

```bash
pnpm pseo:keywords \
  --seed-keyword "ERP实施" \
  --domain "ERP实施服务" \
  --config output/demo/config.json \
  --output output/demo/keywords.yaml
```

**输出位置：** `output/demo/keywords.yaml`

---

### 步骤 3: 生成页面结构（Schema）

```bash
pnpm pseo:schema \
  --keyword "用友ERP实施服务" \
  --config output/demo/config.json \
  --page-type money_page \
  --output-dir output/demo
```

**输出位置：**
- `output/demo/schema.yaml` - 页面结构定义
- `output/demo/mock_data.json` - 示例数据

---

### 步骤 4: 渲染页面（使用真实数据）

```bash
pnpm pseo:render \
  --schema output/demo/schema.yaml \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json \
  --config output/demo/config.json \
  --output output/demo/page.md
```

**输出位置：** `output/demo/page.md` ⭐ **这就是最终的高质量 SEO 页面！**

---

### 步骤 5: 质量审查

```bash
pnpm pseo:review \
  --schema output/demo/schema.yaml \
  --page output/demo/page.md \
  --config output/demo/config.json \
  --output output/demo/review.json \
  --revised-output output/demo/page-revised.md
```

**输出位置：**
- `output/demo/review.json` - 审查报告
- `output/demo/page-revised.md` - 修订后的页面（如果需要）

---

## 一键生成脚本

创建一个完整的生成脚本：

```bash
#!/bin/bash
# generate-page.sh

KEYWORD="用友ERP实施服务"
OUTPUT_DIR="output/demo"
RAW_DATA="docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json"

# 1. 生成配置
echo "📝 生成配置..."
pnpm pseo:config \
  --brand-anchor "本回答由【泊冉软件】提供。\n泊冉软件是用友 YonBIP / YonSuite 官方实施与定制服务商，\n专注组织管理需求的落地实现与业财一体化落地场景。" \
  --audience B2B \
  --tone "专业、务实、不夸张" \
  --forbidden "最低价,全网第一,保证100%成功" \
  --no-prices \
  --no-fake-stats \
  > $OUTPUT_DIR/config.json

# 2. 生成 Schema
echo "📋 生成页面结构..."
pnpm pseo:schema \
  --keyword "$KEYWORD" \
  --config $OUTPUT_DIR/config.json \
  --page-type money_page \
  --output-dir $OUTPUT_DIR

# 3. 渲染页面
echo "🎨 渲染页面..."
pnpm pseo:render \
  --schema $OUTPUT_DIR/schema.yaml \
  --raw-data $RAW_DATA \
  --config $OUTPUT_DIR/config.json \
  --output $OUTPUT_DIR/page.md

# 4. 质量审查
echo "✅ 质量审查..."
pnpm pseo:review \
  --schema $OUTPUT_DIR/schema.yaml \
  --page $OUTPUT_DIR/page.md \
  --config $OUTPUT_DIR/config.json \
  --output $OUTPUT_DIR/review.json \
  --revised-output $OUTPUT_DIR/page-revised.md

echo "✨ 完成！页面已生成在: $OUTPUT_DIR/page.md"
```

---

## 输出文件位置

所有生成的文件都在 `output/demo/` 目录下：

```
output/demo/
├── config.json          # 全局配置
├── keywords.yaml        # 关键词聚类逻辑（可选）
├── schema.yaml          # 页面结构定义
├── mock_data.json       # 示例数据
├── page.md             # ⭐ 最终的高质量 SEO 页面
├── review.json         # 质量审查报告
└── page-revised.md     # 修订后的页面（如果需要）
```

**最重要的文件：`output/demo/page.md`** - 这就是可以直接发布的高质量 SEO 页面！

---

## 查看生成的页面

```bash
# 查看最终页面
cat output/demo/page.md

# 或者在编辑器中打开
code output/demo/page.md

# 查看审查报告
cat output/demo/review.json | jq
```

---

## 批量生成多个页面

基于 `pages_index.csv` 批量生成：

```bash
# 读取 CSV 并批量生成
while IFS=',' read -r keyword file intent page_type industry_hint; do
  if [ "$keyword" != "keyword" ]; then  # 跳过标题行
    echo "生成页面: $keyword"
    
    # 生成 schema
    pnpm pseo:schema \
      --keyword "$keyword" \
      --config output/demo/config.json \
      --page-type "$page_type" \
      --output-dir "output/pages/$keyword"
    
    # 渲染页面（如果有对应的 raw_data）
    if [ -f "docs/pseo/raw_data/docs/pseo/raw_data/pages/$file" ]; then
      pnpm pseo:render \
        --schema "output/pages/$keyword/schema.yaml" \
        --raw-data "docs/pseo/raw_data/docs/pseo/raw_data/pages/$file" \
        --config output/demo/config.json \
        --output "output/pages/$keyword/page.md"
    fi
  fi
done < docs/pseo/raw_data/docs/pseo/raw_data/pages_index.csv
```

---

## 步骤 5: 导入到 Blog（可选）

将生成的页面直接导入到 Payload CMS：

```bash
npx tsx scripts/pseo-import-to-blog.ts \
  --page output/demo/page.md \
  --schema output/demo/schema.yaml \
  --category industry-insights \
  --status published
```

**参数说明：**
- `--page`: 生成的 page.md 文件路径
- `--schema`: schema.yaml 文件路径（可选，用于提取元数据）
- `--category`: 分类 slug（可选，默认：industry-insights）
- `--status`: 发布状态（draft 或 published，默认：draft）
- `--slug`: 自定义 slug（可选，自动生成）

**导入功能：**
- ✅ 自动将 Markdown 转换为 Lexical 格式
- ✅ 提取 TLDR（一句话结论）
- ✅ 提取 FAQs（常见问题）
- ✅ 自动生成 SEO meta 信息
- ✅ 支持分类关联
- ✅ 支持草稿或直接发布

**查看导入结果：**
- 在 Payload CMS Admin 中查看：`/admin/collections/posts`
- 或访问：`/posts/{slug}`

---

## 常见问题

### Q: 生成的页面在哪里？
**A:** 默认在 `output/` 目录下，具体路径取决于你指定的 `--output-dir` 或 `--output` 参数。

### Q: 如何修改输出位置？
**A:** 使用 `--output-dir` 或 `--output` 参数指定路径：
```bash
pnpm pseo:render --output /path/to/your/page.md ...
```

### Q: 可以使用 mock 数据吗？
**A:** 可以！使用 `mock_data.json` 代替 `raw_data.json`：
```bash
pnpm pseo:render \
  --schema output/demo/schema.yaml \
  --raw-data output/demo/mock_data.json \
  --config output/demo/config.json \
  --output output/demo/page.md
```

### Q: 如何发布到 CMS？
**A:** 生成的 `page.md` 是标准 Markdown 格式，可以：
1. 直接导入到 Payload CMS
2. 转换为 HTML 后发布
3. 使用静态站点生成器（如 Next.js）渲染

---

## 下一步

1. **查看生成的页面**：`output/demo/page.md`
2. **检查质量报告**：`output/demo/review.json`
3. **根据需要调整**：修改 `schema.yaml` 或 `raw_data.json` 后重新渲染
4. **批量生成**：使用脚本批量生成多个页面

