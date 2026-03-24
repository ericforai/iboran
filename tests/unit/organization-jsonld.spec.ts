import React from 'react'
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import { OrganizationJsonLd } from '../../src/components/OrganizationJsonLd'

describe('OrganizationJsonLd', () => {
  it('renders parseable Organization schema with required fields', () => {
    const { container } = render(React.createElement(OrganizationJsonLd))
    const script = container.querySelector('script[type="application/ld+json"]')

    expect(script).toBeTruthy()

    const payload = script?.textContent || '{}'
    const parsed = JSON.parse(payload)

    expect(parsed['@context']).toBe('https://schema.org')
    expect(parsed['@type']).toBe('Organization')
    expect(parsed.name).toBe('泊冉软件')
    expect(parsed.url).toBe('https://www.iboran.com')
    expect(parsed.logo).toBe('https://www.iboran.com/logo.png')
    expect(Array.isArray(parsed.sameAs)).toBe(true)
    expect(parsed.contactPoint?.contactType).toBe('customer service')
    expect(parsed.address?.addressCountry).toBe('CN')
  })
})
