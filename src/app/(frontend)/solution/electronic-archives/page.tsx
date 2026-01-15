import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import HowItWorks from './HowItWorks'
import ValueSection from './ValueSection'
import CustomerSuccess from './CustomerSuccess'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '电子会计档案解决方案 | 泊冉软件',
  description: '泊冉软件电子会计档案解决方案，提供安全合规、高效环保的电子档案管理，支持四性检测与业财档深度融合，助力企业数据保值增值。',
  keywords: ['电子会计档案', '档案管理系统', '用友BIP档案', '电子凭证归档', '四性检测', '泊冉软件'],
  openGraph: {
    title: '电子会计档案解决方案 | 泊冉软件',
    description: '安全合规、高效环保，构建企业数智化档案库。',
  },
}

export default function ElectronicArchivesPage() {
  const content = {
    title: '电子会计档案',
    tagline: '安全合规、高效环保，助力企业数据保值增值',
    description: '构建业财档一体化管理体系，满足国家电子凭证归档标准，实现档案全生命周期的自动化、智能化管理。'
  }

  return (
    <main className="min-h-screen bg-white">
      <Hero 
        title={content.title}
        tagline={content.tagline}
        description={content.description}
      />
      <PainPoints />
      <Features />
      <HowItWorks />
      <ValueSection />
      <CustomerSuccess />
      <CTASection />
    </main>
  )
}
