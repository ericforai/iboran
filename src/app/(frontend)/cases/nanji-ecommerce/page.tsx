import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '南极电商数字化转型案例 | 泊冉软件',
  description: '南极电商作为中国优质的品牌授权与综合服务商，面临多品牌、多渠道、多业态的复杂管理挑战。泊冉软件助力其构建数字化运营中台，实现品牌资产的精细化管理与高效变现。',
  openGraph: {
    title: '南极电商数字化转型案例',
    description: '南极电商作为中国优质的品牌授权与综合服务商，面临多品牌、多渠道、多业态的复杂管理挑战。泊冉软件助力其构建数字化运营中台，实现品牌资产的精细化管理与高效变现。',
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
        url="https://www.iboran.com/cases/nanji-ecommerce"
        variant="case"
      />
      <CTA />
    </main>
  )
}
