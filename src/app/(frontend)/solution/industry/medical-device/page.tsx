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
      <Hero 
        industryName="医疗器械"
        tagline="构建企业稳健增长的数智引擎"
        description="面对集采压力与合规重塑，泊冉软件联合用友 YonSuite 为医疗器械企业提供从研发创新、智能制造、质量合规到客户服务的全链路数智化解决方案，驱动高质量发展。"
        industryTrend="数智化建设将成为医疗器械企业持续高质量发展的关键引擎"
      />
      <IndustryChallenges />
      <SolutionOverview />
      <KeyScenarios />
      <IndustryCases />
      <ValueSection />
      <CTASection />
    </main>
  )
}
