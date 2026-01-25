import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '仕卿人力数字化转型案例 | 泊冉软件',
  description: '仕卿人力作为专业的人力资源服务机构，面临业务流程标准化、服务质量提升和人才管理优化的挑战。泊冉软件为其构建了数字化人力资源管理平台，助力其实现高效运营与服务创新。',
  openGraph: {
    title: '仕卿人力数字化转型案例',
    description: '仕卿人力作为专业的人力资源服务机构，面临业务流程标准化、服务质量提升和人才管理优化的挑战。泊冉软件为其构建了数字化人力资源管理平台，助力其实现高效运营与服务创新。',
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
        url="https://www.iboran.com/cases/sq-hr"
        variant="case"
      />
      <CTA />
    </main>
  )
}
