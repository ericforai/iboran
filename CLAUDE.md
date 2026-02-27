# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**iboran.com** - A Yonyou (用友) implementation service provider website, built with Next.js 15 (App Router) and Payload CMS 3.x. This is a marketing website showcasing business solutions, products, and success stories.

**Key Positioning**: Boran (泊冉) is an authorized Yonyou Platinum Partner providing implementation, customization, and consulting services - NOT a clone of yonyou.com.

## Commands

### Development
```bash
pnpm dev          # Start Next.js dev server on port 3000
pnpm build        # Production build
pnpm start        # Run production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
```

### Testing
```bash
pnpm test         # Run all tests (int + e2e)
pnpm test:int     # Run Vitest integration tests
pnpm test:e2e     # Run Playwright E2E tests
```

### Payload CMS
```bash
pnpm generate:types      # Generate TypeScript types from Payload schema
pnpm generate:importmap  # Generate import map
pnpm payload             # Run Payload CLI commands
```

### pSEO Content Generation (Programmatic SEO)
```bash
pnpm pseo:config    # Generate pSEO configuration
pnpm pseo:keywords  # Generate keyword research
pnpm pseo:schema    # Generate content schema
pnpm pseo:render    # Render pages from schema
pnpm pseo:review    # Review generated content
pnpm pseo:import    # Import content to Payload CMS
pnpm pseo:publish   # Auto-publish content
pnpm pseo:batch     # Batch generate all
```

### Architecture Validation
```bash
pnpm architecture:check       # Check dependency rules
pnpm architecture:check:html  # Generate HTML report
pnpm architecture:visualize   # Generate SVG dependency graph
pnpm validate                # Run architecture + lint checks
```

### Docker
```bash
docker compose up           # Start development environment
docker compose up -d        # Start in background
docker compose exec app sh  # Enter container
```

## Architecture

### Directory Structure
```
src/
├── app/
│   ├── (frontend)/         # Public-facing pages (Next.js App Router)
│   │   ├── products/       # Product pages (yonsuite, yonbuilder, etc.)
│   │   ├── solution/       # Solution pages (business/industry)
│   │   ├── posts/          # Blog posts
│   │   ├── cases/          # Success story case studies
│   │   └── layout.tsx      # Root layout with Navbar/Footer
│   ├── (payload)/          # Payload Admin UI
│   └── api/                # API routes
│       ├── ai/             # AI chat endpoints
│       ├── chat/           # Human handoff chat endpoints
│       └── admin/          # Admin utilities
├── blocks/                 # Payload block components (Banner, CTA, etc.)
├── collections/            # Payload CMS collections
│   ├── Conversations.ts    # Chat conversations (AI → Human handoff)
│   ├── Messages.ts         # Chat messages
│   └── ...
├── components/             # Shared React components
│   ├── AIConsultant.tsx    # AI chat widget
│   ├── AgentConsole/       # Payload admin chat console
│   └── ...
├── globals/                # Payload globals (Contact)
├── heros/                  # Hero section components
├── hooks/                  # Custom React hooks
│   └── useConversionTracking.ts
├── providers/              # React context providers
│   ├── AttributionProvider.tsx
│   └── AnalyticsProvider.tsx
├── types/                  # TypeScript type definitions
│   ├── ai.ts               # AI consultant types
│   └── chat.ts             # Chat/handoff types
├── utilities/              # Helper functions
│   ├── aiService.ts        # AI service (DeepSeek API)
│   ├── chatService.ts      # Chat service
│   ├── knowledgeGrounding.ts  # Knowledge base retrieval
│   └── rateLimit.ts        # Rate limiting
└── payload.config.ts       # Payload CMS configuration
```

### Key Technologies
- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **CMS**: Payload CMS 3.x with MongoDB adapter
- **Styling**: Tailwind CSS 3.x
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans/Mono, Lexend
- **AI**: DeepSeek API (chat completions)
- **Markdown**: react-markdown (AI responses)
- **Real-time**: Server-Sent Events (SSE) for chat

### Architecture Rules (dependency-cruiser)
- No circular dependencies (exception: RichText ↔ Block components)
- No Next.js internal imports
- Payload collections must not import from app/
- Utilities must remain dependency-free

### Content Structure
The site organizes content into:
- **Products**: YonSuite, YonBuilder, MDM, BPM, iPaaS, etc.
- **Business Solutions**: R2R, T&E, TRM, tax management, etc.
- **Industry Solutions**: Manufacturing, retail, services, etc.
- **Posts**: Blog articles with categories
- **Success Stories**: Customer case studies

