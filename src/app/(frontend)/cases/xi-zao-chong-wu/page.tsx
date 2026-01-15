import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '犀早宠物数字化转型案例 | 泊冉软件',
  description: '主要从事宠物食品及用品的零售与批发业务，同时涵盖宠物服务、摄影扩印、信息咨询等领域，并拓展了饲料添加剂销售及预包装食品销售等经营范围',
  openGraph: {
    title: '犀早宠物数字化转型案例',
    description: '主要从事宠物食品及用品的零售与批发业务，同时涵盖宠物服务、摄影扩印、信息咨询等领域，并拓展了饲料添加剂销售及预包装食品销售等经营范围',
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
      <CTA />
    </main>
  )
}
