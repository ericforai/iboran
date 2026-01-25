import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '骐杰碳素数字化案例 - 新材料业财一体化实战 | 泊冉软件',
  description: '骐杰碳素如何通过业财一体化打通生产-质检-交付全流程？解决新材料批次管理难、成本追溯不准确问题。新材料行业数字化转型实战案例。',
  openGraph: {
    title: '骐杰碳素数字化案例 - 新材料业财一体化实战',
    description: '骐杰碳素如何通过业财一体化打通生产-质检-交付全流程？解决新材料批次管理难、成本追溯不准确问题。新材料行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/qi-jie-tan-su"
        variant="case"
      />
      <CTA />
    </main>
  )
}
