import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import HowItWorks from './HowItWorks'
import Features from './Features'
import CustomerSuccess from './CustomerSuccess'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: 'SPE 纵向 PDCA 解决方案 | 泊冉软件',
  description: 'SPE 为企业提供从战略规划、全面预算到执行控制、经营分析的纵向 PDCA 全闭环管理，依托高性能多维数据库与业财融合技术，实现数据驱动的精准决策。',
  keywords: ['SPE', '全面预算管理', '经营分析', 'PDA', '战略落地', '用友 YonBIP', 'YonSuite', '泊冉软件'],
  openGraph: {
    title: 'SPE 纵向 PDCA 解决方案 | 泊冉软件',
    description: '全方位解读 SPE 如何通过纵向 PDCA 支撑企业从战略到绩效的闭环管理。',
  },
}

export default function SPEPage() {
  const content = {
    title: 'SPE 纵向 PDCA 解决方案',
    tagline: '从战略规划、执行控制到经营分析的一站式管理体系',
    description: '在数智化转型背景下，企业需要一套能够打通战略与执行、贯穿业务与财务的纵向管控体系。SPE 纵向 PDCA 解决方案基于 YonBIP 和 YonSuite，助力企业应对各种经营挑战，实现跨越式增长。'
  }

  return (
    <main>
      <SeoH1 title={metadata.title as string} />
      <Hero {...content} />
      <PainPoints />
      <HowItWorks />
      <Features />
      <CustomerSuccess />
      <ValueSection />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/spe"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </main>
  )
}
