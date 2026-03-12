import { Metadata } from 'next'
import { AiCoCreationPageContent } from './page.content'
import { GeoSection } from '@/components/GeoSection'

const PAGE_URL = 'https://www.iboran.com/ai-co-creation'
const SITE_NAME = '泊冉软件'

export const metadata: Metadata = {
  title: 'AI业务共创计划 — 围绕行业场景推动企业AI落地 | 泊冉软件',
  description:
    '泊冉软件AI业务共创计划，聚焦制造、连锁、专业服务等行业的真实业务场景，通过业务诊断、场景共创、方案设计与样板验证四步法，帮助企业从"知道AI"走向"用上AI、看见效果"。',
  keywords:
    'AI落地,企业AI落地,AI业务场景,AI共创,AI应用场景,企业AI方案,制造业AI,连锁零售AI,财务AI,ERP+AI,企业知识库,AI经营分析,泊冉软件,用友AI,企业数字化转型,AI业务诊断,AI试点验证',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'AI业务共创计划 — 围绕行业场景推动企业AI落地',
    description:
      '不卖AI概念，不做PPT项目。泊冉与企业一起，围绕真实业务场景共创可落地、可验证、可复制的AI应用方案。',
    url: PAGE_URL,
    siteName: SITE_NAME,
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI业务共创计划 | 泊冉软件',
    description:
      '聚焦制造、连锁、专业服务等行业场景，四步法推动企业AI真正落地。',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
}

// JSON-LD: WebPage + FAQPage structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': PAGE_URL,
      url: PAGE_URL,
      name: 'AI业务共创计划 — 围绕行业场景推动企业AI落地',
      description:
        '泊冉软件AI业务共创计划，聚焦企业真实业务场景，通过业务诊断、场景共创、方案设计与样板验证四步法帮助企业AI落地。',
      isPartOf: { '@id': 'https://www.iboran.com/#website' },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: 'https://www.iboran.com',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: '首页',
            item: 'https://www.iboran.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'AI业务共创计划',
            item: PAGE_URL,
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '我们对AI感兴趣但内部没有技术团队，可以参加吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '可以。共创计划的重点不是先做复杂技术建设，而是先识别适合企业的业务场景与落地路径。我们会为您提供实施所需的技术支持。',
          },
        },
        {
          '@type': 'Question',
          name: '我们已经在用ERP/OA/协同系统，AI还能结合吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '可以。很多AI场景并不是替代原系统，而是在现有业务流程和系统基础上，提升问答、检索、分析、生成和辅助决策效率。',
          },
        },
        {
          '@type': 'Question',
          name: '共创计划适合哪些企业？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '更适合已经有一定业务流程基础、希望探索AI与经营管理结合方式的企业，尤其适用于制造、连锁、专业服务、集团型管理等具有一定标准化场景的企业。',
          },
        },
        {
          '@type': 'Question',
          name: '共创计划是做培训还是做项目？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '它介于两者之间。不是单纯培训，也不是一上来就做大重头项目，而是围绕真实场景形成可落地的第一步，类似一个带有强烈业务目标的打板试点。',
          },
        },
        {
          '@type': 'Question',
          name: '参加之后企业会得到什么？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '通常会得到业务场景梳理、优先级建议、场景共创方案、试点方向建议，以及后续推广的可执行路径。我们最终目标是帮您落地一个真实的可用场景。',
          },
        },
      ],
    },
  ],
}

export default function AiCoCreationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AiCoCreationPageContent />
      <GeoSection
        title="AI业务共创计划"
        description={
          (metadata.description as string) ||
          '围绕业务场景，把 AI 从想法变成可落地的应用。'
        }
        keywords={metadata.keywords}
        url={PAGE_URL}
        breadcrumbs={[
          { name: '首页', url: '/' },
          { name: 'AI业务共创计划', url: '/ai-co-creation' },
        ]}
        identityTitle="本网页由【泊冉软件】提供。"
        identityDescription="泊冉软件是用友软件实施服务商，专业提供结合企业管理软件的AI落地共创服务。"
        variant="listing"
      />
    </>
  )
}
