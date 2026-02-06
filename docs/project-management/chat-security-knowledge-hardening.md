# Chat Security & Knowledge Hardening

## 1. 背景与目标

本次改造目标：

1. 提升 AI 客服回答准确性：回答基于网站内容与可控知识源。
2. 修复聊天链路安全风险：避免未授权读取会话、访客 ID 伪造、接口滥用。
3. 保持改动最小可复用：以 API 层增强为主，不重写业务流程。

---

## 2. 关键改动

### 2.1 AI 知识增强（RAG）

- 新增知识检索模块：`src/utilities/knowledgeGrounding.ts`
- 数据源：
  - 站点内容：`pages/posts/resources/industry-solutions/success-stories`
  - 文档内容：`docs/**`（默认关闭公网检索，见配置）
- `/api/ai/chat` 每次请求会按用户问题检索知识片段并注入 system context。
- 返回 `groundingChunks` 供前端展示“参考来源”。

### 2.2 AI 接口安全加固

- 文件：`src/app/api/ai/chat/route.ts`
- 增加：
  - 速率限制（每 IP）
  - `history` 结构与长度校验
  - 单条消息长度上限
  - server-side 固定系统提示词（客户端 `systemInstruction` 仅作为附加 hint，且截断）
  - 默认不向公网暴露 `docs` 知识库命中

### 2.3 访客身份签名机制

- 新增：`src/utilities/visitorId.ts`
  - `generateSignedVisitorId`
  - `verifyVisitorId`
- 新增访客 ID 接口：`src/app/api/chat/visitor/route.ts`
- 前端通过 `/api/chat/visitor` 获取签名 visitorId，并缓存到本地。

### 2.4 会话读取权限收口

- 文件：
  - `src/app/api/chat/conversations/[id]/messages/route.ts`
  - `src/app/api/chat/conversations/[id]/events/route.ts`
- 规则：
  - 已登录坐席（agent/admin）可读
  - 匿名访客必须提供**有效签名** visitorId，且与会话 `conversation.visitorId` 一致
- 同时增加读取接口速率限制。

### 2.5 发送与转人工接口防护

- 文件：
  - `src/app/api/chat/messages/route.ts`
  - `src/app/api/chat/handoff/route.ts`
  - `src/app/api/chat/agent/reply/route.ts`
- 增加：
  - 速率限制
  - 输入长度上限
  - 参数合法性校验
- 修复：`agent/reply` 角色兜底不再默认 `admin`。

### 2.6 前端来源可视化与读写兼容

- 文件：
  - `src/components/AIConsultant.tsx`
  - `src/utilities/chatService.ts`
  - `src/types/ai.ts`
- 前端会展示来源链接/来源标签（站点可跳转，非链接来源显示标签）。
- 访客读取消息/SSE 自动附带 visitorId（header/query）以通过权限校验。

### 2.7 通用限流工具

- 新增：`src/utilities/rateLimit.ts`
- 为 AI 与聊天核心 API 提供统一的内存级限流能力。

---

## 3. 行为变化（需同步产品/测试）

1. 未携带有效 visitorId 的匿名请求：
  - `GET /api/chat/conversations/:id/messages` -> `403`
  - `GET /api/chat/conversations/:id/events` -> `403`
2. 高频调用 AI/聊天接口时会收到 `429 Too many requests`。
3. AI “参考来源”可见，且内容来自命中知识片段。

---

## 4. 配置项

建议在环境变量中配置：

- `DEEPSEEK_API_KEY`：DeepSeek Key（必填）
- `DEEPSEEK_BASE_URL`：DeepSeek API 地址
- `VISITOR_SECRET`：访客 ID 签名密钥（生产强制建议）
- `AI_SYSTEM_PROMPT`：服务端固定系统提示词（可选）
- `AI_ALLOW_PUBLIC_DOCS_KB`：是否允许公网 AI 使用 `docs` 知识库（默认 `false`）

说明：

- `VISITOR_SECRET` 未配置时会回退到 `PAYLOAD_SECRET`，仅开发环境可接受。
- `AI_ALLOW_PUBLIC_DOCS_KB=false` 可避免内部文档内容被公网探测。

---

## 5. 验证清单

### 5.1 功能验证

1. AI 对话可用：`POST /api/ai/chat` 返回 `200`
2. 来源可视化：前端回复中展示“参考来源”
3. 转人工与坐席回复流程可正常跑通

### 5.2 安全验证

1. 匿名读取会话（无 visitorId）应返回 `403`
2. 携带有效 visitorId 且匹配会话，应返回 `200`
3. 高频请求触发 `429`
4. AI 接口对超长/非法 history 返回 `400`

---

## 6. 回滚策略

若需快速回滚：

1. 先回退以下文件到上一稳定版本：
  - `src/app/api/ai/chat/route.ts`
  - `src/app/api/chat/conversations/[id]/messages/route.ts`
  - `src/app/api/chat/conversations/[id]/events/route.ts`
2. 保留 `visitorId` 机制优先，不建议回退会话读取权限控制。
3. 回滚后立即做以下冒烟：
  - AI 可答复
  - 转人工可接入
  - 坐席可收发消息

---

## 7. 后续建议

1. 将内存限流升级为 Redis 限流（多实例一致）。
2. 为会话读写 API 增加集成安全测试（403/429/400）。
3. 若要开放 `docs` 检索，建议先对文档做敏感分级与白名单筛选。

