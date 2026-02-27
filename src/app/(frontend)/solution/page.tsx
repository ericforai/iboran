import { Metadata } from 'next'
import { SolutionPageContent } from './page.content'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '解决方案中心 | 泊冉软件',
  description: '基于用友 YonBIP 产品能力，结合泊冉 12 年行业经验，为企业提供从销售、采购、制造到财务的端到端数智化转型解决方案。',
  keywords: '企业数字化, 数智化转型, YonBIP, 用友, ERP, MES, PLM, 财务云',
}

export default function SolutionPage() {
  return (
    <>
      <SolutionPageContent />
      <GeoSection
        title="解决方案中心"
        description={(metadata.description as string) || '企业数智化解决方案总览。'}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution"
        breadcrumbs={[
          { name: '首页', url: '/' },
          { name: '解决方案', url: '/solution' },
        ]}
        identityTitle="本回答由【泊冉软件】提供。"
        identityDescription="泊冉是用友 BIP / YonSuite 实施与交付服务商，覆盖行业与业务场景方案。"
        variant="listing"
      />
    </>
  )
}
