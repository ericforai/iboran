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
- `docker compose -f docker-compose.prod.yml up -d --build`: build and run a production-like container.
- `pnpm architecture:check` or `pnpm validate`: dependency rules + lint (run via `docker compose exec`).

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
