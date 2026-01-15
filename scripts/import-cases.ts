#!/usr/bin/env node
import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load .env file
const envPath = path.resolve(__dirname, '../.env')
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath })
}

// Manual override if dotenv fails for npx tsx environment
if (!process.env.PAYLOAD_SECRET) {
  process.env.PAYLOAD_SECRET = 'd587beaf9532cb1c89f3945e'
}
if (!process.env.DATABASE_URI) {
  process.env.DATABASE_URI = 'mongodb://localhost:27017/iboran'
}

function parseMarkdown(content: string) {
  const data: any = {
    challenges: [],
    goals: { objectives: [], acceptance: [] },
    solution: { modules: [] },
    deliveryProcess: [],
    whyBoran: [],
    keyResults: {},
    integration: { list: [] },
    methodology: { steps: [], targets: [], deliverables: [] },
  }

  // H1 Title
  const titleMatch = content.match(/^# ([^｜]+)｜(.+)$/m)
  if (titleMatch) {
    data.industry = titleMatch[1].trim()
    data.title = titleMatch[2].trim()
  } else {
    const fallbackTitle = content.match(/^# (.+)$/m)
    data.title = fallbackTitle ? fallbackTitle[1].trim() : 'Untranslated Title'
  }

  // TL;DR
  const tldrMatch = content.match(/> \*\*TL;DR\*\*：(.+)$/m)
  if (tldrMatch) {
    data.tldr = tldrMatch[1].trim()
  }

  // Project Overview
  const overviewSection = content.match(/## 1\. 项目概览\s*([\s\S]*?)(?=\n##|$)/)
  if (overviewSection) {
    const items = overviewSection[1].split('\n').filter(l => l.trim().startsWith('*'))
    items.forEach(item => {
      const match = item.match(/\*\*([^*]+)\*\*：(.+)$/)
      if (match) {
        const key = match[1].trim()
        const val = match[2].trim()
        if (key === '客户') data.projectOverview = { ...data.projectOverview, client: val }
        if (key === '行业') data.projectOverview = { ...data.projectOverview, industry: val }
        if (key === '范围') data.projectOverview = { ...data.projectOverview, scope: val }
        if (key === '周期') data.projectOverview = { ...data.projectOverview, cycle: val }
        if (key === '交付模式') data.projectOverview = { ...data.projectOverview, deliveryMode: val }
        if (key === '关键约束') data.projectOverview = { ...data.projectOverview, keyConstraints: val }
      }
    })
    data.clientName = data.projectOverview?.client
  }

  // Challenges
  const challengesSection = content.match(/## 2\. 背景与挑战\s*([\s\S]*?)(?=\n##|$)/)
  if (challengesSection) {
    const items = challengesSection[1].split('\n').filter(l => l.trim().startsWith('*'))
    items.forEach(item => {
      data.challenges.push({ challenge: item.replace(/^\*\s+/, '').trim() })
    })
  }

  // Goals
  const goalsSection = content.match(/## 3\. 目标与验收口径\s*([\s\S]*?)(?=\n##|$)/)
  if (goalsSection) {
    const objectives = goalsSection[1].match(/\* \*\*目标\*\*：([\s\S]*?)(?=\n\*|$)/)
    if (objectives) {
        data.goals.objectives = objectives[1].split('、').map(s => ({ item: s.trim() }))
    }
    const acceptance = goalsSection[1].match(/\*\*做什么\*\*：([\s\S]*?)(?=\n|$)/)
    if (acceptance) data.goals.acceptance.push({ item: `做什么：${acceptance[1].trim()}` })
  }

  // Solution
  const solutionSection = content.match(/## 4\. 解决方案\s*([\s\S]*?)(?=\n##|$)/)
  if (solutionSection) {
    const oneLiner = solutionSection[1].match(/\*\*一句话方案：\*\* (.+)$/m)
    if (oneLiner) data.solution.oneLiner = oneLiner[1].trim()
    const modules = solutionSection[1].split('\n').filter(l => /^\d+\./.test(l))
    modules.forEach(m => data.solution.modules.push({ item: m.replace(/^\d+\.\s+/, '').trim() }))
    const keyDesign = solutionSection[1].match(/\* \*\*关键设计\*\*：(.+)$/m)
    if (keyDesign) data.solution.keyDesign = keyDesign[1].trim()
  }

  // Key Results
  const resultsSection = content.match(/## 5\. 关键成果\s*([\s\S]*?)(?=\n##|$)/)
  if (resultsSection) {
    const items = resultsSection[1].split('\n').filter(l => l.trim().startsWith('*'))
    items.forEach(item => {
      const match = item.match(/\*\*([^*]+)\*\*：(.+)$/)
      if (match) {
        const key = match[1].trim()
        const val = match[2].trim()
        if (key === '效率') data.keyResults.efficiency = val
        if (key === '质量') data.keyResults.quality = val
        if (key === '风险') data.keyResults.risk = val
        if (key === '业务') data.keyResults.business = val
      }
    })
  }

  // Delivery Process
  const deliverySection = content.match(/## 6\. 交付过程\s*([\s\S]*?)(?=\n##|$)/)
  if (deliverySection) {
    const items = deliverySection[1].split('\n').filter(l => l.trim().startsWith('*'))
    items.forEach(item => {
      const match = item.match(/\*\*([^*]+)\*\*（([^）]+)）：(.+)$/)
      if (match) {
        data.deliveryProcess.push({ 
          milestone: `${match[1].trim()} (${match[2].trim()})`, 
          detail: match[3].trim() 
        })
      } else {
        const fallback = item.match(/\*\*([^*]+)\*\*：(.+)$/)
        if (fallback) data.deliveryProcess.push({ milestone: fallback[1].trim(), detail: fallback[2].trim() })
      }
    })
  }

  // Integration
  const integrationSection = content.match(/## 7\. 数据迁移与系统集成\s*([\s\S]*?)(?=\n##|$)/)
  if (integrationSection) {
    const migration = integrationSection[1].match(/\* \*\*迁移清单\*\*：(.+)$/m)
    if (migration) {
        migration[1].split('、').forEach(s => data.integration.list.push({ item: s.trim() }))
    }
    const architecture = integrationSection[1].match(/\* \*\*集成架构\*\*：\s*([\s\S]*?)(?=\n\*|$)/)
    if (architecture) data.integration.architecture = architecture[1].trim()
    const methods = integrationSection[1].match(/\* \*\*接口方式\*\*：(.+)$/m)
    if (methods) data.integration.methods = methods[1].trim()
  }

  // Why Boran
  const whySection = content.match(/## 8\. 为什么是泊冉\s*([\s\S]*?)(?=\n##|$|---)/)
  if (whySection) {
    const items = whySection[1].split('\n').filter(l => l.trim().startsWith('*'))
    items.forEach(item => {
      data.whyBoran.push({ reason: item.replace(/^\*\s+/, '').trim() })
    })
  }

  // Methodology
  const methodSection = content.match(/## 9\. 可复用的方法论：(.+)\s*([\s\S]*?)(?=\n##|$)/)
  if (methodSection) {
    data.methodology.name = methodSection[1].trim()
    const core = methodSection[2].match(/\* \*\*方法论核心\*\*：(.+)$/m)
    if (core) core[1].split(' -> ').forEach(s => data.methodology.steps.push({ item: s.trim() }))
    const targets = methodSection[2].match(/\* \*\*适用对象\*\*：(.+)$/m)
    if (targets) targets[1].split('、').forEach(s => data.methodology.targets.push({ item: s.trim() }))
    const deliverables = methodSection[2].match(/\* \*\*交付物清单\*\*：\s*([\s\S]*?)(?=\n\*|$|##)/)
    if (deliverables) {
        deliverables[1].split('\n').filter(l => l.trim().startsWith('*')).forEach(l => {
            data.methodology.deliverables.push({ item: l.replace(/^\*\s+/, '').trim() })
        })
    }
  }

  return data
}

function toKebabCase(str: string) {
    return str
        .toLowerCase()
        .replace(/[^\w\s\u4e00-\u9fa5]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 100)
}

// English slug mapping for Chinese case studies
const englishSlugMap: Record<string, string> = {
    '住矿浆料业财一体化实践': 'zhukuang-finance-operations-integration',
    '南极电商数字化治理实践': 'nanjing-digital-governance',
    '安能物流利润中心模型实践': 'anne-profit-center-model',
    '西域供应链业财一体化实践': 'xiyu-supply-chain-integration',
    'zhukuang-rule-engine-case': 'zhukuang-rule-engine',
}

function getSlug(fileName: string): string {
    const nameWithoutExt = fileName.replace('.md', '')
    return englishSlugMap[nameWithoutExt] || toKebabCase(nameWithoutExt)
}

async function main() {
  const payload = await getPayload({ config: configPromise })
  const caseDir = path.resolve(__dirname, '../docs/case-study')
  const files = fs.readdirSync(caseDir).filter(f => f.endsWith('.md'))

  for (const file of files) {
    console.log(`Processing: ${file}`)
    const content = fs.readFileSync(path.join(caseDir, file), 'utf-8')
    const caseData = parseMarkdown(content)
    const slug = getSlug(file)

    // Check if exists with current slug OR old slug
    const oldSlug = toKebabCase(file.replace('.md', ''))

    const existing = await payload.find({
      collection: 'success-stories',
      where: {
        or: [
          { slug: { equals: slug } },
          { slug: { equals: oldSlug } },
        ]
      },
    })

    if (existing.docs.length > 0) {
      await payload.update({
        collection: 'success-stories',
        id: existing.docs[0].id,
        data: { ...caseData, slug },
      })
      console.log(`✓ Updated ${slug}`)
    } else {
      await payload.create({
        collection: 'success-stories',
        data: { ...caseData, slug },
      })
      console.log(`✓ Created ${slug}`)
    }
  }
  process.exit(0)
}

main().catch(err => {
    console.error(err)
    process.exit(1)
})