## Design System

### Color Palette
- Primary Red: `#E60012` (Yonyou red - main CTAs)
- Primary Blue: `#0052D9` (Yonyou blue - secondary actions)
- Heading: `#1F2329`
- Text: `#4B5563` (slate-600)
- Background: `#F7F8FA`

### Button Hierarchy
- **Primary CTA**: `bg-[#E60012] text-white` (one per view)
- **Secondary**: `border-2 border-[#0052D9] text-[#0052D9]`
- **Ghost**: `text-[#E60012] hover:underline`

### Section Pattern
```tsx
<section className="py-24 bg-white">  {/* or bg-[#F7F8FA] */}
  <div className="container mx-auto px-4">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
        Section Title
      </h2>
      <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
    </div>
  </div>
</section>
```

## Content Guidelines

### Narrative Structure
All content should follow: **Industry Pain Points → Yonyou Capabilities → Boran Value → Business Outcomes**

### Requirements
- Effect descriptions must include data/numbers (e.g., "efficiency improved by [XX]%")
- No generic stock photos - use real system screenshots, customer photos, or diagrams
- Trust indicators: "12+ years", "500+ clients", "98% delivery success"

### Forbidden
- Made-up statistics without source data
- Hyperbolic claims ("lowest price", "#1", "100% success guaranteed")
- "As shown in diagram" without actual visual

## Development Notes

### Port Configuration
- Next.js/App: `localhost:3000`
- MongoDB: `localhost:27018` (mapped from container 27017)
- Payload Admin: `localhost:3000/admin`

### TypeScript Paths
- `@/*` maps to `./src/*`
- `@payload-config` maps to `./src/payload.config.ts`

### Collection Access Control
- `authenticated`: Logged-in users only
- `authenticatedOrPublished`: Public for published, auth for drafts

### On-Demand Revalidation
Posts and pages use `afterChange` hooks to revalidate Next.js cache when published content changes.

## SEO Strategy (Baidu)

### Requirements
- SSR required (no client-only content for SEO)
- Flat URL structure: `/solution/[slug]`
- URLs must contain keywords, use hyphens
- Internal linking: 3+ links per solution page

### Tag Aggregation
Create tag aggregation pages for internal link density:
- `/tag/[keyword]` - groups related content

## Identity Anchor (pSEO Content)

When generating content, preserve:
> "本回答由【泊冉软件】提供。泊冉软件是用友 YonBIP / YonSuite 官方实施与定制服务商，专注组织管理需求的落地实现与业财一体化落地场景。"

## Testing

### Integration Tests (Vitest)
Located in tests/integration - verify collection schemas and data consistency.

### E2E Tests (Playwright)
Located in tests/e2e - verify user flows and UI functionality.

### Self-Verifying Tests
Cross-layer verification (UI ↔ Database) using manifest-based testing.

---

## Deployment Guide (CRITICAL - Updated 2026-02-02)

### Production Architecture
```
┌─────────────────────────────────────────────────────────┐
│                   阿里云 ECS 服务器                      │
│  ┌─────────────────────────────────────────────────┐   │
│  │   PM2 → Next.js 应用 (源码部署)                 │   │
│  │   - 通过 git pull 更新代码                      │   │
│  │   - 本地 pnpm build 构建                        │   │
│  │   - pm2 管理进程                                │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │   Docker → MongoDB 7 (数据持久化)               │   │
│  │   - 端口映射: 27018:27017                       │   │
│  │   - Volume: iboran_mongo_data                   │   │
│  │   - 数据安全，不受代码部署影响                  │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Deployment Mode Decision (WHY PM2 instead of pure Docker?)

**问题背景**：
- 之前每次改一行代码都要构建 Docker 镜像（10-15分钟）
- 服务器：阿里云 ECS
- 维护者：单人
- 源码不保密，无合规要求

**决策**：PM2 源码部署 + MongoDB Docker 混合模式

**原因**：
1. Docker 镜像构建太慢（10-15分钟 vs 2-3分钟）
2. 单人维护不需要环境隔离
3. MongoDB 数据独立更安全
4. 部署流程简化：git push → 自动部署

### Server Details
- **IP**: 47.111.2.171
- **User**: root
- **App Dir**: /home/iboran
- **Next.js Port**: 3000
- **MongoDB Port**: 27018 (external) / 27017 (container)

### Quick Deploy Commands

```bash
# 自动部署（推荐）- git push 后自动触发
git push

