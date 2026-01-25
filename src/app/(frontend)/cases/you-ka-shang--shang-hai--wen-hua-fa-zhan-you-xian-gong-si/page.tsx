import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '优卡赏数字化案例 - 文创企业业财一体化实战 | 泊冉软件',
  description: '优卡赏如何通过业财一体化实现产品-渠道-销售数据打通？解决文创企业SKU管理复杂、库存周转率低问题。文创行业数字化转型实战案例。',
  openGraph: {
    title: '优卡赏数字化案例 - 文创企业业财一体化实战',
    description: '优卡赏如何通过业财一体化实现产品-渠道-销售数据打通？解决文创企业SKU管理复杂、库存周转率低问题。文创行业数字化转型实战案例。',
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
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        url="https://www.iboran.com/cases/you-ka-shang--shang-hai--wen-hua-fa-zhan-you-xian-gong-si"
        variant="case"
      />
      <CTA />
    </main>
  )
}
