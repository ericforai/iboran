# E2E Tests for Pages Collection

This directory contains end-to-end tests for the Pages collection using Playwright.

## Test File: `pages.e2e.spec.ts`

### Overview

The E2E tests for the Pages collection verify the complete lifecycle of a page:

1. **Creating a page** - Tests the ability to create a new page through the Payload admin interface
2. **Publishing a page** - Verifies the draft-to-publish workflow
3. **Frontend accessibility** - Confirms the published page is accessible on the frontend
4. **SEO metadata** - Validates that SEO fields are properly rendered
5. **Search functionality** - Tests if the page appears in search results (if search plugin is enabled)
6. **Cleanup** - Automatically deletes the test page after tests complete

### Prerequisites

Before running the tests, ensure you have:

1. A running Payload CMS instance:
   ```bash
   pnpm dev
   ```

2. Required environment variables in `.env`:
   ```env
   PAYLOAD_SECRET=your_secret_here
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   DATABASE_URI=mongodb://127.0.0.1:your-database-name
   ```

3. For admin authentication tests, optionally add:
   ```env
   PAYLOAD_TEST_EMAIL=admin@example.com
   PAYLOAD_TEST_PASSWORD=your_password
   ```

### Running the Tests

Run all E2E tests:
```bash
pnpm test:e2e
```

Run only the Pages collection tests:
```bash
pnpm exec playwright test pages.e2e.spec.ts
```

Run with UI mode (recommended for debugging):
```bash
pnpm exec playwright test --ui
```

Run in headed mode (see the browser):
```bash
pnpm exec playwright test --headed
```

### Test Data

The tests use unique data for each run to avoid conflicts:
- **Title**: `E2E Test Page {timestamp}`
- **Slug**: `e2e-test-page-{timestamp}`
- **Content**: `This is a test page created by E2E tests.`

### Test Cleanup

The test suite automatically cleans up after itself by:
- Deleting the created test page in the `afterAll` hook
- Using unique timestamps to prevent interference with existing data

### Debugging Failed Tests

1. **Run with Playwright Inspector**:
   ```bash
   pnpm exec playwright test --debug
   ```

2. **View test report**:
   ```bash
   pnpm exec playwright show-report
   ```

3. **Take screenshots on failure**:
   Screenshots are automatically saved in `test-results/`

4. **Trace viewer**:
   ```bash
   pnpm exec playwright show-trace test-results/[test-name]/trace.zip
   ```

### Architecture Notes

The Pages collection E2E tests verify:
- **Collection fields**: title, slug, layout blocks, SEO meta fields
- **Access control**: authenticated create/update/delete, authenticatedOrPublished read
- **Hooks**: populatePublishedAt, revalidatePage, revalidateDelete
- **Features**: live preview, draft versions, scheduled publishing
- **Blocks**: Content, CallToAction, MediaBlock, Archive, FormBlock

### CI/CD Integration

The tests are configured to:
- Run in parallel locally
- Run sequentially on CI (single worker)
- Retry failed tests twice on CI
- Generate HTML test reports

### Extending the Tests

To add more test cases:

1. Add new test functions within the `test.describe('Pages Collection', () => {...})` block
2. Use the helper functions:
   - `loginToAdmin(page)` - Authenticate with Payload admin
   - Existing page data: `testPageData`
3. Follow Playwright best practices:
   - Use `await page.waitForLoadState('networkidle')` for API calls
   - Use locators instead of selectors: `page.locator('button:has-text("Save")')`
   - Add proper timeouts: `await expect(element).toBeVisible({ timeout: 10000 })`

### Troubleshooting

**Issue**: Tests fail with "Auth required"
- **Solution**: Ensure `PAYLOAD_SECRET` is set in `.env` and a user exists in the database

**Issue**: Page not found on frontend
- **Solution**: Verify the page is actually published (check in admin panel)

**Issue**: Tests timeout
- **Solution**: Increase timeouts in `playwright.config.ts` or ensure the dev server is running

**Issue**: "Create" button not found
- **Solution**: The UI may have changed; update the locators to match your admin panel

### Self-Verifying Tests

This directory also contains **self-verifying E2E tests** that go beyond traditional UI testing to validate cross-layer consistency.

#### Test File: `pages.self-verifying.spec.ts`

**Overview**

Self-verifying tests implement four verification layers from the [self-verifying-tests skill](~/.claude/skills/self-verifying-tests/SKILL.md):

1. **Manifest-Driven Generation** - Tests are derived from `manifest.config.ts`
2. **Shadow Inspector** - Cross-layer validation (UI ↔ Database)
3. **State Symmetry (FSM)** - Model-based testing of state transitions
4. **Doc-Code Integrity** - Manifest ↔ Implementation alignment

**Key Differences from Traditional E2E Tests**

| Traditional E2E | Self-Verifying E2E |
|----------------|-------------------|
| Checks "user clicks → UI shows success" | Checks "system narrative remains consistent" |
| Verifies UI behavior only | Verifies UI + Database + Audit logs |
| Hard-coded test cases | Generated from manifest |
| Happy path testing | FSM-based state transition testing |
| Ignores documentation | Validates doc-code alignment |

**Test Structure**

