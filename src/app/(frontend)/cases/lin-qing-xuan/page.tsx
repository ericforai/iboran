import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '林清轩数字化转型案例 | 泊冉软件',
  description: '林清轩主要提供天然植物护肤产品，包括山茶花润肤油、面霜、洁面乳等护肤品，专注于中式高端护肤领域。',
  openGraph: {
    title: '林清轩数字化转型案例',
    description: '林清轩主要提供天然植物护肤产品，包括山茶花润肤油、面霜、洁面乳等护肤品，专注于中式高端护肤领域。',
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
