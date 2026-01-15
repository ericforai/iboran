---
description: 一键生成客户案例 (Excel -> Web Page)
---

# 🚀 一键生成客户案例

本工作流将 "Excel 数据读取"、"页面生成" 和 "列表注册" 合并为一步自动化操作。

## 核心功能
1. **自动读取**: 从 `docs/case-study/泊冉案例.xlsx` 读取指定客户数据.
2. **智能生成**: 自动生成 Hero, Overview, Solution 等全套 React 组件 (Premium Design).
3. **内容扩充**: 如果配置了 `ENRICHED_CONTENT`，自动使用高质量扩充文案.
4. **自动上线**: 自动修改 `src/app/(frontend)/cases/page.tsx` 将案例加入列表.

## 使用方法

### 1. 确保 Excel 中有数据
确认 `docs/case-study/泊冉案例.xlsx` 中包含目标客户（如 "西域供应链"）.

### 2. 运行生成命令
在终端执行以下命令（只需替换客户名称）：

```bash
# 格式: python3 scripts/generate_case_from_excel.py --client "客户名称"
python3 scripts/generate_case_from_excel.py --client "西域供应链"
```

### 3. (可选) 补充图片
生成的页面默认使用占位图。完成后请将真实图片放入 `public/images/case-study/` 并修改 `Hero.tsx`.

## 常见客户名称
- 捷太格特
- 正帆科技
- 西域供应链
- 安能物流
- 南极电商
