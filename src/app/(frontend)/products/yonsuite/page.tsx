import { Metadata } from 'next'
import Hero from './Hero'
import TargetAudience from './TargetAudience'
import DeliveryMethodology from './DeliveryMethodology'
import Capabilities from './Capabilities'
import DeliveryScope from './DeliveryScope'
import TechSpecs from './TechSpecs'
import TrustProof from './TrustProof'
import FAQ from './FAQ'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '用友 YonSuite - 成长型企业商业创新平台 | 全场景 SaaS 服务',
  description: '用友 YonSuite 为成长型企业提供一站式全场景 SaaS 服务，助力实现业财税费票一体化、全球化经营。最快 1 个月交付上线，助力企业数智化快速升级。',
  keywords: 'YonSuite, 用友, SaaS, 业财一体, 驱动创新, 成长型企业, 数智化转型',
}

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
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
