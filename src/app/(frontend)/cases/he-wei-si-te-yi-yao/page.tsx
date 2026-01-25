import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '贺维斯特医药数字化案例 - 医药行业GXP合规管理 | 泊冉软件',
  description: '贺维斯特医药如何通过数智化平台构建符合GXP标准的一体化管理体系？解决医药行业合规生产、批号追溯、质量安全问题。医药行业数字化转型实战案例。',
  openGraph: {
    title: '贺维斯特医药数字化案例 - 医药行业GXP合规管理',
    description: '贺维斯特医药如何通过数智化平台构建符合GXP标准的一体化管理体系？解决医药行业合规生产、批号追溯、质量安全问题。医药行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/he-wei-si-te-yi-yao"
        variant="case"
      />
      <CTA />
    </main>
  )
}
