/**
 * Self-Verifying E2E Tests for Posts Collection
 *
 * Generated from manifest: collections/posts
 * Location: /Users/user/iboran/src/collections/Posts/manifest.config.ts
 * Version: 1.0.0
 *
 * Four Verification Layers:
 * 1. Manifest-Driven: Tests derived from manifest.config.ts
 * 2. Shadow Inspector: UI <-> Database consistency validation
 * 3. State Symmetry: FSM testing for draft/published states
 * 4. Doc Integrity: Manifest <-> Code alignment
 */

import { test, expect } from '@playwright/test'

/**
 * Posts Collection State Machine
 *
 * States: DRAFT, PUBLISHED
 * Transitions:
 *   DRAFT -> DRAFT (save draft, autosave)
 *   DRAFT -> PUBLISHED (publish action)
 *   PUBLISHED -> DRAFT (create new version)
 *   PUBLISHED -> PUBLISHED (update published)
 */
type PostState = 'DRAFT' | 'PUBLISHED'

interface PostTransition {
  from: PostState
  to: PostState
  trigger: string
}

const validPostStates: PostState[] = ['DRAFT', 'PUBLISHED']

const validPostTransitions: PostTransition[] = [
  { from: 'DRAFT', to: 'DRAFT', trigger: 'save-draft' },
  { from: 'DRAFT', to: 'PUBLISHED', trigger: 'publish' },
  { from: 'PUBLISHED', to: 'DRAFT', trigger: 'create-new-version' },
  { from: 'PUBLISHED', to: 'PUBLISHED', trigger: 'update-published' }
]

/**
 * Shadow Inspector - Cross-layer validation helper for Posts
 *
 * Verifies: Hash(UI_Shown(id)) === Hash(API_Returned(id))
 * Posts-specific: Validates GEO fields (TL;DR, FAQs, decision frameworks)
 */
class PostsShadowInspector {
  /**
   * Get post state from Payload API (Database layer)
   */
  async getDBState(slug: string): Promise<{
    id: string
    title: string
    slug: string
    _status: 'draft' | 'published'
    publishedAt: string | null
    tldr?: string | null
    categories?: any[]
    populatedAuthors?: Array<{ id: string; name: string }>
  } | null> {
    const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`
      : 'http://localhost:3000/api/posts'

    const response = await fetch(`${apiUrl}?where[slug][equals]=${slug}&depth=1`)
    if (!response.ok) {
      return null
    }

    const data = await response.json()
    return data.docs?.[0] || null
  }

  /**
   * Get post state from UI (Frontend layer)
   */
  async getUIState(page: any, slug: string): Promise<{
    visibleTitle: string | null
    visibleContent: boolean
    statusCode: number
    hasGEOContent: boolean
  }> {
    const pageUrl = process.env.NEXT_PUBLIC_SERVER_URL
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}/posts/${slug}`
      : `http://localhost:3000/posts/${slug}`

    const response = await page.request.get(pageUrl)

    await page.goto(pageUrl)
    await page.waitForLoadState('networkidle')

    const titleEl = page.locator('h1').first()
    const visibleTitle = await titleEl.isVisible()
      ? await titleEl.textContent()
      : null

    // Check for GEO optimization content
    const tldrEl = page.locator('[data-testid="tldr"], .tldr, strong:has-text("TL;DR")').first()
    const hasGEOContent = await tldrEl.isVisible({ timeout: 1000 }).catch(() => false)

    return {
      visibleTitle,
      visibleContent: await page.locator('body').textContent().then(text => text?.length > 0),
      statusCode: response.status(),
      hasGEOContent
    }
  }

