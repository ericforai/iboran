#!/usr/bin/env node
/**
 * PSEO Skill 01 — Keyword Cluster Logic Builder
 * 
 * 生成关键词聚类逻辑：维度设计、组合生成逻辑、样本和验证规则
 * 
 * Usage:
 *   tsx scripts/pseo-keywords-generator.ts [options]
 * 
 * Options:
 *   --seed-keyword <text>     种子关键词
 *   --domain <text>           领域（例：ERP实施服务 / 用友YonSuite实施 / 业财一体化）
 *   --config <path|json>      Skill 00 配置 JSON（文件路径或 JSON 字符串）
 *   --output <path>           输出文件路径（默认：keywords.yaml）
 *   --method <excel|python>   生成方法（默认：python）
 * 
 * Example:
 *   tsx scripts/pseo-keywords-generator.ts \
 *     --seed-keyword "ERP实施" \
 *     --domain "ERP实施服务" \
 *     --config config.json \
 *     --output keywords.yaml
 */

import * as fs from 'fs'
import * as path from 'path'
import yaml from 'js-yaml'

interface Config {
  config: {
    brand: { identity_anchor_text: string }
    audience: { target_audience: 'B2B' | 'B2C'; tone_of_voice: string }
    constraints: { no_prices: boolean; no_fake_stats: boolean; competitor_names_allowed: boolean }
    forbidden_words: string[]
    default_comparison_target: string
    product_scope?: string[]
    service_scope?: string[]
  }
}

interface Dimension {
  name: string
  values: string[]
}

interface Generator {
  method: 'excel' | 'python'
  excel_formula?: string
  python_pseudocode?: string
}

interface Sample {
  keyword: string
  cluster: string
}

interface ValidationCriteria {
  rule: string
  rationale: string
}

interface KeywordClusterOutput {
  dimensions: Dimension[]
  generator: Generator
  samples: Sample[]
  validation_criteria: ValidationCriteria[]
}

// 默认维度模板（根据领域自动选择）
const DEFAULT_DIMENSIONS: Record<string, Dimension[]> = {
  'ERP实施服务': [
    {
      name: 'industry',
      values: [
        '制造业', '零售业', '服务业', '物流', '医药', '食品', '化工', '电子',
        '汽车', '纺织', '建材', '能源', '金融', '教育', '医疗', '房地产'
      ]
    },
    {
      name: 'scenario',
      values: [
        '集团管控', '多组织', '多工厂', '多法人', '多币种', '多语言',
        '业财一体化', '产销一体化', '产供销一体化', '财务共享', '供应链协同'
      ]
    },
    {
      name: 'product',
      values: [
        'YonBIP', 'YonSuite', 'U9 Cloud', 'NC', 'U8C', 'T+', '好会计'
      ]
    }
  ],
  '用友YonSuite实施': [
    {
      name: 'industry',
      values: [
        '现代服务业', '零售连锁', '餐饮', '酒店', '教育', '医疗', '物流',
        '互联网', '咨询', '广告', '文化传媒', '旅游', '租赁', '物业'
      ]
    },
    {
      name: 'scenario',
      values: [
        '多门店', '多区域', '会员管理', '线上线下一体化', '新零售',
        '业财一体化', '人财物一体化', '移动办公', '智能分析'
      ]
    },
    {
      name: 'scale',
      values: [
        '小微企业', '中小企业', '成长型企业', '集团企业'
      ]
    }
  ],
  '业财一体化': [
    {
      name: 'industry',
      values: [
        '制造业', '零售', '服务', '物流', '医药', '食品', '化工', '电子'
      ]
    },
    {
      name: 'scenario',
      values: [
        '财务共享', '成本核算', '预算管理', '资金管理', '税务管理',
        '报表分析', '内控合规', '多组织财务', '合并报表'
      ]
    },
    {
      name: 'product',
      values: [
        'YonBIP', 'YonSuite', 'NC', 'U9 Cloud', 'U8C'
      ]
    }
  ]
}

