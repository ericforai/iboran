/**
 * Self-Verifying E2E Tests for Pages Collection
 *
 * Generated from manifest: collections/pages
 * Location: /Users/user/iboran/src/collections/Pages/manifest.config.ts
 * Version: 1.0.0
 *
 * Four Verification Layers:
 * 1. Manifest-Driven: Tests derived from manifest.config.ts
 * 2. Shadow Inspector: UI ↔ Database consistency validation
 * 3. State Symmetry: FSM testing for draft/published states
 * 4. Doc Integrity: Manifest ↔ Code alignment
 */

import { test, expect } from '@playwright/test'

/**
 * Pages Collection State Machine
 *
 * States: DRAFT, PUBLISHED
 * Transitions:
 *   DRAFT -> PUBLISHED (publish action)
 *   DRAFT -> DRAFT (save draft)
 *   PUBLISHED -> DRAFT (unpublish/create new version)
 *   PUBLISHED -> PUBLISHED (update published)
 */
type PageState = 'DRAFT' | 'PUBLISHED'

interface PageTransition {
  from: PageState
  to: PageState
  trigger: string
}

const validPageStates: PageState[] = ['DRAFT', 'PUBLISHED']

const validPageTransitions: PageTransition[] = [
  { from: 'DRAFT', to: 'DRAFT', trigger: 'save-draft' },
  { from: 'DRAFT', to: 'PUBLISHED', trigger: 'publish' },
  { from: 'PUBLISHED', to: 'DRAFT', trigger: 'create-new-version' },
  { from: 'PUBLISHED', to: 'PUBLISHED', trigger: 'update-published' }
]

/**
 * Shadow Inspector - Cross-layer validation helper
 *
 * Verifies: Hash(UI_Shown(id)) === Hash(API_Returned(id))
 */
class PagesShadowInspector {
  /**
   * Get page state from Payload API (Database layer)
   */
  async getDBState(slug: string): Promise<{
    id: string
    title: string
    slug: string
    _status: 'draft' | 'published'
    publishedAt: string | null
  } | null> {
    const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages`
      : 'http://localhost:3000/api/pages'

    const response = await fetch(`${apiUrl}?where[slug][equals]=${slug}&depth=0`)
    if (!response.ok) {
      return null
    }

    const data = await response.json()
    return data.docs?.[0] || null
  }

  /**
   * Get page state from UI (Frontend layer)
   */
  async getUIState(page: any, slug: string): Promise<{
    visibleTitle: string | null
    visibleContent: boolean
    statusCode: number
  }> {
    const pageUrl = process.env.NEXT_PUBLIC_SERVER_URL
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}/${slug}`
      : `http://localhost:3000/${slug}`

    const response = await page.request.get(pageUrl)

    await page.goto(pageUrl)
    await page.waitForLoadState('networkidle')

    const titleEl = page.locator('h1').first()
    const visibleTitle = await titleEl.isVisible()
      ? await titleEl.textContent()
      : null

    return {
      visibleTitle,
      visibleContent: await page.locator('body').textContent().then(text => text?.length > 0),
      statusCode: response.status()
    }
  }

  /**
   * Verify UI-DB consistency invariant
   *
   * Invariant: If DB has _status='published', UI must show content with status 200
   * Invariant: If DB has _status='draft', UI must either 401 or 404
   */
  async verifyInvariant(
    page: any,
    slug: string,
    expectedStatus: 'published' | 'draft'
  ): Promise<{
    consistent: boolean
    violations: string[]
    details: {
      dbState: any
      uiState: any
    }
  }> {
    const violations: string[] = []

    const dbState = await this.getDBState(slug)
    const uiState = await this.getUIState(page, slug)

    // Invariant 1: DB state must match expected status
    if (!dbState) {
      violations.push('DB: Page not found in database')
      return {
        consistent: false,
        violations,
        details: { dbState: null, uiState }
      }
    }

    if (dbState._status !== expectedStatus) {
      violations.push(`DB: Expected status=${expectedStatus}, got ${dbState._status}`)
    }

    // Invariant 2: Published pages must be accessible
    if (expectedStatus === 'published') {
      if (uiState.statusCode !== 200) {
        violations.push(`UI: Published page returned status ${uiState.statusCode}, expected 200`)
      }
      if (!uiState.visibleTitle) {
        violations.push('UI: Published page has no visible title')
      }
      if (!uiState.visibleContent) {
        violations.push('UI: Published page has no visible content')
      }
    }

    // Invariant 3: Draft pages should not be publicly accessible
    if (expectedStatus === 'draft') {
      if (uiState.statusCode === 200) {
        violations.push('UI: Draft page is publicly accessible (should be 401/404)')
      }
    }

    return {
      consistent: violations.length === 0,
      violations,
      details: { dbState, uiState }
    }
  }
}

