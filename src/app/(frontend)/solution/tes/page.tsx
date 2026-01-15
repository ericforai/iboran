import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Architecture from './Architecture'
import Features from './Features'
import Methodology from './Methodology'
import ValueSection from './ValueSection'
import FAQ from './FAQ'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: 'TES 智能差旅与费控解决方案 | 泊冉软件',
  description: 'TES 解决方案打通从商旅申请、预定到费控报账、财务共享、资金结算的全链路流程。基于 YonBIP 和 YonSuite，助力企业实现业财税资档一体化。',
  keywords: ['TES', '商旅管理', '费控报销', '财务共享', '业财集成', '用友 YonBIP', 'YonSuite', '泊冉软件'],
  openGraph: {
    title: 'TES 智能差旅与费控解决方案 | 泊冉软件',
    description: '全方位解读 TES 如何通过业财融合与数智化手段，赋能企业差旅费控与共享中心建设。',
  },
}

export default function TESPage() {
  const content = {
    title: 'TES 智能差旅与费控解决方案',
    tagline: '从商旅费控到共享的全链路数智化管理体系',
    description: '在数智化转型背景下，企业需要一套能够打通业财断点、提升对账效率、实现全流程管控的差旅费控体系。TES 解决方案基于 YonBIP 和 YonSuite，实现从员工报账体验提升到财务合规管控自动化。'
  }

  return (
    <main>
      <Hero {...content} />
      <PainPoints />
      <Architecture />
      <Features />
      <Methodology />
      <ValueSection />
      <FAQ />
      <CTASection />
    </main>
  )
}
