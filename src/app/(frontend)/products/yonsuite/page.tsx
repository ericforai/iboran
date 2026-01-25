import { Metadata } from 'next'
import Hero from './Hero'
import FlywheelSection from './FlywheelSection'
import InnovationBuilder from './InnovationBuilder'
import Capabilities from './Capabilities'
import TargetAudience from './TargetAudience'
import IndustrySolutions from './IndustrySolutions'
import DeliveryMethodology from './DeliveryMethodology'
import DeliveryScope from './DeliveryScope'
import TechSpecs from './TechSpecs'
import TrustProof from './TrustProof'
import FAQ from './FAQ'
import CTASection from './CTASection'
import { GEOJsonLd } from '@/components/GEOJsonLd'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: '用友 YonSuite 成长型企业 SaaS 云 ERP | 业财税费一体化',
  description: '用友 YonSuite 为成长型企业提供一站式全场景 SaaS 服务，助力实现业财税费票一体化、全球化经营。数智飞轮驱动持续增长，创新企业卓越选择。',
  keywords: 'YonSuite, 用友, SaaS, 业财一体, 驱动创新, 成长型企业, 数智飞轮, 商业创新',
  openGraph: {
    title: '用友 YonSuite 成长型企业 SaaS 云 ERP',
    description: '一站式全场景 SaaS 服务，助力成长型企业实现业财税费票一体化与数智飞轮增长。',
    type: 'website',
  },
}

export default function ProductPage() {
  const faqs = [
    {
      question: '用友 YonSuite 适合什么样的企业？',
      answer: 'YonSuite 专为创新型和高成长型企业设计，特别是那些需要快速响应市场变化、追求全球化经营、以及希望通过单一平台实现业财税费票一体化管理的企业。'
    },
    {
      question: 'YonSuite 支持哪些业务场景？',
      answer: 'YonSuite 覆盖财务会计、供应链管理、人力资源、协同办公、营销管理、项目管理等全场景业务，并支持通过低代码平台进行个性化扩展。'
    },
    {
      question: 'YonSuite 是纯 SaaS 软件吗？',
      answer: '是的，YonSuite 是基于云原生架构的公有云 SaaS 服务，企业无需购买服务器和维护IT基础设施，即可享受实时更新的企业级服务。'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <GEOJsonLd
        title="用友 YonSuite - 创新企业选 YonSuite | 成长型企业商业创新平台"
        description="用友 YonSuite 为成长型企业提供一站式全场景 SaaS 服务，助力实现业财税费票一体化、全球化经营。数智飞轮驱动持续增长，创新企业卓越选择。"
        url="https://www.iboran.com/products/yonsuite"
        faqs={faqs}
      />
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <FlywheelSection />
      <InnovationBuilder />
      <Capabilities />
      <IndustrySolutions />
      <TargetAudience />
      <DeliveryMethodology />
      <DeliveryScope />
      <TechSpecs />
      <TrustProof />
      <FAQ />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/products/yonsuite"
        variant="product"
        showDecisionFramework
      />
      <CTASection />
    </div>
  )
}
