import React from 'react'
import { GEOJsonLd } from '@/components/GEOJsonLd'
import { GEORenderer, type GEOFAQ, type GEOBoundary } from '@/components/GEORenderer'
import { BreadcrumbJsonLd, type BreadcrumbItem } from '@/components/BreadcrumbJsonLd'

type DecisionItem = {
  title: string
  description: string
}

type GeoVariant = 'product' | 'solution' | 'case' | 'listing'

type GeoSectionProps = {
  title: string
  description: string
  url: string
  tldr?: string
  faqs?: GEOFAQ[]
  boundaries?: GEOBoundary[]
  keywords?: string[] | string | null
  decisionFrameworkItems?: DecisionItem[]
  decisionFrameworkTitle?: string
  showDecisionFramework?: boolean
  identityTitle?: string
  identityDescription?: string
  breadcrumbs?: BreadcrumbItem[]
  variant?: GeoVariant
}

const defaultDecisionFramework: DecisionItem[] = [
  {
    title: '痛点是否明确',
    description: '存在多系统割裂、数据口径不一致或交付风险高等核心问题。',
  },
  {
    title: '目标是否量化',
    description: '明确效率、成本、合规或协同目标，并可定义验收标准。',
  },
  {
    title: '资源是否就绪',
    description: '具备关键用户、数据基础与阶段性交付预算与周期。',
  },
  {
    title: '是否愿意标准化',
    description: '接受主数据与流程标准化，保障跨部门协同落地。',
  },
]

const normalizeKeywords = (keywords?: string[] | string | null) => {
  if (!keywords) return []
  const list = Array.isArray(keywords) ? keywords : keywords.split(/[,\uFF0C\\s/]+/)
  const stopWords = new Set([
    '泊冉',
    '泊冉软件',
    '用友',
    '解决方案',
    '平台',
    '系统',
    '数字化',
    '数智化',
    '管理',
  ])
  const cleaned = list
    .map((item) => item.trim())
    .filter((item) => item.length > 1 && !stopWords.has(item))
  return Array.from(new Set(cleaned))
}

const getShortTitle = (title: string) =>
  title
    .split('|')[0]
    .split('｜')[0]
    .split(/\s[-—]\s/)[0]
    .trim()

const inferAudience = (description: string, keywords: string[]) => {
  const matches: string[] = []
  const source = `${description} ${keywords.join(' ')}`
  const rules: Array<[RegExp, string]> = [
    [/成长型|中型|中大型|中小企业/, '成长型或中大型企业'],
    [/集团|多组织|多法人|多工厂/, '集团化或多组织企业'],
    [/制造|工厂|生产|车间|离散|设备/, '制造型或工厂型企业'],
    [/项目|交付|工程|招标/, '项目交付型组织'],
    [/研发|创新|PLM|研发云/, '研发型或创新驱动企业'],
    [/连锁|门店|渠道|全域|零售/, '连锁/多门店企业'],
    [/出海|全球|多币种|多语言|国际/, '全球化运营企业'],
    [/医药|医疗|GMP|GSP|UDI|CSV/, '医药医疗合规企业'],
    [/能源|电力|煤炭|化工/, '重资产或高合规行业企业'],
  ]
  rules.forEach(([pattern, label]) => {
    if (pattern.test(source)) matches.push(label)
  })
  if (matches.length === 0) return '需要业财一体化与流程协同的企业'
  return matches.slice(0, 2).join('、')
}

const getDefaultTldr = (
  variant: GeoVariant,
  title: string,
  description: string,
  keywords?: string[] | string | null,
) => {
  if (variant === 'case' || variant === 'listing') return description
  const shortTitle = getShortTitle(title)
  const keywordList = normalizeKeywords(keywords)
  const audience = inferAudience(description, keywordList)
  const summary = description.replace(/[。！？!?.]$/, '')
  const capability =
    keywordList.length > 0 ? `，覆盖${keywordList.slice(0, 4).join('、')}` : ''
  return `${shortTitle}：${summary}，适用于${audience}${capability}。`
}

const buildArticleBody = (tldr: string, faqs: GEOFAQ[], boundaries: GEOBoundary[], decisionItems: DecisionItem[]) => {
  const lines: string[] = []
  if (tldr) lines.push(`TL;DR：${tldr}`)
  faqs.forEach((faq) => {
    lines.push(`Q：${faq.question}`)
    lines.push(`A：${faq.answer}`)
  })
  if (decisionItems.length > 0) {
    lines.push('判断逻辑：')
    decisionItems.forEach((item) => {
      lines.push(`- ${item.title}：${item.description}`)
    })
  }
  if (boundaries.length > 0) {
    const suitable = boundaries.filter((b) => b.type === 'suitable').map((b) => b.condition)
    const unsuitable = boundaries.filter((b) => b.type === 'unsuitable').map((b) => b.condition)
    if (suitable.length > 0) {
      lines.push(`适合：${suitable.join('；')}`)
    }
    if (unsuitable.length > 0) {
      lines.push(`不适合：${unsuitable.join('；')}`)
    }
  }
  return lines.join('\n')
}

