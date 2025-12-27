import React from 'react'

export type GEOJsonLdProps = {
  title: string
  description?: string
  faqs?: { question: string; answer: string }[] | null
  url: string
  image?: string
}

export const GEOJsonLd: React.FC<GEOJsonLdProps> = ({ title, description, faqs, url, image }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs?.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })) || [],
    author: {
      '@type': 'Organization',
      name: '泊冉软件（上海）',
      url: 'https://www.iboran.com',
    },
    publisher: {
      '@type': 'Organization',
      name: '泊冉软件（上海）',
    },
  }

  // Also include Article schema for better AI search parsing
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    author: {
      '@type': 'Organization',
      name: '泊冉软件（上海）',
    },
    publisher: {
      '@type': 'Organization',
      name: '泊冉软件（上海）',
    },
    url: url,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
    </>
  )
}