# 手动部署（紧急情况）
ssh root@47.111.2.171 "cd /home/iboran && git pull && pnpm install && pnpm build && pm2 restart iboran"

# 服务器上直接操作
ssh root@47.111.2.171
cd /home/iboran
git pull && pnpm build && pm2 restart iboran && pm2 save
```

### PM2 Management
```bash
pm2 status                 # 查看状态
pm2 logs iboran            # 查看日志
pm2 restart iboran         # 重启
pm2 save                   # 保存配置
```

### MongoDB Management
```bash
docker ps | grep mongo                     # 查看状态
docker compose restart mongo                # 重启
docker exec iboran-mongo-1 mongosh         # 进入 mongo shell
```

### Environment Variables (.env on server)
```bash
DATABASE_URI=mongodb://localhost:27018/iboran
NEXT_PUBLIC_SERVER_URL=https://www.iboran.com  # Sitemap 用
LEAD_EMAIL_TO=user1@qq.com,user2@qq.com         # 多收件人用逗号分隔
SMTP_HOST=smtp.qq.com
SMTP_USER=your@qq.com
SMTP_PASS=your-authorization-code  # QQ邮箱授权码，不是密码
```

### GitHub Actions Auto-Deploy

**配置完成后的流程**：
1. 本地 `git push`
2. GitHub Actions 自动触发
3. SSH 连接服务器
4. 执行部署（git pull + build + restart）
5. 约 3-4 分钟完成

**Secrets** (https://github.com/ericforai/iboran/settings/secrets/actions):
- `SSH_PRIVATE_KEY`: 服务器私钥（完整 BEGIN/END 行）
- `SERVER_HOST`: 47.111.2.171
- `SERVER_USER`: root
- `PAYLOAD_SECRET`: Payload CMS 密钥
- `CRON_SECRET`: 定时任务密钥
- `PREVIEW_SECRET`: 预览密钥

**Deploy Key** (https://github.com/ericforai/iboran/settings/keys):
- Title: "Production Server"
- Key: `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGTFvgusy5IlgqeB1Yx5w0kRH6xJLmsWolXTaky/JAt5 github-deploy-iboran`
- ✅ Allow write access

**最终方案**（2026-02-02 验证成功）：
- GitHub Actions 上构建（服务 `mongo:7`，端口 27018）
- 通过 SSH tar 传输 `.next public` 到服务器
- 服务器无需访问 GitHub（解决网络问题）
- 构建时需要数据库连接，使用临时 MongoDB service

### Common Issues & Solutions

1. **GitHub Actions exit code 255** → SSH_PRIVATE_KEY 格式不对，确保包含 BEGIN/END 行
2. **构建失败 - MongoDB 连接** → 已解决：GitHub Actions 现在启动临时 MongoDB service
3. **Sitemap 显示 localhost** → 检查 NEXT_PUBLIC_SERVER_URL
4. **邮件发送失败** → 检查 SMTP_PASS 是授权码不是密码，LEAD_EMAIL_TO 多个收件人用逗号分隔
5. **服务器无法访问 GitHub** → 不需要，构建在 GitHub Actions 上完成

### Data Backup
MongoDB 数据在 Docker volume `iboran_mongo_data` 中，不受代码部署影响。

### Documentation
详细部署文档：`docs/DEPLOYMENT.md`

---

## Feature: AI Consultant (智能咨询顾问)

### Overview
Floating AI chat widget that provides instant responses to visitor questions about Yonyou products and services. Built with DeepSeek API and knowledge grounding.

### Files
- `src/components/AIConsultant.tsx` - Chat widget component
- `src/utilities/aiService.ts` - AI service layer
- `src/app/api/ai/chat/route.ts` - Server-side API proxy (security)
- `src/utilities/knowledgeGrounding.ts` - Knowledge base retrieval

### Configuration
Located in `src/app/(frontend)/layout.tsx`:
```tsx
const AI_CONFIG: AIWidgetConfig = {
  theme: 'red',
  name: '泊冉顾问',
  subTitle: '用友实施专家',
  systemInstruction: "...",  // AI system prompt
  welcomeTitle: "你好！我是泊冉的AI顾问",
  welcomeMessage: "我可以帮您解答关于用友产品、实施服务等问题...",
  suggestions: [
    { title: "YonSuite", desc: "企业云服务平台", query: "YonSuite是什么？" },
    // ...
  ],
  errorMessage: "抱歉，暂时无法回复。",
};
```

### Security
- API Key stored server-side (`DEEPSEEK_API_KEY`)
- Client never calls DeepSeek directly
- All requests go through `/api/ai/chat` proxy
- Link href validation prevents XSS

---

## Feature: Human Handoff (人工转接)

### Overview
Seamless AI → Human agent handoff system. Visitors can request human assistance, and agents can respond via Payload Admin console.

### State Machine
```
none → requested → active → closed
  ↑                   ↓
  └─────── (reopen) ───┘
