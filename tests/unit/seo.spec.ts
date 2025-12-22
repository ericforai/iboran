import { describe, it, expect, vi } from 'vitest'
import { generateTitle, generateDescription } from '../../src/plugins/index'

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
})
