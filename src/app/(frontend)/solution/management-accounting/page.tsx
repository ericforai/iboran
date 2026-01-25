import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import HowItWorks from './HowItWorks'
import ValueSection from './ValueSection'
import CustomerSuccess from './CustomerSuccess'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: '管理会计解决方案 | 泊冉软件 - 精细实时，助力价值创造',
  description: '泊冉软件管理会计解决方案，基于事项会计中台，实现业财深度融合。支持多目的核算、标准成本管理与实时成本还原，助力企业提升经营效益与决策效率。',
  keywords: ['管理会计', '事项会计', '成本管理', '业财融合', '多目的核算', '泊冉软件', '用友YonBIP'],
  openGraph: {
    title: '管理会计解决方案 | 泊冉软件',
    description: '通过智能月结、实时成本核算与精细化管理，赋能企业价值创造。',
  },
}

export default function ManagementAccountingPage() {
  return (
    <main className="min-h-screen">
      <SeoH1 title={metadata.title as string} />
      <Hero 
        title="管理会计"
        tagline="精细实时，高效智能，助力企业创造价值"
        description="基于事项会计中台，实现业财深度融合。支持多目的核算、全流程标准成本管理与实时成本还原，为企业决策提供精准数据支撑。"
      />
      <PainPoints />
      <Features />
      <HowItWorks />
      <ValueSection />
      <CustomerSuccess />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/management-accounting"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </main>
  )
}
