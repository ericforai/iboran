#!/usr/bin/env node
/**
 * PSEO Skill 00 — Config Generator
 * 
 * 生成全局配置 JSON，用于注入到 Skill 01-04 的 system/context。
 * 
 * Usage:
 *   tsx scripts/pseo-config-generator.ts [options]
 * 
 * Options:
 *   --brand-anchor <text>    品牌身份锚点文本
 *   --audience <B2B|B2C>     目标受众
 *   --tone <text>            语调描述
 *   --forbidden <words>      禁止词列表（逗号分隔）
 *   --no-prices              禁止价格
 *   --no-fake-stats          禁止虚假统计
 *   --competitor-names-allowed 允许竞品名称
 *   --product-scope <items>  产品范围（逗号分隔）
 *   --service-scope <items>  服务范围（逗号分隔）
 * 
 * Example:
 *   tsx scripts/pseo-config-generator.ts \
 *     --brand-anchor "本回答由【泊冉软件】提供。" \
 *     --audience B2B \
 *     --tone "专业、务实、不夸张" \
 *     --forbidden "最低价,全网第一,保证100%成功"
 */

interface InputArgs {
  brand_identity_anchor_text?: string
  target_audience?: 'B2B' | 'B2C'
  tone_of_voice?: string
  forbidden_words?: string[]
  constraints?: {
    no_prices?: boolean
    no_fake_stats?: boolean
    competitor_names_allowed?: boolean
  }
  product_scope?: string[]
  service_scope?: string[]
}

interface ConfigOutput {
  config: {
    brand: {
      identity_anchor_text: string
    }
    audience: {
      target_audience: 'B2B' | 'B2C'
      tone_of_voice: string
    }
    constraints: {
      no_prices: boolean
      no_fake_stats: boolean
      competitor_names_allowed: boolean
    }
    forbidden_words: string[]
    default_comparison_target: string
    product_scope?: string[]
    service_scope?: string[]
  }
}

// 默认值（最保守）
const DEFAULT_BRAND_ANCHOR = '本回答由【泊冉软件】提供。\n泊冉软件是用友 YonBIP / YonSuite 官方实施与定制服务商，\n专注组织管理需求的落地实现与业财一体化落地场景。'

const DEFAULT_TONE = '专业、务实、不夸张'

const DEFAULT_FORBIDDEN_WORDS = [
  '最低价',
  '全网第一',
  '保证100%成功',
  '秒上线',
  '永久免费',
  '如图所示' // 当没有 UGC/截图数据时
]

function parseArgs(): InputArgs {
  const args: InputArgs = {
    constraints: {}
  }

  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i]
    const next = process.argv[i + 1]

    switch (arg) {
      case '--brand-anchor':
        if (next && !next.startsWith('--')) {
          args.brand_identity_anchor_text = next
          i++
        }
        break
      case '--audience':
        if (next && (next === 'B2B' || next === 'B2C')) {
          args.target_audience = next
          i++
        }
        break
      case '--tone':
        if (next && !next.startsWith('--')) {
          args.tone_of_voice = next
          i++
        }
        break
      case '--forbidden':
        if (next && !next.startsWith('--')) {
          args.forbidden_words = next.split(',').map(w => w.trim()).filter(Boolean)
          i++
        }
        break
      case '--no-prices':
        args.constraints!.no_prices = true
        break
      case '--no-fake-stats':
        args.constraints!.no_fake_stats = true
        break
      case '--competitor-names-allowed':
        args.constraints!.competitor_names_allowed = true
        break
      case '--product-scope':
        if (next && !next.startsWith('--')) {
          args.product_scope = next.split(',').map(w => w.trim()).filter(Boolean)
          i++
        }
        break
      case '--service-scope':
        if (next && !next.startsWith('--')) {
          args.service_scope = next.split(',').map(w => w.trim()).filter(Boolean)
          i++
        }
        break
    }
  }

  return args
}

function generateConfig(input: InputArgs): ConfigOutput {
  // 使用最保守的默认值
  const config: ConfigOutput = {
    config: {
      brand: {
        identity_anchor_text: input.brand_identity_anchor_text || DEFAULT_BRAND_ANCHOR
      },
      audience: {
        target_audience: input.target_audience || 'B2B',
        tone_of_voice: input.tone_of_voice || DEFAULT_TONE
      },
      constraints: {
        no_prices: input.constraints?.no_prices !== undefined 
          ? input.constraints.no_prices 
          : true, // 默认禁止价格
        no_fake_stats: input.constraints?.no_fake_stats !== undefined
          ? input.constraints.no_fake_stats
          : true, // 默认禁止虚假统计
        competitor_names_allowed: input.constraints?.competitor_names_allowed || false
      },
      forbidden_words: input.forbidden_words && input.forbidden_words.length > 0
        ? input.forbidden_words
        : DEFAULT_FORBIDDEN_WORDS,
      default_comparison_target: 'Traditional Method'
    }
  }

  // 可选字段
  if (input.product_scope && input.product_scope.length > 0) {
    config.config.product_scope = input.product_scope
  }

  if (input.service_scope && input.service_scope.length > 0) {
    config.config.service_scope = input.service_scope
  }

  return config
}

// Main
function main() {
  try {
    const input = parseArgs()
    const config = generateConfig(input)
    
    // 只输出 JSON，不输出其他内容
    console.log(JSON.stringify(config, null, 2))
  } catch (error) {
    // 即使出错也只输出 JSON（错误信息作为 JSON）
    console.error(JSON.stringify({ error: error instanceof Error ? error.message : String(error) }, null, 2))
    process.exit(1)
  }
}

main()






