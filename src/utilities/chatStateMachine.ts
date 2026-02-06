import type { HandoffEvent, HandoffStatus } from '@/types/chat'

const transitions: Record<HandoffStatus, HandoffStatus[]> = {
  none: ['requested'],
  requested: ['active', 'closed'],
  active: ['closed'],
  closed: [],
}

export const canTransition = (from: HandoffStatus, to: HandoffStatus): boolean => {
  return transitions[from].includes(to)
}

export const nextHandoffStatus = (from: HandoffStatus, event: HandoffEvent): HandoffStatus => {
  if (event === 'request_human' && canTransition(from, 'requested')) return 'requested'
  if (event === 'agent_reply' && canTransition(from, 'active')) return 'active'
  if (event === 'close' && canTransition(from, 'closed')) return 'closed'

  return from
}
