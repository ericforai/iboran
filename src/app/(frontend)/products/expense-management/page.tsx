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
  title: '费控管理系统 - 业财一体化费控解决方案 - 泊冉软件',
  description: '费控管理系统通过融合协同、费控、财务系统，实现从预算、报销、票据到商旅、银企直联、会计电子档案的全链条闭环管理，显著提升效率、降低合规风险。',
  keywords: '费控管理, 报销系统,业财一体化, 预算管理, 银企直联, 费控解决方案',
  openGraph: {
    title: '费控管理系统 - 业财一体化费控解决方案',
    description: '实现从预算、报销、票据到商旅、银企直联的全链条闭环管理。',
  },
}

export default function ExpenseManagementPage() {
  return (
    <div className="min-h-screen">
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
