import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import HowItWorks from './HowItWorks'
import CustomerSuccess from './CustomerSuccess'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '业财融合解决方案 | 事项驱动·实时·精细的业财数据底座 | 泊冉软件',
  description: '泊冉软件业财融合解决方案基于“事项法”会计中台，打造实时、精细、智能的业财数据底座。解耦业务与财务，实现财管同源分流、智能月结与多维分析，赋能企业经营价值转型。',
  keywords: ['业财融合', '事项中台', '事项会计', '智能月结', '财管分流', '业财大数据', '泊冉软件', '用友BIP'],
  openGraph: {
    title: '业财融合：实时·精细·智能的业财数据底座',
    description: '从事项核算到经营分析，重构企业业财价值链。',
  },
}

export default function BusinessFinanceIntegrationPage() {
  return (
    <div className="bg-white">
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks />
      <CustomerSuccess />
      <ValueSection />
      <CTASection />
    </div>
  )
}