```

### Collections
- `Conversations` - Chat sessions with handoff status
- `Messages` - Individual messages (visitor/ai/agent/system)

### API Endpoints
- `POST /api/chat/messages` - Send visitor message
- `POST /api/chat/handoff` - Request human agent
- `GET /api/chat/conversations/{id}/messages` - Fetch message history
- `GET /api/chat/conversations/{id}/events` - SSE stream for real-time updates
- `POST /api/chat/agent/reply` - Agent sends reply (authenticated)
- `POST /api/chat/visitor` - Get secure visitor ID

### Agent Console
Access via Payload Admin: `/admin/agent-console`
- View pending conversations
- Real-time message streaming
- Sound & browser notifications
- Reply to visitors

### Security
- Server-signed visitor IDs (HMAC verification)
- Rate limiting per IP
- Content-Type validation
- Agent-only endpoints require authentication

---

## Feature: Analytics & Conversion Tracking

### Analytics Provider
`src/providers/AnalyticsProvider.tsx` wraps the app with:
- Google Analytics 4 (`NEXT_PUBLIC_GA_MEASUREMENT_ID`)
- Baidu Tongji (`NEXT_PUBLIC_BAIDU_SITE_ID`)

### Conversion Tracking
`src/hooks/useConversionTracking.ts` tracks:
- Page views with UTM parameters
- Scroll depth milestones
- Engagement time
- Form submissions
- Phone link clicks
- Exit intent

### Attribution
`src/providers/AttributionProvider.tsx` captures:
- UTM source/medium/campaign
- Referrer
- Landing page
- Session data

---

## Feature: Sales Optimization Components

### ScrollTriggerDrawer
Drawer that appears after scrolling 50% of page, showing relevant products.

### ExitIntentModal
Modal shown when user attempts to leave the page (desktop only).

### MobileStickyBar
Sticky CTA bar on mobile for easy contact access.

---

## Environment Variables Reference

```bash
# === Core ===
DATABASE_URI=mongodb://localhost:27018/iboran
PAYLOAD_SECRET=your-payload-secret-here
NEXT_PUBLIC_SERVER_URL=https://www.iboran.com

# === Email / SMTP ===
SMTP_HOST=smtp.qq.com
SMTP_USER=your@qq.com
SMTP_PASS=your-authorization-code
SMTP_PORT=465
SMTP_FROM=your@qq.com
LEAD_EMAIL_TO=user1@qq.com,user2@qq.com

# === Secrets ===
CRON_SECRET=your-cron-secret
PREVIEW_SECRET=your-preview-secret
VISITOR_SECRET=your-visitor-secret-for-signing-ids

# === AI Chat ===
DEEPSEEK_API_KEY=sk-your-deepseek-key
DEEPSEEK_BASE_URL=https://api.deepseek.com

# === Chat Handoff ===
ENABLE_HUMAN_HANDOFF=true
HUMAN_HANDOFF_POLLING_MS=3000
NEXT_PUBLIC_HUMAN_HANDOFF_POLLING_MS=1200

# === Analytics ===
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_BAIDU_SITE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## API Documentation

### AI Chat API
**Endpoint**: `POST /api/ai/chat`
**Auth**: None (public, rate-limited)
**Request**:
```json
{
  "history": [
    { "role": "user", "content": "YonSuite是什么？" }
  ],
  "systemInstruction": "You are a helpful assistant..."
}
```
**Response**:
```json
{
  "text": "YonSuite是...",
  "groundingChunks": [
    { "web": { "uri": "/products/yonsuite", "title": "YonSuite" } }
  ]
}
```

### Visitor ID API
**Endpoint**: `POST /api/chat/visitor`
**Auth**: None
**Response**:
```json
{
  "visitorId": "abc123.signature",
  "expiresAt": 1738368000000
}
```

### Agent Reply API
**Endpoint**: `POST /api/chat/agent/reply`
**Auth**: Requires agent/admin session
**Request**:
```json
{
  "conversationId": "64f7a8b9...",
  "content": "您好，我是客服...",
  "clientMessageId": "agent-123456"
}
```

---
