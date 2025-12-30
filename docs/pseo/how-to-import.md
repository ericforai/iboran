# 如何导入页面到 Blog

## 📥 导入步骤

### 方法 1: 使用导入脚本（推荐）

#### 基本命令

```bash
npx tsx scripts/pseo-import-to-blog.ts \
  --page <page.md路径> \
  --schema <schema.yaml路径> \
  --category <分类slug> \
  --status <draft|published>
```

#### 实际示例

**导入页面 1（ERP 实施服务）：**
```bash
npx tsx scripts/pseo-import-to-blog.ts \
  --page output/batch-test/erp-/page.md \
  --schema output/batch-test/erp-/schema.yaml \
  --category industry-insights \
  --status draft
```

**导入页面 2（用友 YonSuite 实施服务）：**
```bash
npx tsx scripts/pseo-import-to-blog.ts \
  --page output/batch-test/-yonsuite-/page.md \
  --schema output/batch-test/-yonsuite-/schema.yaml \
  --category industry-insights \
  --status draft
```

### 方法 2: 使用 npm script

```bash
# 导入页面 1
pnpm pseo:import \
  --page output/batch-test/erp-/page.md \
  --schema output/batch-test/erp-/schema.yaml \
  --category industry-insights \
  --status draft

# 导入页面 2
pnpm pseo:import \
  --page output/batch-test/-yonsuite-/page.md \
  --schema output/batch-test/-yonsuite-/schema.yaml \
  --category industry-insights \
  --status draft
```

### 方法 3: 使用自动发布（包含导入）

```bash
# 自动生成并导入（一步完成）
pnpm pseo:publish \
  --keyword "ERP 实施服务" \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json \
  --category industry-insights \
  --status published
```

---

## 📋 参数说明

| 参数 | 说明 | 必需 | 示例 |
|------|------|------|------|
| `--page` | page.md 文件路径 | ✅ | `output/batch-test/erp-/page.md` |
| `--schema` | schema.yaml 文件路径 | ❌ | `output/batch-test/erp-/schema.yaml` |
| `--category` | 分类 slug | ❌ | `industry-insights` |
| `--status` | 发布状态 | ❌ | `draft` 或 `published` |

---

## ✅ 导入成功后的输出

```
✓ Post created successfully!
  - ID: 67a1b2c3d4e5f6g7h8i9j0k1
  - Title: ERP 实施服务
  - Slug: erp-shishi-fuwu
  - Status: draft
  - URL: /posts/erp-shishi-fuwu
```

---

## 🔗 导入后访问

### 1. 启动开发服务器

```bash
pnpm dev
```

### 2. 访问 URL

```
http://localhost:3000/posts/{slug}
```

例如：
- `http://localhost:3000/posts/erp-shishi-fuwu`
- `http://localhost:3000/posts/yongyou-yonsuite-shishi-fuwu`

### 3. 在 Payload CMS Admin 中查看

访问：`http://localhost:3000/admin/collections/posts`

---

## 📝 批量导入

### 导入所有批量生成的页面

```bash
#!/bin/bash
# import-all.sh

# 导入页面 1
npx tsx scripts/pseo-import-to-blog.ts \
  --page output/batch-test/erp-/page.md \
  --schema output/batch-test/erp-/schema.yaml \
  --category industry-insights \
  --status draft

# 导入页面 2
npx tsx scripts/pseo-import-to-blog.ts \
  --page output/batch-test/-yonsuite-/page.md \
  --schema output/batch-test/-yonsuite-/schema.yaml \
  --category industry-insights \
  --status draft
```

---

## ⚠️ 注意事项

### 1. Payload CMS 必须运行

导入需要连接到 Payload CMS，确保：
- 数据库连接正常
- Payload CMS 配置正确
- 环境变量已设置

### 2. 分类必须存在

如果指定的分类不存在，导入会失败。先创建分类：

```bash
# 在 Payload CMS Admin 中创建分类
# 或使用脚本创建
```

### 3. Slug 冲突

如果 slug 已存在，导入会失败。可以：
- 删除旧的 post
- 或使用不同的 slug

---

## 🔍 验证导入结果

### 检查是否导入成功

```bash
# 在 Payload CMS Admin 中查看
# http://localhost:3000/admin/collections/posts
```

### 查看导入的 Post

1. 访问 Payload CMS Admin
2. 进入 Posts collection
3. 找到导入的 post
4. 查看 slug 和 URL

---

## 🚀 快速导入命令

### 导入已生成的两个页面

```bash
# 导入页面 1
npx tsx scripts/pseo-import-to-blog.ts \
  --page output/batch-test/erp-/page.md \
  --category industry-insights \
  --status draft

# 导入页面 2
npx tsx scripts/pseo-import-to-blog.ts \
  --page output/batch-test/-yonsuite-/page.md \
  --category industry-insights \
  --status draft
```

导入成功后，访问：
- `http://localhost:3000/posts/erp-shishi-fuwu`
- `http://localhost:3000/posts/yongyou-yonsuite-shishi-fuwu`


