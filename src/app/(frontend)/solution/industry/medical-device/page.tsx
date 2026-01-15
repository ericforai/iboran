import { Metadata } from 'next'
import Hero from './Hero'
import IndustryChallenges from './IndustryChallenges'
import SolutionOverview from './SolutionOverview'
import KeyScenarios from './KeyScenarios'
import IndustryCases from './IndustryCases'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '医疗器械行业解决方案 - 质量合规与数智化转型 | 泊冉软件',
  description: '泊冉软件为医疗器械企业提供从研发注册、GMP质量合规、UDI追溯到出海上市的一体化数字化解决方案，助力企业构建稳健增长的数智引擎。',
  keywords: [
    '医疗器械', 
    '医疗器械数字化',
    'GMP合规',
    'UDI追溯',
    'GSP管理',
    '泊冉软件', 
    'YonSuite',
    '用友'
  ],
  openGraph: {
    title: '医疗器械行业解决方案 | 泊冉软件',
    description: '构建医疗器械企业稳健增长的数智引擎，实现从研发到商业化的全链路一体化。',
  },
}

export default function MedicalDeviceSolution() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <IndustryChallenges />
      <SolutionOverview />
      <KeyScenarios />
      <IndustryCases />
      <ValueSection />
      <CTASection />
    </main>
  )
}
