# SEO 策略规范（针对百度）

## 技术层面要求

### SSR 直出
- 使用 Next.js App Router 的 Server Components
- 确保 `View Source` 可见完整 HTML 内容
- 关键内容不依赖 Client-side JS 渲染

### URL 结构
```
扁平化设计：iboran.com/solution/[slug]
示例：iboran.com/solution/finance-cloud
```

### URL 命名
- 可用拼音或英文
- 必须包含关键词
- 使用短横线连接：`intelligent-manufacturing`

---

## 页面 Meta 标签

### 必需标签
```tsx
export const metadata: Metadata = {
  title: '页面标题 | 泊冉软件',
  description: '包含关键词的描述，120字以内',
  keywords: ['用友实施', '泊冉软件', '...'],
}
```

### Open Graph（社交分享）
```tsx
openGraph: {
  title: '分享标题',
  description: '分享描述',
  images: ['/og-image.png'],
}
```

---

## 内容 SEO 策略

### 标签聚合系统
建立横向标签聚合页，增加内链密度：

```
点击"新零售"标签 
→ 聚合财务云、营销云、库存管理中所有相关内容
```

### 标签页 URL
```
iboran.com/tag/new-retail
iboran.com/tag/intelligent-manufacturing
```

### 内链规则
- 每个方案页至少 3 个内链
- 相关方案互相链接
- 底部添加"相关解决方案"推荐

---

## Sitemap 配置

项目已配置 `next-sitemap`：

```javascript
// next-sitemap.config.cjs
module.exports = {
  siteUrl: 'https://iboran.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
}
```

### 优先级设置
| 页面类型 | Priority |
|----------|----------|
| 首页 | 1.0 |
| 解决方案 | 0.8 |
| 产品页 | 0.7 |
| 博客文章 | 0.6 |
| 标签聚合 | 0.5 |
