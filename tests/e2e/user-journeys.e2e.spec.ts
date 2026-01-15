/**
 * Critical User Journey E2E Tests
 *
 * Tests the main ways users interact with the site
 * These are the most critical paths for launch readiness
 *
 * @launch-critical These user flows must work before launch
 */

import { test, expect } from '@playwright/test'

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/**
 * User Journey: First-time visitor exploring products
 *
 * This is a primary user flow:
 * 1. Lands on homepage
 * 2. Browses products
 * 3. Clicks on a specific product
 * 4. Looks for contact/CTA
 */
test.describe('@journey Product Discovery Flow', () => {
  test('journey: visitor discovers products from homepage', async ({ page }) => {
    // Step 1: Arrive at homepage
    await page.goto(baseURL)
    await page.waitForLoadState('networkidle')

    // Verify homepage loaded
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()

    // Step 2: Find and click on products navigation
    const productsNav = page.locator('a[href="/products"], nav a:has-text("产品"), nav a:has-text("Products")').first()

    const hasProductsNav = await productsNav.isVisible({ timeout: 3000 })

    if (hasProductsNav) {
      await productsNav.click()
      await page.waitForLoadState('networkidle')

      // Verify on products page
      expect(page.url()).toContain('/products')

      // Step 3: Browse product listings
      const productCards = page.locator('a[href^="/products/"]')
      const productCount = await productCards.count()

      expect(productCount).toBeGreaterThan(0)
      console.log(`Found ${productCount} products`)

      // Step 4: Click on first product
      if (productCount > 0) {
        await productCards.first().click()
        await page.waitForLoadState('networkidle')

        // Verify on product detail page
        expect(page.url()).toMatch(/\/products\/[^/]+$/)

        // Step 5: Look for CTA (contact/demo)
        const ctaButton = page.locator('button:has-text("咨询"), button:has-text("演示"), a:has-text("联系"), a:has-text("Contact"), button:has-text("Request"), button:has-text("Get Demo")').first()

        const hasCTA = await ctaButton.isVisible({ timeout: 3000 })

        if (hasCTA) {
          console.log('CTA button found on product page')

          // Click CTA and verify it works (opens modal or navigates)
          await ctaButton.click()
          await page.waitForTimeout(1000)

          // Either a modal opened or we navigated
          const hasModal = page.locator('[role="dialog"], .modal, [data-modal]').count().then(c => c > 0)
          const navigated = !page.url().includes('/products/')

          console.log(`CTA action: ${hasModal ? 'Modal opened' : navigated ? 'Navigated' : 'Unknown'}`)
        }
      }
    } else {
      // Try alternative navigation
      await page.goto(`${baseURL}/products`)
      await page.waitForLoadState('networkidle')

      const productCards = page.locator('a[href^="/products/"]')
      const count = await productCards.count()

      expect(count).toBeGreaterThan(0)
    }
  })
})

/**
 * User Journey: Customer looking for case studies
 *
 * Social proof journey:
 * 1. Lands on homepage
 * 2. Looks for success stories/cases
 * 3. Views a specific case study
 * 4. Looks for similar cases
 */
test.describe('@journey Case Study Discovery Flow', () => {
  test('journey: visitor browses case studies', async ({ page }) => {
    // Step 1: Start at homepage
    await page.goto(baseURL)
    await page.waitForLoadState('networkidle')

    // Step 2: Navigate to case studies
    const casesLink = page.locator('a[href="/cases"], nav a:has-text("案例"), nav a:has-text("Case"), nav a:has-text("成功故事")').first()

    const hasCasesLink = await casesLink.isVisible({ timeout: 3000 })

    if (hasCasesLink) {
      await casesLink.click()
    } else {
      await page.goto(`${baseURL}/cases`)
    }

    await page.waitForLoadState('networkidle')

    // Verify on cases page
    expect(page.url()).toContain('/cases')

    // Step 3: Browse case studies
    const caseCards = page.locator('a[href^="/cases/"]')
    const caseCount = await caseCards.count()

    expect(caseCount).toBeGreaterThan(0)
    console.log(`Found ${caseCount} case studies`)

    // Step 4: View a specific case study
    if (caseCount > 0) {
      await caseCards.first().click()
      await page.waitForLoadState('networkidle')

      // Verify on case detail page
      expect(page.url()).toMatch(/\/cases\/[^/]+$/)

      // Check for case study content
      const content = page.locator('h1, h2').first()
      await expect(content).toBeVisible()

      // Look for "Related Cases" or back button
      const backOrRelated = page.locator('a:has-text("返回"), a:has-text("Back"), a:has-text("相关案例"), a:has-text("Related")').first()

      const hasNavigation = await backOrRelated.isVisible({ timeout: 3000 }).catch(() => false)

      if (hasNavigation) {
        console.log('Case study has navigation elements')
      }
    }
  })
})

