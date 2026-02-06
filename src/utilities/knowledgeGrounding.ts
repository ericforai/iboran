import configPromise from '@payload-config'
import { getPayload } from 'payload'
import fs from 'fs/promises'
import path from 'path'

type KnowledgeSnippet = {
  id: string
  source: string
  title: string
  content: string
}

type KnowledgeCache = {
  expiresAt: number
  cacheKey: string
  snippets: KnowledgeSnippet[]
}

const DOCS_ROOT = path.resolve(process.cwd(), 'docs')
const CACHE_TTL_MS = 5 * 60 * 1000
const MAX_DOC_FILES = 80
const MAX_DOC_SNIPPETS = 220
const MAX_SITE_SNIPPETS = 140

const globalScope = globalThis as typeof globalThis & {
  __knowledgeCacheByKey?: Map<string, KnowledgeCache>
}

const stripMarkdown = (value: string) => {
  return value
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s+/gm, '')
    .replace(/[*_~#>-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const splitParagraphs = (value: string) => {
  return value
    .split(/\n{2,}/)
    .map((segment) => stripMarkdown(segment))
    .filter((segment) => segment.length >= 40)
}

const walkDocs = async (dir: string): Promise<string[]> => {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walkDocs(fullPath)))
      continue
    }

    if (!/\.(md|mdx|txt)$/i.test(entry.name)) continue
    files.push(fullPath)
  }

  return files
}

const loadDocSnippets = async (): Promise<KnowledgeSnippet[]> => {
  try {
    const files = (await walkDocs(DOCS_ROOT)).slice(0, MAX_DOC_FILES)
    const snippets: KnowledgeSnippet[] = []

    for (const file of files) {
      const raw = await fs.readFile(file, 'utf8')
      const paragraphs = splitParagraphs(raw)
      const relative = path.relative(process.cwd(), file).replace(/\\/g, '/')

      for (let i = 0; i < paragraphs.length; i += 1) {
        const chunk = paragraphs[i]
        snippets.push({
          id: `doc-${relative}-${i}`,
          source: relative,
          title: relative.split('/').pop() || relative,
          content: chunk.slice(0, 480),
        })

        if (snippets.length >= MAX_DOC_SNIPPETS) {
          return snippets
        }
      }
    }

    return snippets
  } catch {
    return []
  }
}

const fromSiteDoc = (collection: string, doc: Record<string, unknown>, index: number): KnowledgeSnippet | null => {
  const title = String(doc.title || doc.name || doc.slug || '')
  const summary =
    String(doc?.meta && typeof doc.meta === 'object' ? (doc.meta as Record<string, unknown>).description || '' : '') ||
    String(doc.description || doc.excerpt || doc.summary || '')
  const slug = String(doc.slug || doc.id || `${collection}-${index}`)
  const content = [title, summary].filter(Boolean).join(' | ').trim()

  if (!content || content.length < 8) return null

  return {
    id: `site-${collection}-${slug}`,
    source: `site:${collection}/${slug}`,
    title: title || slug,
    content: content.slice(0, 480),
  }
}

const loadSiteSnippets = async (): Promise<KnowledgeSnippet[]> => {
  try {
    const payload = await getPayload({ config: configPromise })
    const collections = ['pages', 'posts', 'resources', 'industry-solutions', 'success-stories'] as const
    const snippets: KnowledgeSnippet[] = []

    for (const collection of collections) {
      const result = await payload.find({
        collection,
        depth: 0,
        limit: 40,
        sort: '-updatedAt',
      })

      for (let i = 0; i < result.docs.length; i += 1) {
        const snippet = fromSiteDoc(collection, result.docs[i] as Record<string, unknown>, i)
        if (!snippet) continue
        snippets.push(snippet)
        if (snippets.length >= MAX_SITE_SNIPPETS) return snippets
      }
    }

    return snippets
  } catch {
    return []
  }
}

const getKnowledgeCacheStore = () => {
  if (!globalScope.__knowledgeCacheByKey) {
    globalScope.__knowledgeCacheByKey = new Map<string, KnowledgeCache>()
  }
  return globalScope.__knowledgeCacheByKey
}

const loadKnowledgeSnippets = async (opts: { includeDocs: boolean; includeSite: boolean }): Promise<KnowledgeSnippet[]> => {
  const now = Date.now()
  const cacheKey = `docs:${opts.includeDocs ? '1' : '0'}|site:${opts.includeSite ? '1' : '0'}`
  const cacheStore = getKnowledgeCacheStore()
  const cached = cacheStore.get(cacheKey)
  if (cached && cached.expiresAt > now) {
    return cached.snippets
  }

  const [docSnippets, siteSnippets] = await Promise.all([
    opts.includeDocs ? loadDocSnippets() : Promise.resolve([]),
    opts.includeSite ? loadSiteSnippets() : Promise.resolve([]),
  ])
  const snippets = [...docSnippets, ...siteSnippets]

  cacheStore.set(cacheKey, {
    expiresAt: now + CACHE_TTL_MS,
    cacheKey,
    snippets,
  })

  return snippets
}

const tokenize = (input: string) => {
  const matches = input.toLowerCase().match(/[\p{L}\p{N}]{2,}/gu) || []
  return Array.from(new Set(matches))
}

const scoreSnippet = (snippet: KnowledgeSnippet, query: string, tokens: string[]) => {
  const haystack = `${snippet.title} ${snippet.content}`.toLowerCase()
  let score = 0
  if (query && haystack.includes(query)) score += 12
  for (const token of tokens) {
    if (haystack.includes(token)) score += 2
  }
  if (snippet.source.startsWith('site:')) score += 1
  return score
}

export const retrieveKnowledge = async (
  query: string,
  limit = 6,
  options?: { includeDocs?: boolean; includeSite?: boolean },
): Promise<KnowledgeSnippet[]> => {
  const cleanedQuery = query.trim().toLowerCase()
  if (!cleanedQuery) return []

  const includeDocs = options?.includeDocs ?? false
  const includeSite = options?.includeSite ?? true
  const snippets = await loadKnowledgeSnippets({ includeDocs, includeSite })
  if (snippets.length === 0) return []

  const tokens = tokenize(cleanedQuery)
  return snippets
    .map((snippet) => ({
      snippet,
      score: scoreSnippet(snippet, cleanedQuery, tokens),
    }))
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map((item) => item.snippet)
}
