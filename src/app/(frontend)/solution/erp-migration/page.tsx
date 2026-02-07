import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Services from './Services'
import BIPValue from './BIPValue'
import MigrationProcess from './MigrationProcess'
import CTASection from './CTASection'
import { GEOJsonLd } from '@/components/GEOJsonLd'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: '用友 U8/U9/NC 升级迁移解决方案 | ERP 升迁与上云',
  description: '提供用友 U8/U9/NC/U8 Cloud 原厂级运维与平滑升级服务，覆盖评估、迁移、验证全流程，保障业务连续与数智化转型。',
}

export default function ERPMigrationPage() {
  const faqs = [
    {
      question: '为什么需要从 U8/NC 升级到 YonBIP/YonSuite？',
      answer: '随着企业业务发展，旧版 ERP 可能面临架构老化、扩展困难、不支持移动化等问题。升级到 YonBIP/YonSuite 可以利用云原生技术、实现业财深度融合、提升数据实时性，并享受 AI 智能应用带来的效率提升。'
    },
    {
      question: 'ERP 迁移升级的风险大吗？',
      answer: 'ERP 迁移确实存在数据丢失或业务中断的风险。泊冉软件采用标准化的“四步升迁法”（评估、设计、迁移、验证），并提供原厂级工具支持，能够最大程度降低风险，以保障平滑过渡。'
    },
    {
      question: '泊冉软件提供哪些数据迁移服务？',
      answer: '我们提供全量静态数据迁移（如客商档案、物料）、动态业务单据迁移，以及定制化代码的兼容性改造服务。'
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      <GEOJsonLd
        title={metadata.title as string}
        description={metadata.description as string}
        url="https://www.iboran.com/solution/erp-migration"
        faqs={faqs}
      />
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <PainPoints />
      <Services />
      <BIPValue />
      <MigrationProcess />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/erp-migration"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </main>
  )
}