function parseArgs() {
  const args: {
    seedKeyword?: string
    domain?: string
    config?: string
    output?: string
    method?: 'excel' | 'python'
  } = {}

  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i]
    const next = process.argv[i + 1]

    switch (arg) {
      case '--seed-keyword':
        if (next && !next.startsWith('--')) {
          args.seedKeyword = next
          i++
        }
        break
      case '--domain':
        if (next && !next.startsWith('--')) {
          args.domain = next
          i++
        }
        break
      case '--config':
        if (next && !next.startsWith('--')) {
          args.config = next
          i++
        }
        break
      case '--output':
        if (next && !next.startsWith('--')) {
          args.output = next
          i++
        }
        break
      case '--method':
        if (next && (next === 'excel' || next === 'python')) {
          args.method = next
          i++
        }
        break
    }
  }

  return args
}

function loadConfig(configInput: string): Config {
  // 尝试作为文件路径
  if (fs.existsSync(configInput)) {
    const content = fs.readFileSync(configInput, 'utf-8')
    return JSON.parse(content)
  }

  // 尝试作为 JSON 字符串
  try {
    return JSON.parse(configInput)
  } catch (e) {
    throw new Error(`Invalid config: ${configInput}`)
  }
}

function generateDimensions(domain: string, config: Config): Dimension[] {
  // 尝试从默认模板获取
  const template = DEFAULT_DIMENSIONS[domain]
  if (template) {
    return template
  }

  // 根据产品/服务范围生成
  const productScope = config.config.product_scope || []
  const serviceScope = config.config.service_scope || []

  const dimensions: Dimension[] = []

  // 行业维度（通用）
  dimensions.push({
    name: 'industry',
    values: [
      '制造业', '零售业', '服务业', '物流', '医药', '食品', '化工', '电子',
      '汽车', '纺织', '建材', '能源', '金融', '教育', '医疗', '房地产'
    ]
  })

  // 场景维度（通用）
  dimensions.push({
    name: 'scenario',
    values: [
      '集团管控', '多组织', '业财一体化', '产销一体化', '财务共享',
      '供应链协同', '移动办公', '智能分析'
    ]
  })

  // 产品维度（如果有）
  if (productScope.length > 0) {
    dimensions.push({
      name: 'product',
      values: productScope
    })
  }

  // 服务维度（如果有）
  if (serviceScope.length > 0) {
    dimensions.push({
      name: 'service',
      values: serviceScope
    })
  }

  return dimensions
}

function generateGenerator(
  dimensions: Dimension[],
  method: 'excel' | 'python'
): Generator {
  if (method === 'excel') {
    // Excel 公式示例
    const dimensionNames = dimensions.map(d => d.name).join(' + ')
    const formula = `=CONCATENATE(${dimensionNames})`
    
    return {
      method: 'excel',
      excel_formula: formula
    }
  } else {
    // Python 伪代码
    const dimensionVars = dimensions.map(d => 
      `    ${d.name}_values = [${d.values.slice(0, 10).map(v => `"${v}"`).join(', ')}]  # 示例值，实际应包含所有枚举`
    ).join('\n')
    
    const productArgs = dimensions.map(d => `${d.name}_values`).join(', ')
    
    const pseudocode = `# 关键词组合生成逻辑
from itertools import product

# 定义各维度枚举值
${dimensionVars}

# 生成所有维度组合
combinations = product(${productArgs})

# 生成关键词列表
keywords = []
for combo in combinations:
    # 组合方式：维度值1 + 维度值2 + ... + 种子关键词
    keyword_parts = [str(v) for v in combo if v]  # 过滤空值
    keyword = "".join(keyword_parts) + "实施服务"  # 可根据需要调整组合方式
    keywords.append(keyword)

# 去重和排序
keywords = sorted(set(keywords))

# 输出结果
for kw in keywords:
    print(kw)`

    return {
      method: 'python',
      python_pseudocode: pseudocode
    }
  }
}

