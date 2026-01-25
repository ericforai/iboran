import { Metadata } from 'next'
import { Hero } from './Hero'
import { PainPoints } from './PainPoints'
import { Architecture } from './Architecture'
import { Capabilities } from './Capabilities'
import { Methodology } from './Methodology'
import { DeliveryScope } from './DeliveryScope'
import { TechSpecs } from './TechSpecs'
import { CustomerStories } from './CustomerStories'
import { Resources } from './Resources'
import { FAQ } from './FAQ'
import { CTASection } from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: '企业门户系统 - 统一入口与应用聚合平台 | 用友 BIP',
  description: '用友 BIP 企业门户是企业统一的应用入口与价值聚合平台。通过场景化、个性化、沉浸式的体验，实现应用、消息、待办与数据的一站式触达，让协作更高效。',
  keywords: ['企业门户', '统一入口', '应用聚合', 'BIP门户', '工作台', '用友BIP'],
  openGraph: {
    title: '企业门户系统 - 统一入口与应用聚合平台',
    description: '企业统一的应用入口与价值聚合平台，实现应用、消息、待办与数据的一站式触达。',
  },
}

export default function EnterprisePortalPage() {
  return (
    <main className="min-h-screen bg-white">
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <PainPoints />
      <Architecture />
      <Capabilities />
      <Methodology />
      <DeliveryScope />
      <TechSpecs />
      <CustomerStories />
      <Resources />
      <FAQ />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/products/enterprise-portal"
        variant="product"
        showDecisionFramework
      />
      <CTASection />
    </main>
  )
}
