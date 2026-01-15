import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '拳头游戏数字化转型案例 | 泊冉软件',
  description: '拳头游戏提供电子游戏开发与发行服务，主要产品为《英雄联盟》（League of Legends）、《云顶之弈》（Teamfight Tactics）、《英雄联盟手游》（Wild Rift）及《VALORANT》等在线多人竞技游戏。',
  openGraph: {
    title: '拳头游戏数字化转型案例',
    description: '拳头游戏提供电子游戏开发与发行服务，主要产品为《英雄联盟》（League of Legends）、《云顶之弈》（Teamfight Tactics）、《英雄联盟手游》（Wild Rift）及《VALORANT》等在线多人竞技游戏。',
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
