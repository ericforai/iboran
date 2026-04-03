import React from 'react'

export interface ProductJsonLdProps {
  name: string
  description: string
  image?: string
  brand?: string
  offers?: {
    price: string
    priceCurrency: string
    availability?: string
    /** schema.org Offer.url — 产品/服务报价页链接 */
    url?: string
  }
}

export const ProductJsonLd: React.FC<ProductJsonLdProps> = ({
  name,
  description,
  image,
  brand = '泊冉科技 StaffAI',
  offers,
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    image: image || 'https://www.iboran.com/assets/products/staff-ai/hero.png',
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    publisher: {
      '@type': 'Organization',
      name: '上海泊冉软件有限公司',
      url: 'https://www.iboran.com',
    },
    ...(offers && {
      offers: {
        '@type': 'Offer',
        price: offers.price,
        priceCurrency: offers.priceCurrency,
        availability: offers.availability || 'https://schema.org/InStock',
        ...(offers.url ? { url: offers.url } : {}),
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
