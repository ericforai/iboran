
import type { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Architecture from './Architecture'
import Capabilities from './Capabilities'
import Methodology from './Methodology'
import DeliveryScope from './DeliveryScope'
import TechSpecs from './TechSpecs'
import CustomerStories from './CustomerStories'
import Resources from './Resources'
import FAQ from './FAQ'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: 'YonBuilder 低代码开发平台 - 企业级云原生应用构建引擎 | 用友',
  description: '用友 YonBuilder 基于云原生模型驱动架构，提供可视化/低代码/全代码一站式开发能力。帮助企业打破技术壁垒，实现业务应用的快速构建与敏捷迭代。',
  keywords: '低代码平台, YonBuilder, 企业级应用开发, 云原生开发, 可视化编程, 数据建模, 流程编排',
  openGraph: {
    title: 'YonBuilder 低代码开发平台 - 企业级云原生应用构建引擎',
    description: '可视化/低代码/全代码一站式开发能力，打破技术壁垒，实现业务应用快速构建。',
  },
}

export default function YonBuilderPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 0. SEO (Handled by metadata) */}
      
      {/* 1. Immersive Hero */}
      <SeoH1 title={metadata.title as string} />
      <Hero />
      
      {/* 2. Pain Points */}
      <PainPoints />
      
      {/* 3. Architecture */}
      <Architecture />
      
      {/* 4. Deep Capabilities */}
      <Capabilities />
      
      {/* 5. Delivery Methodology */}
      <Methodology />
      
      {/* 6. Delivery Scope */}
      <DeliveryScope />
      
      {/* 7. Technical Specs */}
      <TechSpecs />
      
      {/* 8. Customer Stories */}
      <CustomerStories />
      
      {/* 9. Resources */}
      <Resources />
      
      {/* 10. FAQ */}
      <FAQ />
      
      {/* 11. CTA */}
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/products/yonbuilder"
        variant="product"
        showDecisionFramework
      />
      <CTASection />
    </main>
  )
}