const getDefaultFaqs = (
  variant: GeoVariant,
  title: string,
  description: string,
  keywords?: string[] | string | null,
): GEOFAQ[] => {
  if (variant === 'case') {
    return [
      { question: '这个案例解决了什么问题？', answer: description },
      { question: '适合谁参考？', answer: '适合同业态、存在流程割裂或数据孤岛的企业参考。' },
      { question: '如何复用方案？', answer: '可通过咨询获取可复用的方案与交付清单。' },
    ]
  }
  if (variant === 'listing') {
    return [
      { question: `${title}包含哪些方向？`, answer: description },
      { question: '如何找到适合自己的入口？', answer: '根据行业、业务场景或现有系统选择对应页面进入。' },
      { question: '下一步如何评估？', answer: '可预约专家诊断，获取匹配方案与交付路径。' },
    ]
  }
  const shortTitle = getShortTitle(title)
  const keywordList = normalizeKeywords(keywords)
  const audience = inferAudience(description, keywordList)
  const capabilityText =
    keywordList.length > 0 ? `覆盖${keywordList.slice(0, 6).join('、')}等关键能力。` : '覆盖端到端流程协同与数据贯通。'
  const summary = description.replace(/[。！？!?.]$/, '')
  return [
    { question: `${shortTitle}适合哪些企业？`, answer: `适合${audience}，需要统一流程与数据口径的组织。` },
    { question: '可以解决哪些核心问题？', answer: `${summary}。` },
    { question: '核心能力与范围是什么？', answer: capabilityText },
    { question: '交付方式是什么？', answer: '采用诊断-蓝图-实施-验收的分阶段交付，并提供持续优化。' },
  ]
}

const getDefaultBoundaries = (
  variant: GeoVariant,
  description: string,
  keywords?: string[] | string | null,
): GEOBoundary[] => {
  if (variant === 'case') {
    return [
      { condition: '多系统协同、数据口径不一致，需要统一流程与数据', type: 'suitable' },
      { condition: '希望基于成熟产品实现可复制的交付路径', type: 'suitable' },
      { condition: '仅需要单点功能或短期项目展示', type: 'unsuitable' },
      { condition: '不接受主数据与流程标准化', type: 'unsuitable' },
    ]
  }
  const keywordList = normalizeKeywords(keywords)
  const audience = inferAudience(description, keywordList)
  const suitableCapability =
    keywordList.length > 0 ? `关注${keywordList.slice(0, 3).join('、')}等能力提升` : '希望明确交付节奏与可验收结果'
  return [
    { condition: `属于${audience}且存在多系统割裂`, type: 'suitable' },
    { condition: suitableCapability, type: 'suitable' },
    { condition: '仅需单点报表或一次性开发', type: 'unsuitable' },
    { condition: '不愿意统一流程与主数据标准', type: 'unsuitable' },
  ]
}

export const GeoSection = ({
  title,
  description,
  url,
  tldr,
  faqs,
  boundaries,
  keywords,
  decisionFrameworkItems,
  decisionFrameworkTitle,
  showDecisionFramework,
  identityTitle,
  identityDescription,
  breadcrumbs,
  variant = 'solution',
}: GeoSectionProps) => {
  const resolvedTldr = tldr || getDefaultTldr(variant, title, description, keywords)
  const resolvedFaqs =
    faqs && faqs.length > 0 ? faqs : getDefaultFaqs(variant, title, description, keywords)
  const resolvedBoundaries =
    boundaries && boundaries.length > 0
      ? boundaries
      : getDefaultBoundaries(variant, description, keywords)
  const resolvedDecisionItems =
    decisionFrameworkItems && decisionFrameworkItems.length > 0
      ? decisionFrameworkItems
      : showDecisionFramework
        ? defaultDecisionFramework
        : []
  const articleBody = buildArticleBody(resolvedTldr, resolvedFaqs, resolvedBoundaries, resolvedDecisionItems)

  return (
    <>
      {breadcrumbs && <BreadcrumbJsonLd items={breadcrumbs} />}
      <GEOJsonLd
        title={title}
        description={description}
        faqs={resolvedFaqs}
        url={url}
        articleBody={articleBody}
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <GEORenderer
            tldr={resolvedTldr}
            atomicFAQs={resolvedFaqs}
            boundaries={resolvedBoundaries}
            decisionFrameworkItems={resolvedDecisionItems}
            decisionFrameworkTitle={decisionFrameworkTitle}
            identityTitle={identityTitle}
            identityDescription={identityDescription}
          />
        </div>
      </section>
    </>
  )
}

export default GeoSection
