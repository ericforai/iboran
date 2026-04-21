/**
 * Ensure database indexes are created for optimal query performance.
 * This should be called during application startup or via an admin endpoint.
 *
 * Uses Payload's internal db adapter to access MongoDB without a direct
 * mongoose dependency (avoids build-time bundling issues).
 */
export async function ensureChatIndexes() {
  try {
    // Dynamically import to avoid webpack bundling mongoose at build time.
    // mongoose is available at runtime via @payloadcms/db-mongodb.
    const { default: mongoose } = await import('mongoose')
    const db = mongoose.connection.db
    if (!db) {
      console.warn('Database not connected, skipping index creation')
      return
    }

    const messagesCollection = db.collection('messages')

    // Create compound index for conversation + createdAt (used in SSE polling)
    await messagesCollection.createIndex(
      { conversation: 1, createdAt: 1 },
      { background: true, name: 'conversation_createdAt_idx' },
    )

    // Create index for handoff status lookups
    const conversationsCollection = db.collection('conversations')
    await conversationsCollection.createIndex(
      { handoffStatus: 1, updatedAt: -1 },
      { background: true, name: 'handoffStatus_updatedAt_idx' },
    )

    console.log('✅ Chat indexes ensured successfully')
  } catch (error) {
    // Ignore "Index already exists" errors, log others
    if (error instanceof Error && !error.message.includes('already exists')) {
      console.warn('⚠️ Failed to ensure chat indexes:', error)
    }
  }
}