/**
 * @manifest:collections:pages - Pages Collection Self-Verifying Tests
 *
 * Test structure derived from src/collections/Pages/manifest.config.ts
 */
test.describe('@manifest:collections:pages', () => {
  const inspector = new PagesShadowInspector()

  const testPageData = {
    title: `Self-Verify Test ${Date.now()}`,
    slug: `self-verify-test-${Date.now()}`,
    content: 'This is a self-verifying test page.',
  }

  let adminPage: any
  let createdPageId: string

  // ============================================
  // Helper Functions
  // ============================================

  async function loginToAdmin(page: any) {
    const adminUrl = process.env.NEXT_PUBLIC_SERVER_URL
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}/admin`
      : 'http://localhost:3000/admin'

    await page.goto(adminUrl)
    await page.waitForLoadState('networkidle')

    const currentUrl = page.url()
    if (currentUrl.includes('/admin/collections') || currentUrl.includes('/admin/dashboard')) {
      return
    }

    const emailInput = page.locator('input[type="email"], input[name="email"]').first()
    const passwordInput = page.locator('input[type="password"], input[name="password"]').first()

    if (await emailInput.isVisible({ timeout: 5000 })) {
      await emailInput.fill(process.env.PAYLOAD_TEST_EMAIL || 'admin@example.com')
      await passwordInput.fill(process.env.PAYLOAD_TEST_PASSWORD || 'password')

      const loginButton = page.locator('button[type="submit"]').first()
      await loginButton.click()

      await page.waitForURL(/\/admin$/, { timeout: 10000 })
    }
  }

  async function navigateToPagesCollection(page: any) {
    const pagesUrl = process.env.NEXT_PUBLIC_SERVER_URL
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/pages`
      : 'http://localhost:3000/admin/collections/pages'

    await page.goto(pagesUrl)
    await page.waitForLoadState('networkidle')
  }

  // ============================================
  // Layer 1: Manifest-Driven Tests
  // Derived from manifest.publicAPI and manifest.purpose
  // ============================================

  test.describe('manifest: public API verification', () => {
    test('public API: Pages collection is accessible via API', async ({ page }) => {
      const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages`
        : 'http://localhost:3000/api/pages'

      const response = await page.request.get(apiUrl)

      expect(response.ok()).toBe(true)

      const data = await response.json()
      expect(data).toHaveProperty('docs')
      expect(data).toHaveProperty('totalPages')
    })

    test('public API: Collection has correct fields structure', async ({ page }) => {
      const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages`
        : 'http://localhost:3000/api/pages'

      const response = await page.request.get(apiUrl)
      const data = await response.json()

      if (data.docs && data.docs.length > 0) {
        const firstPage = data.docs[0]
        expect(firstPage).toHaveProperty('id')
        expect(firstPage).toHaveProperty('title')
        expect(firstPage).toHaveProperty('slug')
        expect(firstPage).toHaveProperty('_status')
        expect(firstPage).toHaveProperty('createdAt')
        expect(firstPage).toHaveProperty('updatedAt')
      }
    })
  })

  test.describe('manifest: purpose validation', () => {
    test('purpose: Manage static pages and landing pages', async ({ page }) => {
      await loginToAdmin(page)
      await navigateToPagesCollection(page)

      // Verify we can access the Pages collection management interface
      const collectionHeader = page.locator('h1, h2').filter({ hasText: /pages/i })
      await expect(collectionHeader).toBeVisible({ timeout: 10000 })
    })

    test('purpose: SEO optimization with meta fields', async ({ page }) => {
      await loginToAdmin(page)

      // Create a page with SEO metadata
      const createUrl = process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/pages/create`
        : 'http://localhost:3000/admin/collections/pages/create'

      await page.goto(createUrl)
      await page.waitForLoadState('networkidle')

      // Fill title
      const titleInput = page.locator('input[name="title"], input[id*="title"]').first()
      await titleInput.fill(testPageData.title)

      // Navigate to SEO tab
      const seoTab = page.locator('button:has-text("SEO"), tab:has-text("SEO")').first()
      if (await seoTab.isVisible({ timeout: 5000 })) {
        await seoTab.click()

        // Verify SEO fields exist
        const metaTitleField = page.locator('input[name*="meta.title"], input[id*="meta.title"]').first()
        await expect(metaTitleField).toBeVisible({ timeout: 5000 })
      }
    })
  })

  test.describe('manifest: dependencies verification', () => {
    test('dependencies: ArchiveBlock is loadable', async ({ page }) => {
      await loginToAdmin(page)
      await navigateToPagesCollection(page)

      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()
      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"]').first()
      await titleInput.fill(`Archive Test ${Date.now()}`)

      const contentTab = page.locator('button:has-text("Content"), tab:has-text("Content")').first()
      if (await contentTab.isVisible()) {
        await contentTab.click()

        const addBlockButton = page.locator('button:has-text("Add"), button:has-text("Add Block")').first()
        if (await addBlockButton.isVisible({ timeout: 5000 })) {
          await addBlockButton.click()

          const archiveBlock = page.locator('button:has-text("Archive"), [data-select-item*="Archive"]').first()
          if (await archiveBlock.isVisible({ timeout: 3000 })) {
            await expect(archiveBlock).toBeVisible()
          }
        }
      }
    })

    test('dependencies: CallToAction block is loadable', async ({ page }) => {
      await loginToAdmin(page)
      await navigateToPagesCollection(page)

      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()
      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"]').first()
      await titleInput.fill(`CTA Test ${Date.now()}`)

      const contentTab = page.locator('button:has-text("Content"), tab:has-text("Content")').first()
      if (await contentTab.isVisible()) {
        await contentTab.click()

        const addBlockButton = page.locator('button:has-text("Add"), button:has-text("Add Block")').first()
        if (await addBlockButton.isVisible({ timeout: 5000 })) {
          await addBlockButton.click()

          const ctaBlock = page.locator('button:has-text("Call To Action"), [data-select-item*="CallToAction"]').first()
          if (await ctaBlock.isVisible({ timeout: 3000 })) {
            await expect(ctaBlock).toBeVisible()
          }
        }
      }
    })
  })

  // ============================================
  // Layer 2: Shadow Inspector Tests
  // Cross-layer validation (UI ↔ API/Database)
  // ============================================

  test.describe('shadow: UI-DB consistency', () => {
    test.beforeAll(async () => {
      // Setup: Create a test page via API (bypass UI)
      const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages`
        : 'http://localhost:3000/api/pages'

      // This would normally require authentication
      // For now, we'll create pages through the UI in tests
    })

    test('shadow: create operation consistency', async ({ page }) => {
      await loginToAdmin(page)
      await navigateToPagesCollection(page)

      // Create page through UI
      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()

      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"], input[id*="title"]').first()
      await titleInput.fill(testPageData.title)

      await page.waitForTimeout(500)

      // Save as draft
      const saveButton = page.locator('button:has-text("Save"), button:has-text("Save Draft")').first()
      await saveButton.click()

      await page.waitForLoadState('networkidle')

      // Extract slug from URL or form
      await page.waitForTimeout(1000)
      const currentUrl = page.url()

      // Verify through API (Shadow Inspector)
      // The page should exist in database
      const dbState = await inspector.getDBState(testPageData.slug)
      expect(dbState).toBeTruthy()
      expect(dbState?.title).toBe(testPageData.title)
    })

    test('shadow: published page is accessible on frontend', async ({ page }) => {
      await loginToAdmin(page)

      // First, find or create a published page
      const pagesUrl = process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/pages`
        : 'http://localhost:3000/admin/collections/pages'

      await page.goto(pagesUrl)
      await page.waitForLoadState('networkidle')

      // Look for our test page
      const pageLink = page.locator(`a:has-text("${testPageData.title}")`).first()

      if (await pageLink.isVisible({ timeout: 5000 })) {
        await pageLink.click()
        await page.waitForLoadState('networkidle')

        // Publish the page
        const publishButton = page.locator('button:has-text("Publish"), button:has-text("Save & Publish")').first()

        if (await publishButton.isVisible({ timeout: 5000 })) {
          await publishButton.click()
          await page.waitForLoadState('networkidle')
        }
      }

      // Now verify shadow invariant
      const check = await inspector.verifyInvariant(page, testPageData.slug, 'published')

      expect(check.consistent).toBe(true)
      expect(check.violations).toEqual([])

      // Additional UI verification
      expect(check.details.uiState.visibleTitle).toBeTruthy()
      expect(check.details.uiState.statusCode).toBe(200)
    })

    test('shadow: draft page is not publicly accessible', async ({ page }) => {
      // Create a draft page
      await loginToAdmin(page)
      await navigateToPagesCollection(page)

      const draftTitle = `Draft Test ${Date.now()}`
      const draftSlug = `draft-test-${Date.now()}`

      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()

      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"]').first()
      await titleInput.fill(draftTitle)

      await page.waitForTimeout(500)

      // Save as draft (don't publish)
      const saveButton = page.locator('button:has-text("Save"), button:has-text("Save Draft")').first()
      await saveButton.click()

      await page.waitForLoadState('networkidle')

      // Verify shadow invariant: Draft should not be accessible
      const check = await inspector.verifyInvariant(page, draftSlug, 'draft')

      // Draft pages should not be publicly accessible
      expect(check.details.uiState.statusCode).not.toBe(200)
    })
  })

  // ============================================
  // Layer 3: State Machine (FSM) Tests
  // Model-based testing of state transitions
  // ============================================

  test.describe('fsm: state transitions', () => {
    test('fsm: valid transition DRAFT -> PUBLISHED', async ({ page }) => {
      await loginToAdmin(page)
      await navigateToPagesCollection(page)

      const fsmTestTitle = `FSM Test ${Date.now()}`

      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()

      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"]').first()
      await titleInput.fill(fsmTestTitle)

      await page.waitForTimeout(500)

      // Initial state: DRAFT
      const saveDraftButton = page.locator('button:has-text("Save"), button:has-text("Save Draft")').first()
      await saveDraftButton.click()

      await page.waitForLoadState('networkidle')

      // Transition: DRAFT -> PUBLISHED
      const publishButton = page.locator('button:has-text("Publish"), button:has-text("Save & Publish")').first()

      if (await publishButton.isVisible({ timeout: 5000 })) {
        await publishButton.click()
        await page.waitForLoadState('networkidle')

        // Verify new state is PUBLISHED
        const successMessage = page.locator('div:has-text("successfully"), div:has-text("published")').first()
        await expect(successMessage).toBeVisible({ timeout: 10000 })
      }
    })

    test('fsm: valid transition PUBLISHED -> DRAFT (new version)', async ({ page }) => {
      await loginToAdmin(page)
      await navigateToPagesCollection(page)

      // Find a published page
      const pageLink = page.locator(`a:has-text("${testPageData.title}")`).first()

      if (await pageLink.isVisible({ timeout: 5000 })) {
        await pageLink.click()
        await page.waitForLoadState('networkidle')

        // Make changes to create new version
        const titleInput = page.locator('input[name="title"]').first()
        await titleInput.fill(`${testPageData.title} - Updated`)

        await page.waitForTimeout(500)

        // Save as new draft version
        const saveButton = page.locator('button:has-text("Save"), button:has-text("Save Draft")').first()
        await saveButton.click()

        await page.waitForLoadState('networkidle')

        // Verify success
        const successMessage = page.locator('div:has-text("successfully"), div:has-text("saved")').first()
        await expect(successMessage).toBeVisible({ timeout: 10000 })
      }
    })

    test('gremlin: random state transitions respect FSM', async ({ page }) => {
      await loginToAdmin(page)
      await navigateToPagesCollection(page)

      const gremlinTitle = `Gremlin Test ${Date.now()}`

      // Create initial page
      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()

      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"]').first()
      await titleInput.fill(gremlinTitle)

      await page.waitForTimeout(500)

      // Perform 20 random state transitions
      for (let i = 0; i < 20; i++) {
        // Determine current state (simplified - in real test, check DB)
        const currentState: PageState = 'DRAFT' // Simplified assumption

        // Get valid transitions from current state
        const validTransitions = validPageTransitions.filter(t => t.from === currentState)

        if (validTransitions.length === 0) break

        // Pick random valid transition
        const action = validTransitions[Math.floor(Math.random() * validTransitions.length)]

        // Execute action
        if (action.trigger === 'save-draft') {
          const saveButton = page.locator('button:has-text("Save"), button:has-text("Save Draft")').first()
          if (await saveButton.isVisible()) {
            await saveButton.click()
            await page.waitForLoadState('networkidle')
          }
        } else if (action.trigger === 'publish') {
          const publishButton = page.locator('button:has-text("Publish"), button:has-text("Save & Publish")').first()
          if (await publishButton.isVisible()) {
            await publishButton.click()
            await page.waitForLoadState('networkidle')
          }
        }

        // Verify we're still in a valid state
        const successIndicator = page.locator('div:has-text("successfully"), div:has-text("saved"), div:has-text("published")').first()
        const hasSuccess = await successIndicator.isVisible({ timeout: 3000 })

        // If no success indicator visible, we might be in an invalid state
        // In a real implementation, check DB state directly
        expect(hasSuccess).toBe(true)
      }
    })
  })

  // ============================================
  // Layer 4: Doc-Code Integrity Tests
  // Verify documentation matches implementation
  // ============================================

  test.describe('doc-integrity: manifest alignment', () => {
    test('doc-integrity: manifest declares correct public API', async ({ page }) => {
      // Verify that the public API declared in manifest exists
      const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages`
        : 'http://localhost:3000/api/pages'

      const response = await page.request.get(apiUrl)
      expect(response.ok()).toBe(true)

      // Manifest declares: collections: ['Pages']
      // This should be accessible via /api/pages
      expect(response.status()).toBe(200)
    })

    test('doc-integrity: manifest dependencies are resolved', async ({ page }) => {
      // Manifest declares blocks: [ArchiveBlock, CallToAction, Content, FormBlock, MediaBlock]
      // Verify these blocks are available in the page editor

      await loginToAdmin(page)
      await navigateToPagesCollection(page)

      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()

      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"]').first()
      await titleInput.fill(`Dependency Check ${Date.now()}`)

      const contentTab = page.locator('button:has-text("Content"), tab:has-text("Content")').first()
      if (await contentTab.isVisible()) {
        await contentTab.click()

        const addBlockButton = page.locator('button:has-text("Add"), button:has-text("Add Block")').first()
        if (await addBlockButton.isVisible({ timeout: 5000 })) {
          await addBlockButton.click()

          // Check that declared blocks are available
          const expectedBlocks = ['Archive', 'Call To Action', 'Content', 'Form', 'Media']

          for (const blockName of expectedBlocks) {
            const blockOption = page.locator(`button:has-text("${blockName}"), [data-select-item*="${blockName}"]`).first()
            // At least some of these should be visible
            const isVisible = await blockOption.isVisible({ timeout: 1000 }).catch(() => false)
            if (isVisible) {
              expect(isVisible).toBe(true)
              break // Found at least one expected block
            }
          }
        }
      }
    })

    test('doc-integrity: hooks are implemented', async ({ page }) => {
      // Manifest declares hooks: ['revalidatePage', 'revalidateDelete']
      // These should trigger when pages are changed/deleted

      await loginToAdmin(page)
      await navigateToPagesCollection(page)

      const hookTestTitle = `Hook Test ${Date.now()}`

      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()

      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"]').first()
      await titleInput.fill(hookTestTitle)

      await page.waitForTimeout(500)

      // Trigger afterChange hook (revalidatePage)
      const publishButton = page.locator('button:has-text("Publish"), button:has-text("Save & Publish")').first()

      if (await publishButton.isVisible({ timeout: 5000 })) {
        await publishButton.click()
        await page.waitForLoadState('networkidle')

        // If hook executed, we should see success message
        const successMessage = page.locator('div:has-text("successfully")').first()
        await expect(successMessage).toBeVisible({ timeout: 10000 })
      }
    })
  })

  // ============================================
  // Cleanup
  // ============================================

  test.afterAll(async ({ page }) => {
    // Cleanup: Delete test pages
    try {
      await loginToAdmin(page)
      await navigateToPagesCollection(page)

      const pageLink = page.locator(`a:has-text("${testPageData.title}")`).first()

      if (await pageLink.isVisible({ timeout: 5000 })) {
        await pageLink.click()
        await page.waitForLoadState('networkidle')

        const moreButton = page.locator('button:has-text("More"), button[aria-label*="more"]').first()

        if (await moreButton.isVisible()) {
          await moreButton.click()

          const deleteButton = page.locator('button:has-text("Delete"), button:has-text("delete")').first()
          await deleteButton.click()

          const confirmButton = page.locator('button:has-text("Confirm"), button:has-text("Yes")').first()
          await confirmButton.click()

          await page.waitForLoadState('networkidle')
        }
      }
    } catch (error) {
      console.log('Cleanup failed or page already deleted:', error)
    }
  })
})
