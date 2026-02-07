import { describe, expect, it } from 'vitest'

import {
  buildChoicePrompt,
  detectChoice,
  detectContactIntent,
  detectRiskLevel,
  extractConsultationContext,
  isDirectProductQuestion,
  isConsultativeQuestion,
  pickLastSubstantiveQuestion,
} from '../../src/utilities/aiChatStrategy'

describe('ai chat strategy helpers', () => {
  it('detects contact intent for hotline style queries', () => {
    expect(detectContactIntent('如何联系你们')).toBe(true)
    expect(detectContactIntent('你们电话是多少')).toBe(true)
    expect(detectContactIntent('我想了解YonBIP能力')).toBe(false)
  })

  it('detects user choice for self-service and human handoff', () => {
    expect(detectChoice('继续自助')).toBe('self_service')
    expect(detectChoice('帮我转人工')).toBe('human')
    expect(detectChoice('我再想想')).toBeNull()
  })

  it('extracts industry and scene from multi-turn user texts', () => {
    const context = extractConsultationContext([
      '我们是银行机构',
      '目前重点是合并报表和并表效率',
    ])

    expect(context.industry).toBe('银行')
    expect(context.scene).toBe('合并报表')
  })

  it('extracts non-finance industry directly from user question', () => {
    const context = extractConsultationContext(['BIP是否适合房地产行业'])
    expect(context.industry).toBe('房地产/工程')
  })

  it('keeps industry context while user provides custom scene text', () => {
    const context = extractConsultationContext(['BIP是否适合地产行业', '其他 售楼管理'])
    expect(context.industry).toBe('房地产/工程')
  })

  it('marks pricing/contract questions as high risk', () => {
    expect(detectRiskLevel('你们报价大概多少钱')).toBe('high')
    expect(detectRiskLevel('BIP适合什么场景')).toBe('medium')
  })

  it('recognizes consultative product questions', () => {
    expect(isConsultativeQuestion('BIP是否适合金融行业')).toBe(true)
    expect(isConsultativeQuestion('你好')).toBe(false)
  })

  it('recognizes direct product capability questions', () => {
    expect(isDirectProductQuestion('BIP支持私有化部署吗')).toBe(true)
    expect(isDirectProductQuestion('我们是地产行业，适合什么方案')).toBe(false)
  })

  it('builds choice prompt with industry and scene', () => {
    const text = buildChoicePrompt({ industry: '银行', scene: '资金/银企联' })
    expect(text).toContain('银行')
    expect(text).toContain('资金/银企联')
    expect(text).toContain('继续自助')
    expect(text).toContain('转人工')
  })

  it('picks previous substantive question when latest is self-service command', () => {
    const result = pickLastSubstantiveQuestion([
      '你好',
      'BIP支持私有化部署吗',
      '继续自助',
    ])
    expect(result).toBe('BIP支持私有化部署吗')
  })
})
