import React from 'react'

export const OrganizationJsonLd: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '泊冉软件',
    url: 'https://www.iboran.com',
    logo: 'https://www.iboran.com/logo.png', // Assuming logo path
    description: '用友合作伙伴，深耕智能制造、新零售及生物医药行业12年。',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '曹杨路1888号星光耀广场1号楼1005室',
      addressLocality: '普陀区',
      addressRegion: '上海市',
      postalCode: '200333',
      addressCountry: 'CN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-400-9955-161',
      contactType: 'customer service',
      areaServed: 'CN',
      availableLanguage: ['Chinese']
    },
    sameAs: [
       // Add social profiles if any
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
