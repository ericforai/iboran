import { Metadata } from 'next'
import { AboutPageContent } from './page.content'

export const metadata: Metadata = {
  title: '关于泊冉 - 专业的用友软件实施服务商',
  description: '上海泊冉软件有限公司成立于2012年，是用友全球首批铂金级合作伙伴。我们深耕智能制造、新零售及生物医药行业，提供从业务咨询到系统交付的全生命周期数智化转型服务。',
  keywords: '泊冉软件, 关于我们, 用友铂金级合作伙伴, 数智化转型, 软件实施服务, 上海用友服务商',
  openGraph: {
    title: '关于泊冉 - 专业的用友软件实施服务商',
    description: '用友全球首批铂金级合作伙伴，深耕行业14年，提供从业务咨询到系统交付的全生命周期数智化转型服务。',
  },
}

export default function AboutPage() {
  return <AboutPageContent />
}
