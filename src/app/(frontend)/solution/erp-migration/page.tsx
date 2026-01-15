import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Services from './Services'
import BIPValue from './BIPValue'
import MigrationProcess from './MigrationProcess'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '用友U8/U9/NC 专属服务与升迁方案 - 泊冉软件',
  description: '为您提供用友 U8/U9/NC/U8 Cloud 等产品的原厂级运维保障，以及平滑升级用友 BIP 的专业升迁方案，助力企业数智化转型。',
}

export default function ERPMigrationPage() {
  return (
    <main className="min-h-screen pt-20">
      <Hero />
      <PainPoints />
      <Services />
      <BIPValue />
      <MigrationProcess />
      <CTASection />
    </main>
  )
}
