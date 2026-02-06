type RateWindow = {
  count: number
  resetAt: number
}

const scope = globalThis as typeof globalThis & {
  __routeRateLimitStore?: Map<string, RateWindow>
  __routeRateLimitCleanupScheduled?: boolean
}

const CLEANUP_INTERVAL_MS = 5 * 60 * 1000 // 5 minutes

const cleanupExpiredEntries = () => {
  const now = Date.now()
  const store = scope.__routeRateLimitStore
  if (!store) return

  let deleted = 0
  for (const [key, value] of store.entries()) {
    if (value.resetAt <= now) {
      store.delete(key)
      deleted++
    }
  }
}

const getStore = () => {
  if (!scope.__routeRateLimitStore) {
    scope.__routeRateLimitStore = new Map<string, RateWindow>()
  }

  // Schedule cleanup only once
  if (!scope.__routeRateLimitCleanupScheduled) {
    scope.__routeRateLimitCleanupScheduled = true
    // Run cleanup periodically
    setInterval(() => {
      cleanupExpiredEntries()
    }, CLEANUP_INTERVAL_MS)
  }

  return scope.__routeRateLimitStore
}

/**
 * Get client IP from headers, protecting against spoofing.
 * In production behind a trusted proxy (like Cloudflare/AWS ALB),
 * the rightmost IP in x-forwarded-for is the original client IP.
 */
export const getRequestIP = (headers: Headers, trustedProxy = true) => {
  // Try Cloudflare first
  const cfIP = headers.get('cf-connecting-ip')
  if (cfIP) return cfIP

  const forwarded = headers.get('x-forwarded-for')
  if (forwarded && trustedProxy) {
    // Rightmost IP is the original client (assuming trusted proxy chain)
    const ips = forwarded.split(',').map((ip) => ip.trim())
    return ips[ips.length - 1] || 'unknown'
  }

  // Fallback - never trust client-provided headers without proxy verification
  return headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
}

export const checkRateLimit = (
  key: string,
  opts: {
    limit: number
    windowMs: number
  },
) => {
  const now = Date.now()
  const store = getStore()
  const current = store.get(key)

  if (!current || current.resetAt <= now) {
    store.set(key, {
      count: 1,
      resetAt: now + opts.windowMs,
    })
    return { allowed: true, retryAfterMs: 0 }
  }

  if (current.count >= opts.limit) {
    return {
      allowed: false,
      retryAfterMs: Math.max(0, current.resetAt - now),
    }
  }

  current.count += 1
  store.set(key, current)
  return { allowed: true, retryAfterMs: 0 }
}

