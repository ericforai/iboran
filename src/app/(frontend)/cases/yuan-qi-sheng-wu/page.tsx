import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '原启生物数字化案例 - 生物医药业财一体化实战 | 泊冉软件',
  description: '原启生物如何通过业财一体化实现研发-临床-商业化全流程打通？解决生物医药研发成本归集难、合规管理复杂问题。生物医药行业数字化转型实战案例。',
  openGraph: {
    title: '原启生物数字化案例 - 生物医药业财一体化实战',
    description: '原启生物如何通过业财一体化实现研发-临床-商业化全流程打通？解决生物医药研发成本归集难、合规管理复杂问题。生物医药行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/yuan-qi-sheng-wu"
        variant="case"
      />
      <CTA />
    </main>
  )
}
