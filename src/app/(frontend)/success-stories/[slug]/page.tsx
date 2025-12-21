import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import type { SuccessStory, Contact } from '@/payload-types'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { PageClientWrapper } from '../../page.client.wrapper'
import { Footer } from '@/Footer/Component'
import { getCachedGlobal } from '@/utilities/getGlobals'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const stories = await payload.find({
    collection: 'success-stories',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return stories.docs.map(({ slug }) => ({ slug }))
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function SuccessStoryPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const url = '/success-stories/' + decodedSlug
  
  const story = await queryStoryBySlug({ slug: decodedSlug })
  const contactData = await getCachedGlobal('contact', 1)() as Contact

  if (!story) return <PayloadRedirects url={url} />

  return (
    <PageClientWrapper contactData={contactData}>
      <article className="pb-24">
        {/* Allows redirects for valid pages too */}
        <PayloadRedirects disableNotFound url={url} />

        {draft && <LivePreviewListener />}

        <header className="bg-gray-900 text-white pt-32 pb-20">
          <div className="container px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6 text-red-500 font-bold uppercase tracking-widest text-sm">
                <span>Success Story</span>
                <span className="w-12 h-px bg-red-500 opacity-50"></span>
                <span>{story.industry}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                {story.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-400">
                <span className="font-bold text-white">Client:</span>
                <span>{story.clientName}</span>
              </div>
            </div>
          </div>
        </header>

        <RenderBlocks blocks={story.layout} />
      </article>
      <Footer />
    </PageClientWrapper>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const story = await queryStoryBySlug({ slug: decodedSlug })

  return generateMeta({ doc: story })
}

const queryStoryBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'success-stories',
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
