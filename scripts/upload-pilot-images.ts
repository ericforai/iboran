import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import path from 'path'
import fs from 'fs'

const PILOT_IMAGES = [
  {
    postSlug: 'roi-post-implementation-review',
    filePath: '/Users/user/.gemini/antigravity/brain/aeaf83a1-e392-4d9f-a494-2b53c789ed7d/roi_evaluation_hero_1767658371314.png',
    alt: 'High-end corporate minimalistic 3D render of ROI evaluation'
  },
  {
    postSlug: 'disaster-recovery-plan-drill',
    filePath: '/Users/user/.gemini/antigravity/brain/aeaf83a1-e392-4d9f-a494-2b53c789ed7d/disaster_recovery_hero_1767658391198.png',
    alt: 'Abstract representation of data protection and disaster recovery'
  },
  {
    postSlug: 'it-audit-compliance-segregation-of-duties',
    filePath: '/Users/user/.gemini/antigravity/brain/aeaf83a1-e392-4d9f-a494-2b53c789ed7d/it_audit_hero_1767658408927.png',
    alt: 'Meticulous IT audit and compliance'
  },
  {
    postSlug: 'software-upgrade-dilemma',
    filePath: '/Users/user/.gemini/antigravity/brain/aeaf83a1-e392-4d9f-a494-2b53c789ed7d/software_upgrade_hero_1767658425349.png',
    alt: 'Dilemma of software upgrade represented as interconnected gears'
  },
  {
    postSlug: 'it-maintenance-support-strategy',
    filePath: '/Users/user/.gemini/antigravity/brain/aeaf83a1-e392-4d9f-a494-2b53c789ed7d/maintenance_support_hero_1767658445428.png',
    alt: 'Steady pillar and support network for IT maintenance'
  }
]

async function uploadPilotImages() {
  const payload = await getPayload({ config: configPromise })

  for (const item of PILOT_IMAGES) {
    console.log(`Processing image for post: ${item.postSlug}`)

    if (!fs.existsSync(item.filePath)) {
        console.error(`File not found: ${item.filePath}`)
        continue
    }

    const fileBuffer = fs.readFileSync(item.filePath)
    const fileName = path.basename(item.filePath)
    const mimeType = 'image/png'

    try {
        console.log(`Uploading ${fileName}...`)
        const media = await payload.create({
            collection: 'media',
            data: { alt: item.alt },
            file: {
                data: fileBuffer,
                name: fileName,
                mimetype: mimeType,
                size: fileBuffer.length,
            },
        })
        console.log(`Media uploaded: ${media.id} for ${item.postSlug}`)
    } catch (error) {
        console.error(`Failed to upload ${item.postSlug}:`, error)
    }
  }
  process.exit(0)
}

uploadPilotImages().catch(console.error)
