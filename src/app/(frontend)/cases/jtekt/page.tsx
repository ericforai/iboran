import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '捷太格特数字化转型案例 | 泊冉软件',
  description: '作为行业实践成熟的汽车零部件供应商，捷太格特面临数据孤岛与供应链响应延迟的挑战。泊冉软件助力其构建业财一体化平台，重塑数字化生产力。',
  openGraph: {
    title: '捷太格特数字化转型案例',
    description: '作为行业实践成熟的汽车零部件供应商，捷太格特面临数据孤岛与供应链响应延迟的挑战。泊冉软件助力其构建业财一体化平台，重塑数字化生产力。',
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
        url="https://www.iboran.com/cases/jtekt"
        variant="case"
      />
      <CTA />
    </main>
  )
}
