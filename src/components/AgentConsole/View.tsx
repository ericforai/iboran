'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { chatService } from '@/utilities/chatService'

type Conversation = {
  id: string
  visitorId?: string
  sourcePage?: string
  handoffStatus: 'none' | 'requested' | 'active' | 'closed'
  updatedAt?: string
}

type Message = {
  id: string
  role: 'visitor' | 'ai' | 'agent' | 'system'
  content: string
  createdAt?: string
}

const AGENT_POLL_INTERVAL_MS = Math.max(
  5000,
  Number(process.env.NEXT_PUBLIC_HUMAN_HANDOFF_POLLING_MS || 1200) * 4,
)
const MESSAGE_REFRESH_FALLBACK_MS = 12000
const READ_MARKERS_STORAGE_KEY = 'agent-console-read-markers-v1'

type ParsedSource = {
  path: string
  channelLabel: string
  ref: string
}

const formatTime = (value?: string) => {
  if (!value) return '-'

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '-'

  return date.toLocaleString('zh-CN', { hour12: false })
}

const parseSource = (sourcePage?: string): ParsedSource => {
  if (!sourcePage) {
    return { path: '/', channelLabel: '网站', ref: '' }
  }

  const segments = sourcePage.split('|').map((segment) => segment.trim())
  const path = segments[0] || '/'
  const channelSegment = segments.find((segment) => segment.startsWith('channel='))
  const refSegment = segments.find((segment) => segment.startsWith('ref='))

  const channel = channelSegment?.split('=')[1] || ''
  const channelMap: Record<string, string> = {
    direct: '直访',
    referral: '外链',
    baidu: '百度',
    google: 'Google',
    wechat: '微信',
    douyin: '抖音',
  }

  return {
    path,
    channelLabel: channelMap[channel] || (channel ? channel.toUpperCase() : '网站'),
    ref: refSegment?.split('=')[1] || '',
  }
}

