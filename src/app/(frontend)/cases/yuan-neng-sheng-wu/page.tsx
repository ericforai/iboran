import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '原能生物数字化转型案例 | 泊冉软件',
  description: '在全球化竞争与供应链波动常态化的背景下，传统制造业正面临从"规模驱动"向"效率与创新驱动"的深刻转型。泊冉软件助力制造企业打通生产、物流与财务的脉络，实现以数据为核心的敏捷制造与精准交付。 项目背景：原能生物提供生命科学领域的研发服务与生物技术产品，专注于生物制药深低温设备研发与制造',
  openGraph: {
    title: '原能生物数字化转型案例',
    description: '原能生物提供生命科学领域的研发服务与生物技术产品，专注于生物制药深低温设备研发与制造。',
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
