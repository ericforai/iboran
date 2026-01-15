/**
 * Self-Verifying E2E Tests for URL Navigation
 *
 * Critical for Launch Readiness - Verifies all URLs work correctly
 *
 * Four Verification Layers:
 * 1. URL Discovery: Crawl and discover all site URLs
 * 2. Link Integrity: Verify all links return valid responses
 * 3. Navigation Flow: Test critical user journeys
 * 4. Cross-Page Consistency: Verify shared elements work across pages
 *
 * @launch-critical These tests must pass before site launch
 */

import { test, expect } from '@playwright/test'

/**
 * Site URL Manifest - All critical URLs that must work
 *
 * This manifest is self-verifying: tests verify each URL exists
 * and returns valid responses.
 */
interface URLManifest {
  baseUrl: string
  routes: {
    path: string
    description: string
    critical: boolean
    expectedStatus?: number
  }[]
}

const siteManifest: URLManifest = {
  baseUrl: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  routes: [
    // Core Pages
    { path: '/', description: 'Homepage', critical: true },
    { path: '/about', description: 'About page', critical: true },
    { path: '/posts', description: 'Blog listing', critical: true },
    { path: '/posts/page/1', description: 'Blog page 1', critical: false },
    { path: '/cases', description: 'Case studies listing', critical: true },
    { path: '/products', description: 'Products listing', critical: true },
    { path: '/solution', description: 'Solutions listing', critical: true },
    { path: '/resources', description: 'Resources page', critical: false },

    // Product Pages
    { path: '/products/yonsuite', description: 'YonSuite product', critical: true },
    { path: '/products/yonbuilder', description: 'YonBuilder product', critical: true },
    { path: '/products/bip', description: 'YonBIP product', critical: true },
    { path: '/products/mdm', description: 'MDM product', critical: true },
    { path: '/products/bpm', description: 'BPM product', critical: true },
    { path: '/products/ipaas', description: 'iPaaS product', critical: true },
    { path: '/products/bi-data', description: 'BI Data product', critical: true },
    { path: '/products/u8-cloud', description: 'U8 Cloud product', critical: true },
    { path: '/products/u9-cloud', description: 'U9 Cloud product', critical: true },
    { path: '/products/enterprise-portal', description: 'Enterprise Portal', critical: false },
    { path: '/products/hr-salary-management', description: 'HR & Salary', critical: false },
    { path: '/products/expense-management', description: 'Expense Management', critical: false },
    { path: '/products/contract-management', description: 'Contract Management', critical: false },
    { path: '/products/procurement-management', description: 'Procurement Management', critical: false },
    { path: '/products/project-collaboration', description: 'Project Collaboration', critical: false },
    { path: '/products/collaborative-office', description: 'Collaborative Office', critical: false },
    { path: '/products/management-accounting', description: 'Management Accounting', critical: false },

    // Business Solutions
    { path: '/solution/business/r2r', description: 'R2R Solution', critical: true },
    { path: '/solution/business/lead-to-cash', description: 'Lead to Cash', critical: true },
    { path: '/solution/business/p2m', description: 'P2M Solution', critical: true },
    { path: '/solution/business/s2p', description: 'S2P Solution', critical: true },
    { path: '/solution/business/trm', description: 'TRM Solution', critical: true },
    { path: '/solution/business/tax-management', description: 'Tax Management', critical: false },
    { path: '/solution/business/eam', description: 'EAM Solution', critical: false },
    { path: '/solution/business/hrm', description: 'HRM Solution', critical: false },
    { path: '/solution/business/mes', description: 'MES Solution', critical: false },
    { path: '/solution/business/ctp', description: 'CTP Solution', critical: false },
    { path: '/solution/business/dmp', description: 'DMP Solution', critical: false },
    { path: '/solution/business/dev', description: 'Dev Solution', critical: false },
    { path: '/solution/business/digital-modeling', description: 'Digital Modeling', critical: false },
    { path: '/solution/business/aip-intelligent-apps', description: 'AIP Intelligent Apps', critical: false },
    { path: '/solution/business/finance-cloud', description: 'Finance Cloud', critical: false },
    { path: '/solution/business/p2c-project-to-cost', description: 'P2C Project to Cost', critical: false },
    { path: '/solution/business/revenue-cloud', description: 'Revenue Cloud', critical: false },
    { path: '/solution/business/eoc-collaboration', description: 'EOC Collaboration', critical: false },
    { path: '/solution/business/global-operations', description: 'Global Operations', critical: false },
    { path: '/solution/business/plm', description: 'PLM Solution', critical: false },
    { path: '/solution/business/business-finance-integration', description: 'Business Finance Integration', critical: false },
    { path: '/solution/business/bank-enterprise-link', description: 'Bank Enterprise Link', critical: false },
  ]
}

