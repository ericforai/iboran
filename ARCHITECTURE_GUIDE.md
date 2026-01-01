# 架构设计指南

本文档基于 Claude Skills 的架构原则，供团队在 Cursor 中开发时参考。

---

## 📋 模块化设计原则

### 核心约束

| 指标 | 阈值 | 说明 |
|------|------|------|
| 圈复杂度 | < 10 | 单个函数的分支逻辑上限 |
| 扇出 (Fan-out) | ≤ 5 | 模块依赖的其他模块数量 |
| 模块深度 | ≤ 4 层 | 调用链最大深度 |
| 文件长度 | < 300 行 | 单文件代码行数上限 |

### 模块边界

**DO（推荐）**：
```typescript
// ✅ 内聚模块：一个文件封装完整操作
export class AlipayProvider {
  async createPayment(order) {
    this.validate(order);
    const signed = this.signRequest(order);
    const response = await this.request(signed);
    return this.parseResponse(response);
  }
}
```

**DON'T（避免）**：
```typescript
// ❌ 伪模块化：5个文件做一件事
// modules/payment/alipay/request.js
export function makeRequest(config) {
  return await fetch(config.url, config.options);
}
// modules/payment/alipay/parse.js
export function parseResponse(data) { return JSON.parse(data); }
// ... 还有 3 个文件
```

---

## 🛡️ 架构防御规则

### J1: 模块自描述 (manifest.config.ts)

每个模块应包含：

```typescript
export const moduleManifest = {
  id: "feature.user-profile",
  owner: "team-platform",
  publicApi: "./index.ts",
  canImportFrom: ["src/shared/utils/**", "src/features/*/index.ts"],
  restrictions: {
    disallowDeepImport: true
  }
};
```

### 依赖规则

| 规则 | 说明 |
|------|------|
| 禁止跨模块内部 import | 只能通过 index.ts 导入 |
| 禁止 UI → DB | 组件不能直接依赖数据库模型 |
| 禁止循环依赖 | 模块 A 不能直接或间接依赖自己 |

---

## 🔍 在 Cursor 中使用

### 架构设计 Prompt 模板

```
请设计 [功能名称] 的模块化架构，要求：

1. 每个模块包含 manifest.config.ts
2. 遵循以下约束：
   - 圈复杂度 < 10
   - 扇出 ≤ 5
   - 模块深度 ≤ 4 层
3. 明确：
   - 模块边界
   - Public API
   - 内部实现
   - 依赖关系

项目背景：[描述你的项目]
功能需求：[描述功能]
```

### 重构审查 Prompt 模板

```
请审查以下代码的模块化质量：

[粘贴代码]

检查项：
- 是否存在伪模块化（过度拆分）？
- 扇出是否超过 5？
- 是否有循环依赖风险？
- 模块职责是否单一？
- 是否需要创建 manifest.config.ts？
```

---

## 📚 快速参考

### 常见反模式

| 反模式 | 修复 |
|-------------|-------------|
| 没有模块清单 | 创建 manifest.config.ts |
| 深层 import | 从 index.ts 导入 |
| UI → Database | 创建类型层，Service 转换 |
| 过度拆分 | 合并相关功能 |
| 循环依赖 | 提取共享模块 |

### SOLID 原则速查

- **S**RP: 单一职责（一个变化原因）
- **O**CP: 开闭原则（扩展开放，修改关闭）
- **L**SP: 里氏替换（子类可替换父类）
- **I**SP: 接口隔离（不强制不需要的方法）
- **D**IP: 依赖倒置（依赖抽象，不依赖具体）

---

## 🚀 下一步

1. 新功能开发 → 参考"模块化设计原则"
2. 重构代码 → 使用"重构审查 Prompt"
3. 设置架构检查 → 配置 dependency-cruiser

---

*本文档同步自 Claude Skills: entropy-reduction + architecture-defense*
