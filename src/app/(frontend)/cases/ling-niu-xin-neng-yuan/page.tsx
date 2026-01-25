import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '羚牛新能源数字化案例 - 充电设施业财一体化实战 | 泊冉软件',
  description: '羚牛新能源如何通过业财一体化实现设备-运营-结算全流程打通？解决充电设施运营成本核算难、多站点收入确认效率低问题。新能源行业数字化转型实战案例。',
  openGraph: {
    title: '羚牛新能源数字化案例 - 充电设施业财一体化实战',
    description: '羚牛新能源如何通过业财一体化实现设备-运营-结算全流程打通？解决充电设施运营成本核算难、多站点收入确认效率低问题。新能源行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/ling-niu-xin-neng-yuan"
        variant="case"
      />
      <CTA />
    </main>
  )
}
