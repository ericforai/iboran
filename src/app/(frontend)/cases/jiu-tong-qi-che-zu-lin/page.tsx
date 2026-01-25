import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '久通汽车租赁数字化案例 - 汽车租赁业财一体化实战 | 泊冉软件',
  description: '久通汽车租赁如何通过业财一体化实现车辆调度与财务数据打通？解决汽车租赁车辆管理难、收入对账效率低问题。汽车租赁行业数字化转型实战案例。',
  openGraph: {
    title: '久通汽车租赁数字化案例 - 汽车租赁业财一体化实战',
    description: '久通汽车租赁如何通过业财一体化实现车辆调度与财务数据打通？解决汽车租赁车辆管理难、收入对账效率低问题。汽车租赁行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/jiu-tong-qi-che-zu-lin"
        variant="case"
      />
      <CTA />
    </main>
  )
}
