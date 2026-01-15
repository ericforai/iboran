---
description: "使用超级内容引擎生成高质量 B2B 博客文章"
---

# 超级内容引擎工作流

使用 `.shared/super-content-engine` Skill 生成专业 B2B 内容。

## 前置条件

确保 Docker 环境已启动：
```bash
cd /Users/user/iboran && docker compose ps
```

## 单篇生成

### Step 1: 读取 Skill 说明

```bash
cat .shared/super-content-engine/SKILL.md
```

### Step 2: 获取设计规范

// turbo
```bash
python3 .shared/ui-ux-pro-max/scripts/search.py "swiss modern professional" --domain style
```

### Step 3: 生成 Hero 图片

使用 `generate_image` 工具，按 SKILL.md 中的 prompt 模板。

### Step 4: 按模板生成内容

参考组件模板：
```bash
cat .shared/super-content-engine/data/component-templates.md
```

### Step 5: SEO/GEO 检查

```bash
cat .shared/super-content-engine/data/seo-geo-checklist.md
```

### Step 6: 发布到 Payload CMS

使用现有脚本或直接 API 调用。

---

## 批量恢复 92 篇文章

### 查看主题列表

// turbo
```bash
cd /Users/user/iboran && head -20 docs/blog_topics_to_regenerate.csv
```

### 逐篇生成

对每个 `slug | title` 执行 Step 1-6 流程。

---

## 组件模板位置

- [SKILL.md](file:///Users/user/iboran/.shared/super-content-engine/SKILL.md)
- [组件模板](file:///Users/user/iboran/.shared/super-content-engine/data/component-templates.md)
- [SEO/GEO 清单](file:///Users/user/iboran/.shared/super-content-engine/data/seo-geo-checklist.md)
