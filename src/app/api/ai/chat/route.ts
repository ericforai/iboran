import { NextRequest, NextResponse } from 'next/server';
import { retrieveKnowledge } from '@/utilities/knowledgeGrounding'
import type { GroundingChunk } from '@/types/ai'
import { checkRateLimit, getRequestIP } from '@/utilities/rateLimit'

interface ChatMessage {
  role: 'user' | 'assistant' | 'model';
  content: string;
}

const MAX_HISTORY = 20
const MAX_CONTENT_LEN = 2000
const MAX_SYSTEM_HINT_LEN = 800
const ENABLE_PUBLIC_DOCS_KB = process.env.AI_ALLOW_PUBLIC_DOCS_KB === 'true'
const FIXED_SYSTEM_PROMPT =
  process.env.AI_SYSTEM_PROMPT ||
  '你是泊冉软件官网AI客服。你必须基于提供的知识库进行回答，不编造事实；信息不足时明确说明并建议转人工。'

const buildGroundingChunks = (knowledge: Awaited<ReturnType<typeof retrieveKnowledge>>): GroundingChunk[] => {
  const toWebURI = (source: string) => {
    if (!source.startsWith('site:')) return undefined
    const value = source.replace('site:', '')
    const [collection, slug = ''] = value.split('/')
    if (!slug) return undefined

    if (collection === 'posts') return `/posts/${slug}`
    if (collection === 'resources') return `/resources/${slug}`
    if (collection === 'success-stories') return `/cases/${slug}`
    if (collection === 'pages') return slug === 'home' ? '/' : `/${slug}`
    return undefined
  }

  return knowledge.map((item) => {
    const uri = toWebURI(item.source)
    return {
      web: uri
        ? {
            uri,
            title: item.title,
          }
        : undefined,
    }
  }).filter((chunk) => Boolean(chunk.web?.uri))
}

export async function POST(req: NextRequest) {
  try {
    const ip = getRequestIP(req.headers)
    const limit = checkRateLimit(`ai-chat:${ip}`, { limit: 20, windowMs: 60_000 })
    if (!limit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil(limit.retryAfterMs / 1000)) } },
      )
    }

    const body = (await req.json()) as { history?: ChatMessage[]; systemInstruction?: string }
    const history = Array.isArray(body.history) ? body.history : []
    const systemInstruction = typeof body.systemInstruction === 'string' ? body.systemInstruction : ''

    if (history.length === 0) {
      return NextResponse.json({ error: 'history is required' }, { status: 400 })
    }

    if (history.length > MAX_HISTORY) {
      return NextResponse.json({ error: 'history too long' }, { status: 400 })
    }

    const hasInvalidMessage = history.some(
      (item) =>
        !item ||
        (item.role !== 'user' && item.role !== 'assistant' && item.role !== 'model') ||
        typeof item.content !== 'string' ||
        item.content.trim().length === 0 ||
        item.content.length > MAX_CONTENT_LEN,
    )
    if (hasInvalidMessage) {
      return NextResponse.json({ error: 'invalid history payload' }, { status: 400 })
    }

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const baseUrl = process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com';

    const latestUserMessage = [...history].reverse().find((msg) => msg.role === 'user')?.content || ''
    const knowledge = await retrieveKnowledge(latestUserMessage, 6, {
      includeDocs: ENABLE_PUBLIC_DOCS_KB,
      includeSite: true,
    })
    const knowledgePrompt = knowledge.length
      ? `知识库（来自网站与/docs，请优先使用并保持一致）：\n${knowledge
          .map((item, idx) => `【K${idx + 1}】来源: ${item.source}\n标题: ${item.title}\n内容: ${item.content}`)
          .join('\n\n')}`
      : '知识库暂无命中，请明确说明信息不足，不要编造。'
    const groundingChunks = buildGroundingChunks(knowledge)

    // Build messages for DeepSeek API
    const messages = [
      {
        role: 'system',
        content:
          `${FIXED_SYSTEM_PROMPT}\n\n` +
          `${systemInstruction.slice(0, MAX_SYSTEM_HINT_LEN)}\n\n` +
          '回答规则：仅基于“知识库”与用户问题回答；若知识不足请明确告知并建议联系人工，不可编造事实。\n' +
          '优先引用知识库中的具体术语、产品名、页面信息和流程描述。\n' +
          '输出简洁、专业、可执行。',
      },
      { role: 'system', content: knowledgePrompt },
      ...history.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content
      }))
    ];

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages,
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('DeepSeek API Error:', errorData);
      return NextResponse.json(
        { error: 'API request failed' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || '';

    return NextResponse.json({ text, groundingChunks });

  } catch (error) {
    console.error('AI Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
