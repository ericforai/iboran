import React from 'react'
import type { Metadata } from 'next'
import Hero from './Hero'
import TargetAudience from './TargetAudience'
import DeliveryMethodology from './DeliveryMethodology'
import Capabilities from './Capabilities'
import DeliveryScope from './DeliveryScope'
import TechSpecs from './TechSpecs'
import TrustProof from './TrustProof'
import FAQ from './FAQ'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: '合同管理系统 - 合同全生命周期数智化管理解决方案 | 泊冉',
  description: '泊冉合同管理系统提供从合同起草、智能内审、电子签章到履约监控、财务对账及自动归档的一站式管理。集成法大大、财务系统，助力企业规范流程、规避风险。',
  keywords: '合同管理系统, 电子合同, 电子签章, 履约预警, 数字化法务, 法大大集成, 泊冉',
  openGraph: {
    title: '合同管理系统 - 合同全生命周期数智化管理解决方案',
    description: '从合同起草、智能内审、电子签章到履约监控、财务对账及自动归档的一站式管理。',
  },
}

export default function ContractManagementPage() {
  return (
    <div className="bg-white">
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <TargetAudience />
      <DeliveryMethodology />
      <Capabilities />
      <DeliveryScope />
      <TechSpecs />
      <TrustProof />
      <FAQ />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/products/contract-management"
        variant="product"
        showDecisionFramework
      />
      <CTASection />
      
      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            'name': '泊冉合同管理系统',
            'applicationCategory': 'BusinessApplication',
            'operatingSystem': 'Web, Android, iOS',
            'description': '一站式合同全生命周期管理平台，涵盖电子签约、合规审核与履约监控。',
            'offers': {
              '@type': 'Offer',
              'price': '0',
              'priceCurrency': 'CNY',
              'description': '预约演示获取定制报价'
            },
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '4.9',
              'reviewCount': '500'
            }
          })
        }}
      />
    </div>
  )
}
