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
  title: '用友 U9 cloud 离散制造 ERP 解决方案 | 项目化制造与成本核算',
  description: '用友 U9 cloud 面向中大型离散制造企业，提供项目化制造、个性化定制、智能工厂、经营全球化、阿米巴经营等全场景闭环应用，护航制造企业高效成长。',
  keywords: ['U9 cloud', '数智制造', '离散制造 ERP', '智能工厂', '多组织协同', '用友 ERP'],
  openGraph: {
    title: '用友 U9 cloud 离散制造 ERP 解决方案',
    description: '面向中大型离散制造企业，提供项目化制造、智能工厂、经营全球化等全场景闭环应用。',
  },
}

export default function U9CloudProductPage() {
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
        url="https://www.iboran.com/products/u9-cloud"
        variant="product"
        showDecisionFramework
      />
      <CTASection />
    </div>
  )
}
