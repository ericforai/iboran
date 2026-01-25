import React from 'react'
import type { Metadata } from 'next'
import { Hero } from './Hero'
import { TargetAudience } from './TargetAudience'
import { DeliveryMethodology } from './DeliveryMethodology'
import { Capabilities } from './Capabilities'
import { DeliveryScope } from './DeliveryScope'
import { TechSpecs } from './TechSpecs'
import { TrustProof } from './TrustProof'
import { FAQ } from './FAQ'
import { CTASection } from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: '项目协同管理系统_全生命周期进度监控与跨部门协作平台 - 泊冉软件',
  description: '泊冉软件提供的项目协同管理系统，解决项目进度不可控、跨部门协作难、过程管理不透明等核心痛点。支持从立项、计划到交付的全过程监管，助力组织打造高效统一的项目协作平台。',
  keywords: '项目管理系统,项目协同,进度监控,协作平台,协同COP,数智化转型',
  openGraph: {
    title: '项目协同管理系统 - 全生命周期进度监控与跨部门协作平台',
    description: '支持从立项、计划到交付的全过程监管，助力组织打造高效统一的项目协作平台。',
  },
}

export default function ProjectCollaborationPage() {
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
        url="https://www.iboran.com/products/project-collaboration"
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
            '@type': 'Product',
            name: '项目协同管理系统',
            description: '助力组织打造高效、统一、互通的项目管理平台，解决进度不可控与跨部门协作难点。',
            brand: {
              '@type': 'Brand',
              name: '协同 COP / 泊冉软件',
            },
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />
    </div>
  )
}
