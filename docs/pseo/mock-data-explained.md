# Mock 数据说明

## 什么是 Mock 数据？

**Mock 数据** = **示例数据** / **模拟数据** / **占位符数据**

Mock 数据是用于测试和开发的示例数据，不是真实的内容，而是模板/占位符。

## Mock 数据 vs 真实数据

### Mock 数据（示例数据）

```json
{
  "kb": {
    "direct_answer_text": "（示例）这是一个关于该主题的核心结论...",
    "howto_steps": [
      {
        "title": "步骤一：准备阶段",
        "input": "（示例）输入条件或前置要求",
        "output": "（示例）输出结果或交付物",
        "notes": "（示例）注意事项"
      }
    ],
    "deliverables": [
      "（示例）交付物 1",
      "（示例）交付物 2"
    ]
  }
}
```

**特点：**
- ❌ 内容都是"（示例）"标记的占位符
- ❌ 不是真实业务内容
- ✅ 结构完整，符合 schema 要求
- ✅ 用于测试和开发

### 真实数据（raw_data）

```json
{
  "kb": {
    "direct_answer_text": "ERP 二次开发服务目标是：在不破坏标准能力的前提下补齐差异流程、报表口径与集成能力，保证可维护、可升级与可观测。",
    "howto_steps": [
      {
        "title": "启动与范围定义（Kickoff）",
        "input": "目标/范围、业务域、干系人、现状系统/接口",
        "output": "项目章程、里程碑、范围边界、变更流程",
        "notes": "先固化边界避免失控"
      }
    ],
    "deliverables": [
      "范围说明与变更流程",
      "里程碑计划与风险台账",
      "业务蓝图（流程/权限/主数据/口径）"
    ]
  }
}
```

**特点：**
- ✅ 真实业务内容
- ✅ 可直接发布
- ✅ 来自实际项目经验
- ✅ 包含具体细节

## 在工作流中的使用

### 何时使用 Mock 数据？

1. **测试工作流**
   - 想测试页面生成流程
   - 还没有准备真实数据
   - 验证 schema 是否正确

2. **开发阶段**
   - 开发新功能时
   - 调试渲染逻辑
   - 测试格式转换

3. **快速预览**
   - 想快速看到页面结构
   - 不需要真实内容

### 何时使用真实数据？

1. **正式发布**
   - 需要发布到生产环境
   - 需要真实业务内容

2. **内容营销**
   - SEO 优化
   - 用户阅读

3. **完整功能**
   - 需要完整的业务信息
   - 需要具体的步骤和交付物

## 使用示例

### 使用 Mock 数据生成页面

```bash
# 不指定 --raw-data，自动使用 mock_data.json
pnpm pseo:publish \
  --keyword "用友ERP实施服务" \
  --category industry-insights \
  --status draft
```

**生成的页面会包含：**
- "（示例）这是一个关于该主题的核心结论..."
- "（示例）输入条件或前置要求"
- "（示例）交付物 1"

**用途：** 测试页面结构、验证工作流

### 使用真实数据生成页面

```bash
# 指定 --raw-data 使用真实数据
pnpm pseo:publish \
  --keyword "用友ERP实施服务" \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json \
  --category industry-insights \
  --status published
```

**生成的页面会包含：**
- "ERP 二次开发服务目标是：在不破坏标准能力的前提下..."
- "目标/范围、业务域、干系人、现状系统/接口"
- "范围说明与变更流程"

**用途：** 正式发布、内容营销

## Mock 数据的生成

Mock 数据是在生成 Schema 时自动创建的：

```bash
# 生成 Schema 时会同时生成 mock_data.json
pnpm pseo:schema \
  --keyword "用友ERP实施服务" \
  --config config.json \
  --page-type money_page \
  --output-dir output/demo
```

**输出：**
- `schema.yaml` - 页面结构定义
- `mock_data.json` - 示例数据（自动生成）

## 如何替换 Mock 数据

### 方法 1: 使用真实数据文件

```bash
# 直接指定真实数据文件
pnpm pseo:render \
  --schema output/demo/schema.yaml \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json \
  --config output/demo/config.json \
  --output output/demo/page.md
```

### 方法 2: 手动编辑 mock_data.json

1. 打开 `output/demo/mock_data.json`
2. 替换"（示例）"内容为真实内容
3. 保存文件
4. 使用编辑后的文件渲染

### 方法 3: 使用真实数据目录

```bash
# 从 pages_index.csv 中查找对应的真实数据文件
# 然后使用该文件
pnpm pseo:publish \
  --keyword "ERP 实施服务" \
  --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json
```

## 总结

| 特性 | Mock 数据 | 真实数据 |
|------|----------|---------|
| **内容** | 示例/占位符 | 真实业务内容 |
| **标记** | 包含"（示例）" | 无标记 |
| **用途** | 测试、开发 | 正式发布 |
| **来源** | 自动生成 | 手工准备或已有数据 |
| **质量** | 结构完整但内容空泛 | 内容充实、可直接发布 |

## 建议

- ✅ **开发/测试时**：使用 Mock 数据，快速验证流程
- ✅ **正式发布时**：使用真实数据，确保内容质量
- ✅ **批量生成时**：优先使用真实数据，Mock 数据作为备选

---

**简单记忆：**
- **Mock 数据** = 模板/示例，用于测试
- **真实数据** = 实际内容，用于发布






