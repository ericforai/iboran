import { ImageResponse } from 'next/og'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { readFile } from 'fs/promises'
import path from 'path'

export const runtime = 'nodejs'

export const alt = '泊冉软件文章封面'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  
  // 1. Fetch Post Data
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'posts',
    limit: 1,
    where: {
      slug: {
        equals: decodeURIComponent(slug),
      },
    },
    select: {
      title: true,
      categories: true,
    },
    depth: 1,
  })

  const post = result.docs?.[0]
  const title = post?.title || '泊冉软件 | 专业的用友软件实施服务商'
  
  // Get Category if available
  let categoryTitle = 'Boran Software'
  if (post?.categories && post.categories.length > 0) {
      const cat = post.categories[0]
      if (typeof cat === 'object' && 'title' in cat) {
          categoryTitle = cat.title || categoryTitle
      }
  }

  // 2. Load Assets
  // Font
  // Strategy: Load from local file system to ensure stability in China network environment
  // This avoids external CDN requests during runtime
  const fontPath = path.join(process.cwd(), 'public/fonts/NotoSansSC-Bold.woff')
  const fontData = await readFile(fontPath)

  // Logo
  const logoPath = path.join(process.cwd(), 'public/assets/images/boran-logo-transparent.png')
  const logoData = await readFile(logoPath)
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundImage: 'linear-gradient(to bottom right, #0F172A, #1E293B)',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Background Grid Pattern */}
        <div 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                zIndex: 0,
            }}
        />

        {/* Logo */}
        <div style={{ display: 'flex', zIndex: 10 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                src={logoBase64} 
                alt="Boran Logo" 
                height={80} 
                style={{ objectFit: 'contain' }}
            />
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 10, maxWidth: '90%' }}>
            {/* Category Tag */}
            <div 
                style={{
                    display: 'flex',
                    padding: '8px 24px',
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    borderRadius: '50px',
                    color: '#38BDF8',
                    fontSize: 24,
                    fontWeight: 600,
                    width: 'fit-content',
                }}
            >
                {categoryTitle}
            </div>

            {/* Title */}
            <div
                style={{
                    fontSize: 64,
                    fontWeight: 900,
                    color: 'white',
                    lineHeight: 1.2,
                    textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                }}
            >
                {title}
            </div>
        </div>

        {/* Footer / Brand URL */}
        <div 
            style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                width: '100%', 
                zIndex: 10,
                color: '#94A3B8',
                fontSize: 24,
                fontWeight: 500,
            }}
        >
            www.iboran.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData ? [
        {
          name: 'Noto Sans SC',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ] : undefined,
    }
  )
}
