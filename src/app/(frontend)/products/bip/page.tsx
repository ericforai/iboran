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

export const metadata: Metadata = {
  title: '用友 BIP｜先进的企业软件与智能服务平台｜泊冉软件',
  description: '泊冉软件为您提供用友 BIP (Business Innovation Platform) 的咨询、实施与定制开发服务。深度融合企业"研供产销服"核心场景，助力大型集团实现数智化转型。',
  keywords: ['用友BIP', 'YonBIP', '企业数智化', '商业创新平台', 'ERP升级', '泊冉软件'],
  openGraph: {
    title: '用友 BIP - 企业数智化商业创新平台',
    description: '深度融合企业研供产销服核心场景，助力大型集团实现数智化转型。',
  },
}

export default function BIPPage() {
  return (
    <main className="min-h-screen bg-white">
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
      <CTASection />
    </main>
  )
}