```typescript
test.describe('@manifest:collections:pages', () => {
  // Layer 1: Manifest-Driven Tests
  test.describe('manifest: public API verification', () => {...})
  test.describe('manifest: purpose validation', () => {...})
  test.describe('manifest: dependencies verification', () => {...})

  // Layer 2: Shadow Inspector Tests
  test.describe('shadow: UI-DB consistency', () => {...})

  // Layer 3: State Machine Tests
  test.describe('fsm: state transitions', () => {...})

  // Layer 4: Doc-Code Integrity Tests
  test.describe('doc-integrity: manifest alignment', () => {...})
})
```

**Running Self-Verifying Tests**

Run all self-verifying tests:
```bash
pnpm exec playwright test pages.self-verifying.spec.ts
```

Run specific verification layer:
```bash
# Manifest-driven tests only
pnpm exec playwright test pages.self-verifying.spec.ts -g "manifest:"

# Shadow inspector tests only
pnpm exec playwright test pages.self-verifying.spec.ts -g "shadow:"

# FSM tests only
pnpm exec playwright test pages.self-verifying.spec.ts -g "fsm:"

# Doc integrity tests only
pnpm exec playwright test pages.self-verifying.spec.ts -g "doc-integrity:"
```

**Shadow Inspector Pattern**

The `PagesShadowInspector` class verifies cross-layer consistency:

```typescript
const inspector = new PagesShadowInspector()

// Verify invariant: UI === Database
const check = await inspector.verifyInvariant(page, slug, 'published')

expect(check.consistent).toBe(true)
expect(check.violations).toEqual([])
```

**Invariants Checked**

1. **Published pages invariant**: If `_status='published'` in DB → UI must return 200 with content
2. **Draft pages invariant**: If `_status='draft'` in DB → UI must return 401/404 (not publicly accessible)
3. **Create operation invariant**: After UI create → DB must contain the record
4. **Update operation invariant**: After UI update → DB must reflect changes

**FSM State Testing**

The Pages collection has two states: `DRAFT` and `PUBLISHED`

Valid transitions:
- `DRAFT -> DRAFT` (save draft)
- `DRAFT -> PUBLISHED` (publish)
- `PUBLISHED -> DRAFT` (create new version)
- `PUBLISHED -> PUBLISHED` (update published)

The "gremlin" test performs 50 random state transitions to verify the FSM is never violated:

```typescript
test('gremlin: random state transitions respect FSM', async ({ page }) => {
  for (let i = 0; i < 50; i++) {
    const currentState = await getCurrentState(page)
    const validTransitions = getValidTransitions(currentState)
    const action = randomChoice(validTransitions)

    await page.click(`[data-action="${action.trigger}"]`)
    const newState = await getCurrentState(page)

    expect(validStates).toContain(newState) // Always valid
  }
})
```

**Manifest-Driven Test Generation**

Tests are automatically structured based on `manifest.config.ts`:

- **publicAPI tests** → Verify collections, hooks, services are accessible
- **purpose tests** → Validate each purpose statement is achievable
- **dependencies tests** → Ensure all declared blocks/components load without error
- **rules tests** → Verify architecture rules are enforced

**Doc-Code Integrity Checks**

These tests verify that the manifest matches the actual implementation:

```typescript
test('doc-integrity: manifest declares correct public API', async ({ page }) => {
  // Manifest declares: collections: ['Pages']
  // Verify it's accessible via /api/pages
  const response = await page.request.get('/api/pages')
  expect(response.ok()).toBe(true)
})
```

**Benefits of Self-Verifying Tests**

1. **Catches hidden bugs** - UI may look fine but DB corrupted → detected
2. **Prevents regression** - Manifest changes → tests auto-update
3. **Documents behavior** - FSM tests document valid state transitions
4. **Maintains consistency** - Doc drift detected immediately

**Debugging Shadow Inspector Failures**

When a shadow invariant check fails:

1. Check the violations array:
   ```typescript
   console.log(check.violations)
   // ["UI: Published page returned status 404, expected 200"]
   ```

2. Inspect detailed states:
   ```typescript
   console.log('DB State:', check.details.dbState)
   console.log('UI State:', check.details.uiState)
   ```

3. Verify manually:
   - Check admin panel for DB state
   - Check frontend URL directly
   - Look for caching issues

**Extending Self-Verifying Tests**

To add new tests:

1. **For manifest-driven tests**: Update `manifest.config.ts`, then regenerate tests
2. **For shadow inspector**: Add new invariants to `PagesShadowInspector` class
3. **For FSM tests**: Add states and transitions to `validPageTransitions` array
4. **For doc integrity**: Add checks for new manifest fields

**See Also**

- Self-Verifying Tests Skill: `~/.claude/skills/self-verifying-tests/SKILL.md`
- Manifest Scanner: `~/.claude/skills/self-verifying-tests/generators/manifest-scanner.ts`
- Shadow Inspector: `~/.claude/skills/self-verifying-tests/validators/shadow-inspector.ts`

### Related Files

- Pages Collection: `/Users/user/iboran/src/collections/Pages/index.ts`
- Manifest Config: `/Users/user/iboran/src/collections/Pages/manifest.config.ts`
- Playwright Config: `/Users/user/iboran/playwright.config.ts`
- Frontend Test: `/Users/user/iboran/tests/e2e/frontend.e2e.spec.ts`
- Traditional E2E Test: `/Users/user/iboran/tests/e2e/pages.e2e.spec.ts`
- Self-Verifying E2E Test: `/Users/user/iboran/tests/e2e/pages.self-verifying.spec.ts`
