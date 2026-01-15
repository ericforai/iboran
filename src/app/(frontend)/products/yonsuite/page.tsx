import { Metadata } from 'next'
import Hero from './Hero'
import FlywheelSection from './FlywheelSection'
import InnovationBuilder from './InnovationBuilder'
import Capabilities from './Capabilities'
import TargetAudience from './TargetAudience'
import IndustrySolutions from './IndustrySolutions'
import DeliveryMethodology from './DeliveryMethodology'
import DeliveryScope from './DeliveryScope'
import TechSpecs from './TechSpecs'
import TrustProof from './TrustProof'
import FAQ from './FAQ'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '用友 YonSuite - 创新企业选 YonSuite | 成长型企业商业创新平台',
  description: '用友 YonSuite 为成长型企业提供一站式全场景 SaaS 服务，助力实现业财税费票一体化、全球化经营。数智飞轮驱动持续增长，创新企业卓越选择。',
  keywords: 'YonSuite, 用友, SaaS, 业财一体, 驱动创新, 成长型企业, 数智飞轮, 商业创新',
  openGraph: {
    title: '用友 YonSuite - 成长型企业商业创新平台',
    description: '一站式全场景 SaaS 服务，助力成长型企业实现业财税费票一体化与数智飞轮增长。',
  },
}

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FlywheelSection />
      <InnovationBuilder />
      <Capabilities />
      <IndustrySolutions />
      <TargetAudience />
      <DeliveryMethodology />
      <DeliveryScope />
      <TechSpecs />
      <TrustProof />
      <FAQ />
      <CTASection />
    </div>
  )
}

