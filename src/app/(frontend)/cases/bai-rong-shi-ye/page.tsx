import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '佰融实业数字化案例 - 贸易金融业财一体化实战 | 泊冉软件',
  description: '佰融实业如何通过业财一体化实现业务-资金-财务全流程打通？解决贸易融资成本核算难、多资产风控管理复杂问题。贸易金融行业数字化转型实战案例。',
  openGraph: {
    title: '佰融实业数字化案例 - 贸易金融业财一体化实战',
    description: '佰融实业如何通过业财一体化实现业务-资金-财务全流程打通？解决贸易融资成本核算难、多资产风控管理复杂问题。贸易金融行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/bai-rong-shi-ye"
        variant="case"
      />
      <CTA />
    </main>
  )
}
