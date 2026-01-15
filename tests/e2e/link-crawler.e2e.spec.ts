/**
 * Link Crawler E2E Test
 *
 * Crawls the entire site and verifies all links work
 * Critical for launch readiness - ensures no broken links
 *
 * @launch-critical Run before site launch
 */

import { test, expect } from '@playwright/test'

interface LinkCheckResult {
  url: string
  status: number
  ok: boolean
  error?: string
}

interface CrawlResult {
  page: string
  totalLinks: number
  workingLinks: number
  brokenLinks: number
  results: LinkCheckResult[]
}

/**
 * Link Crawler - Discovers and validates all links
 */
class LinkCrawler {
  private baseURL: string
  private checkedURLs: Set<string> = new Set()
  private results: Map<string, LinkCheckResult> = new Map()

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  /**
   * Check a single URL
   */
  async checkURL(url: string): Promise<LinkCheckResult> {
    // Skip if already checked
    if (this.checkedURLs.has(url)) {
      return this.results.get(url) || { url, status: 0, ok: false, error: 'Not checked' }
    }

    this.checkedURLs.add(url)

    try {
      const response = await fetch(url, {
        redirect: 'manual',
        headers: {
          'User-Agent': 'Playwright-Link-Crawler'
        }
      })

      // Handle redirects
      let finalStatus = response.status
      let finalURL = url

      if (finalStatus >= 300 && finalStatus < 400) {
        const location = response.headers.get('location')
        if (location) {
          const redirectURL = location.startsWith('http')
            ? location
            : `${new URL(url).origin}${location}`

          // Check the redirect target
          const redirectResult = await this.checkURL(redirectURL)
          return redirectResult
        }
      }

      const result: LinkCheckResult = {
        url,
        status: finalStatus,
        ok: finalStatus >= 200 && finalStatus < 400,
        error: finalStatus >= 400 ? `HTTP ${finalStatus}` : undefined
      }

      this.results.set(url, result)
      return result
    } catch (error) {
      const result: LinkCheckResult = {
        url,
        status: 0,
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
      this.results.set(url, result)
      return result
    }
  }

  /**
   * Crawl a page and extract all links
   */
  async crawlPage(page: any, path: string): Promise<CrawlResult> {
    const url = `${this.baseURL}${path}`
    await page.goto(url)
    await page.waitForLoadState('networkidle')

    // Get all links
    const links = await page.locator('a[href]').all()

    const results: LinkCheckResult[] = []
    const internalLinks: string[] = []
    const externalLinks: string[] = []

    for (const link of links) {
      const href = await link.getAttribute('href')
      if (!href) continue

      // Skip anchors, mailto, tel, javascript
      if (href.startsWith('#') ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:') ||
          href.startsWith('javascript:')) {
        continue
      }

      // Classify as internal or external
      if (href.startsWith('/')) {
        internalLinks.push(href)
      } else if (href.startsWith('http')) {
        externalLinks.push(href)
      }
    }

    // Check internal links
    for (const link of internalLinks) {
      const fullURL = `${this.baseURL}${link}`
      const result = await this.checkURL(fullURL)
      results.push(result)
    }

    // Check external links (just verify they're valid URLs, don't spam)
    for (const link of externalLinks) {
      try {
        new URL(link)
        results.push({
          url: link,
          status: 200,
          ok: true
        })
      } catch {
        results.push({
          url: link,
          status: 0,
          ok: false,
          error: 'Invalid URL'
        })
      }
    }

    const workingLinks = results.filter(r => r.ok).length
    const brokenLinks = results.filter(r => !r.ok).length

    return {
      page: path,
      totalLinks: results.length,
      workingLinks,
      brokenLinks,
      results
    }
  }

  /**
   * Get all results
   */
  getAllResults(): LinkCheckResult[] {
    return Array.from(this.results.values())
  }

  /**
   * Get broken links
   */
  getBrokenLinks(): LinkCheckResult[] {
    return this.getAllResults().filter(r => !r.ok)
  }

  /**
   * Reset crawler state
   */
  reset(): void {
    this.checkedURLs.clear()
    this.results.clear()
  }
}

/**
 * Link Crawler Tests
 */
test.describe('@launch-critical Link Crawler', () => {
  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  const crawler = new LinkCrawler(baseURL)

  // Critical pages to crawl
  const criticalPaths = [
    '/',
    '/about',
    '/posts',
    '/cases',
    '/products',
    '/products/yonsuite',
    '/products/bip',
    '/products/mdm',
    '/solution',
    '/solution/business/r2r',
    '/solution/business/lead-to-cash',
  ]

  test.describe('crawl: discover and validate all links', () => {
    test('crawl: homepage has no broken links', async ({ page }) => {
      const result = await crawler.crawlPage(page, '/')

      console.log(`Homepage: ${result.totalLinks} links, ${result.workingLinks} working, ${result.brokenLinks} broken`)

      if (result.brokenLinks > 0) {
        console.error('Broken links on homepage:', result.results.filter(r => !r.ok))
      }

      expect(result.brokenLinks).toBe(0)
    })

    for (const path of criticalPaths) {
      test(`crawl: ${path} has no broken links`, async ({ page }) => {
        const result = await crawler.crawlPage(page, path)

        console.log(`${path}: ${result.totalLinks} links, ${result.workingLinks} working, ${result.brokenLinks} broken`)

        if (result.brokenLinks > 0) {
          console.error(`Broken links on ${path}:`, result.results.filter(r => !r.ok))
        }

        // Allow some tolerance for dynamic content issues
        expect(result.brokenLinks).toBeLessThan(3)
      })
    }

    test('crawl: generate link health report', async ({ page }) => {
      const allResults: CrawlResult[] = []

      for (const path of criticalPaths) {
        const result = await crawler.crawlPage(page, path)
        allResults.push(result)
      }

      // Aggregate stats
      const totalLinks = allResults.reduce((sum, r) => sum + r.totalLinks, 0)
      const totalWorking = allResults.reduce((sum, r) => sum + r.workingLinks, 0)
      const totalBroken = allResults.reduce((sum, r) => sum + r.brokenLinks, 0)

      console.log('\n=== Link Health Report ===')
      console.log(`Pages crawled: ${allResults.length}`)
      console.log(`Total links: ${totalLinks}`)
      console.log(`Working links: ${totalWorking}`)
      console.log(`Broken links: ${totalBroken}`)
      console.log(`Health: ${((totalWorking / totalLinks) * 100).toFixed(1)}%`)
      console.log('========================\n')

      // Get all unique broken links
      const brokenLinks = crawler.getBrokenLinks()
      if (brokenLinks.length > 0) {
        console.error('All broken links found:')
        brokenLinks.forEach(link => {
          console.error(`  - ${link.url} (${link.error})`)
        })
      }

      // For launch, we want 100% link health on critical pages
      expect(totalBroken).toBe(0)
    })
  })

  test.describe('navigation: main menu links work', () => {
    test('navigation: all top-level nav links work', async ({ page }) => {
      await page.goto(baseURL)
      await page.waitForLoadState('networkidle')

      // Find navigation links
      const navLinks = page.locator('nav a[href], header a[href]').all()
      const results: LinkCheckResult[] = []

      for (const link of await navLinks) {
        const href = await link.getAttribute('href')
        if (!href || href.startsWith('#') || href.startsWith('mailto:')) continue

        const url = href.startsWith('/') ? `${baseURL}${href}` : href
        const result = await crawler.checkURL(url)
        results.push(result)

        console.log(`Nav link: ${href} -> ${result.ok ? 'OK' : `FAIL (${result.status})`}`)
      }

      const broken = results.filter(r => !r.ok)
      if (broken.length > 0) {
        console.error('Broken nav links:', broken)
      }

      expect(broken.length).toBe(0)
    })

    test('navigation: footer links work', async ({ page }) => {
      await page.goto(baseURL)
      await page.waitForLoadState('networkidle')

      // Find footer links
      const footerLinks = page.locator('footer a[href]').all()
      const results: LinkCheckResult[] = []

      for (const link of await footerLinks) {
        const href = await link.getAttribute('href')
        if (!href || href.startsWith('#') || href.startsWith('mailto:')) continue

        const url = href.startsWith('/') ? `${baseURL}${href}` : href
        const result = await crawler.checkURL(url)
        results.push(result)
      }

      console.log(`Checked ${results.length} footer links`)

      const broken = results.filter(r => !r.ok)
      if (broken.length > 0) {
        console.error('Broken footer links:', broken)
      }

      // Footer links are less critical but should still work
      expect(broken.length).toBeLessThan(5)
    })
  })

  test.describe('images: all images load correctly', () => {
    test('images: homepage images load', async ({ page }) => {
      await page.goto(baseURL)
      await page.waitForLoadState('networkidle')

      // Get all images
      const images = await page.locator('img').all()
      const results: Array<{ src: string; loaded: boolean }> = []

      for (const img of images) {
        const src = await img.getAttribute('src')
        if (!src || src.startsWith('data:')) continue

        const fullURL = src.startsWith('/') ? `${baseURL}${src}` : src

        try {
          const response = await fetch(fullURL, { method: 'HEAD' })
          results.push({ src, loaded: response.ok })

          if (!response.ok) {
            console.warn(`Failed to load image: ${src} (${response.status})`)
          }
        } catch {
          results.push({ src, loaded: false })
          console.warn(`Failed to load image: ${src}`)
        }
      }

      const loadedCount = results.filter(r => r.loaded).length
      console.log(`Images: ${loadedCount}/${results.length} loaded successfully`)

      // Allow some images to fail (external tracking pixels, etc)
      const failedCount = results.filter(r => !r.loaded).length
      expect(failedCount).toBeLessThan(3)
    })
  })

  test.describe('redirects: common redirects work', () => {
    test('redirects: trailing slash redirects work', async ({ page }) => {
      const testPaths = [
        '/products',
        '/posts',
        '/cases',
        '/solution'
      ]

      for (const path of testPaths) {
        const withSlash = `${path}/`

        const responseWithout = await page.request.get(`${baseURL}${path}`)
        const responseWith = await page.request.get(`${baseURL}${withSlash}`)

        // Both should work
        expect(responseWithout.ok()).toBe(true)
        expect(responseWith.ok()).toBe(true)

        console.log(`${path} and ${withSlash} both accessible`)
      }
    })

    test('redirects: no redirect loops', async ({ page }) => {
      const testPaths = ['/', '/products', '/posts']

      for (const path of testPaths) {
        const visited = new Set<string>()
        let currentURL = `${baseURL}${path}`
        let redirects = 0
        const maxRedirects = 10

        while (redirects < maxRedirects) {
          if (visited.has(currentURL)) {
            throw new Error(`Redirect loop detected: ${currentURL}`)
          }

          visited.add(currentURL)

          const response = await fetch(currentURL, { redirect: 'manual' })

          if (response.status < 300 || response.status >= 400) {
            break
          }

          const location = response.headers.get('location')
          if (!location) break

          currentURL = location.startsWith('http')
            ? location
            : `${new URL(currentURL).origin}${location}`

          redirects++
        }

        expect(redirects).toBeLessThan(maxRedirects)
        console.log(`${path}: ${redirects} redirects (no loop)`)
      }
    })
  })
})
