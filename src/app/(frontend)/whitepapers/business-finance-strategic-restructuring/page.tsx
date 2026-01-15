import { Metadata } from 'next/types'
import { BusinessFinanceStrategicRestructuringGated } from './client'

export const dynamic = 'force-static'

export function generateMetadata(): Metadata {
  return {
    title: '业财一体化·业财战略重构 - 白皮书 | 泊冉软件',
    description: '从数据孤岛到价值创造的转型路径。全面解析业财一体化战略重构的路径，包含5个章节深度解析、实施路线图、风险控制清单。',
    openGraph: {
      title: '业财一体化·业财战略重构 - 白皮书',
      description: '从数据孤岛到价值创造的转型路径',
      type: 'article',
    },
  }
}

export default function BusinessFinanceWhitepaperPage() {
  return <BusinessFinanceStrategicRestructuringGated />
}
