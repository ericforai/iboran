# 解决方案路由结构重构说明 (2025-12-22)

## 1. 变更概述
为了优化网站层级结构，使其更加语义化和清晰，我们对“解决方案”模块的路由进行了重构。

**原有结构：**
- `/solution` (单数): 包含静态的业务方案页面和部分行业页面。
- `/solutions` (复数): 包含动态的 CMS 行业方案页面。

**新结构：**
- `/solution` (单数): **统一入口（一级菜单）**。解决方案中心，包含“按业务”和“按行业”的切换。
- `/solution/business/`: **二级分类（按业务）**。存放所有业务领域解决方案（如 L2C, PLM 等）。
- `/solution/industry/`: **二级分类（按行业）**。存放所有行业解决方案。
    - `/solution/industry/[slug]`: 动态路由，用于渲染 CMS 中发布的行业方案。
    - `/solution/industry/semiconductor`: (保留) 现有的静态行业着陆页。

## 2. 详细变更列表

### 2.1 目录移动
- 原 `src/app/(frontend)/solution/*` (业务相关) -> 移动至 `src/app/(frontend)/solution/business/*`。
- 原 `src/app/(frontend)/solutions/[slug]` -> 移动至 `src/app/(frontend)/solution/industry/[slug]`。
- 删除 `src/app/(frontend)/solutions` 目录。

### 2.2 数据更新
- 更新 `src/data/solutions.ts`:
    - 业务方案链接更新为 `/solution/business/xxx`。
    - 行业方案链接统一指向 `/solution/industry/xxx` 或 `/solution`。

### 2.3 导航更新
- 更新 `src/scripts/updateHeader.ts` 及数据库配置：
    - “解决方案”下拉菜单现在包含：
        - **按业务领域** (子分组): 列出主要业务方案。
        - **按行业分类** (动态列表): 自动拉取 CMS 中的行业方案。

### 2.4 代码修正
- 修正了 `solution/industry/[slug]/page.tsx` 中的引用路径 (`../../../page.client.wrapper`)。
- 更新了 `src/Header/Nav/index.tsx` 中的 URL 生成逻辑。

## 3. 注意事项
- **SEO 影响：** 路由变更会导致原有 URL 失效。建议在未来配置 301 重定向（如果旧链接已被收录）。
- **静态 vs 动态：** 目前 `/solution/industry/` 下既有静态文件夹（如 `semiconductor`），也有动态路由 `[slug]`。Next.js 会优先匹配静态文件夹，这意味着如果您在 CMS 里新建一个 slug 为 `semiconductor` 的文章，它**不会**覆盖现有的静态页面，而是被静态页面拦截。这是预期行为，保证了精心设计的静态页面的优先级。
