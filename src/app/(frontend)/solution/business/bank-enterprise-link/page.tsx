import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import Architecture from './Architecture'
import SecuritySection from './SecuritySection'
import CustomerCases from './CustomerCases'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '银企联解决方案 | 2500+银行直联 | 泊冉软件',
  description: '泊冉软件银企联解决方案，提供银账通、快结算、电票通核心能力。支持2500+银行直联，涵盖全量账户余额、明细、回单自动化下载与对账，助力企业构建数智化司库底座。',
  keywords: ['银企联', '银行直联', '银账通', '快结算', '电票通', '司库系统', '泊冉软件', '用友BIP'],
  openGraph: {
    title: '银企联解决方案 - 数智化金融服务底座',
    description: '2500+银行直联，7天快速投产，实现业财资一体化闭环。',
  },
}

export default function BankEnterpriseLinkPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <PainPoints />
      <Features />
      <Architecture />
      <SecuritySection />
      <CustomerCases />
      <ValueSection />
      <CTASection />
    </main>
  )
}
