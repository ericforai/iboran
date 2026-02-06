# AI 客服无缝转人工设计（最小改动版）

## 1. 背景与目标

当前网站右下角已上线 AI 客服，但用户反馈高频诉求是“希望在同一窗口与真人继续沟通”。

本设计目标：
- 代码最简单
- 可复用（后续可接企业微信等第三方）
- 改动最小（尽量不重构现有 AI 聊天链路）
- 稳定优先（可灰度、可降级）

明确约束：
- 客服目前无现成外部坐席系统
- 接受客服先登录 Payload Admin 回复
- 人工不在线时，AI 继续接待并提示“工作时间内人工回复”

## 2. 方案选择与结论

对比三类方案：
- 项目内坐席（Payload Admin）
- 直接对接企业微信/第三方客服平台
- 轻量通知过渡（邮件/飞书）

结论：优先采用“项目内坐席 + 同窗体无缝接管”。

原因：
- 对现有前端聊天组件改动最小
- 数据与流程完全在本项目可控，稳定性最高
- 可在当前会话模型上沉淀统一能力，后续只替换坐席适配层即可接第三方

## 3. 总体架构

核心原则：不改动用户入口，不跳转页面，不拆分会话。

在现有聊天能力上增加“人工接管能力层”：
- Conversation（会话）负责状态
- Message（消息）负责全量记录
- Handoff 状态机负责 AI 与人工路由

同一会话内维护两个关键字段：
- `mode`: `ai | human | hybrid`
- `handoffStatus`: `none | requested | queued | active | closed`

建议最小状态流：
- `none -> requested -> active -> closed`

触发流程：
1. 用户点击“转人工”
2. 后端写入 `requested` 并回系统提示
3. 若暂无人工在线，AI 按兜底策略继续接待
4. 客服首条回复后置 `active`
5. 会话结束后置 `closed`

## 4. 数据模型（Payload）

### 4.1 Collections

1) `Conversations`
- `visitorId`（匿名访客标识）
- `sourcePage`（来源页）
- `mode`
- `handoffStatus`
- `needsHuman`（布尔）
- `lastMessageAt`
- `assignedAgent`（可选，关联 Users）

2) `Messages`
- `conversation`（关联 Conversations）
- `role`: `visitor | ai | agent | system`
- `content`
- `clientMessageId`（前端幂等键）
- `createdAt`
- `meta`（可选，扩展字段）

3) `Users`（启用 `auth: true`）
- `role`: `admin | agent`

### 4.2 索引建议
- `Messages`: `(conversation, createdAt)`
- `Conversations`: `(handoffStatus, updatedAt)`
- `Messages`: `clientMessageId` 唯一约束（或会话内唯一）

## 5. API 设计（最小新增）

1) `POST /api/chat/handoff`
- 入参：`conversationId`
- 行为：将会话置为 `requested`，写入系统消息

2) `GET /api/chat/conversations/:id/messages`
- 行为：拉取会话消息（若已有接口可复用）

3) `POST /api/chat/messages`
- 统一发送入口
- 后端按会话状态路由到 AI 或人工链路

4) `POST /api/chat/agent/reply`
- 仅 `agent/admin` 可调用
- 写入 `agent` 消息并将 `handoffStatus` 置 `active`

## 6. 前端最小改动

仅改现有右下角聊天组件：
- 新增“转人工”按钮
- 新增系统状态提示（已转人工、人工已接入）
- 维持原消息列表与输入框交互不变

首版同步策略建议：
- 使用短轮询（稳定、实现快）
- 后续再升级到 SSE/WebSocket

## 7. 稳定性与异常策略

1) 状态机保护
- 禁止非法状态回跳
- AI 生成中收到转人工请求：本轮可结束，下一轮执行人工优先判断

2) 人工离线兜底
- 会话保持 `requested`
- AI 继续接待
- 限频系统提示（例如每 10 分钟最多一次）

3) 幂等与重试
- 所有发消息接口使用 `clientMessageId`
- 后端去重，避免网络重试导致重复消息

4) 审计
- 记录谁在何时接管、回复、关闭会话

5) 降级
- Feature Flag 一键关闭“转人工”入口，系统回到纯 AI 模式

## 8. 权限与安全

- `agent` 仅可读写会话和消息
- 禁止 `agent` 修改站点配置或高权限资源
- API 校验会话归属（匿名 token/cookie）
- 防串会话、防越权读取

## 9. 实施拆分（建议 4 个 PR）

PR1 数据层
- 新增 Collections/字段/索引
- 实现状态机校验函数

PR2 接口层
- 新增 `handoff`、`agent/reply`
- 统一消息写入与路由
- 幂等去重与审计

PR3 前端层
- 聊天组件增加“转人工”与状态提示
- 轮询拉取新消息

PR4 Admin 层
- Payload Admin 会话筛选（`requested/active`）
- 客服快捷回复入口

## 10. 测试与验收

### 10.1 单元测试
- 状态机合法流转
- 幂等去重
- 权限判断

### 10.2 集成测试
- 转人工后 AI 兜底继续可用
- 客服首条回复激活 `active`
- 未登录调用 `agent/reply` 被拒绝

### 10.3 E2E 冒烟
- 访客发起会话 -> 点击转人工 -> 收到等待提示
- 客服在 Admin 回复 -> 前端同窗体收到人工消息

### 10.4 发布策略
- 灰度开启（如 10% 用户）
- 监控指标：
  - 转人工请求量
  - 人工首响时长
  - 接管后会话完成率

## 11. 后续可扩展点

- 将“人工回复适配层”抽象为 provider（Payload Agent / 企业微信 / 第三方客服）
- 保持前端与会话模型不变，仅替换 provider
- 在稳定后增加排队、自动分配、SLA、知识库转接建议

---

该设计已按“最小改动、稳定优先”原则约束功能范围，避免一次性建设完整客服系统。
