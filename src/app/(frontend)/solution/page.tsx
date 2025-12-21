import { Metadata } from 'next'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Contact } from '@/payload-types'
import { PageClientWrapper } from '../page.client.wrapper'
import { SiteFooter } from '@/components/SiteFooter'
import { SolutionPageContent } from './page.content'

export const metadata: Metadata = {
  title: '解决方案中心 | 泊冉软件',
  description: '基于用友 YonBIP 产品能力，结合泊冉 12 年行业经验，为企业提供从销售、采购、制造到财务的端到端数智化转型解决方案。',
  keywords: '企业数字化, 数智化转型, YonBIP, 用友, ERP, MES, PLM, 财务云',
}

export default async function SolutionPage() {
  const contactData = await getCachedGlobal('contact', 1)() as Contact

  return (
    <PageClientWrapper contactData={contactData}>
      <SolutionPageContent />
      <SiteFooter />
    </PageClientWrapper>
  )
}