function generateSamples(
  seedKeyword: string,
  domain: string,
  dimensions: Dimension[],
  maxSamples: number = 20
): Sample[] {
  const samples: Sample[] = []
  
  // 生成一些示例样本
  // 使用合理的组合方式：行业 + 场景/产品 + 种子关键词
  
  // 限制样本数量
  const sampleCount = Math.min(maxSamples, 25)
  
  // 从每个维度取前几个值组合
  const maxValues = Math.max(...dimensions.map(d => d.values.length))
  
  for (let i = 0; i < sampleCount && i < maxValues; i++) {
    const values: string[] = []
    const clusterParts: string[] = []
    
    dimensions.forEach(dim => {
      const value = dim.values[i % dim.values.length]
      if (value) {
        values.push(value)
        clusterParts.push(value)
      }
    })
    
    if (values.length > 0) {
      // 更自然的关键词组合：行业 + 场景/产品 + 种子关键词
      // 例如："制造业 + 集团管控 + ERP实施服务"
      const keyword = `${values.join('')}${seedKeyword}服务`
      const cluster = clusterParts.join(' + ')
      samples.push({ keyword, cluster })
    }
  }

  return samples
}

function generateValidationCriteria(): ValidationCriteria[] {
  return [
    {
      rule: "Top3 SERP contains Reddit/Quora/知乎 -> PASS",
      rationale: "UGC站点多时通常竞争更低，适合长尾关键词"
    },
    {
      rule: "Title match rate < 0.6 -> PASS",
      rationale: "SERP不集中说明可用差异化切入，竞争度较低"
    },
    {
      rule: "Top10 contains 3+ 问答类页面 -> PASS",
      rationale: "问答类内容多说明用户需求明确，适合内容营销"
    },
    {
      rule: "Top10 contains 0 品牌官网 -> PASS",
      rationale: "无品牌官网说明竞争度低，适合新站优化"
    },
    {
      rule: "Keyword length >= 8 characters -> PASS",
      rationale: "长尾关键词通常竞争度更低，转化率更高"
    }
  ]
}

function generateOutput(
  seedKeyword: string,
  domain: string,
  config: Config,
  method: 'excel' | 'python'
): KeywordClusterOutput {
  const dimensions = generateDimensions(domain, config)
  const generator = generateGenerator(dimensions, method)
  const samples = generateSamples(seedKeyword, domain, dimensions, 20)
  const validationCriteria = generateValidationCriteria()

  return {
    dimensions,
    generator,
    samples,
    validation_criteria: validationCriteria
  }
}

function main() {
  try {
    const args = parseArgs()

    if (!args.seedKeyword) {
      throw new Error('--seed-keyword is required')
    }

    if (!args.domain) {
      throw new Error('--domain is required')
    }

    if (!args.config) {
      throw new Error('--config is required')
    }

    const method = args.method || 'python'
    const config = loadConfig(args.config)

    // 生成输出
    const output = generateOutput(args.seedKeyword, args.domain, config, method)

    // 转换为 YAML
    const yamlContent = yaml.dump(output, {
      indent: 2,
      lineWidth: -1,
      quotingType: '"',
      forceQuotes: false
    })

    // 写入文件
    const outputPath = args.output || 'keywords.yaml'
    fs.writeFileSync(outputPath, yamlContent, 'utf-8')
    console.error(`✓ Generated: ${outputPath}`)
    console.error(`  - Dimensions: ${output.dimensions.length}`)
    console.error(`  - Samples: ${output.samples.length}`)
    console.error(`  - Validation rules: ${output.validation_criteria.length}`)
  } catch (error) {
    console.error(`ERROR: ${error instanceof Error ? error.message : String(error)}`)
    process.exit(1)
  }
}

main()

