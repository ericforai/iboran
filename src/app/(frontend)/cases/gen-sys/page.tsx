import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '正帆科技数字化转型案例 | 泊冉软件',
  description: '在全球化竞争与供应链波动常态化的背景下，传统制造业正面临从规模驱动向效率与创新驱动的深刻转型。泊冉软件助力制造企业打通生产、物流与财务的脉络，实现以数据为核心的敏捷制造与精准交付。项目背景：正帆科技提供高纯工艺系统、气体化学品供应系统、洁净室工程及配套设备，服务于半导体、生物医药、新能源等行业。',
  openGraph: {
    title: '正帆科技数字化转型案例',
    description: '正帆科技提供高纯工艺系统、气体化学品供应系统、洁净室工程及配套设备，服务于半导体、生物医药、新能源等行业。',
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
