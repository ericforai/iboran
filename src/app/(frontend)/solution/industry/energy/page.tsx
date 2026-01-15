import { Metadata } from 'next'
import Hero from './Hero'
import IndustryChallenges from './IndustryChallenges'
import SolutionOverview from './SolutionOverview'
import KeyScenarios from './KeyScenarios'
import IndustryCases from './IndustryCases'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '能源行业解决方案 - 数智驱动高质量发展 | 泊冉软件',
  description: '泊冉软件为能源行业提供智能化生产、精细化管控、数字化转型的一站式解决方案。涵盖煤炭、电力、焦化等能源企业，实现设备全生命周期管理、智能运维、项目物资一体化管控',
  keywords: ['能源行业', '能源数字化', '煤炭', '电力', '智能运维', '设备管理', 'IOT', '工业互联网', '泊冉软件', '用友BIP'],
  openGraph: {
    title: '能源行业解决方案 | 泊冉软件',
    description: '数智驱动能源企业高质量发展',
  },
}

export default function EnergySolutionPage() {
  return (
    <>
      <Hero />
      <IndustryChallenges />
      <SolutionOverview />
      <KeyScenarios />
      <IndustryCases />
      <ValueSection />
      <CTASection />
    </>
  )
}
