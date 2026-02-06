import { describe, expect, it } from 'vitest'

import { canTransition, nextHandoffStatus } from '../../src/utilities/chatStateMachine'

describe('chat handoff state machine', () => {
  it('allows none -> requested -> active -> closed', () => {
    expect(canTransition('none', 'requested')).toBe(true)
    expect(canTransition('requested', 'active')).toBe(true)
    expect(canTransition('active', 'closed')).toBe(true)
  })

  it('blocks illegal transitions', () => {
    expect(canTransition('closed', 'active')).toBe(false)
    expect(canTransition('none', 'active')).toBe(false)
  })

  it('returns next status safely', () => {
    expect(nextHandoffStatus('none', 'request_human')).toBe('requested')
    expect(nextHandoffStatus('none', 'agent_reply')).toBe('none')
  })
})
