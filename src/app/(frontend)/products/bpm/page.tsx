import { Metadata } from 'next'
import Hero from './Hero'
import TargetAudience from './TargetAudience'
import DeliveryMethodology from './DeliveryMethodology'
import Capabilities from './Capabilities'
import DeliveryScope from './DeliveryScope'
import TechSpecs from './TechSpecs'
import TrustProof from './TrustProof'
import FAQ from './FAQ'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: 'BPM 流程管理平台 | 企业级智能敏捷流程治理专家 - 泊冉软件',
  description: '专业的 BPM 流程管理系统，连接人、系统与业务。提供从流程建模、自动化审批到效能分析的全生命周期管理，深度集成 SAP/用友/金蝶 ERP，助力大型企业实现管理规则自动落地。',
  keywords: ['BPM系统', '流程管理系统', '工作流引擎', '业务流程管理', '流程自动化', '用友BIP集成', 'SAP流程对接', '泊冉软件', '数字化转型'],
  openGraph: {
    title: 'BPM 流程管理平台 | 助力企业构建敏捷流程运营中枢',
    description: '让管理规则自动落地，消除组织协作断层。专业的交付型 BPM 解决方案。',
  },
}

export default function BPMProductPage() {
  return (
    <>
      <Hero />
      <TargetAudience />
      <DeliveryMethodology />
      <Capabilities />
      <DeliveryScope />
      <TechSpecs />
      <TrustProof />
      <FAQ />
      <CTASection />
    </>
  )
}
