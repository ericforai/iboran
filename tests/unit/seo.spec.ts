import { describe, it, expect, vi } from 'vitest'
import { generateTitle } from '../../src/plugins/index'

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
})
