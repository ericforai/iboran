import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getSolutionsSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://example.com'

    const dateFallback = new Date().toISOString()

    const [industrySolutions, successStories] = await Promise.all([
      payload.find({
        collection: 'industry-solutions',
        overrideAccess: false,
        draft: false,
        depth: 0,
        limit: 1000,
        pagination: false,
        select: {
          slug: true,
          updatedAt: true,
        },
      }),
      payload.find({
        collection: 'success-stories',
        overrideAccess: false,
        draft: false,
        depth: 0,
        limit: 1000,
        pagination: false,
        select: {
          slug: true,
          updatedAt: true,
        },
      }),
    ])

    const industrySitemap = (industrySolutions.docs || [])
      .filter((doc) => Boolean(doc?.slug))
      .map((doc) => ({
        loc: `${SITE_URL}/solution/industry/${doc.slug}`,
        lastmod: doc.updatedAt || dateFallback,
      }))

    const successSitemap = (successStories.docs || [])
      .filter((doc) => Boolean(doc?.slug))
      .map((doc) => ({
        loc: `${SITE_URL}/success-stories/${doc.slug}`,
        lastmod: doc.updatedAt || dateFallback,
      }))

    return [...industrySitemap, ...successSitemap]
  },
  ['solutions-sitemap'],
  {
    tags: ['solutions-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getSolutionsSitemap()

  return getServerSideSitemap(sitemap)
}
