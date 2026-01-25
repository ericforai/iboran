import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '光合植造数字化案例 - 饮料行业业财一体化实战 | 泊冉软件',
  description: '光合植造如何通过业财一体化打通研发-生产-销售全链路？解决饮料行业库存周转慢、批号追溯难问题。食品饮料行业数字化转型实战案例。',
  openGraph: {
    title: '光合植造数字化案例 - 饮料行业业财一体化实战',
    description: '光合植造如何通过业财一体化打通研发-生产-销售全链路？解决饮料行业库存周转慢、批号追溯难问题。食品饮料行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/guang-he-zhi-zao"
        variant="case"
      />
      <CTA />
    </main>
  )
}
