import { describe, it, expect, vi } from 'vitest'
import { generateTitle, generateDescription, generateURL } from '../../src/plugins/index'
import { generateMeta } from '../../src/utilities/generateMeta'
import { getServerSideURL } from '../../src/utilities/getURL'

describe('SEO Plugin', () => {
  describe('generateTitle', () => {
    it('should generate title with "泊冉软件" suffix when doc title is present', () => {
      const doc = { title: 'Test Page' } as any
      const title = generateTitle({ doc, locale: 'en' })
      expect(title).toBe('Test Page | 泊冉软件')
    })

    it('should return "泊冉软件" when doc title is missing', () => {
      const doc = {} as any
      const title = generateTitle({ doc, locale: 'en' })
      expect(title).toBe('泊冉软件')
    })
  })

  describe('generateDescription', () => {
    it('should use doc.summary if present', () => {
      const doc = { summary: 'This is a summary.' } as any
      const desc = generateDescription({ doc, locale: 'en' })
      expect(desc).toBe('This is a summary.')
    })

    it('should return empty string if no summary', () => {
      const doc = { title: 'No Summary' } as any
      const desc = generateDescription({ doc, locale: 'en' })
      expect(desc).toBe('')
    })
  })

  describe('generateURL', () => {
    it('should generate URL for pages (root prefix)', () => {
      const doc = { slug: 'about' } as any
      const url = generateURL({ doc, collectionConfig: { slug: 'pages' } as any } as any)
      expect(url).toContain('/about')
      expect(url).not.toContain('/pages/about')
    })

    it('should generate URL for posts (/posts prefix)', () => {
      const doc = { slug: 'news-item' } as any
      const url = generateURL({ doc, collectionConfig: { slug: 'posts' } as any } as any)
      expect(url).toContain('/posts/news-item')
    })

    it('should generate URL for industry-solutions (/solution/industry prefix)', () => {
      const doc = { slug: 'semiconductor' } as any
      const url = generateURL({ doc, collectionConfig: { slug: 'industry-solutions' } as any } as any)
      expect(url).toContain('/solution/industry/semiconductor')
    })

    it('should generate URL for success-stories (/success-stories prefix)', () => {
      const doc = { slug: 'client-a' } as any
      const url = generateURL({ doc, collectionConfig: { slug: 'success-stories' } as any } as any)
      expect(url).toContain('/success-stories/client-a')
    })
  })

  describe('generateMeta', () => {
    it('should include alternates.canonical with correct path', async () => {
      const doc = { slug: 'test-slug' } as any
      const meta = await generateMeta({ doc, collection: 'industry-solutions' })
      expect(meta.alternates?.canonical).toBe(`${getServerSideURL()}/solution/industry/test-slug`)
    })

    it('should use root as canonical if no slug', async () => {
      const doc = {} as any
      const meta = await generateMeta({ doc })
      expect(meta.alternates?.canonical).toBe(`${getServerSideURL()}/`)
    })
  })
})
