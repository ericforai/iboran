# AI Human Handoff Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add seamless human handoff in the existing AI chat widget, keeping one conversation thread and using Payload Admin as the first agent console.

**Architecture:** Extend current AI chat with a conversation/message domain model and a strict handoff state machine (`none -> requested -> active -> closed`). Keep the frontend widget UI shell intact and add minimal human-handoff controls. Route user messages through a single API that decides AI fallback vs agent reply based on conversation status.

**Tech Stack:** Next.js App Router, Payload CMS 3.x, TypeScript, Vitest (int/unit), Playwright (E2E), Docker Compose, PNPM.

---

**Related skills:** `@test-driven-development` `@security-review` `@verification-before-completion`

## Preconditions

- Use the existing repository in `/Users/user/iboran`.
- Ensure container stack is running:

```bash
docker compose -f docker-compose.yml up --build -d
```

- Execute all app commands in container:

```bash
docker compose -f docker-compose.yml exec app pnpm <script>
```

### Task 1: Define Shared Domain Types + State Machine

**Files:**
- Create: `src/types/chat.ts`
- Create: `src/utilities/chatStateMachine.ts`
- Test: `tests/unit/chat-state-machine.spec.ts`

**Step 1: Write the failing test**

```ts
import { describe, expect, it } from 'vitest'
import { canTransition, nextHandoffStatus } from '@/utilities/chatStateMachine'

describe('chat handoff state machine', () => {
  it('allows none -> requested -> active -> closed', () => {
    expect(canTransition('none', 'requested')).toBe(true)
    expect(canTransition('requested', 'active')).toBe(true)
    expect(canTransition('active', 'closed')).toBe(true)
  })

  it('blocks illegal transitions', () => {
    expect(canTransition('closed', 'active')).toBe(false)
    expect(canTransition('none', 'active')).toBe(false)
  })

  it('returns next status safely', () => {
    expect(nextHandoffStatus('none', 'request_human')).toBe('requested')
  })
})
```

**Step 2: Run test to verify it fails**

Run:

```bash
docker compose -f docker-compose.yml exec app pnpm test:int -- tests/unit/chat-state-machine.spec.ts
```

Expected: FAIL with module/function not found.

**Step 3: Write minimal implementation**

```ts
export type HandoffStatus = 'none' | 'requested' | 'active' | 'closed'
export type HandoffEvent = 'request_human' | 'agent_reply' | 'close'

const transitions: Record<HandoffStatus, HandoffStatus[]> = {
  none: ['requested'],
  requested: ['active', 'closed'],
  active: ['closed'],
  closed: [],
}

export function canTransition(from: HandoffStatus, to: HandoffStatus): boolean {
  return transitions[from].includes(to)
}

export function nextHandoffStatus(from: HandoffStatus, event: HandoffEvent): HandoffStatus {
  if (event === 'request_human' && canTransition(from, 'requested')) return 'requested'
  if (event === 'agent_reply' && canTransition(from, 'active')) return 'active'
  if (event === 'close' && canTransition(from, 'closed')) return 'closed'
  return from
}
```

**Step 4: Run test to verify it passes**

Run same command as step 2.

Expected: PASS.

**Step 5: Commit**

```bash
git add src/types/chat.ts src/utilities/chatStateMachine.ts tests/unit/chat-state-machine.spec.ts
git commit -m "feat(chat): add handoff state machine"
```

### Task 2: Add Payload Collections for Conversations and Messages

**Files:**
- Create: `src/collections/Conversations.ts`
- Create: `src/collections/Messages.ts`
- Modify: `src/payload.config.ts`
- Test: `tests/int/chat-collections.int.spec.ts`

**Step 1: Write the failing test**

