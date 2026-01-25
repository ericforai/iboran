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
  title: '用友 U8 cloud 云 ERP 解决方案 | 成长型集团业财一体化',
  description: '用友 U8 cloud 为成长型集团提供集人财物客产供销于一体的云 ERP 整体解决方案。助力企业实现敏经营、轻管理、简 IT，深度覆盖合并报表、资金管理、全栈信创等核心场景。',
  keywords: 'U8 cloud, 用友, 云ERP, 成长型集团, 业财一体, 合并报表, 信创, 数智化转型',
  openGraph: {
    title: '用友 U8 cloud 云 ERP 解决方案',
    description: '集人财物客产供销于一体的云 ERP 整体解决方案，助力企业实现敏经营、轻管理、简 IT。',
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
        url="https://www.iboran.com/products/u8-cloud"
        variant="product"
        showDecisionFramework
      />
      <CTASection />
    </div>
  )
}
