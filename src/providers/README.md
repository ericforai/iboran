# Providers 目录

> 一旦我所属的文件夹有所变化，请更新我。

## 目录功能

React Context Providers 组件，提供全局状态管理和第三方服务集成。

---

## 文件清单

| 文件 | 类型 | 功能描述 |
|------|------|----------|
| `Attribution/index.tsx` | Provider | UTM 参数捕获，存储到 sessionStorage |
| `Analytics/index.tsx` | Provider | GA4 和百度统计事件发送，页面浏览跟踪 |

---

## 使用方式

在 `app/(frontend)/layout.tsx` 中嵌套使用：

```typescript
<AnalyticsProvider>
  <AttributionProvider>
    {children}
  </AttributionProvider>
</AnalyticsProvider>
```

---

## 依赖关系

```
AnalyticsProvider
  ↓ (依赖)
AttributionProvider
  ↓
useAnalytics() / useConversionTracking()
```
