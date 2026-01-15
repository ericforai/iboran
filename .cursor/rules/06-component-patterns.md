# 组件开发规范

## 通用组件结构

```
src/components/
├── ComponentName/
│   └── index.tsx      # 组件入口
```

---

## Section 组件模式

### 标准 Section 骨架

```tsx
const SectionName = () => {
  return (
    <section className="py-24 bg-white">  {/* 或 bg-[#F7F8FA] */}
      <div className="container mx-auto px-4">
        {/* Section 标题 */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            Section 标题
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        {/* Section 内容 */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cards */}
        </div>
      </div>
    </section>
  )
}
```

---

## 卡片组件模式

### 标准卡片

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="bg-white p-8 rounded-xl border border-slate-100 
             shadow-sm hover:shadow-xl hover:border-[#0052D9]/30 
             transition-all duration-300 group"
>
  {/* 图标容器 */}
  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center 
                  justify-center mb-6 group-hover:bg-[#0052D9] 
                  transition-colors duration-300">
    <Icon className="w-7 h-7 text-[#0052D9] group-hover:text-white" />
  </div>
  
  {/* 标题 */}
  <h3 className="text-xl font-bold text-[#1F2329] mb-4">{title}</h3>
  
  {/* 描述 */}
  <p className="text-slate-600 leading-relaxed">{description}</p>
</motion.div>
```

---

## 导航组件模式

### Navbar 结构

```tsx
<header className="sticky top-0 z-50 bg-white border-b border-gray-100">
  <div className="container mx-auto px-4 h-20 flex items-center justify-between">
    {/* Logo */}
    {/* Menu */}
    {/* Actions (电话 + CTA) */}
  </div>
</header>
```

### 导航链接悬停效果

```tsx
<Link className="relative group py-2">
  {item}
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0052D9] 
                   transition-all duration-300 group-hover:w-full" />
</Link>
```

---

## 动画规范

### 入场动画

```tsx
import { motion } from 'framer-motion'

// 基础淡入上移
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

// 视口触发（滚动进入）
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}

// 交错动画（列表项）
transition={{ delay: index * 0.1 }}
```

### 循环动画（装饰元素）

```tsx
animate={{ y: [0, -20, 0] }}
transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
```

---

## 图标使用

### 统一使用 Lucide React

```tsx
import { Phone, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'

// 标准尺寸
<Icon className="w-5 h-5" />  // 小图标
<Icon className="w-7 h-7" />  // 卡片图标
<Icon className="w-10 h-10" /> // 装饰图标
```

---

## 模态框组件

### Demo 预约模态

```tsx
import { DemoRequestModal } from '@/components/DemoRequestModal'

<DemoRequestModal
  isOpen={isDemoModalOpen}
  onClose={() => setIsDemoModalOpen(false)}
/>
```
