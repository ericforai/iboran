# 导航系统升级说明文档 (2025-12-22)

## 1. 更新概述
本次更新对网站顶部的导航系统（Header）进行了全面升级。从原有的“单一静态链接”模式，升级为“多级动态区块”模式。

**核心改进：**
- **多级菜单支持：** 支持创建下拉菜单分组（NavGroup）。
- **动态内容同步：** 支持自动拉取指定集合（如：行业解决方案）的最新列表，实现“发文即上菜单”。
- **灵活配置：** 管理员可以在后台自由组合普通链接、下拉组和动态列表。

---

## 2. 技术变更记录

### 2.1 后端数据模型 (Payload CMS)
- **新增区块定义：**
    - `SingleLink`: 基础链接区块。
    - `NavGroup`: 菜单组区块，可嵌套子项。
    - `CollectionMenu`: 动态集合区块，根据 `collectionSlug` 自动获取数据。
- **全局配置更新：** `src/Header/config.ts` 已由 `array` 字段升级为 `blocks` 字段。

### 2.2 前端逻辑
- **数据预取 (Server Side):** `src/Header/Component.tsx` 会在服务端自动识别 `CollectionMenu` 并预取相关文档。
- **交互组件 (Client Side):** `src/Header/Nav/index.tsx` 实现了基于 Tailwind CSS 的悬停下拉交互，并针对不同集合（行业方案、成功案例）自动匹配 URL 路由。
- **类型修复：** 修复了因 Header 结构变更导致的 Footer 及后台 RowLabel 的 TypeScript 类型兼容性问题。

---

## 3. 管理员操作指南

### 3.1 如何配置导航栏
1. 进入后台：**Globals** -> **Header**。
2. 在 **Nav Items** 中，点击 **Add Block**，选择以下类型之一：

#### 类型 A：Link (普通链接)
- **用途：** 首页、联系我们等单一跳转。
- **配置：** 填写 Label 和选择链接目标。

#### 类型 B：Group (下拉分组)
- **用途：** 创建一个分类标题，鼠标悬停时展示子菜单。
- **配置：** 
    - **Label:** 输入组名（如：解决方案）。
    - **Items:** 在内部继续添加其他区块。

#### 类型 C：Collection Menu (动态列表)
- **用途：** 自动显示某个分类下的所有文章标题。
- **配置：** 
    - **Menu Label:** 列表的小标题（如：按行业分类）。
    - **Collection Slug:** 选择 `Industry Solutions`。
    - **Limit:** 设定显示的最大数量。

### 3.2 自动化效果说明
- 当您使用 **Collection Menu** 绑定了 **Industry Solutions** 后：
    - **发布新方案：** 导航栏会自动多出一个链接。
    - **下线旧方案：** 导航栏会自动移除该链接。
    - **修改标题：** 导航栏文字会同步更新。

---

## 4. 开发人员备注 (Maintenance)
- **脚本工具：** 提供了 `src/scripts/updateHeader.ts` 脚本用于紧急恢复或批量更新 Header 初始数据。
- **构建注意：** 本项目在构建时会进行静态页面生成（SSG），确保数据库连接正常（尤其是 Docker 端口映射 `27018`）以保证 Header 数据能被正确抓取。
- **缓存策略：** Header 数据受 Next.js `revalidateTag` 保护，在后台修改后会自动触发缓存刷新。