```ts
import { describe, expect, it, beforeAll } from 'vitest'
import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

let payload: Payload

describe('chat collections', () => {
  beforeAll(async () => {
    payload = await getPayload({ config: await config })
  })

  it('creates conversation and messages', async () => {
    const conversation = await payload.create({
      collection: 'conversations',
      data: { visitorId: 'v-1', mode: 'ai', handoffStatus: 'none' },
    })

    const message = await payload.create({
      collection: 'messages',
      data: { conversation: conversation.id, role: 'visitor', content: 'hello', clientMessageId: 'm-1' },
    })

    expect(conversation.id).toBeDefined()
    expect(message.id).toBeDefined()
  })
})
```

**Step 2: Run test to verify it fails**

```bash
docker compose -f docker-compose.yml exec app pnpm test:int -- tests/int/chat-collections.int.spec.ts
```

Expected: FAIL because collections do not exist.

**Step 3: Write minimal implementation**

- Add `Conversations` collection with fields:
- `visitorId`, `sourcePage`, `mode`, `handoffStatus`, `needsHuman`, `lastMessageAt`, `assignedAgent`.
- Add `Messages` collection with fields:
- `conversation`, `role`, `content`, `clientMessageId`, `meta`.
- Register both in `src/payload.config.ts` `collections` array.

Example enum field:

```ts
{
  name: 'handoffStatus',
  type: 'select',
  required: true,
  defaultValue: 'none',
  options: ['none', 'requested', 'active', 'closed'],
}
```

**Step 4: Run test to verify it passes**

Run same command as step 2.

Expected: PASS.

**Step 5: Commit**

```bash
git add src/collections/Conversations.ts src/collections/Messages.ts src/payload.config.ts tests/int/chat-collections.int.spec.ts
git commit -m "feat(chat): add payload conversations and messages collections"
```

### Task 3: Extend Users Role for Agent Access

**Files:**
- Modify: `src/collections/Users/index.ts`
- Test: `tests/int/chat-auth.int.spec.ts`

**Step 1: Write the failing test**

```ts
it('supports agent role for users', async () => {
  const user = await payload.create({
    collection: 'users',
    data: { email: 'agent@test.com', password: 'Passw0rd!', role: 'agent', name: 'Agent One' },
  })
  expect(user.role).toBe('agent')
})
```

**Step 2: Run test to verify it fails**

```bash
docker compose -f docker-compose.yml exec app pnpm test:int -- tests/int/chat-auth.int.spec.ts
```

Expected: FAIL because `role` field is missing.

**Step 3: Write minimal implementation**

Add select field in `Users` collection:

```ts
{
  name: 'role',
  type: 'select',
  required: true,
  defaultValue: 'agent',
  options: ['admin', 'agent'],
}
```

Keep existing auth model unchanged.

**Step 4: Run test to verify it passes**

Run same command as step 2.

Expected: PASS.

**Step 5: Commit**

```bash
git add src/collections/Users/index.ts tests/int/chat-auth.int.spec.ts
git commit -m "feat(auth): add user role for chat agents"
```

### Task 4: Create Handoff and Unified Message API Endpoints

**Files:**
- Create: `src/app/api/chat/handoff/route.ts`
- Create: `src/app/api/chat/messages/route.ts`
- Create: `src/app/api/chat/agent/reply/route.ts`
- Create: `src/app/api/chat/conversations/[id]/messages/route.ts`
- Test: `tests/int/chat-api.int.spec.ts`

**Step 1: Write the failing test**

```ts
it('sets handoffStatus to requested when user requests human support', async () => {
  const response = await fetch('http://localhost:3000/api/chat/handoff', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ conversationId: 'seed-conversation-id' }),
  })
  expect([200, 201]).toContain(response.status)
})
```

**Step 2: Run test to verify it fails**

```bash
docker compose -f docker-compose.yml exec app pnpm test:int -- tests/int/chat-api.int.spec.ts
```

Expected: FAIL with route not found or invalid behavior.

**Step 3: Write minimal implementation**