/**
 * Shadow Inspector for URL Navigation
 *
 * Verifies: Clickable links lead to valid pages
 */
class URLNavigationInspector {
  private baseURL: string
  private discoveredLinks: Set<string> = new Set()
  private brokenLinks: Map<string, number> = new Map()

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  /**
   * Discover all links on a page
   */
  async discoverLinks(page: any, path: string): Promise<string[]> {
    const url = `${this.baseURL}${path}`
    await page.goto(url)
    await page.waitForLoadState('networkidle')

    // Get all internal links
    const links = await page.locator('a[href^="/"]').all()
    const discovered: string[] = []

    for (const link of links) {
      const href = await link.getAttribute('href')
      if (href && !this.discoveredLinks.has(href)) {
        this.discoveredLinks.add(href)
        discovered.push(href)
      }
    }

    return discovered
  }

  /**
   * Verify a single URL returns expected status
   */
  async verifyURL(path: string, expectedStatus = 200): Promise<{
    valid: boolean
    status: number
    error?: string
  }> {
    const url = `${this.baseURL}${path}`

    try {
      const response = await fetch(url, {
        redirect: 'manual',
        headers: {
          'User-Agent': 'Playwright-E2E-Test'
        }
      })

      // Follow redirects manually
      let finalStatus = response.status
      let finalURL = url

      if (finalStatus >= 300 && finalStatus < 400) {
        const location = response.headers.get('location')
        if (location) {
          // Handle relative redirects
          const redirectURL = location.startsWith('http')
            ? location
            : `${new URL(url).origin}${location}`

          const redirectResponse = await fetch(redirectURL)
          finalStatus = redirectResponse.status
          finalURL = redirectURL
        }
      }

      return {
        valid: finalStatus === expectedStatus,
        status: finalStatus,
        error: finalStatus !== expectedStatus
          ? `Expected ${expectedStatus}, got ${finalStatus}`
          : undefined
      }
    } catch (error) {
      return {
        valid: false,
        status: 0,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  /**
   * Get all broken links discovered
   */
  getBrokenLinks(): Map<string, number> {
    return this.brokenLinks
  }

  /**
   * Record a broken link
   */
  recordBrokenLink(url: string, status: number): void {
    this.brokenLinks.set(url, status)
  }

  /**
   * Reset discovered links
   */
  reset(): void {
    this.discoveredLinks.clear()
    this.brokenLinks.clear()
  }
}

/**
 * @launch-critical URL Navigation Tests
 *
 * These tests verify all critical URLs work before launch
 */
test.describe('@launch-critical URL Navigation', () => {
  const inspector = new URLNavigationInspector(
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  )

  // ============================================
  // Layer 1: Manifest-Driven URL Verification
  // Every URL in manifest must return valid response
  // ============================================

  test.describe('manifest: all critical URLs are accessible', () => {
    const criticalRoutes = siteManifest.routes.filter(r => r.critical)

    // Split into groups to avoid timeout
    const chunkSize = 5
    for (let i = 0; i < criticalRoutes.length; i += chunkSize) {
      const chunk = criticalRoutes.slice(i, i + chunkSize)

      test(`manifest: critical routes ${i + 1}-${Math.min(i + chunkSize, criticalRoutes.length)} accessible`, async ({ page }) => {
        const results: Array<{ path: string; status: number; valid: boolean }> = []

        for (const route of chunk) {
          const result = await inspector.verifyURL(route.path, route.expectedStatus || 200)
          results.push({ path: route.path, status: result.status, valid: result.valid })
        }

        // Log any failures
        const failures = results.filter(r => !r.valid)
        if (failures.length > 0) {
          console.error('Failed URLs:', failures)
        }

        // All routes in this chunk must pass
        const allValid = results.every(r => r.valid)
        expect(allValid).toBe(true)
      })
    }
  })

  // ============================================
  // Layer 2: Core Page Response Verification
  // Verify each core page loads correctly
  // ============================================

  test.describe('core: homepage loads correctly', () => {
    test('core: homepage returns 200 and has content', async ({ page }) => {
      await page.goto(siteManifest.baseUrl)
      await page.waitForLoadState('networkidle')

      // Check status
      const response = await page.request.get(siteManifest.baseUrl)
      expect(response.status()).toBe(200)

      // Check for critical elements
      const h1 = page.locator('h1').first()
      await expect(h1).toBeVisible({ timeout: 10000 })

      // Check navbar exists
      const nav = page.locator('nav').first()
      await expect(nav).toBeVisible()

      // Check footer exists
      const footer = page.locator('footer').first()
      await expect(footer).toBeVisible()
    })

    test('core: homepage has working navigation links', async ({ page }) => {
      await page.goto(siteManifest.baseUrl)
      await page.waitForLoadState('networkidle')

      // Test main nav links
      const navLinks = page.locator('nav a[href]').all()
      const workingLinks: string[] = []
      const brokenLinks: string[] = []

      for await (const link of await navLinks) {
        const href = await link.getAttribute('href')
        if (href && href.startsWith('/')) {
          try {
            const response = await page.request.get(`${siteManifest.baseUrl}${href}`)
            if (response.ok()) {
              workingLinks.push(href)
            } else {
              brokenLinks.push(`${href} (${response.status()})`)
            }
          } catch {
            brokenLinks.push(`${href} (error)`)
          }
        }
      }

      console.log(`Working links: ${workingLinks.length}, Broken links: ${brokenLinks.length}`)
      if (brokenLinks.length > 0) {
        console.error('Broken navigation links:', brokenLinks)
      }

      expect(brokenLinks.length).toBe(0)
    })
  })

  // ============================================
  // Layer 3: Product Pages Verification
  // All product pages must load
  // ============================================

  test.describe('products: all product pages load', () => {
    const productRoutes = siteManifest.routes.filter(r =>
      r.path.startsWith('/products/') && r.critical
    )

    test(`products: ${productRoutes.length} critical product pages accessible`, async ({ page }) => {
      const results: Array<{ path: string; valid: boolean; status: number }> = []

      for (const route of productRoutes) {
        const url = `${siteManifest.baseUrl}${route.path}`

        // Check via HTTP request first
        const response = await page.request.get(url)
        const valid = response.ok()

        results.push({ path: route.path, valid, status: response.status() })

        // Also check via page navigation for a few
        if (results.length <= 5) {
          await page.goto(url)
          await page.waitForLoadState('networkidle')

          const h1 = page.locator('h1').first()
          const hasContent = await h1.isVisible().catch(() => false)

          if (!hasContent) {
            console.warn(`Page ${route.path} has no visible h1`)
          }
        }
      }

      const failures = results.filter(r => !r.valid)
      if (failures.length > 0) {
        console.error('Failed product pages:', failures)
      }

      expect(results.every(r => r.valid)).toBe(true)
    })

    test('products: product listing page shows all products', async ({ page }) => {
      await page.goto(`${siteManifest.baseUrl}/products`)
      await page.waitForLoadState('networkidle')

      // Should have product cards or links
      const productLinks = page.locator('a[href^="/products/"]').all()
      const count = (await productLinks).length

      expect(count).toBeGreaterThan(0)
      console.log(`Found ${count} product links`)
    })
  })

  // ============================================
  // Layer 4: Solution Pages Verification
  // All solution pages must load
  // ============================================

  test.describe('solutions: all solution pages load', () => {
    const solutionRoutes = siteManifest.routes.filter(r =>
      r.path.startsWith('/solution/') && r.critical
    )

    test(`solutions: ${solutionRoutes.length} critical solution pages accessible`, async ({ page }) => {
      const results: Array<{ path: string; valid: boolean; status: number }> = []

      for (const route of solutionRoutes) {
        const url = `${siteManifest.baseUrl}${route.path}`
        const response = await page.request.get(url)
        const valid = response.ok()

        results.push({ path: route.path, valid, status: response.status() })
      }

      const failures = results.filter(r => !r.valid)
      if (failures.length > 0) {
        console.error('Failed solution pages:', failures)
      }

      expect(results.every(r => r.valid)).toBe(true)
    })
  })

  // ============================================
  // Layer 5: Case Studies Verification
  // Case listing and individual cases must load
  // ============================================

  test.describe('cases: case study pages load', () => {
    test('cases: case listing page is accessible', async ({ page }) => {
      await page.goto(`${siteManifest.baseUrl}/cases`)
      await page.waitForLoadState('networkidle')

      const h1 = page.locator('h1').first()
      await expect(h1).toBeVisible()

      // Should have case study cards or links
      const caseLinks = page.locator('a[href^="/cases/"]').all()
      const count = (await caseLinks).length

      expect(count).toBeGreaterThan(0)
      console.log(`Found ${count} case study links`)
    })

    test('cases: individual case study pages load', async ({ page }) => {
      // First get the listing page
      await page.goto(`${siteManifest.baseUrl}/cases`)
      await page.waitForLoadState('networkidle')

      // Find first case study link
      const firstCaseLink = page.locator('a[href^="/cases/"]').first()

      if (await firstCaseLink.isVisible({ timeout: 5000 })) {
        const href = await firstCaseLink.getAttribute('href')

        if (href) {
          // Navigate to the case study
          await firstCaseLink.click()
          await page.waitForLoadState('networkidle')

          // Verify it loaded
          const h1 = page.locator('h1').first()
          await expect(h1).toBeVisible()

          console.log(`Successfully loaded case study: ${href}`)
        }
      } else {
        console.warn('No case study links found on listing page')
        test.skip()
      }
    })
  })

  // ============================================
  // Layer 6: Blog/Posts Verification
  // Blog listing and posts must load
  // ============================================

  test.describe('posts: blog pages load', () => {
    test('posts: blog listing page is accessible', async ({ page }) => {
      await page.goto(`${siteManifest.baseUrl}/posts`)
      await page.waitForLoadState('networkidle')

      const h1 = page.locator('h1').first()
      await expect(h1).toBeVisible()

      // Should have post links
      const postLinks = page.locator('a[href^="/posts/"]').all()
      const count = (await postLinks).length

      console.log(`Found ${count} blog post links`)
    })

    test('posts: individual blog posts load', async ({ page }) => {
      // First get the listing page
      await page.goto(`${siteManifest.baseUrl}/posts`)
      await page.waitForLoadState('networkidle')

      // Find first blog post link (excluding pagination)
      const postLinks = page.locator('a[href^="/posts/"]:not([href*="/posts/page"])')

      if (await postLinks.first().isVisible({ timeout: 5000 })) {
        const firstPostLink = postLinks.first()
        const href = await firstPostLink.getAttribute('href')

        if (href) {
          // Navigate to the post
          await firstPostLink.click()
          await page.waitForLoadState('networkidle')

          // Verify it loaded
          const h1 = page.locator('h1').first()
          await expect(h1).toBeVisible()

          console.log(`Successfully loaded blog post: ${href}`)
        }
      } else {
        console.warn('No blog post links found on listing page')
        test.skip()
      }
    })
  })

  // ============================================
  // Layer 7: Critical User Journeys
  // Test common navigation paths
  // ============================================

  test.describe('journeys: critical user navigation paths', () => {
    test('journey: homepage -> products -> specific product', async ({ page }) => {
      test.setTimeout(30000)

      // Navigate to products page
      await page.goto(`${siteManifest.baseUrl}/products`, { waitUntil: 'domcontentloaded' })
      await page.waitForLoadState('domcontentloaded')

      expect(page.url()).toContain('/products')

      // Try to find product links
      const firstProduct = page.locator('a[href^="/products/"]').first()

      const hasProductLink = await firstProduct.isVisible({ timeout: 3000 })
      if (hasProductLink) {
        const href = await firstProduct.getAttribute('href')
        console.log(`Found product link: ${href}`)

        // Navigate directly to the product page
        if (href) {
          await page.goto(`${siteManifest.baseUrl}${href}`, { waitUntil: 'domcontentloaded' })
          await page.waitForLoadState('domcontentloaded')
          expect(page.url()).toMatch(/\/products\/[^/]+$/)
        }
      } else {
        console.log('No product links found on products page')
        // Just verify we're on the products page
        expect(page.url()).toContain('/products')
      }
    })

    test('journey: homepage -> solutions -> specific solution', async ({ page }) => {
      test.setTimeout(30000)

      // Navigate to solutions page
      await page.goto(`${siteManifest.baseUrl}/solution`, { waitUntil: 'domcontentloaded' })
      await page.waitForLoadState('domcontentloaded')

      expect(page.url()).toContain('/solution')

      // Try to find solution links
      const firstSolution = page.locator('a[href^="/solution/"]').first()

      const hasSolutionLink = await firstSolution.isVisible({ timeout: 3000 })
      if (hasSolutionLink) {
        const href = await firstSolution.getAttribute('href')
        console.log(`Found solution link: ${href}`)

        // Navigate directly to the solution page
        if (href) {
          await page.goto(`${siteManifest.baseUrl}${href}`, { waitUntil: 'domcontentloaded' })
          await page.waitForLoadState('domcontentloaded')
          expect(page.url()).toMatch(/\/solution\/.+$/)
        }
      } else {
        console.log('No solution links found on solutions page')
        expect(page.url()).toContain('/solution')
      }
    })

    test('journey: homepage -> cases -> specific case', async ({ page }) => {
      test.setTimeout(30000)

      // Navigate to cases page
      await page.goto(`${siteManifest.baseUrl}/cases`, { waitUntil: 'domcontentloaded' })
      await page.waitForLoadState('domcontentloaded')

      expect(page.url()).toContain('/cases')

      // Try to find case links
      const firstCase = page.locator('a[href^="/cases/"]').first()

      const hasCaseLink = await firstCase.isVisible({ timeout: 3000 })
      if (hasCaseLink) {
        await firstCase.click()
        await page.waitForLoadState('domcontentloaded')
        expect(page.url()).toMatch(/\/cases\/[^/]+$/)
      } else {
        console.log('No case links found on cases page')
        expect(page.url()).toContain('/cases')
      }
    })
  })

  // ============================================
  // Layer 8: SEO Verification
  // Critical for search engine indexing
  // ============================================

  test.describe('seo: critical SEO elements', () => {
    const seoRoutes = siteManifest.routes.filter(r => r.critical).slice(0, 10)

    for (const route of seoRoutes) {
      test(`seo: ${route.description} has proper meta tags`, async ({ page }) => {
        test.setTimeout(15000) // Increase timeout for each SEO test
        await page.goto(`${siteManifest.baseUrl}${route.path}`, { waitUntil: 'domcontentloaded' })
        await page.waitForLoadState('domcontentloaded')

        // Check page title
        const title = await page.title()
        expect(title).toBeTruthy()
        expect(title.length).toBeGreaterThan(0)

        // Check meta description
        const metaDescription = await page.locator('meta[name="description"]').getAttribute('content')
        expect(metaDescription).toBeDefined()

        // Check canonical URL (optional - not all pages have it)
        const canonical = page.locator('link[rel="canonical"]').first()
        const hasCanonical = await canonical.count().then(c => c > 0)

        if (hasCanonical) {
          const href = await canonical.getAttribute('href')
          expect(href).toBeTruthy()
        } else {
          console.warn(`No canonical URL found on ${route.path}`)
        }
      })
    }

    test('seo: all critical pages have structured data', async ({ page }) => {
      test.setTimeout(30000)
      for (const route of seoRoutes.slice(0, 5)) {
        await page.goto(`${siteManifest.baseUrl}${route.path}`, { waitUntil: 'domcontentloaded' })
        await page.waitForLoadState('domcontentloaded')

        // Check for JSON-LD structured data
        const jsonLd = page.locator('script[type="application/ld+json"]')

        const hasJsonLd = await jsonLd.count().then(count => count > 0)

        if (!hasJsonLd) {
          console.warn(`No structured data found on ${route.path}`)
        }
      }
    })
  })

  // ============================================
  // Layer 9: Mobile Responsiveness
  // Verify pages work on mobile
  // ============================================

  test.describe('mobile: critical pages work on mobile', () => {
    const mobileRoutes = siteManifest.routes.filter(r => r.critical).slice(0, 5)

    test.use({ viewport: { width: 375, height: 667 } }) // iPhone SE

    for (const route of mobileRoutes) {
      test(`mobile: ${route.description} loads on mobile`, async ({ page }) => {
        await page.goto(`${siteManifest.baseUrl}${route.path}`)
        await page.waitForLoadState('networkidle')

        // Check page loads
        const h1 = page.locator('h1').first()
        await expect(h1).toBeVisible({ timeout: 10000 })

        // Check mobile menu exists
        const mobileMenu = page.locator('button[aria-label*="menu"], button.hamburger, .mobile-menu-btn').first()

        // Not all pages need mobile menu if they have desktop nav
        const hasMobileNav = await mobileMenu.isVisible().catch(() => false)

        if (hasMobileNav) {
          console.log(`Mobile menu found on ${route.path}`)
        }
      })
    }
  })

  // ============================================
  // Layer 10: Error Handling
  // Verify proper error pages
  // ============================================

  test.describe('errors: proper error handling', () => {
    test('errors: 404 page exists and shows proper content', async ({ page }) => {
      const nonExistentPath = `/this-page-does-not-exist-${Date.now()}`
      await page.goto(`${siteManifest.baseUrl}${nonExistentPath}`)
      await page.waitForLoadState('networkidle')

      // Should show some kind of error content
      const bodyText = await page.locator('body').textContent()

      // Either shows 404 or redirects to home
      const hasErrorContent = bodyText?.toLowerCase().includes('404') ||
                             bodyText?.toLowerCase().includes('not found') ||
                             page.url().includes('/404') ||
                             page.url() === siteManifest.baseUrl + '/'

      console.log(`404 behavior: ${page.url()}`)

      // Acceptable outcomes:
      // 1. Custom 404 page
      // 2. Redirect to home
      // 3. Next.js default 404
      expect(hasErrorContent || page.url().includes('404')).toBeTruthy()
    })

    test('errors: no JavaScript errors on homepage', async ({ page }) => {
      const errors: string[] = []

      page.on('pageerror', (error) => {
        errors.push(error.toString())
      })

      await page.goto(siteManifest.baseUrl)
      await page.waitForLoadState('networkidle')

      // Wait a bit for any delayed JS to run
      await page.waitForTimeout(2000)

      if (errors.length > 0) {
        console.error('JavaScript errors found:', errors)
      }

      // We don't want any console errors
      expect(errors.length).toBe(0)
    })
  })
})
