
import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import HowItWorks from './HowItWorks'
import CustomerSuccess from './CustomerSuccess'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '多维数据智能分析平台 | 用友 BIP',
  description: '融合企业级数据中台与智能分析能力，提供从数据采集、治理、建模到可视化的全链路解决方案，助力企业构建数智化经营大脑，释放数据价值。',
  keywords: ['BI', '数据分析', '数据中台', '商业智能', '数据可视化', '大屏展示', '财务分析', '企业报表', 'YonBIP'],
  openGraph: {
    title: '多维数据智能分析平台 - 企业级数据中台与商业智能',
    description: '从数据采集、治理、建模到可视化的全链路解决方案，释放数据价值。',
  },
}

export default function BIDataPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Features />
      <ValueSection />
      <CustomerSuccess />
      <CTASection />
    </main>
  )
}
