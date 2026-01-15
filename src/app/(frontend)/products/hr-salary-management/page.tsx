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
  title: '薪事力 - 全模块人力资源管理云平台 - 泊冉软件',
  description: '薪事力人力资源云平台提供包括人事管理、AI算薪、社保公积金、招聘绩效、电子工资单在内的全模块 HR 解决方案。深度集成协同 OA，实现办公与人力管理的完美结合。',
  keywords: '薪事力, HR系统, 人力资源管理系统, 算薪软件, 社保公积金, 招聘管理, 绩效管理',
  openGraph: {
    title: '薪事力 - 全模块人力资源管理云平台',
    description: '提供人事管理、AI算薪、社保公积金、招聘绩效在内的全模块 HR 解决方案。',
  },
}

export default function HRSalaryManagementPage() {
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
