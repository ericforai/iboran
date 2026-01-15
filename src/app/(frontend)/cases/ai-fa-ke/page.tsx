import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '爱发科数字化转型案例 | 泊冉软件',
  description: '在全球化竞争与供应链波动常态化的背景下，传统制造业正面临从规模驱动向效率与创新驱动的深刻转型。泊冉软件助力制造企业打通生产、物流与财务的脉络，实现以数据为核心的敏捷制造与精准交付。项目背景：真空技术及相关设备的研发、制造与销售，包括真空泵、真空计、真空阀门等产品，广泛应用于半导体、平板显示等领域。',
  openGraph: {
    title: '爱发科数字化转型案例',
    description: '真空技术及相关设备的研发、制造与销售，包括真空泵、真空计、真空阀门等产品，广泛应用于半导体、平板显示等领域。',
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