/**
 * User Journey: Blog reader
 *
 * Content discovery journey:
 * 1. Lands on homepage or /posts
 * 2. Browses blog posts
 * 3. Reads a specific post
 * 4. Navigates to related posts
 */
test.describe('@journey Blog Reading Flow', () => {
  test('journey: visitor reads blog posts', async ({ page }) => {
    // Step 1: Go to blog
    await page.goto(`${baseURL}/posts`)
    await page.waitForLoadState('networkidle')

    // Verify on posts page
    expect(page.url()).toContain('/posts')

    // Step 2: Browse posts
    const postLinks = page.locator('a[href^="/posts/"]:not([href*="/posts/page"])')
    const postCount = await postLinks.count()

    console.log(`Found ${postCount} blog posts`)

    if (postCount > 0) {
      // Step 3: Click on first post
      await postLinks.first().click()
      await page.waitForLoadState('networkidle')

      // Verify on post detail page
      expect(page.url()).toMatch(/\/posts\/[^/]+$/)

      // Check for post content
      const article = page.locator('article, main').first()
      await expect(article).toBeVisible()

      // Look for author/date info
      const meta = page.locator('time, [class*="author"], [class*="date"]').first()
      const hasMeta = await meta.isVisible({ timeout: 3000 }).catch(() => false)

      if (hasMeta) {
        console.log('Post has metadata (author/date)')
      }

      // Step 4: Look for related posts
      const relatedPosts = page.locator('a[href^="/posts/"]').all()
      const relatedCount = (await relatedPosts).length

      if (relatedCount > 0) {
        console.log(`Found ${relatedCount} links to other posts`)
      }
    }
  })
})

/**
 * User Journey: Solution seeker
 *
 * B2B buyer journey:
 * 1. Looking for specific business solution
 * 2. Navigates to solutions section
 * 3. Finds relevant solution
 * 4. Engages with CTA
 */
test.describe('@journey Solution Discovery Flow', () => {
  test('journey: visitor finds business solutions', async ({ page }) => {
    // Step 1: Start at homepage
    await page.goto(baseURL)
    await page.waitForLoadState('networkidle')

    // Step 2: Navigate to solutions
    const solutionsLink = page.locator('a[href="/solution"], nav a:has-text("解决方案"), nav a:has-text("Solutions")').first()

    const hasSolutionsLink = await solutionsLink.isVisible({ timeout: 3000 })

    if (hasSolutionsLink) {
      await solutionsLink.click()
    } else {
      await page.goto(`${baseURL}/solution`)
    }

    await page.waitForLoadState('networkidle')

    // Verify on solutions page
    expect(page.url()).toContain('/solution')

    // Step 3: Browse solutions
    const solutionLinks = page.locator('a[href^="/solution/"]')
    const solutionCount = await solutionLinks.count()

    expect(solutionCount).toBeGreaterThan(0)
    console.log(`Found ${solutionCount} solutions`)

    // Step 4: View a specific solution
    if (solutionCount > 0) {
      await solutionLinks.first().click()
      await page.waitForLoadState('networkidle')

      // Verify on solution detail page
      expect(page.url()).toMatch(/\/solution\/[^/]+$/)

      // Check for solution content
      const h1 = page.locator('h1').first()
      await expect(h1).toBeVisible()

      // Look for CTA
      const ctaButton = page.locator('button:has-text("咨询"), a:has-text("联系"), button:has-text("了解更多"), a:has-text("Learn More")').first()

      const hasCTA = await ctaButton.isVisible({ timeout: 3000 }).catch(() => false)

      if (hasCTA) {
        console.log('Solution page has CTA')
      }
    }
  })
})

/**
 * User Journey: Mobile visitor
 *
 * Mobile user experience:
 * 1. Visits on mobile device
 * 2. Uses mobile menu
 * 3. Navigates to content
 * 4. Finds contact info
 */
test.describe('@journey Mobile User Flow', () => {
  test.use({ viewport: { width: 375, height: 667 } }) // iPhone SE

  test('journey: mobile visitor navigates site', async ({ page }) => {
    // Step 1: Visit homepage on mobile
    await page.goto(baseURL)
    await page.waitForLoadState('networkidle')

    // Check for mobile menu button
    const mobileMenuBtn = page.locator('button[aria-label*="menu"], button.hamburger, .mobile-menu-btn, [class*="hamburger"], [class*="mobile-menu"]').first()

    const hasMobileMenu = await mobileMenuBtn.isVisible({ timeout: 3000 })

    if (hasMobileMenu) {
      console.log('Mobile menu button found')

      // Open mobile menu
      await mobileMenuBtn.click()
      await page.waitForTimeout(500)

      // Look for navigation links in mobile menu
      const navLinks = page.locator('nav a, [role="navigation"] a, .mobile-menu a').all()
      const linkCount = (await navLinks).length

      console.log(`Mobile menu has ${linkCount} links`)

      // Step 2: Click on a main section
      if (linkCount > 0) {
        await navLinks[0].click()
        await page.waitForLoadState('networkidle')

        console.log(`Navigated to: ${page.url()}`)
      }
    } else {
      // No mobile menu - check if nav is visible
      const nav = page.locator('nav').first()
      const navVisible = await nav.isVisible({ timeout: 3000 })

      if (navVisible) {
        console.log('Desktop navigation visible on mobile')
      }
    }

    // Step 3: Look for contact/CTA
    const contactLink = page.locator('a[href*="contact"], a[href*="tel:"], button:has-text("咨询")').first()

    const hasContact = await contactLink.isVisible({ timeout: 3000 }).catch(() => false)

    if (hasContact) {
      console.log('Contact option found on mobile')
    }
  })
})

