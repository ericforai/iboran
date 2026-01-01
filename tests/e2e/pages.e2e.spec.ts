import { test, expect } from '@playwright/test'

/**
 * E2E Tests for Pages Collection
 *
 * These tests verify:
 * 1. Creating a page through the Payload admin
 * 2. Publishing the page
 * 3. Accessing the published page on the frontend
 */

test.describe('Pages Collection', () => {
  const testPageData = {
    title: `E2E Test Page ${Date.now()}`,
    slug: `e2e-test-page-${Date.now()}`,
    content: 'This is a test page created by E2E tests.',
  }

  let adminPage: any
  let pageId: string

  // Helper function to login to Payload admin
  async function loginToAdmin(page: any) {
    const adminUrl = process.env.NEXT_PUBLIC_SERVER_URL
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}/admin`
      : 'http://localhost:3000/admin'

    await page.goto(adminUrl)

    // Check if we're already logged in
    const currentUrl = page.url()
    if (currentUrl.includes('/admin/collections') || currentUrl.includes('/admin/dashboard')) {
      return
    }

    // Wait for login form
    await page.waitForLoadState('networkidle')

    // Check if email field exists (Payload login form)
    const emailInput = page.locator('input[type="email"], input[name="email"]').first()
    const passwordInput = page.locator('input[type="password"], input[name="password"]').first()

    if (await emailInput.isVisible({ timeout: 5000 })) {
      await emailInput.fill(process.env.PAYLOAD_TEST_EMAIL || 'admin@example.com')
      await passwordInput.fill(process.env.PAYLOAD_TEST_PASSWORD || 'password')

      // Click login button
      const loginButton = page.locator('button[type="submit"]').first()
      await loginButton.click()

      // Wait for navigation to admin dashboard
      await page.waitForURL(/\/admin$/, { timeout: 10000 })
    }
  }

  test.beforeEach(async ({ page }) => {
    adminPage = page
    await loginToAdmin(adminPage)
  })

  test('can create a new page', async ({ page }) => {
    // Navigate to Pages collection
    await page.goto(`${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/admin/collections/pages`)

    // Wait for the collection list to load
    await page.waitForLoadState('networkidle')

    // Click "Create New Page" button
    const createButton = page.locator('button:has-text("Create"), button:has-text("New"), a[href*="/create"]').first()
    await createButton.click()

    // Wait for the create form to load
    await page.waitForLoadState('networkidle')

    // Fill in the title field
    const titleInput = page.locator('input[name="title"], input[id*="title"]').first()
    await titleInput.fill(testPageData.title)

    // The slug should auto-generate from the title, but let's verify it
    await page.waitForTimeout(500)

    // Add content via the Content block
    const contentTab = page.locator('button:has-text("Content"), tab:has-text("Content")').first()
    if (await contentTab.isVisible()) {
      await contentTab.click()
    }

    // Look for the layout blocks area and add a Content block
    const addBlockButton = page.locator('button:has-text("Add"), button:has-text("Add Block")').first()
    if (await addBlockButton.isVisible({ timeout: 5000 })) {
      await addBlockButton.click()

      // Select Content block
      const contentBlockOption = page.locator('button:has-text("Content"), [data-select-item*="Content"]').first()
      if (await contentBlockOption.isVisible({ timeout: 3000 })) {
        await contentBlockOption.click()
      }

      // Wait for block to be added
      await page.waitForTimeout(500)

      // Fill in the content if there's a text area
      const contentTextarea = page.locator('textarea[name*="content"], [contenteditable="true"]').first()
      if (await contentTextarea.isVisible({ timeout: 3000 })) {
        if (await contentTextarea.getAttribute('contenteditable')) {
          await contentTextarea.click()
          await contentTextarea.fill(testPageData.content)
        } else {
          await contentTextarea.fill(testPageData.content)
        }
      }
    }

    // Save the page as draft
    const saveButton = page.locator('button:has-text("Save"), button:has-text("Save Draft")').first()
    await saveButton.click()

    // Wait for save to complete
    await page.waitForLoadState('networkidle')

    // Verify success message or navigation
    const successMessage = page.locator('div:has-text("successfully"), div:has-text("saved")').first()
    await expect(successMessage).toBeVisible({ timeout: 10000 })
  })

  test('can publish a page', async ({ page }) => {
    // First navigate to the Pages collection
    await page.goto(`${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/admin/collections/pages`)

    // Wait for the list to load
    await page.waitForLoadState('networkidle')

    // Find the test page we created (or create a new one)
    const pageLink = page.locator(`a:has-text("${testPageData.title}")`).first()

    if (await pageLink.isVisible({ timeout: 5000 })) {
      await pageLink.click()
    } else {
      // Create the page if it doesn't exist
      await page.locator('button:has-text("Create"), button:has-text("New")').first().click()

      const titleInput = page.locator('input[name="title"], input[id*="title"]').first()
      await titleInput.fill(testPageData.title)

      await page.waitForTimeout(500)

      // Save draft first
      const saveButton = page.locator('button:has-text("Save"), button:has-text("Save Draft")').first()
      await saveButton.click()

      await page.waitForLoadState('networkidle')
    }

    // Now publish the page
    await page.waitForLoadState('networkidle')

    // Look for publish button
    const publishButton = page.locator('button:has-text("Publish"), button:has-text("Save & Publish")').first()

    if (await publishButton.isVisible({ timeout: 5000 })) {
      await publishButton.click()
    } else {
      // If there's a version/draft selector, try to publish from there
      const moreButton = page.locator('button:has-text("More"), button[aria-label*="more"]').first()
      if (await moreButton.isVisible()) {
        await moreButton.click()

        const publishOption = page.locator('button:has-text("Publish"), button:has-text("Publish version")').first()
        await publishOption.click()
      }
    }

    // Wait for publish to complete
    await page.waitForLoadState('networkidle')

    // Verify success message
    const successMessage = page.locator('div:has-text("successfully"), div:has-text("published")').first()
    await expect(successMessage).toBeVisible({ timeout: 10000 })

    // Store the page ID/URL for verification
    const currentUrl = page.url()
    const urlMatch = currentUrl.match(/\/pages\/(\d+)/)
    if (urlMatch) {
      pageId = urlMatch[1]
    }
  })

  test('published page is accessible on frontend', async ({ page }) => {
    // Navigate to the page on the frontend
    const pageUrl = `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/${testPageData.slug}`
    await page.goto(pageUrl)

    // Wait for the page to load
    await page.waitForLoadState('networkidle')

    // Verify the page title is visible
    const pageTitle = page.locator('h1').filter({ hasText: testPageData.title })
    await expect(pageTitle).toBeVisible({ timeout: 10000 })

    // Verify the page content is visible (if we added content)
    if (testPageData.content) {
      const pageContent = page.locator('body').filter({ hasText: testPageData.content })
      await expect(pageContent).toBeVisible({ timeout: 5000 })
    }

    // Verify the page has proper status code (200)
    const response = await page.request.get(pageUrl)
    expect(response.status()).toBe(200)
  })

  test('page has proper SEO metadata', async ({ page }) => {
    const pageUrl = `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/${testPageData.slug}`
    await page.goto(pageUrl)

    // Wait for the page to load
    await page.waitForLoadState('networkidle')

    // Check page title
    const title = await page.title()
    expect(title).toBeTruthy()

    // Check meta description (if SEO fields are configured)
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content')
    expect(metaDescription).toBeDefined()

    // Check canonical URL
    const canonicalLink = page.locator('link[rel="canonical"]').first()
    await expect(canonicalLink).toHaveAttribute('href', pageUrl)
  })

  test('page is listed in search results (if search plugin is enabled)', async ({ page }) => {
    // Navigate to the frontend homepage
    await page.goto(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000')

    await page.waitForLoadState('networkidle')

    // Look for search functionality
    const searchInput = page.locator('input[type="search"], input[placeholder*="Search"]').first()

    if (await searchInput.isVisible({ timeout: 5000 })) {
      await searchInput.fill(testPageData.title)
      await searchInput.press('Enter')

      // Wait for search results
      await page.waitForLoadState('networkidle')

      // Verify our page appears in results
      const searchResult = page.locator(`a:has-text("${testPageData.title}")`).first()
      await expect(searchResult).toBeVisible({ timeout: 10000 })
    } else {
      // If search is not available, skip this test
      test.skip()
    }
  })

  test.afterAll(async ({ page }) => {
    // Cleanup: Delete the test page
    try {
      await page.goto(`${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/admin/collections/pages`)

      // Find and delete the test page
      const pageLink = page.locator(`a:has-text("${testPageData.title}")`).first()

      if (await pageLink.isVisible({ timeout: 5000 })) {
        // Click on the page to open it
        await pageLink.click()

        // Look for delete button
        const moreButton = page.locator('button:has-text("More"), button[aria-label*="more"]').first()

        if (await moreButton.isVisible()) {
          await moreButton.click()

          const deleteButton = page.locator('button:has-text("Delete"), button:has-text("delete")').first()
          await deleteButton.click()

          // Confirm deletion
          const confirmButton = page.locator('button:has-text("Confirm"), button:has-text("Yes")').first()
          await confirmButton.click()

          // Wait for deletion to complete
          await page.waitForLoadState('networkidle')
        }
      }
    } catch (error) {
      console.log('Cleanup failed or page already deleted:', error)
    }
  })
})
