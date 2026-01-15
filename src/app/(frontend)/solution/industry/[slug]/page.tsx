import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import type { Contact } from '@/payload-types'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { StoryCard } from '@/components/StoryCard'
import { ResourceCard } from '@/components/ResourceCard'

import { Footer as SiteFooter } from '@/components/Footer'
import { getCachedGlobal } from '@/utilities/getGlobals'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const solutions = await payload.find({
    collection: 'industry-solutions',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = solutions.docs
    .filter((doc) => typeof doc.slug === 'string')
    .map((doc) => ({ slug: doc.slug as string }))

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function IndustrySolutionPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const url = '/solution/industry/' + decodedSlug
  
  const solution = await querySolutionBySlug({ slug: decodedSlug })
  const contactData = await getCachedGlobal('contact', 1)() as Contact

  if (!solution) return <PayloadRedirects url={url} />

  // Fetch related resources
  const payload = await getPayload({ config: configPromise })
  const resources = await payload.find({
    collection: 'resources',
    depth: 1,
    where: {
      relatedSolutions: {
        contains: solution.id,
      }
    }
  })

  return (
    <article className="pb-24 pt-16">
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}
      <RenderBlocks blocks={solution.layout} />
      
      <div className="container mt-24 px-4 space-y-24">
          {solution.relatedSuccessStories && solution.relatedSuccessStories.length > 0 && (
            <div>
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">相关成功案例</h2>
                <div className="w-12 h-1 bg-red-500 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solution.relatedSuccessStories.map((story, index) => {
                  if (typeof story === 'object') {
                    return <StoryCard key={index} doc={story} />
                  }
                  return null
                })}
              </div>
            </div>
          )}

          {resources.docs.length > 0 && (
            <div>
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">推荐下载资料</h2>
                <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {resources.docs.map((resource, index) => (
                  <ResourceCard key={index} resource={resource as any} variant="horizontal" />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const solution = await querySolutionBySlug({ slug: decodedSlug })

  return generateMeta({ doc: solution, collection: 'industry-solutions' })
}

const querySolutionBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'industry-solutions',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
