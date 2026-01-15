import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '天田中国数字化转型案例 | 泊冉软件',
  description: '在全球化竞争与供应链波动常态化的背景下，传统制造业正面临从"规模驱动"向"效率与创新驱动"的深刻转型。泊冉软件助力制造企业打通生产、物流与财务的脉络，实现以数据为核心的敏捷制造与精准交付。 项目背景：金属加工机械的销售、维修与技术支持，主要产品包括数控冲床、激光切割机、折弯机等钣金加工设备。',
  openGraph: {
    title: '天田中国数字化转型案例',
    description: '金属加工机械的销售、维修与技术支持，主要产品包括数控冲床、激光切割机、折弯机等钣金加工设备。',
  },
}

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Overview />
      <Challenge />
      <Solution />
      <Results />
      <CTA />
    </main>
  )
}
