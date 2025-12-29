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
  title: '致远数字化采购管理平台 | 采购降本增效解决方案 - 泊冉软件',
  description: '致远数字化采购管理平台基于致远 COP 打造，实现从请购、寻源、合同到支付的全流程闭环管理。规范采购流程，强化过程监控，提升供应链协同效率。',
  keywords: ['数字化采购', '采购管理系统', 'SRM', '致远采购', '供应链协同', '采购内控'],
}

export default function ProcurementManagementPage() {
  return (
    <div className="flex flex-col w-full">
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