- `POST /api/chat/handoff`: validate conversation, transition to `requested`, append system message.
- `POST /api/chat/messages`: upsert conversation for visitor, dedupe by `clientMessageId`, route to AI fallback when no active agent.
- `POST /api/chat/agent/reply`: auth check role in `agent|admin`, write agent message, transition to `active`.
- `GET /api/chat/conversations/:id/messages`: return chronologically sorted messages.

Minimal guard helper:

```ts
function assertAgentRole(user?: { role?: string }) {
  if (!user || (user.role !== 'agent' && user.role !== 'admin')) {
    throw new Error('FORBIDDEN')
  }
}
```

**Step 4: Run test to verify it passes**

Run same command as step 2.

Expected: PASS.

**Step 5: Commit**

```bash
git add src/app/api/chat tests/int/chat-api.int.spec.ts
git commit -m "feat(chat): add handoff and agent reply api"
```

### Task 5: Add Idempotency and Audit Fields

**Files:**
- Modify: `src/collections/Messages.ts`
- Modify: `src/app/api/chat/messages/route.ts`
- Modify: `src/app/api/chat/agent/reply/route.ts`
- Test: `tests/int/chat-idempotency.int.spec.ts`

**Step 1: Write the failing test**

```ts
it('does not duplicate message when same clientMessageId is retried', async () => {
  const body = { conversationId: 'c1', content: 'hello', clientMessageId: 'same-id' }
  await request('/api/chat/messages').post(body)
  await request('/api/chat/messages').post(body)
  const list = await getMessages('c1')
  expect(list.filter(m => m.clientMessageId === 'same-id')).toHaveLength(1)
})
```

**Step 2: Run test to verify it fails**

```bash
docker compose -f docker-compose.yml exec app pnpm test:int -- tests/int/chat-idempotency.int.spec.ts
```

Expected: FAIL with duplicated records.

**Step 3: Write minimal implementation**

- Add unique check on `clientMessageId` (global or per conversation).
- In API, query existing message by `clientMessageId` before create.
- Add `meta.audit` payload for actor/source timestamp.

**Step 4: Run test to verify it passes**

Run same command as step 2.

Expected: PASS.

**Step 5: Commit**

```bash
git add src/collections/Messages.ts src/app/api/chat/messages/route.ts src/app/api/chat/agent/reply/route.ts tests/int/chat-idempotency.int.spec.ts
git commit -m "feat(chat): enforce idempotent message writes"
```

### Task 6: Integrate Handoff UI into Existing Widget

**Files:**
- Modify: `src/components/AIConsultant.tsx`
- Modify: `src/utilities/aiService.ts`
- Create: `src/utilities/chatService.ts`
- Test: `tests/unit/ai-consultant-handoff.spec.tsx`

**Step 1: Write the failing test**

```tsx
it('shows transfer-to-human hint after clicking handoff button', async () => {
  render(<AIConsultant config={mockConfig} />)
  await user.click(screen.getByRole('button', { name: '转人工' }))
  expect(await screen.findByText(/已为你转人工/)).toBeInTheDocument()
})
```

**Step 2: Run test to verify it fails**

```bash
docker compose -f docker-compose.yml exec app pnpm test:int -- tests/unit/ai-consultant-handoff.spec.tsx
```

Expected: FAIL because button/behavior does not exist.

**Step 3: Write minimal implementation**

- Add button `转人工` in widget footer.
- Add local `handoffStatus` state and system message rendering.
- Add `chatService.requestHumanHandoff(conversationId)` call.
- Keep existing AI response flow unchanged for fallback.

**Step 4: Run test to verify it passes**

Run same command as step 2.

Expected: PASS.

**Step 5: Commit**

```bash
git add src/components/AIConsultant.tsx src/utilities/aiService.ts src/utilities/chatService.ts tests/unit/ai-consultant-handoff.spec.tsx
git commit -m "feat(ui): add in-widget human handoff entry"
```

