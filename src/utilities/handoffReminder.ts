import type { Payload } from 'payload'

const AUTO_REMINDER_DELAY_MS = 60 * 1000
const AUTO_REMINDER_MESSAGE = '人工客服暂时繁忙，您可直接拨打热线电话 400-9955-161，我们将优先处理。'

type ConversationDoc = {
  id: string
  handoffStatus?: 'none' | 'requested' | 'active' | 'closed'
  handoffReminderSent?: boolean
}

type MessageDoc = {
  id: string
  role: 'visitor' | 'ai' | 'agent' | 'system'
  createdAt?: string
}

export const maybeSendHandoffPhoneReminder = async (payload: Payload, conversationId: string) => {
  const conversation = (await payload
    .findByID({
      collection: 'conversations',
      id: conversationId,
      depth: 0,
    })
    .catch(() => null)) as ConversationDoc | null

  if (!conversation) return
  if (conversation.handoffStatus !== 'requested') return
  if (conversation.handoffReminderSent) return

  const latest = await payload.find({
    collection: 'messages',
    where: {
      conversation: {
        equals: conversationId,
      },
    },
    sort: '-createdAt',
    limit: 1,
    pagination: false,
  })

  const latestMessage = latest.docs[0] as MessageDoc | undefined
  if (!latestMessage || latestMessage.role !== 'visitor' || !latestMessage.createdAt) return

  const elapsed = Date.now() - new Date(latestMessage.createdAt).getTime()
  if (!Number.isFinite(elapsed) || elapsed < AUTO_REMINDER_DELAY_MS) return

  const reminderClientMessageId = `handoff-reminder-${conversationId}-${latestMessage.id}`
  const existing = await payload.find({
    collection: 'messages',
    where: {
      clientMessageId: {
        equals: reminderClientMessageId,
      },
    },
    limit: 1,
    pagination: false,
  })
  if (existing.docs[0]) return

  await payload.create({
    collection: 'messages',
    data: {
      conversation: conversationId,
      role: 'system',
      content: AUTO_REMINDER_MESSAGE,
      clientMessageId: reminderClientMessageId,
      meta: {
        source: 'handoff-auto-reminder',
      },
    },
  })

  await payload.update({
    collection: 'conversations',
    id: conversationId,
    data: {
      handoffReminderSent: true,
      handoffReminderSentAt: new Date().toISOString(),
      lastMessageAt: new Date().toISOString(),
    },
  })
}

