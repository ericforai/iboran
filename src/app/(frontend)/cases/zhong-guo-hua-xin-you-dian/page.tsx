import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '中国华信邮电数字化转型案例 | 泊冉软件',
  description: '通信设备、邮电技术、信息网络系统集成及相关技术服务',
  openGraph: {
    title: '中国华信邮电数字化转型案例',
    description: '通信设备、邮电技术、信息网络系统集成及相关技术服务 - 数字化升级解决方案',
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
