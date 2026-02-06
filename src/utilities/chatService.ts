export type ChatMessageWriteInput = {
  conversationId?: string
  visitorId?: string
  sourcePage?: string
  content: string
  clientMessageId: string
}

export type ChatMessageWriteResponse = {
  conversation?: {
    id: string
    handoffStatus?: 'none' | 'requested' | 'active' | 'closed'
  }
  deduped?: boolean
}

export type HandoffResponse = {
  conversation?: {
    id: string
    handoffStatus?: 'none' | 'requested' | 'active' | 'closed'
  }
}

export type ConversationMessage = {
  id: string
  role: 'visitor' | 'ai' | 'agent' | 'system'
  content: string
  createdAt?: string
}

const postJSON = async <T>(url: string, body: Record<string, unknown>): Promise<T> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error(`Request failed with ${response.status}`)
  }

  return response.json() as Promise<T>
}

export const chatService = {
  sendVisitorMessage(input: ChatMessageWriteInput) {
    return postJSON<ChatMessageWriteResponse>('/api/chat/messages', input)
  },

  requestHandoff(input: { conversationId?: string; visitorId?: string; sourcePage?: string }) {
    return postJSON<HandoffResponse>('/api/chat/handoff', input)
  },

  async getConversationMessages(conversationId: string, limit = 80, visitorId?: string) {
    const response = await fetch(`/api/chat/conversations/${conversationId}/messages?limit=${limit}`, {
      headers: visitorId
        ? {
            'x-chat-visitor-id': visitorId,
          }
        : undefined,
    })
    if (!response.ok) {
      throw new Error(`Request failed with ${response.status}`)
    }

    const data = (await response.json()) as { docs: ConversationMessage[] }
    return data.docs
  },

  subscribeConversation(
    conversationId: string,
    visitorId: string | undefined,
    handlers: {
      onMessages: (messages: ConversationMessage[]) => void
      onError?: (error: string) => void
    },
  ) {
    const query = new URLSearchParams()
    if (visitorId) {
      query.set('visitorId', visitorId)
    }

    const eventSource = new EventSource(`/api/chat/conversations/${conversationId}/events?${query.toString()}`, {
      withCredentials: true,
    })

    eventSource.addEventListener('messages', (event) => {
      try {
        const payload = JSON.parse((event as MessageEvent).data) as { docs: ConversationMessage[] }
        handlers.onMessages(payload.docs || [])
      } catch {
        handlers.onError?.('failed to parse streamed messages')
      }
    })

    eventSource.addEventListener('error', () => {
      handlers.onError?.('message stream disconnected')
    })

    return () => {
      eventSource.close()
    }
  },
}
