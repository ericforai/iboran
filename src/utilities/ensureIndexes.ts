import { getPayload } from 'payload'
import config from '@payload-config'
import mongoose from 'mongoose'

/**
 * Ensure database indexes are created for optimal query performance.
 * This should be called during application startup or via an admin endpoint.
 */
export async function ensureChatIndexes() {
  try {
    const payload = await getPayload({ config })

    // Get the MongoDB connection
    const db = mongoose.connection.db
    if (!db) {
      console.warn('Database not connected, skipping index creation')
      return
    }

    const messagesCollection = db.collection('messages')

    // Create compound index for conversation + createdAt (used in SSE polling)
    await messagesCollection.createIndex(
      { conversation: 1, createdAt: 1 },
      { background: true, name: 'conversation_createdAt_idx' }
    )

    // Create index for handoff status lookups
    const conversationsCollection = db.collection('conversations')
    await conversationsCollection.createIndex(
      { handoffStatus: 1, updatedAt: -1 },
      { background: true, name: 'handoffStatus_updatedAt_idx' }
    )

    console.log('✅ Chat indexes ensured successfully')
  } catch (error) {
    // Ignore "Index already exists" errors, log others
    if (error instanceof Error && !error.message.includes('already exists')) {
      console.warn('⚠️ Failed to ensure chat indexes:', error)
    }
  }
}
