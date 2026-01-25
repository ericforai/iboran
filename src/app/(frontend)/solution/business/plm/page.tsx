import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import HowItWorks from './HowItWorks'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: 'YonBIP PLM 研发云解决方案 | 泊冉软件',
  description: '用友BIP PLM研发云，从需求、规划到产品创新，实现设计制造一体化、数智化研发管理，提升研发效率30%。',
  keywords: ['PLM', '研发云', 'YonBIP', 'YonSuite', '研发管理', 'PDM', 'BOM管理', '用友PLM', '泊冉软件'],
  openGraph: {
    title: 'YonBIP PLM 研发云解决方案 - 驱动产品创新',
    description: '全生命周期研发管理，打破研发与制造壁垒，实现高效协同。',
  },
}

export default function PLMSolutionPage() {
  return (
    <>
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Features />
      <ValueSection />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/business/plm"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
