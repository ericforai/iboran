# 设计系统规范

## 品牌色彩体系

遵循 **70% 白/灰 + 20% 蓝 + 10% 红** 配色比例。

### 色值定义

```typescript
const Colors = {
  // 基础色
  White: '#FFFFFF',
  Background: '#F7F8FA',    // 区块背景
  Heading: '#1F2329',       // 标题文字
  Text: '#4B5563',          // 正文（Slate-600）
  
  // 品牌色
  Blue: '#0052D9',          // 用友蓝 - 辅助交互
  Red: '#E60012',           // 用友红 - 主 CTA
}
```

### Tailwind 映射

| 用途 | 类名 |
|------|------|
| 主标题 | `text-[#1F2329]` |
| 正文 | `text-slate-600` |
| 主 CTA 背景 | `bg-[#E60012]` |
| 次级交互 | `text-[#0052D9]` / `border-[#0052D9]` |
| 区块背景 | `bg-[#F7F8FA]` |

---

## 按钮层级

### 主 CTA (Primary)
- 场景：**每个视图仅 1 个**（如"预约专家演示"）
- 样式：`bg-[#E60012] text-white hover:bg-red-700 rounded-md`

### 次级 CTA (Secondary)
- 场景：辅助行动（如"查看解决方案"）
- 样式：`border-2 border-[#0052D9] text-[#0052D9] hover:bg-blue-50`

### Ghost 链接
- 场景：列表内的"了解详情"
- 样式：`text-[#E60012] hover:underline font-bold`

---

## 排版规范

### 字体家族
```css
font-family: Inter, 'Noto Sans SC', sans-serif;
```

### 字重与行高
- **标题**: `font-bold`, `tracking-tight`
- **正文**: `font-medium`, `leading-relaxed`

---

## 间距与布局

### Section 间距
- 纵向：`py-20` 至 `py-24` (80-96px)

### 卡片样式
```jsx
className="bg-white rounded-xl border border-slate-100 shadow-sm 
           hover:shadow-xl hover:border-[#0052D9]/30 transition-all"
```

### 容器
```jsx
<div className="container mx-auto px-4">
```

---

## 微交互

### 悬停效果
- 卡片抬升：`hover:shadow-xl`
- 下划线动画：`group-hover:w-full`（导航链接）
- 图标放大：`group-hover:scale-110`

### 页面动画（Framer Motion）
```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```
