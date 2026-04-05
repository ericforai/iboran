import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import HowItWorks from './HowItWorks'
import CustomerSuccess from './CustomerSuccess'
import CTASection from './CTASection'

const solutionData = {
  name: 'NexSCM 全链路智能周边供应链操作系统',
  tagline: '用数据驱动创意，变热度为价值',
  description: 'NexSCM 专为 IP 持有者、品牌商与制造商打造，整合智能 IP 企划、聚合询价、生产数字孪生及自适应补货四大核心支柱，助力企业提升资源分配效率并降低开发风险。'
}

export const metadata: Metadata = {
  title: `${solutionData.name} | 专业 IP 衍生品数字化方案 | 泊冉软件`,
  description: solutionData.description.slice(0, 160),
  keywords: ['NexSCM', '周边供应链', 'IP衍生品', '智能制造', '数字孪生', '补货算法', '泊冉软件', '周边开发'],
  alternates: {
    canonical: '/solution/nexscm',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: solutionData.name,
    description: solutionData.description.slice(0, 160),
    type: 'website',
    url: 'https://iboran.com/solution/nexscm',
    siteName: '泊冉软件',
    locale: 'zh_CN',
    images: [
      {
        url: '/assets/solution-nexscm-og.png',
        width: 1200,
        height: 630,
        alt: solutionData.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: solutionData.name,
    description: solutionData.description.slice(0, 160),
    images: ['/assets/solution-nexscm-og.png'],
  },
}

export default function NexSCMSolutionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: solutionData.name,
    description: solutionData.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Windows, macOS, Linux, Android, iOS',
    softwareVersion: 'v2.0',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '128',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'CNY',
    },
    publisher: {
      '@type': 'Organization',
      name: '泊冉软件',
      url: 'https://iboran.com',
      logo: 'https://iboran.com/logo.png',
    },
  }

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. Hero Section */}
      <Hero 
        title="NexSCM 全链路智能周边供应链操作系统"
        tagline={solutionData.tagline}
        description={solutionData.description}
      />

      {/* 2. Pain Points */}
      <PainPoints />

      {/* 3. Core Features */}
      <Features />

      {/* 4. Value Metrics */}
      <ValueSection />

      {/* 5. How It Works (Workflow) */}
      <HowItWorks />

      {/* 6. Customer Success */}
      <CustomerSuccess />

      {/* 7. Bottom CTA */}
      <CTASection />
    </main>
  )
}
