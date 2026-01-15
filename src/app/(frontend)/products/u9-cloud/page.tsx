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

export const metadata: Metadata = {
  title: '用友 U9 cloud - 离散制造数智制造全场景平台 | 交付导向型 ERP',
  description: '用友 U9 cloud 面向中大型离散制造企业，提供项目化制造、个性化定制、智能工厂、经营全球化、阿米巴经营等全场景闭环应用，护航制造企业高效成长。',
  keywords: ['U9 cloud', '数智制造', '离散制造 ERP', '智能工厂', '多组织协同', '用友 ERP'],
  openGraph: {
    title: '用友 U9 cloud - 离散制造数智制造全场景平台',
    description: '面向中大型离散制造企业，提供项目化制造、智能工厂、经营全球化等全场景闭环应用。',
  },
}

export default function U9CloudProductPage() {
  return (
    <div className="bg-white">
      <Hero />
      <TargetAudience />
      <DeliveryMethodology />
      <Capabilities />
      <DeliveryScope />
      <TechSpecs />
      <TrustProof />
      <FAQ />
      <CTASection />
    </div>
  )
}
