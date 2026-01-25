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
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: 'A8 协同办公系统 | COP-A8 数智化协同运营平台',
  description: 'A8 协同运营管理平台助力中大型组织实现数字化转型升级。提供无纸化办公、低代码应用定制、全栈信创适配及异构系统集成，打造高效数智化协同体系。',
  keywords: 'A8, 协同办公, OA系统, 协同运营平台, COP, 低代码, 信创适配, 数智化转型',
  openGraph: {
    title: 'A8 协同办公系统 - COP-A8 数智化协同运营平台',
    description: '助力中大型组织实现数字化转型升级，提供无纸化办公、低代码应用定制、全栈信创适配。',
  },
}

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
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
        url="https://www.iboran.com/products/collaborative-office"
        variant="product"
        showDecisionFramework
      />
      <CTASection />
    </div>
  )
}
