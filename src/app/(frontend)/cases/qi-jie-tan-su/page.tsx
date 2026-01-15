import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '骐杰碳素数字化转型案例 | 泊冉软件',
  description: '在全球化竞争与供应链波动常态化的背景下，传统制造业正面临从"规模驱动"向"效率与创新驱动"的深刻转型。泊冉软件助力制造企业打通生产、物流与财务的脉络，实现以数据为核心的敏捷制造与精准交付。 项目背景：碳素材料的研发、生产与销售。',
  openGraph: {
    title: '骐杰碳素数字化转型案例',
    description: '碳素材料的研发、生产与销售 - 数字化升级解决方案',
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