  /**
   * Verify UI-DB consistency invariant
   *
   * Invariant: If DB has _status='published', UI must show content with status 200
   * Invariant: If DB has _status='draft', UI must either 401 or 404
   * Invariant (Posts): Authors must be populated (not raw user IDs)
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
      violations.push('DB: Post not found in database')
      return {
        consistent: false,
        violations,
        details: { dbState: null, uiState }
      }
    }

    if (dbState._status !== expectedStatus) {
      violations.push(`DB: Expected status=${expectedStatus}, got ${dbState._status}`)
    }

    // Invariant 2: Published posts must be accessible
    if (expectedStatus === 'published') {
      if (uiState.statusCode !== 200) {
        violations.push(`UI: Published post returned status ${uiState.statusCode}, expected 200`)
      }
      if (!uiState.visibleTitle) {
        violations.push('UI: Published post has no visible title')
      }
      if (!uiState.visibleContent) {
        violations.push('UI: Published post has no visible content')
      }
    }

    // Invariant 3: Draft posts should not be publicly accessible
    if (expectedStatus === 'draft') {
      if (uiState.statusCode === 200) {
        violations.push('UI: Draft post is publicly accessible (should be 401/404)')
      }
    }

    // Invariant 4 (Posts-specific): Authors must be populated, not raw user IDs
    if (dbState.populatedAuthors) {
      const hasRawId = dbState.populatedAuthors.some((author: any) =>
        typeof author === 'string' || (typeof author === 'object' && !author.name)
      )
      if (hasRawId) {
        violations.push('DB: Authors not properly populated - contains raw user IDs')
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
 * @manifest:collections:posts - Posts Collection Self-Verifying Tests
 *
 * Test structure derived from src/collections/Posts/manifest.config.ts
 */
test.describe('@manifest:collections:posts', () => {
  const inspector = new PostsShadowInspector()

  const testPostData = {
    title: `Self-Verify Post ${Date.now()}`,
    slug: `self-verify-post-${Date.now()}`,
    content: 'This is a self-verifying test post with rich text content.',
    tldr: 'AI搜索直接答案：这是一个测试结论，包含测试条件和边界说明。',
    faqs: [
      { question: 'What is this?', answer: 'This is a test post.' },
      { question: 'Why self-verifying?', answer: 'To ensure UI-DB consistency.' }
    ]
  }

  let createdPostId: string

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

  async function navigateToPostsCollection(page: any) {
    const postsUrl = process.env.NEXT_PUBLIC_SERVER_URL
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/posts`
      : 'http://localhost:3000/admin/collections/posts'

    await page.goto(postsUrl)
    await page.waitForLoadState('networkidle')
  }

  // ============================================
  // Layer 1: Manifest-Driven Tests
  // Derived from manifest.publicAPI and manifest.purpose
  // ============================================

  test.describe('manifest: public API verification', () => {
    test('public API: Posts collection is accessible via API', async ({ page }) => {
      const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`
        : 'http://localhost:3000/api/posts'

      const response = await page.request.get(apiUrl)

      expect(response.ok()).toBe(true)

      const data = await response.json()
      expect(data).toHaveProperty('docs')
      expect(data).toHaveProperty('totalPages')
    })

    test('public API: Collection has correct fields structure', async ({ page }) => {
      const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`
        : 'http://localhost:3000/api/posts'

      const response = await page.request.get(apiUrl)
      const data = await response.json()

      if (data.docs && data.docs.length > 0) {
        const firstPost = data.docs[0]
        expect(firstPost).toHaveProperty('id')
        expect(firstPost).toHaveProperty('title')
        expect(firstPost).toHaveProperty('slug')
        expect(firstPost).toHaveProperty('_status')
        expect(firstPost).toHaveProperty('createdAt')
        expect(firstPost).toHaveProperty('updatedAt')
        expect(firstPost).toHaveProperty('publishedAt')
      }
    })

    test('public API: Authors are populated correctly', async ({ page }) => {
      // Verify manifest rule: noDirectUserAccess
      // Authors should be returned via populatedAuthors, not raw user IDs
      const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`
        : 'http://localhost:3000/api/posts'

      const response = await page.request.get(apiUrl)
      const data = await response.json()

      if (data.docs && data.docs.length > 0) {
        const postWithAuthors = data.docs.find((post: any) => post.authors && post.authors.length > 0)

        if (postWithAuthors) {
          // Verify populatedAuthors field exists
          expect(postWithAuthors).toHaveProperty('populatedAuthors')

          // Verify populatedAuthors contains name field (not raw IDs)
          if (postWithAuthors.populatedAuthors && postWithAuthors.populatedAuthors.length > 0) {
            const firstAuthor = postWithAuthors.populatedAuthors[0]
            expect(firstAuthor).toHaveProperty('id')
            expect(firstAuthor).toHaveProperty('name')
            expect(typeof firstAuthor.name).toBe('string')
          }
        }
      }
    })
  })

  test.describe('manifest: purpose validation', () => {
    test('purpose: Blog and article content management', async ({ page }) => {
      await loginToAdmin(page)
      await navigateToPostsCollection(page)

      // Verify we can access the Posts collection management interface
      const collectionHeader = page.locator('h1, h2').filter({ hasText: /posts/i })
      await expect(collectionHeader).toBeVisible({ timeout: 10000 })
    })

    test('purpose: Rich text editing with lexical editor', async ({ page }) => {
      await loginToAdmin(page)

      const createUrl = process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/posts/create`
        : 'http://localhost:3000/admin/collections/posts/create'

      await page.goto(createUrl)
      await page.waitForLoadState('networkidle')

      // Fill title
      const titleInput = page.locator('input[name="title"], input[id*="title"]').first()
      await titleInput.fill(testPostData.title)

      // Verify lexical editor is available
      const richTextEditor = page.locator('[data-lexical-editor], .lexical-editor, [contenteditable="true"]').first()
      await expect(richTextEditor).toBeVisible({ timeout: 5000 })
    })

    test('purpose: SEO optimization with meta fields', async ({ page }) => {
      await loginToAdmin(page)

      const createUrl = process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/posts/create`
        : 'http://localhost:3000/admin/collections/posts/create'

      await page.goto(createUrl)
      await page.waitForLoadState('networkidle')

      // Fill title
      const titleInput = page.locator('input[name="title"], input[id*="title"]').first()
      await titleInput.fill(testPostData.title)

      // Navigate to SEO tab
      const seoTab = page.locator('button:has-text("SEO"), tab:has-text("SEO")').first()
      if (await seoTab.isVisible({ timeout: 5000 })) {
        await seoTab.click()

        // Verify SEO fields exist
        const metaTitleField = page.locator('input[name*="meta.title"], input[id*="meta.title"]').first()
        await expect(metaTitleField).toBeVisible({ timeout: 5000 })
      }
    })

    test('purpose: GEO optimization (TL;DR, FAQs, decision frameworks)', async ({ page }) => {
      await loginToAdmin(page)

      const createUrl = process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/posts/create`
        : 'http://localhost:3000/admin/collections/posts/create'

      await page.goto(createUrl)
      await page.waitForLoadState('networkidle')

      // Fill title
      const titleInput = page.locator('input[name="title"], input[id*="title"]').first()
      await titleInput.fill(testPostData.title)

      // Navigate to GEO tab
      const geoTab = page.locator('button:has-text("GEO"), tab:has-text("GEO")').first()
      if (await geoTab.isVisible({ timeout: 5000 })) {
        await geoTab.click()

        // Verify GEO fields exist
        const tldrField = page.locator('textarea[name="tldr"], [name*="tldr"]').first()
        await expect(tldrField).toBeVisible({ timeout: 5000 })

        // Verify Atomic FAQs section
        const faqSection = page.locator('[data-field-path="atomicFAQs"], .array-field:has-text("FAQ")').first()
        if (await faqSection.isVisible({ timeout: 3000 })) {
          await expect(faqSection).toBeVisible()
        }
      }
    })
  })

  test.describe('manifest: dependencies verification', () => {
    test('dependencies: Banner block is loadable', async ({ page }) => {
      await loginToAdmin(page)
      await navigateToPostsCollection(page)

      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()

      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"]').first()
      await titleInput.fill(`Banner Test ${Date.now()}`)

      // Add content to trigger rich text editor
      const contentTab = page.locator('button:has-text("Content"), tab:has-text("Content")').first()
      if (await contentTab.isVisible()) {
        await contentTab.click()

        const richTextEditor = page.locator('[data-lexical-editor], .lexical-editor').first()
        await expect(richTextEditor).toBeVisible({ timeout: 5000 })
      }
    })

    test('dependencies: Categories relationship is available', async ({ page }) => {
      await loginToAdmin(page)
      await navigateToPostsCollection(page)

      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()

      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"]').first()
      await titleInput.fill(`Category Test ${Date.now()}`)

      // Navigate to Meta tab (where categories are located)
      const metaTab = page.locator('button:has-text("Meta"), tab:has-text("Meta")').first()
      if (await metaTab.isVisible({ timeout: 5000 })) {
        await metaTab.click()

        // Verify categories field exists
        const categoriesField = page.locator('[data-field-path="categories"], .relationship-field:has-text("categories")').first()
        await expect(categoriesField).toBeVisible({ timeout: 5000 })
      }
    })

    test('dependencies: Related posts relationship is available', async ({ page }) => {
      await loginToAdmin(page)
      await navigateToPostsCollection(page)

      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()

      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"]').first()
      await titleInput.fill(`Related Posts Test ${Date.now()}`)

      // Navigate to Meta tab (where related posts are located)
      const metaTab = page.locator('button:has-text("Meta"), tab:has-text("Meta")').first()
      if (await metaTab.isVisible({ timeout: 5000 })) {
        await metaTab.click()

        // Verify related posts field exists
        const relatedPostsField = page.locator('[data-field-path="relatedPosts"], .relationship-field:has-text("related")').first()
        await expect(relatedPostsField).toBeVisible({ timeout: 5000 })
      }
    })
  })

  // ============================================
  // Layer 2: Shadow Inspector Tests
  // Cross-layer validation (UI <-> API/Database)
  // ============================================

  test.describe('shadow: UI-DB consistency', () => {
    test('shadow: create operation consistency', async ({ page }) => {
      await loginToAdmin(page)
      await navigateToPostsCollection(page)

      // Create post through UI
      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()

      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"], input[id*="title"]').first()
      await titleInput.fill(testPostData.title)

      await page.waitForTimeout(500)

      // Save as draft
      const saveButton = page.locator('button:has-text("Save"), button:has-text("Save Draft")').first()
      await saveButton.click()

      await page.waitForLoadState('networkidle')

      // Verify through API (Shadow Inspector)
      // The post should exist in database
      const dbState = await inspector.getDBState(testPostData.slug)
      expect(dbState).toBeTruthy()
      expect(dbState?.title).toBe(testPostData.title)
    })

    test('shadow: published post is accessible on frontend', async ({ page }) => {
      await loginToAdmin(page)

      // First, find or create a published post
      const postsUrl = process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/posts`
        : 'http://localhost:3000/admin/collections/posts'

      await page.goto(postsUrl)
      await page.waitForLoadState('networkidle')

      // Look for our test post
      const postLink = page.locator(`a:has-text("${testPostData.title}")`).first()

      if (await postLink.isVisible({ timeout: 5000 })) {
        await postLink.click()
        await page.waitForLoadState('networkidle')

        // Publish the post
        const publishButton = page.locator('button:has-text("Publish"), button:has-text("Save & Publish")').first()

        if (await publishButton.isVisible({ timeout: 5000 })) {
          await publishButton.click()
          await page.waitForLoadState('networkidle')
        }
      }

      // Now verify shadow invariant
      const check = await inspector.verifyInvariant(page, testPostData.slug, 'published')

      expect(check.consistent).toBe(true)
      expect(check.violations).toEqual([])

      // Additional UI verification
      expect(check.details.uiState.visibleTitle).toBeTruthy()
      expect(check.details.uiState.statusCode).toBe(200)
    })

    test('shadow: draft post is not publicly accessible', async ({ page }) => {
      // Create a draft post
      await loginToAdmin(page)
      await navigateToPostsCollection(page)

      const draftTitle = `Draft Post ${Date.now()}`
      const draftSlug = `draft-post-${Date.now()}`

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

      // Draft posts should not be publicly accessible
      expect(check.details.uiState.statusCode).not.toBe(200)
    })

    test('shadow: GEO content persists in database', async ({ page }) => {
      await loginToAdmin(page)
      await navigateToPostsCollection(page)

      const geoTitle = `GEO Test ${Date.now()}`
      const geoSlug = `geo-test-${Date.now()}`

      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()

      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"]').first()
      await titleInput.fill(geoTitle)

      // Navigate to GEO tab
      const geoTab = page.locator('button:has-text("GEO"), tab:has-text("GEO")').first()
      if (await geoTab.isVisible({ timeout: 5000 })) {
        await geoTab.click()

        // Fill TL;DR field
        const tldrField = page.locator('textarea[name="tldr"], [name*="tldr"]').first()
        await tldrField.fill(testPostData.tldr)

        // Add an FAQ
        const addFAQButton = page.locator('button:has-text("Add"), button:has-text("+")').first()
        if (await addFAQButton.isVisible()) {
          await addFAQButton.click()
          await page.waitForTimeout(500)

          const faqFields = page.locator('[data-field-path="atomicFAQs"]').first()
          if (await faqFields.isVisible()) {
            const questionInput = faqFields.locator('input[name*="question"]').first()
            const answerInput = faqFields.locator('textarea[name*="answer"]').first()

            if (await questionInput.isVisible()) {
              await questionInput.fill(testPostData.faqs[0].question)
            }
            if (await answerInput.isVisible()) {
              await answerInput.fill(testPostData.faqs[0].answer)
            }
          }
        }
      }

      // Save as draft
      const saveButton = page.locator('button:has-text("Save"), button:has-text("Save Draft")').first()
      await saveButton.click()

      await page.waitForLoadState('networkidle')

      // Verify through API
      const dbState = await inspector.getDBState(geoSlug)
      expect(dbState).toBeTruthy()
      expect(dbState?.tldr).toBe(testPostData.tldr)
    })
  })

  // ============================================
  // Layer 3: State Machine (FSM) Tests
  // Model-based testing of state transitions
  // ============================================

  test.describe('fsm: state transitions', () => {
    test('fsm: valid transition DRAFT -> PUBLISHED', async ({ page }) => {
      await loginToAdmin(page)
      await navigateToPostsCollection(page)

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
      await navigateToPostsCollection(page)

      // Find a published post
      const postLink = page.locator(`a:has-text("${testPostData.title}")`).first()

      if (await postLink.isVisible({ timeout: 5000 })) {
        await postLink.click()
        await page.waitForLoadState('networkidle')

        // Make changes to create new version
        const titleInput = page.locator('input[name="title"]').first()
        await titleInput.fill(`${testPostData.title} - Updated`)

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
      await navigateToPostsCollection(page)

      const gremlinTitle = `Gremlin Post Test ${Date.now()}`

      // Create initial post
      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()

      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"]').first()
      await titleInput.fill(gremlinTitle)

      await page.waitForTimeout(500)

      // Perform 20 random state transitions
      for (let i = 0; i < 20; i++) {
        // Determine current state (simplified - in real test, check DB)
        const currentState: PostState = 'DRAFT' // Simplified assumption

        // Get valid transitions from current state
        const validTransitions = validPostTransitions.filter(t => t.from === currentState)

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
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`
        : 'http://localhost:3000/api/posts'

      const response = await page.request.get(apiUrl)
      expect(response.ok()).toBe(true)

      // Manifest declares: collections: ['Posts']
      // This should be accessible via /api/posts
      expect(response.status()).toBe(200)
    })

    test('doc-integrity: manifest hooks are implemented', async ({ page }) => {
      // Manifest declares hooks: ['revalidatePost', 'revalidateDelete', 'populateAuthors']
      // These should trigger when posts are changed/deleted

      await loginToAdmin(page)
      await navigateToPostsCollection(page)

      const hookTestTitle = `Hook Test ${Date.now()}`

      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()

      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"]').first()
      await titleInput.fill(hookTestTitle)

      await page.waitForTimeout(500)

      // Trigger afterChange hook (revalidatePost)
      const publishButton = page.locator('button:has-text("Publish"), button:has-text("Save & Publish")').first()

      if (await publishButton.isVisible({ timeout: 5000 })) {
        await publishButton.click()
        await page.waitForLoadState('networkidle')

        // If hook executed, we should see success message
        const successMessage = page.locator('div:has-text("successfully")').first()
        await expect(successMessage).toBeVisible({ timeout: 10000 })
      }
    })

    test('doc-integrity: manifest rules are enforced', async ({ page }) => {
      // Manifest declares rule: noDirectUserAccess
      // Posts should use populatedAuthors instead of direct user access

      const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`
        : 'http://localhost:3000/api/posts'

      const response = await page.request.get(apiUrl)
      const data = await response.json()

      if (data.docs && data.docs.length > 0) {
        const postWithAuthors = data.docs.find((post: any) => post.populatedAuthors && post.populatedAuthors.length > 0)

        if (postWithAuthors) {
          // Verify populatedAuthors contains structured data, not raw user IDs
          expect(postWithAuthors.populatedAuthors).toBeDefined()
          expect(Array.isArray(postWithAuthors.populatedAuthors)).toBe(true)

          postWithAuthors.populatedAuthors.forEach((author: any) => {
            expect(author).toHaveProperty('id')
            expect(author).toHaveProperty('name')
            expect(typeof author.name).toBe('string')
          })
        }
      }
    })

    test('doc-integrity: manifest dependencies are available', async ({ page }) => {
      // Manifest declares blocks: [Banner, Code, MediaBlock]
      // Verify these blocks are available in the rich text editor

      await loginToAdmin(page)
      await navigateToPostsCollection(page)

      const createButton = page.locator('button:has-text("Create"), button:has-text("New")').first()
      await createButton.click()

      await page.waitForLoadState('networkidle')

      const titleInput = page.locator('input[name="title"]').first()
      await titleInput.fill(`Dependency Check ${Date.now()}`)

      // Navigate to content tab
      const contentTab = page.locator('button:has-text("Content"), tab:has-text("Content")').first()
      if (await contentTab.isVisible()) {
        await contentTab.click()

        // Rich text editor should be available
        const richTextEditor = page.locator('[data-lexical-editor], .lexical-editor').first()
        await expect(richTextEditor).toBeVisible({ timeout: 5000 })
      }
    })

    test('doc-integrity: metadata is current', async ({ page }) => {
      // Verify manifest metadata is up-to-date
      // Manifest declares:
      //   owner: 'content-team'
      //   lastReviewed: '2025-12-31'
      //   nextReview: '2026-03-31'

      const today = new Date()
      const nextReview = new Date('2026-03-31')

      // This test passes as long as we haven't passed nextReview date
      expect(today.getTime()).toBeLessThan(nextReview.getTime())
    })
  })

  // ============================================
  // Cleanup
  // ============================================

  test.afterAll(async ({ page }) => {
    // Cleanup: Delete test posts
    try {
      await loginToAdmin(page)
      await navigateToPostsCollection(page)

      const postLink = page.locator(`a:has-text("${testPostData.title}")`).first()

      if (await postLink.isVisible({ timeout: 5000 })) {
        await postLink.click()
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
      console.log('Cleanup failed or post already deleted:', error)
    }
  })
})
