# 如何获得页面的 URL

## 📍 当前状态

生成的页面是 **Markdown 文件**（`.md`），不是网页，所以没有直接的 URL。

**文件位置：**
- `output/batch-test/erp-/page.md`
- `output/batch-test/-yonsuite-/page.md`

## 🔗 如何获得 URL

### 方法 1: 导入到 Payload CMS（推荐）

导入后，页面会有 URL：`http://localhost:3000/posts/{slug}`

#### 步骤：

1. **导入页面到 CMS**
```bash
# 导入页面 1
npx tsx scripts/pseo-import-to-blog.ts \
  --page output/batch-test/erp-/page.md \
  --category industry-insights \
  --status published

# 导入页面 2
npx tsx scripts/pseo-import-to-blog.ts \
  --page output/batch-test/-yonsuite-/page.md \
  --category industry-insights \
  --status published
```

2. **启动开发服务器**（如果未运行）
```bash
pnpm dev
```

3. **访问 URL**
```
http://localhost:3000/posts/erp-shishi-fuwu
http://localhost:3000/posts/yongyou-yonsuite-shishi-fuwu
```

### 方法 2: 使用自动发布（一键完成）

自动发布会完成：生成 → 审查 → 导入，导入后就有 URL 了。

```bash
# 自动生成并导入（获得 URL）
pnpm pseo:publish \
  --keyword "ERP 实施服务" \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json \
  --category industry-insights \
  --status published
```

导入成功后，脚本会显示：
```
✓ Post created successfully!
  - Slug: erp-shishi-fuwu
  - URL: /posts/erp-shishi-fuwu
```

### 方法 3: 查看本地文件（无 URL）

如果只是想查看内容，不需要 URL：

```bash
# 在编辑器中打开
code output/batch-test/erp-/page.md

# 或直接查看
cat output/batch-test/erp-/page.md
```

## 📋 URL 格式说明

### Posts 的 URL 结构

```
http://localhost:3000/posts/{slug}
```

**Slug 生成规则：**
- 从标题自动生成
- 中文会转换为拼音或英文
- 例如："用友ERP实施服务" → `yongyou-erp-shishi-fuwu`

### 查看已导入的 Posts

在 Payload CMS Admin 中：
1. 访问：`http://localhost:3000/admin/collections/posts`
2. 找到导入的 post
3. 查看 slug 字段
4. URL = `http://localhost:3000/posts/{slug}`

## 🚀 快速获得 URL

### 一键命令（生成 + 导入）

```bash
# 这会自动生成页面并导入，导入后就有 URL
pnpm pseo:publish \
  --keyword "ERP 实施服务" \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json \
  --category industry-insights \
  --status published
```

导入成功后，访问：
```
http://localhost:3000/posts/{生成的slug}
```

## 📝 总结

| 状态 | 是否有 URL | 如何获得 |
|------|-----------|---------|
| 仅生成 Markdown | ❌ 无 | - |
| 导入到 CMS | ✅ 有 | `http://localhost:3000/posts/{slug}` |
| 使用自动发布 | ✅ 有 | 自动导入后获得 URL |

**关键点：**
- ✅ Markdown 文件本身没有 URL
- ✅ 导入到 Payload CMS 后才有 URL
- ✅ URL 格式：`/posts/{slug}`
- ✅ 需要启动开发服务器才能访问



