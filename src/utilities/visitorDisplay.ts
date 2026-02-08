export type ParsedVisitorSource = {
  path: string
  channel: string
  refDomain: string
}

const CHANNEL_LABELS: Record<string, string> = {
  direct: '直访',
  referral: '外链',
  baidu: '百度',
  google: '谷歌',
  wechat: '微信',
  douyin: '抖音',
  other: '其他',
}

const PAGE_LABELS: Record<string, string> = {
  '/': '首页',
  '/about': '关于我们',
  '/contact': '联系我们',
  '/solution': '解决方案',
  '/products': '产品中心',
  '/cases': '客户案例',
  '/posts': '文章中心',
  '/resources': '资料中心',
  '/pricing': '价格方案',
}

const SHORT_CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

const normalizeRefDomain = (value: string) => {
  const domain = value.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '')
  if (!domain) return ''
  const host = domain.split('/')[0] || ''
  const segments = host.split('.').filter(Boolean)
  if (segments.length === 0) return ''
  const first = segments[0] || ''
  if (['m', 'mp', 'wap', 'mobile'].includes(first) && segments[1]) {
    return segments[1]
  }
  return first
}

const fallbackPageLabel = (path: string) => {
  const clean = path.split('?')[0].trim()
  if (!clean || clean === '/') return '首页'
  const normalized = clean.startsWith('/') ? clean : `/${clean}`
  if (PAGE_LABELS[normalized]) return PAGE_LABELS[normalized]

  const segments = normalized.split('/').filter(Boolean)
  const first = segments[0] || ''
  if (!first) return '首页'
  return first
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

const formatHHmm = (dateInput?: string | Date | null) => {
  const date = dateInput ? new Date(dateInput) : new Date()
  if (Number.isNaN(date.getTime())) return '00:00'

  const formatter = new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
  return formatter.format(date)
}

const toISOOrNow = (dateInput?: string | Date | null) => {
  const date = dateInput ? new Date(dateInput) : new Date()
  if (Number.isNaN(date.getTime())) {
    return new Date().toISOString()
  }
  return date.toISOString()
}

export const generateVisitorShortCode = () => {
  let code = ''
  for (let i = 0; i < 3; i += 1) {
    const index = Math.floor(Math.random() * SHORT_CODE_CHARS.length)
    code += SHORT_CODE_CHARS[index]
  }
  return code
}

export const parseVisitorSource = (sourcePage?: string | null): ParsedVisitorSource => {
  if (!sourcePage) {
    return {
      path: '/',
      channel: 'direct',
      refDomain: '',
    }
  }

  const segments = sourcePage.split('|').map((segment) => segment.trim()).filter(Boolean)
  const pathSegment = segments[0] || '/'
  const channelSegment = segments.find((segment) => segment.startsWith('channel='))
  const refSegment = segments.find((segment) => segment.startsWith('ref='))

  const channelRaw = channelSegment?.split('=')[1]?.trim().toLowerCase() || 'direct'
  const channel = channelRaw || 'direct'
  const refRaw = refSegment?.split('=')[1] || ''
  const refDomain = normalizeRefDomain(refRaw)

  return {
    path: pathSegment || '/',
    channel,
    refDomain,
  }
}

export const getVisitorChannelLabel = (channel: string) => {
  return CHANNEL_LABELS[channel] || CHANNEL_LABELS.other
}

export const buildDisplayVisitorId = (args: {
  sourcePage?: string | null
  firstSeenAt?: string | Date | null
  shortCode?: string
}) => {
  const parsed = parseVisitorSource(args.sourcePage)
  const channelLabel = CHANNEL_LABELS[parsed.channel] || CHANNEL_LABELS.other
  const pageLabel = PAGE_LABELS[parsed.path] || fallbackPageLabel(parsed.path)
  const timeLabel = formatHHmm(args.firstSeenAt)
  const shortCode = args.shortCode || generateVisitorShortCode()
  const channelPart = parsed.refDomain ? `${channelLabel}(${parsed.refDomain})` : channelLabel

  return {
    displayVisitorId: `${channelPart}-${pageLabel}-${timeLabel}-${shortCode}`,
    visitorChannel: parsed.channel,
    visitorRefDomain: parsed.refDomain || null,
    visitorLandingPath: parsed.path,
    visitorFirstSeenAt: toISOOrNow(args.firstSeenAt),
    visitorShortCode: shortCode,
  }
}