const AgentConsoleView: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [selectedConversationId, setSelectedConversationId] = useState<string>()
  const [messages, setMessages] = useState<Message[]>([])
  const [unreadMap, setUnreadMap] = useState<Record<string, number>>({})
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState<string>()
  const [soundReady, setSoundReady] = useState(false)
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>(() => {
    if (typeof window === 'undefined' || typeof Notification === 'undefined') return 'default'
    return Notification.permission
  })

  const readMarkersRef = useRef<Record<string, string>>({})
  const audioContextRef = useRef<AudioContext | null>(null)
  const hasUnreadBaselineRef = useRef(false)
  const previousTotalUnreadRef = useRef(0)
  const lastNotifyAtRef = useRef<Record<string, number>>({})
  const lastMessageRefreshAtRef = useRef<Record<string, number>>({})

  const selectedConversation = useMemo(() => {
    return conversations.find((conversation) => conversation.id === selectedConversationId)
  }, [conversations, selectedConversationId])

  const totalUnread = useMemo(() => {
    return Object.values(unreadMap).reduce((sum, value) => sum + value, 0)
  }, [unreadMap])

  // Memoize parsed sources to avoid recalculating on every render
  const parsedSourcesMap = useMemo(() => {
    const map = new Map<string, ReturnType<typeof parseSource>>()
    for (const conversation of conversations) {
      map.set(conversation.id, parseSource(conversation.sourcePage))
    }
    return map
  }, [conversations])

  const persistReadMarkers = useCallback((nextMarkers: Record<string, string>) => {
    readMarkersRef.current = nextMarkers
    try {
      window.localStorage.setItem(READ_MARKERS_STORAGE_KEY, JSON.stringify(nextMarkers))
    } catch {
      // noop
    }
  }, [])

  const ensureSoundReady = useCallback(async () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new window.AudioContext()
      }

      if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume()
      }

      setSoundReady(audioContextRef.current.state === 'running')
    } catch {
      setSoundReady(false)
    }
  }, [])

  const playNotification = useCallback(() => {
    const context = audioContextRef.current
    if (!context || context.state !== 'running') return

    try {
      const oscillator = context.createOscillator()
      const gain = context.createGain()

      oscillator.type = 'sine'
      oscillator.frequency.value = 988
      gain.gain.value = 0.05

      oscillator.connect(gain)
      gain.connect(context.destination)

      oscillator.start()
      oscillator.stop(context.currentTime + 0.12)
    } catch {
      // noop
    }
  }, [])

  const requestNotificationPermission = useCallback(async () => {
    if (typeof Notification === 'undefined') return
    try {
      const permission = await Notification.requestPermission()
      setNotificationPermission(permission)
    } catch {
      setNotificationPermission('default')
    }
  }, [])

  const pushBrowserNotification = useCallback((conversation: Conversation, content: string) => {
    if (typeof Notification === 'undefined') return
    if (Notification.permission !== 'granted') return

    const now = Date.now()
    const last = lastNotifyAtRef.current[conversation.id] || 0
    if (now - last < 2000) return
    lastNotifyAtRef.current[conversation.id] = now

    const source = parseSource(conversation.sourcePage)
    const title = `${source.channelLabel}访客新消息`
    const body = `${source.path} · ${content.slice(0, 60)}`
    try {
      const notification = new Notification(title, {
        body,
        tag: `chat-${conversation.id}`,
        renotify: true,
      } as NotificationOptions)
      notification.onclick = () => {
        window.focus()
        setSelectedConversationId(conversation.id)
        notification.close()
      }
    } catch {
      // noop
    }
  }, [])

  const mergeMessages = useCallback((incoming: Message[]) => {
    if (incoming.length === 0) return

    setMessages((prev) => {
      const map = new Map(prev.map((message) => [message.id, message]))
      for (const message of incoming) {
        map.set(message.id, message)
      }
      return Array.from(map.values()).sort((a, b) => {
        const left = new Date(a.createdAt || 0).getTime()
        const right = new Date(b.createdAt || 0).getTime()
        return left - right
      })
    })
  }, [])

  const markConversationAsRead = useCallback(
    (conversationId: string, records: Message[]) => {
      const latest = [...records].reverse().find((item) => item.createdAt)
      const latestAt = latest?.createdAt

      setUnreadMap((prev) => ({ ...prev, [conversationId]: 0 }))

      if (latestAt) {
        persistReadMarkers({
          ...readMarkersRef.current,
          [conversationId]: latestAt,
        })
      }
    },
    [persistReadMarkers],
  )

  const loadConversations = useCallback(async () => {
    const query = new URLSearchParams({
      depth: '0',
      limit: '30',
      sort: '-updatedAt',
      'where[or][0][handoffStatus][equals]': 'requested',
      'where[or][1][handoffStatus][equals]': 'active',
    })

    const response = await fetch(`/api/conversations?${query.toString()}`, { credentials: 'include' })
    if (!response.ok) {
      throw new Error('无法加载会话列表')
    }

    const data = (await response.json()) as { docs: Conversation[] }
    setConversations(data.docs)

    setUnreadMap((prev) => {
      const next: Record<string, number> = {}
      for (const conversation of data.docs) {
        next[conversation.id] = prev[conversation.id] || 0
      }
      return next
    })

    if (!selectedConversationId && data.docs[0]?.id) {
      setSelectedConversationId(data.docs[0].id)
    }

    if (
      selectedConversationId &&
      data.docs.length > 0 &&
      !data.docs.some((conversation) => conversation.id === selectedConversationId)
    ) {
      setSelectedConversationId(data.docs[0].id)
    }

    return data.docs
  }, [selectedConversationId])

  const loadMessages = useCallback(async (conversationId: string) => {
    const records = await chatService.getConversationMessages(conversationId, 80)
    setMessages(records as Message[])
    return records as Message[]
  }, [])

  const refresh = useCallback(async () => {
    try {
      setError(undefined)
      const list = await loadConversations()
      if (selectedConversationId) {
        const now = Date.now()
        const lastRefresh = lastMessageRefreshAtRef.current[selectedConversationId] || 0
        if (now - lastRefresh >= MESSAGE_REFRESH_FALLBACK_MS) {
          const records = await loadMessages(selectedConversationId)
          markConversationAsRead(selectedConversationId, records)
          lastMessageRefreshAtRef.current[selectedConversationId] = now
        }
      }

      setUnreadMap((prev) => {
        const next: Record<string, number> = {}

        for (const conversation of list) {
          if (conversation.id === selectedConversationId) {
            next[conversation.id] = 0
            continue
          }

          const readAt = readMarkersRef.current[conversation.id]
          const updatedAt = conversation.updatedAt
          const hasUnread = Boolean(
            updatedAt && (!readAt || new Date(updatedAt).getTime() > new Date(readAt).getTime()),
          )

          const unread = hasUnread ? Math.max(1, prev[conversation.id] || 0) : 0
          next[conversation.id] = unread

          if ((prev[conversation.id] || 0) === 0 && unread > 0) {
            pushBrowserNotification(conversation, '有新的访客消息')
          }
        }

        return next
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : '刷新失败')
    }
  }, [loadConversations, loadMessages, markConversationAsRead, pushBrowserNotification, selectedConversationId])

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(READ_MARKERS_STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as Record<string, string>
      readMarkersRef.current = parsed
    } catch {
      // ignore invalid cache
    }
  }, [])

  useEffect(() => {
    if (typeof Notification === 'undefined') return
    setNotificationPermission(Notification.permission)
  }, [])

  useEffect(() => {
    const unlock = () => {
      void ensureSoundReady()
    }

    window.addEventListener('pointerdown', unlock)
    window.addEventListener('keydown', unlock)

    return () => {
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
    }
  }, [ensureSoundReady])

  useEffect(() => {
    void refresh()
  }, [refresh])

  useEffect(() => {
    if (!selectedConversationId) {
      setMessages([])
      return
    }

    void loadMessages(selectedConversationId).then((records) => {
      markConversationAsRead(selectedConversationId, records)
      lastMessageRefreshAtRef.current[selectedConversationId] = Date.now()
    })
  }, [selectedConversationId, loadMessages, markConversationAsRead])

  useEffect(() => {
    const timer = window.setInterval(() => {
      void refresh()
    }, AGENT_POLL_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [refresh])

  useEffect(() => {
    if (!selectedConversationId) return

    const unsubscribe = chatService.subscribeConversation(selectedConversationId, undefined, {
      onMessages: (incoming) => {
        const typed = incoming as Message[]
        if (typed.length === 0) return

        mergeMessages(typed)
        markConversationAsRead(selectedConversationId, typed)

        const latest = typed[typed.length - 1]
        if (latest) {
          setConversations((prev) =>
            prev.map((item) =>
              item.id === selectedConversationId
                ? { ...item, updatedAt: latest.createdAt || new Date().toISOString() }
                : item,
            ),
          )

        }
      },
    })

    return () => unsubscribe()
  }, [markConversationAsRead, mergeMessages, selectedConversationId])

  useEffect(() => {
    const total = Object.values(unreadMap).reduce((sum, value) => sum + value, 0)
    if (hasUnreadBaselineRef.current && total > previousTotalUnreadRef.current) {
      playNotification()
    }

    hasUnreadBaselineRef.current = true
    previousTotalUnreadRef.current = total
  }, [playNotification, unreadMap])

  const handleSend = async () => {
    if (!selectedConversationId || !input.trim() || isSending) return

    setIsSending(true)
    setError(undefined)

    try {
      const response = await fetch('/api/chat/agent/reply', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversationId: selectedConversationId,
          content: input,
          clientMessageId: `agent-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        }),
      })

      if (!response.ok) {
        const detail = await response.json().catch(() => ({ error: '发送失败' }))
        throw new Error(detail.error || '发送失败')
      }

      const payload = (await response.json()) as { message?: Message }
      setInput('')

      if (payload.message) {
        mergeMessages([payload.message])
        markConversationAsRead(selectedConversationId, [...messages, payload.message])
      }

      setConversations((prev) =>
        prev.map((conversation) =>
          conversation.id === selectedConversationId
            ? {
                ...conversation,
                handoffStatus: 'active',
                updatedAt: new Date().toISOString(),
              }
            : conversation,
        ),
      )
    } catch (err) {
      setError(err instanceof Error ? err.message : '发送失败')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>Agent Console{totalUnread > 0 ? ` (${totalUnread})` : ''}</h1>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => void ensureSoundReady()} style={{ padding: '8px 12px', cursor: 'pointer' }}>
            {soundReady ? '声音已启用' : '启用声音'}
          </button>
          <button onClick={() => void requestNotificationPermission()} style={{ padding: '8px 12px', cursor: 'pointer' }}>
            {notificationPermission === 'granted'
              ? '通知已启用'
              : notificationPermission === 'denied'
                ? '通知被禁用'
                : '启用通知'}
          </button>
          <button onClick={() => void refresh()} style={{ padding: '8px 12px', cursor: 'pointer' }}>
            刷新
          </button>
        </div>
      </div>

      {error ? (
        <div style={{ marginBottom: 12, color: '#b42318', background: '#fee4e2', padding: 10, borderRadius: 8 }}>
          {error}
        </div>
      ) : null}

      <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 12, minHeight: 640 }}>
        <div style={{ border: '1px solid #e4e7ec', borderRadius: 10, overflow: 'hidden', background: '#fff' }}>
          <div style={{ padding: 12, borderBottom: '1px solid #e4e7ec', fontWeight: 700 }}>待处理会话</div>
          <div style={{ maxHeight: 590, overflowY: 'auto' }}>
            {conversations.length === 0 ? (
              <div style={{ padding: 12, color: '#667085' }}>暂无请求中的会话</div>
            ) : (
              conversations.map((conversation) => {
                const selected = conversation.id === selectedConversationId
                const unread = unreadMap[conversation.id] || 0
                const source = parsedSourcesMap.get(conversation.id) || parseSource(conversation.sourcePage)

                return (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversationId(conversation.id)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      border: 0,
                      borderBottom: '1px solid #f2f4f7',
                      padding: 12,
                      cursor: 'pointer',
                      background: selected ? '#eef4ff' : '#fff',
                    }}
                  >
                    <div style={{ fontWeight: 700 }}>
                      {source.channelLabel}访客 · {(conversation.visitorId || conversation.id).slice(-6)}
                    </div>
                    <div style={{ fontSize: 12, color: '#475467', marginTop: 4 }}>
                      入口：{source.path}
                      {source.ref ? ` · 来源站点：${source.ref}` : ''}
                    </div>
                    <div style={{ marginTop: 6, fontSize: 12, color: '#344054' }}>
                      {conversation.handoffStatus.toUpperCase()} · {formatTime(conversation.updatedAt)}
                    </div>
                    {unread > 0 ? (
                      <div
                        style={{
                          marginTop: 6,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: 20,
                          height: 20,
                          borderRadius: 999,
                          background: '#d92d20',
                          color: '#fff',
                          fontSize: 12,
                          fontWeight: 700,
                          padding: '0 6px',
                        }}
                      >
                        {unread}
                      </div>
                    ) : null}
                  </button>
                )
              })
            )}
          </div>
        </div>

        <div style={{ border: '1px solid #e4e7ec', borderRadius: 10, background: '#fff', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: 12, borderBottom: '1px solid #e4e7ec', fontWeight: 700 }}>
            {selectedConversation
              ? `会话：${parseSource(selectedConversation.sourcePage).channelLabel}访客 · ${(selectedConversation.visitorId || selectedConversation.id).slice(-6)}`
              : '请选择会话'}
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: 12, background: '#f9fafb' }}>
            {messages.length === 0 ? (
              <div style={{ color: '#667085' }}>暂无消息</div>
            ) : (
              messages.map((message) => {
                const isAgent = message.role === 'agent'
                return (
                  <div
                    key={message.id}
                    style={{
                      display: 'flex',
                      justifyContent: isAgent ? 'flex-end' : 'flex-start',
                      marginBottom: 8,
                    }}
                  >
                    <div
                      style={{
                        maxWidth: '75%',
                        background: isAgent ? '#2e90fa' : '#fff',
                        color: isAgent ? '#fff' : '#101828',
                        borderRadius: 10,
                        padding: '8px 10px',
                        border: isAgent ? 'none' : '1px solid #e4e7ec',
                      }}
                    >
                      <div style={{ fontSize: 12, opacity: 0.85, marginBottom: 2 }}>{message.role}</div>
                      <div style={{ whiteSpace: 'pre-wrap' }}>{message.content}</div>
                      <div style={{ marginTop: 4, fontSize: 11, opacity: 0.75 }}>{formatTime(message.createdAt)}</div>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          <div style={{ padding: 12, borderTop: '1px solid #e4e7ec', display: 'flex', gap: 8 }}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={selectedConversationId ? '输入回复内容...' : '请选择会话后再回复'}
              disabled={!selectedConversationId || isSending}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault()
                  void handleSend()
                }
              }}
              style={{
                flex: 1,
                border: '1px solid #d0d5dd',
                borderRadius: 8,
                padding: '10px 12px',
                outline: 'none',
              }}
            />
            <button
              onClick={() => void handleSend()}
              disabled={!selectedConversationId || !input.trim() || isSending}
              style={{
                border: 0,
                borderRadius: 8,
                padding: '10px 14px',
                background: '#2e90fa',
                color: '#fff',
                cursor: !selectedConversationId || !input.trim() || isSending ? 'not-allowed' : 'pointer',
                opacity: !selectedConversationId || !input.trim() || isSending ? 0.6 : 1,
              }}
            >
              {isSending ? '发送中...' : '发送'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentConsoleView
