import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '奥普家居数字化案例 - 家居制造零售业财一体化实战 | 泊冉软件',
  description: '奥普家居如何通过业财一体化实现制造-渠道-零售全链路打通？解决家居行业多渠道库存割裂、经销商对账效率低问题。家居行业数字化转型实战案例。',
  openGraph: {
    title: '奥普家居数字化案例 - 家居制造零售业财一体化实战',
    description: '奥普家居如何通过业财一体化实现制造-渠道-零售全链路打通？解决家居行业多渠道库存割裂、经销商对账效率低问题。家居行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/ao-pu-jia-ju"
        variant="case"
      />
      <CTA />
    </main>
  )
}
