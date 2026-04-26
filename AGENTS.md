# Repository Guidelines

## Project Structure & Module Organization
- `src/app`: Next.js App Router pages and API routes (route groups like `(frontend)` and dynamic segments like `[slug]`).
- `src/collections`, `src/globals`, `src/blocks`, `src/heros`: Payload CMS schema, globals, and layout blocks.
- `src/components`: shared React UI; `src/assets` and `public/` for images and static files.
- `tests/`: unit, integration, and E2E suites; `scripts/` and `docs/` contain automation and architecture references.

## Build, Test, and Development Commands
- `docker compose -f docker-compose.yml up --build`: start the Docker dev stack at `http://localhost:3000`.
- `docker compose -f docker-compose.yml exec app pnpm <script>`: run scripts inside the container.
- Common scripts: `pnpm lint`, `pnpm lint:fix`, `pnpm test:int`, `pnpm test:e2e`, `pnpm test`, `pnpm generate:types`, `pnpm generate:importmap`.
- GitHub push to `main`: primary production deploy path. The `Deploy to Aliyun ECS (Docker)` workflow syncs source to `/opt/iboran`, builds the Linux Docker image on the server with `docker build --network host`, then restarts `iboran-app`.
- `./deploy-prod.sh`: emergency/manual fallback for the same server-side Docker deploy flow.
- `docker compose -f docker-compose.prod.yml up -d --build`: local production-like smoke test only; do not use it as the Aliyun deploy path.
- `pnpm architecture:check` or `pnpm validate`: dependency rules + lint (run via `docker compose exec`).

## Production Deployment Rules
- GitHub is the source of truth for history, rollback, and normal production deploys. Commit and push to `main` to deploy.
- Production image builds must happen on Aliyun/Linux. Never deploy local macOS `.next/standalone`, `.next/static`, or local native dependency output.
- Do not reintroduce `Dockerfile.simple`, `docker run --link`, or hard-coded SMTP secrets in deployment scripts.
- Build on the server with `docker build --network host -t iboran-app:latest .` because Next/Payload connects to MongoDB at `localhost:27018` during build.
- Restart through compose: `docker compose -f docker-compose.prod.yml up -d --no-build app`.

## Coding Style & Naming Conventions
- TypeScript + ES modules + Tailwind CSS; prefer `@/*` path aliases from `src`.
- Prettier defaults: 2-space indent, single quotes, no semicolons, trailing commas, `printWidth: 100`.
- Components and blocks use PascalCase file/folder names (e.g. `src/components/Navbar`); route segments stay lowercase or kebab-case.

## Testing Guidelines
- Vitest for unit/integration tests in `tests/unit` and `tests/int`, naming `*.spec.ts`.
- Playwright for E2E tests in `tests/e2e`, also `*.spec.ts`.
- Add or update tests for new routes, collections, or UI behavior; update snapshots/fixtures when behavior changes.

## Commit & Pull Request Guidelines
- Recent history uses Conventional Commit prefixes (`feat:`, `fix:`, `chore:`, `test:`); follow this pattern for new work.
- Occasional descriptive commits exist; prefer consistent, scoped messages (e.g. `feat(cases): refresh listing UI`).
- PRs should include: clear summary, test results (`pnpm test:int`, `pnpm test:e2e` as applicable), linked issue, and screenshots for UI changes.

## Configuration & Architecture Notes
- Copy `.env.example` to `.env`; Payload admin lives at `/admin`.
- If you touch module boundaries, review `ARCHITECTURE_GUIDE.md` and re-run `pnpm architecture:check`.

## Generative Engine Optimization (GEO) Guidelines
- **AI-First Content Visibility**: Ensure all content is accessible to LLMs and crawlers, even if hidden visually for animation or interaction purposes.
- **Dynamic Content Pattern**: For components with Tabs, Accordions, or unmounted conditional content, a `sr-only` (screen-reader only) block containing the full-text content MUST be provided.
- **Animated Values**: Components like `AnimatedNumber` MUST provide the final target value in a `sr-only` span or `data-value` attribute to avoid AI capturing initial/zero values.
- **Structured Data**: Use the `GEOJsonLd` component to provide explicit schema metadata (FAQ, Article) for every public-facing page.