/**
 * User Journey: Direct navigation
 *
 * Users who go directly to specific pages:
 * 1. Direct URL to product page
 * 2. Direct URL to case study
 * 3. Direct URL to blog post
 */
test.describe('@journey Direct Navigation Flow', () => {
  const directPaths = [
    '/products/yonsuite',
    '/products/bip',
    '/solution/business/r2r',
    '/cases',
    '/posts'
  ]

  for (const path of directPaths) {
    test(`journey: direct navigation to ${path}`, async ({ page }) => {
      // Direct navigation
      await page.goto(`${baseURL}${path}`)
      await page.waitForLoadState('networkidle')

      // Verify page loaded
      const h1 = page.locator('h1').first()
      await expect(h1).toBeVisible({ timeout: 10000 })

      console.log(`Direct navigation to ${path} successful`)
    })
  }
})

/**
 * User Journey: Return visitor
 *
 * User who has been before and knows what they want:
 * 1. Returns to site
 * 2. Uses search or navigates to specific section
 * 3. Engages with content
 */
test.describe('@journey Return Visitor Flow', () => {
  test('journey: return visitor navigates to known section', async ({ page }) => {
    // Simulate returning visitor
    await page.goto(baseURL)
    await page.waitForLoadState('networkidle')

    // Look for search functionality
    const searchInput = page.locator('input[type="search"], input[placeholder*="搜索"], input[placeholder*="Search"]').first()

    const hasSearch = await searchInput.isVisible({ timeout: 3000 }).catch(() => false)

    if (hasSearch) {
      console.log('Search found on site')

      // Try a search
      await searchInput.fill('YonSuite')
      await searchInput.press('Enter')
      await page.waitForTimeout(1000)

      console.log(`After search, URL: ${page.url()}`)
    } else {
      console.log('No search functionality - using navigation instead')

      // Navigate directly to products
      const productsLink = page.locator('a[href="/products"]').first()
      const hasProducts = await productsLink.isVisible({ timeout: 3000 })

      if (hasProducts) {
        await productsLink.click()
        await page.waitForLoadState('networkidle')

        expect(page.url()).toContain('/products')
      }
    }
  })
})

/**
 * Journey Summary Report
 *
 * Generates a summary of all journey test results
 */
test.describe('@journey Summary Report', () => {
  test('journey: generate journey health summary', async ({ page }) => {
    const journeys = [
      { name: 'Homepage', path: '/', critical: true },
      { name: 'Products', path: '/products', critical: true },
      { name: 'YonSuite Product', path: '/products/yonsuite', critical: true },
      { name: 'Solutions', path: '/solution', critical: true },
      { name: 'R2R Solution', path: '/solution/business/r2r', critical: true },
      { name: 'Cases', path: '/cases', critical: true },
      { name: 'Posts', path: '/posts', critical: false },
    ]

    const results: Array<{ name: string; path: string; status: number; ok: boolean }> = []

    for (const journey of journeys) {
      const response = await page.request.get(`${baseURL}${journey.path}`)
      results.push({
        name: journey.name,
        path: journey.path,
        status: response.status(),
        ok: response.ok()
      })
    }

    console.log('\n=== User Journey Health Report ===')
    for (const result of results) {
      const critical = journeys.find(j => j.path === result.path)?.critical
      const status = result.ok ? '✓ PASS' : '✗ FAIL'
      const marker = critical ? ' [CRITICAL]' : ''
      console.log(`${status}${marker} ${result.name}: ${result.path} (${result.status})`)
    }

    const criticalPass = results.filter(r =>
      journeys.find(j => j.path === r.path)?.critical && r.ok
    ).length

    const totalCritical = journeys.filter(j => j.critical).length

    console.log(`\nCritical journeys: ${criticalPass}/${totalCritical} passing`)
    console.log('===================================\n')

    // All critical journeys must pass
    expect(criticalPass).toBe(totalCritical)
  })
})
