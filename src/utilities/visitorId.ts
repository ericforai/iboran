import crypto from 'crypto'

const VISITOR_ID_TTL_MS = 30 * 24 * 60 * 60 * 1000 // 30 days

const getVisitorSecret = () => {
  const secret = process.env.VISITOR_SECRET || process.env.PAYLOAD_SECRET
  if (secret) return secret
  // Dev fallback: keeps IDs stable across module reloads in local environment.
  return 'dev-visitor-secret-change-in-production'
}

export const generateSignedVisitorId = (): string => {
  const rawId = crypto.randomBytes(12).toString('base64url')
  const timestamp = Date.now()
  const payload = `${rawId}.${timestamp}`

  const hmac = crypto
    .createHmac('sha256', getVisitorSecret())
    .update(payload)
    .digest('base64url')
    .slice(0, 16)

  return `${payload}.${hmac}`
}

export const verifyVisitorId = (visitorId: string): { valid: boolean; reason?: string } => {
  try {
    const parts = visitorId.split('.')
    if (parts.length !== 3) {
      return { valid: false, reason: 'invalid_format' }
    }

    const [rawId, timestampStr, providedHmac] = parts
    const payload = `${rawId}.${timestampStr}`

    const expectedHmac = crypto
      .createHmac('sha256', getVisitorSecret())
      .update(payload)
      .digest('base64url')
      .slice(0, 16)

    if (
      Buffer.byteLength(expectedHmac) !== Buffer.byteLength(providedHmac) ||
      !crypto.timingSafeEqual(Buffer.from(expectedHmac), Buffer.from(providedHmac))
    ) {
      return { valid: false, reason: 'invalid_signature' }
    }

    const timestamp = Number.parseInt(timestampStr, 10)
    if (Number.isNaN(timestamp) || Date.now() - timestamp > VISITOR_ID_TTL_MS) {
      return { valid: false, reason: 'expired' }
    }

    return { valid: true }
  } catch {
    return { valid: false, reason: 'verification_failed' }
  }
}

export const getVisitorIdExpiry = () => Date.now() + VISITOR_ID_TTL_MS

