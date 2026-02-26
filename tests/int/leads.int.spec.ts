import { describe, expect, it } from 'vitest'
import { Leads } from '../../src/collections/Leads'

describe('Leads Collection', () => {
  it('exposes source path fields and shows them in admin list', () => {
    expect(Leads).toBeDefined()
    expect(Leads.slug).toBe('leads')

    const fields = Leads.fields.map((field) => ('name' in field ? field.name : ''))
    expect(fields).toContain('source')
    expect(fields).toContain('sourcePath')
    expect(fields).toContain('sourcePageUrl')

    expect(Leads.admin?.defaultColumns).toContain('sourcePath')
    expect(Leads.admin?.defaultColumns).toContain('sourcePageUrl')
  })
})