### Task 7: Add Admin Workflow for Requested/Active Conversations

**Files:**
- Modify: `src/collections/Conversations.ts`
- Modify: `src/collections/Messages.ts`
- Optional Create: `src/components/AdminChatReply/*` (if needed for custom admin UI)
- Test: `tests/int/chat-admin-workflow.int.spec.ts`

**Step 1: Write the failing test**

```ts
it('agent reply turns conversation into active', async () => {
  const c = await createConversation({ handoffStatus: 'requested' })
  await agentReply(c.id, '您好，我是人工客服')
  const updated = await findConversation(c.id)
  expect(updated.handoffStatus).toBe('active')
})
```

**Step 2: Run test to verify it fails**

```bash
docker compose -f docker-compose.yml exec app pnpm test:int -- tests/int/chat-admin-workflow.int.spec.ts
```

Expected: FAIL because status is not updated by agent action.

**Step 3: Write minimal implementation**

- Add admin default columns and filters for `requested`, `active`.
- Ensure first agent reply triggers status transition to `active`.
- Ensure `assignedAgent` is filled on first reply.

**Step 4: Run test to verify it passes**

Run same command as step 2.

Expected: PASS.

**Step 5: Commit**

```bash
git add src/collections/Conversations.ts src/collections/Messages.ts tests/int/chat-admin-workflow.int.spec.ts
git commit -m "feat(admin): support agent takeover workflow"
```

### Task 8: End-to-End Verification and Release Guardrails

**Files:**
- Create: `tests/e2e/chat-handoff.e2e.spec.ts`
- Modify: `docs/project-management/user-manual.md`
- Modify: `.env.example`

**Step 1: Write the failing E2E test**

```ts
test('visitor requests human support and receives agent message in same widget', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: /咨询|顾问|chat/i }).click()
  await page.getByRole('button', { name: '转人工' }).click()
  await expect(page.getByText(/已为你转人工/)).toBeVisible()
})
```

**Step 2: Run test to verify it fails**

```bash
docker compose -f docker-compose.yml exec app pnpm test:e2e -- tests/e2e/chat-handoff.e2e.spec.ts
```

Expected: FAIL before implementation fully lands.

**Step 3: Complete release guardrails**

- Add env flags in `.env.example`:
- `ENABLE_HUMAN_HANDOFF=true`
- `HUMAN_HANDOFF_POLLING_MS=3000`
- Update user manual with agent operating steps.

**Step 4: Run full verification**

```bash
docker compose -f docker-compose.yml exec app pnpm lint
docker compose -f docker-compose.yml exec app pnpm test:int
docker compose -f docker-compose.yml exec app pnpm test:e2e
docker compose -f docker-compose.yml exec app pnpm architecture:check
```

Expected: all pass.

**Step 5: Commit**

```bash
git add tests/e2e/chat-handoff.e2e.spec.ts docs/project-management/user-manual.md .env.example
git commit -m "test(chat): add handoff e2e and release docs"
```

## Definition of Done

- User can click `转人工` in the existing AI widget.
- Conversation remains in one thread; no page jump.
- When no agent is online, AI continues fallback with clear system hint.
- Agent can reply in Payload Admin and user receives reply in the same widget.
- Message writes are idempotent by `clientMessageId`.
- Role and API access controls block unauthorized agent operations.
- All required checks pass: lint, int, e2e, architecture.

## Rollback Plan

- Turn off `ENABLE_HUMAN_HANDOFF` to disable UI entry and route to AI-only behavior.
- Keep all new data models intact for postmortem analysis.
- Re-enable after fix without data migration rollback.

## Notes

- Keep scope YAGNI: no queue management, no SLA dashboard, no external provider sync in phase 1.
- Preserve current `src/app/api/ai/chat/route.ts` logic as fallback path.
- If phase 2 starts, introduce provider adapter for WeCom/third-party without changing widget contract.
