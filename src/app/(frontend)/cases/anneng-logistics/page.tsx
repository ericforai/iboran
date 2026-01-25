import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '安能物流数字化案例 - 零担物流业财一体化实战 | 泊冉软件',
  description: '安能物流如何通过业财一体化实现运力调度优化、成本精细管理？解决零担物流对账难、运费结算效率低问题。物流行业数字化转型实战案例。',
  openGraph: {
    title: '安能物流数字化案例 - 零担物流业财一体化实战',
    description: '安能物流如何通过业财一体化实现运力调度优化、成本精细管理？解决零担物流对账难、运费结算效率低问题。物流行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/anneng-logistics"
        variant="case"
      />
      <CTA />
    </main>
  )
}
