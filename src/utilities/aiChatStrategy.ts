export const HOTLINE = '400-9955-161'

export const CONTACT_DIRECT_REPLY = [
  `您可以直接拨打热线电话 ${HOTLINE}（电话优先）。`,
  '如果您更希望在线沟通，直接在当前窗口留言即可，我们会尽快回复。',
].join('\n')

export const INDUSTRY_ASK =
  '为更准确判断，请先告诉我您的细分行业（如：制造、零售、医药、房地产、能源、金融、互联网、专业服务等）？'

export const SCENE_ASK = [
  '收到。请再选择您当前最关注的需求场景（可直接回复名称）：',
  '1) 业财一体',
  '2) 费控报销',
  '3) 资金/银企联',
  '4) 合并报表',
  '5) 合同管理',
  '6) 主数据治理',
  '7) 税务/票税',
  '8) ERP升级迁移',
  '9) 其他（可补充）',
].join('\n')

export type RiskLevel = 'medium' | 'high'

export type ConsultationContext = {
  industry?: string
  scene?: string
}

const CONTACT_INTENT_RE =
  /(怎么联系|如何联系|联系方式|联系电话|电话多少|电话是|电话为|客服电话|热线|打电话|联系你们|联系顾问|人工客服)/
const HIGH_RISK_RE =
  /(报价|多少钱|价格|合同|条款|承诺|保证|赔偿|法律责任|合规结论|收益承诺|回报率|必须|一定|确保成功)/
const CONSULTATIVE_RE =
  /(是否|能否|可以|适合|怎么做|如何做|方案|场景|行业|yonbip|bip|yonsuite|erp|实施|迁移|费控|合并报表|主数据|合同管理|银企联)/
const DIRECT_PRODUCT_Q_RE =
  /(支持|是否支持|能否|可以|兼容|对接).*(私有化|本地部署|专有云|公有云|混合云|saas|多租户|单租户|信创|国产化|api|接口|部署|集成)|(私有化|本地部署|专有云|公有云|混合云|saas|多租户|单租户|信创|国产化|api|接口|部署|集成).*(支持|是否支持|能否|可以|兼容|对接)/
const SMALL_TALK_RE = /^(你好|您好|hello|hi|在吗|有人吗|谢谢|好的|嗯|收到|ok)[！!。.\s]*$/i

const INDUSTRY_RULES: Array<[RegExp, string]> = [
  [/(房地产|地产|物业|建筑|工程)/, '房地产/工程'],
  [/(制造|工厂|生产|工业|汽配|半导体|电子)/, '制造'],
  [/(零售|商超|电商|消费品|快消|门店)/, '零售/消费品'],
  [/(医药|医疗|生物|药企|器械|医院)/, '医药/医疗'],
  [/(能源|电力|化工|新材料)/, '能源/化工'],
  [/(互联网|软件|saas|科技|it)/, '互联网/科技'],
  [/(服务|咨询|事务所|项目型)/, '专业服务'],
  [/(银行|农信|城商行|农商行)/, '银行'],
  [/(保险|寿险|财险)/, '保险'],
  [/(证券|券商)/, '证券'],
  [/(资管|基金|公募|私募)/, '资管'],
  [/(金租|融资租赁|租赁)/, '金租'],
  [/(金融)/, '金融'],
]

const SCENE_RULES: Array<[RegExp, string]> = [
  [/(业财一体|财务一体)/, '业财一体'],
  [/(费控|报销|差旅)/, '费控报销'],
  [/(银企联|资金|支付|司库)/, '资金/银企联'],
  [/(合并报表|并表|抵销)/, '合并报表'],
  [/(合同)/, '合同管理'],
  [/(主数据|mdm)/, '主数据治理'],
  [/(税务|票税|发票)/, '税务/票税'],
  [/(erp升级|erp 迁移|erp升级迁移|迁移|替换)/, 'ERP升级迁移'],
]

export const detectContactIntent = (text: string) => CONTACT_INTENT_RE.test(text.toLowerCase())

export const detectRiskLevel = (text: string): RiskLevel => {
  return HIGH_RISK_RE.test(text.toLowerCase()) ? 'high' : 'medium'
}

export const isConsultativeQuestion = (text: string) => {
  const normalized = text.trim().toLowerCase()
  if (!normalized || SMALL_TALK_RE.test(normalized)) return false
  return CONSULTATIVE_RE.test(normalized) || /(\?|？|吗|呢|如何|怎么)/.test(normalized)
}

export const isDirectProductQuestion = (text: string) => {
  const normalized = text.trim().toLowerCase()
  if (!normalized || SMALL_TALK_RE.test(normalized)) return false
  return DIRECT_PRODUCT_Q_RE.test(normalized)
}

export const extractConsultationContext = (userTexts: string[]): ConsultationContext => {
  const combined = userTexts.join('\n').toLowerCase()
  const context: ConsultationContext = {}

  const explicitIndustryMatch =
    combined.match(/([a-z0-9\u4e00-\u9fa5]{2,16})行业/) ||
    combined.match(/我们是([a-z0-9\u4e00-\u9fa5]{2,16})/)
  if (explicitIndustryMatch?.[1]) {
    const raw = explicitIndustryMatch[1].trim()
    const blacklist = ['是否', '适合', '当前', '你们', '我们', '这个', '那个']
    if (!blacklist.includes(raw)) {
      context.industry = raw
    }
  }

  for (const [rule, label] of INDUSTRY_RULES) {
    if (rule.test(combined)) {
      context.industry = label
      break
    }
  }
  for (const [rule, label] of SCENE_RULES) {
    if (rule.test(combined)) {
      context.scene = label
      break
    }
  }

  return context
}

export const detectChoice = (text: string): 'self_service' | 'human' | null => {
  const normalized = text.toLowerCase()
  if (/(转人工|人工客服|人工|打电话|热线|联系客服)/.test(normalized)) return 'human'
  if (/(继续自助|继续|自助|先自助|继续回答)/.test(normalized)) return 'self_service'
  return null
}

export const pickLastSubstantiveQuestion = (userTexts: string[]): string | null => {
  for (let i = userTexts.length - 1; i >= 0; i -= 1) {
    const text = userTexts[i]?.trim()
    if (!text) continue
    if (detectChoice(text) === 'self_service') continue
    if (detectChoice(text) === 'human') continue
    if (detectContactIntent(text)) continue
    if (SMALL_TALK_RE.test(text.toLowerCase())) continue
    return text
  }

  return null
}

export const buildChoicePrompt = (context: ConsultationContext) => {
  const industry = context.industry || '当前行业'
  const scene = context.scene || '当前场景'
  return [
    `已了解，您目前是“${industry}”行业，关注“${scene}”场景。`,
    '您可以选择：',
    '1) 继续自助（我给您下一步建议）',
    `2) 联系客服（热线电话 ${HOTLINE}）`,
  ].join('\n')
}

export const normalizeSceneReply = (text: string): string | null => {
  const value = text.trim().replace(/^[\d\-\.\)\s]+/, '')
  if (!value || SMALL_TALK_RE.test(value)) return null
  if (detectContactIntent(value)) return null

  for (const [rule, label] of SCENE_RULES) {
    if (rule.test(value.toLowerCase())) return label
  }

  const custom = value
    .replace(/^其他[:：\s]*/i, '')
    .replace(/^其它[:：\s]*/i, '')
    .trim()
  if (!custom) return '其他'
  return `其他：${custom}`
}
