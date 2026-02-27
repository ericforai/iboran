import { test, expect } from '@playwright/test'

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

test.describe('@journey Chat Handoff Self-Verifying', () => {
  test('visitor can request human support in the same widget and system state stays consistent', async ({ page, request }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await page.evaluate(() => {
      window.dispatchEvent(new CustomEvent('open-ai-consultant'))
    })

    await expect(page.getByPlaceholder('输入您的咨询问题...')).toBeVisible({ timeout: 10000 })

    const handoffResponsePromise = page.waitForResponse((response) => {
      return response.url().includes('/api/chat/handoff') && response.request().method() === 'POST'
    })

    await page.getByPlaceholder('输入您的咨询问题...').fill('我需要人工客服支持')
    await page.keyboard.press('Enter')
    await expect(page.getByText(/客服已收到|正在为您处理/)).toBeVisible()

    const handoffResponse = await handoffResponsePromise
    expect(handoffResponse.ok()).toBeTruthy()

    const handoffBody = (await handoffResponse.json()) as {
      conversation?: { id?: string; visitorId?: string }
    }

    const conversationId = handoffBody.conversation?.id
    const visitorId = handoffBody.conversation?.visitorId
    expect(conversationId).toBeTruthy()
    expect(visitorId).toBeTruthy()

    const messagesResponse = await request.get(`${baseURL}/api/chat/conversations/${conversationId}/messages`, {
      headers: {
        'x-chat-visitor-id': String(visitorId),
      },
    })
    expect(messagesResponse.ok()).toBeTruthy()

    const messagesBody = (await messagesResponse.json()) as {
      docs: Array<{ role: string; content: string }>
    }

    const hasSystemHandoffMessage = messagesBody.docs.some((message) => {
      return message.role === 'system' && message.content.includes('已为你连接客服')
    })

    expect(hasSystemHandoffMessage).toBe(true)
  })
})
