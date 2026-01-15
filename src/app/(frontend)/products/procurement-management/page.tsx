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
  title: '数字化采购管理平台 | 采购降本增效解决方案 - 泊冉软件',
  description: '数字化采购管理平台基于 COP 打造，实现 from 请购、寻源、合同到支付的全流程闭环管理。规范采购流程，强化过程监控，提升供应链协同效率。',
  keywords: ['数字化采购', '采购管理系统', 'SRM', '采购协同', '供应链协同', '采购内控'],
  openGraph: {
    title: '数字化采购管理平台 - 采购降本增效解决方案',
    description: '实现从请购、寻源、合同到支付的全流程闭环管理，规范采购流程。',
  },
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
