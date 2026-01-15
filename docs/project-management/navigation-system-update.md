# 导航系统升级说明文档 (2025-12-22 更新)

## 1. 更新概述
本次更新对网站顶部的导航系统（Header）进行了全面升级，并配合路由重构，实现了层级分明、动态同步的导航体验。

**核心改进：**
- **统一路由根路径：** 所有方案统一在 `/solution` 下，分为 `/business/` 和 `/industry/`。
- **多级菜单支持：** 支持二级子分组（如：按业务领域 -> 具体方案）。
- **动态内容同步：** 自动拉取 CMS 中的“行业解决方案”，路径已更新为 `/solution/industry/[slug]`。

---

## 2. 导航结构 (当前配置)

目前导航栏已预设为以下层级：

- **首页** (`/`)
- **解决方案** (下拉菜单)
    - **按业务领域** (子分组)
        - 全部业务方案 (`/solution`)
        - L2C 销售到收款 (`/solution/business/lead-to-cash`)
        - S2P 采购到付款 (`/solution/business/s2p`)
        - MES 生产管理 (`/solution/business/mes`)
        - ...
    - **按行业分类** (动态列表 - CMS 自动抓取)
        - 自动显示发布的行业方案，链接格式：`/solution/industry/xxx`
    - **成功案例** (`/success-stories`)
- **关于我们** (`/about`)

---

## 3. 管理员操作指南

### 3.1 如何配置导航栏
进入后台：**Globals** -> **Header**。

#### 类型 A：Link (普通链接)
- **配置：** 填写 Label 和 URL。

#### 类型 B：Group (下拉分组)
- **用途：** 创建一级下拉菜单（如“解决方案”）。
- **注意：** 该组内现在可以添加 `Sub Group` (子分组) 或 `Collection Menu` (动态列表)。

#### 类型 C：Sub Group (子分组)
- **用途：** 在下拉菜单内创建二级标题（如“按业务领域”），用于收纳一组普通链接。

#### 类型 D：Collection Menu (动态列表)
- **用途：** 自动显示分类文章。
- **关键配置：** 
    - **Collection Slug:** 选择 `Industry Solutions`。
    - **自动路由：** 系统会自动将链接指向 `/solution/industry/文章路径`。

---

## 4. 技术维护备注
- **路由逻辑：** 前端组件 `src/Header/Nav/index.tsx` 已内置逻辑，会自动识别 `industry-solutions` 集合并为其补全 `/solution/industry/` 前缀。
- **数据一致性：** 若修改了文章的 `slug`，导航栏的动态列表会自动更新，无需手动干预。
- **静态拦截：** 如果 `/src/app/(frontend)/solution/industry/` 下存在同名文件夹，静态页面将优先于动态 CMS 内容。