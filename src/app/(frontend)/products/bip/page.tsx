import { Metadata } from 'next'
import Hero from './Hero'
import GlobalIntroduction from './GlobalIntroduction'
import TargetAudience from './TargetAudience'
import DeliveryMethodology from './DeliveryMethodology'
import Capabilities from './Capabilities'
import ArchitecturePlatform from './ArchitecturePlatform'
import DeliveryScope from './DeliveryScope'
import TechSpecs from './TechSpecs'
import TrustProof from './TrustProof'
import FAQ from './FAQ'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: '用友 BIP 企业数智化平台 | 实施与交付服务',
  description: '泊冉软件为您提供用友 BIP (Business Innovation Platform) 的咨询、实施与定制开发服务。深度融合企业"研供产销服"核心场景，助力大型集团实现数智化转型。',
  keywords: ['用友BIP', 'YonBIP', '企业数智化', '商业创新平台', 'ERP升级', '泊冉软件'],
  openGraph: {
    title: '用友 BIP 企业数智化平台',
    description: '深度融合企业研供产销服核心场景，助力大型集团实现数智化转型。',
  },
}

export default function BIPPage() {
  return (
    <main className="min-h-screen bg-white">
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <TrustProof />
      <GlobalIntroduction />
      <TargetAudience />
      <Capabilities />
      <ArchitecturePlatform />
      <DeliveryMethodology />
      <DeliveryScope />
      <TechSpecs />
      <FAQ />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/products/bip"
        variant="product"
        showDecisionFramework
      />
      <CTASection />
    </main>
  )
}
