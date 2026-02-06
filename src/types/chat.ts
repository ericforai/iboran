export type ChatMode = 'ai' | 'human' | 'hybrid'

export type HandoffStatus = 'none' | 'requested' | 'active' | 'closed'

export type HandoffEvent = 'request_human' | 'agent_reply' | 'close'
