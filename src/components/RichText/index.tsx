'use client'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'
import dynamic from 'next/dynamic'
import { cn } from '@/utilities/ui'
import React from 'react'
import { getBlockConverters } from './converters'

// Use next/dynamic to break circular dependencies
const BannerBlock = dynamic(() => import('@/blocks/Banner/Component').then((m) => m.BannerBlock), { ssr: true })
const CallToActionBlock = dynamic(() => import('@/blocks/CallToAction/Component').then((m) => m.CallToActionBlock), { ssr: true })
const CodeBlock = dynamic(() => import('@/blocks/Code/Component').then((m) => m.CodeBlock), { ssr: true })
const MediaBlock = dynamic(() => import('@/blocks/MediaBlock/Component').then((m) => m.MediaBlock), { ssr: true })

import type { CodeBlockProps } from '@/blocks/Code/Component'
import type {
  BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
} from '@/payload-types'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  if (!linkNode?.fields?.doc?.value) return '#'
  const { value, relationTo } = linkNode.fields.doc
  const slug = typeof value === 'object' ? value.slug : value
  return relationTo === 'posts' ? `/posts/${slug}` : `/${slug}`
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  ...getBlockConverters({
    BannerBlock: BannerBlock as unknown as React.ComponentType<Record<string, unknown>>,
    CallToActionBlock: CallToActionBlock as unknown as React.ComponentType<Record<string, unknown>>,
    MediaBlock: MediaBlock as unknown as React.ComponentType<Record<string, unknown>>,
    CodeBlock: CodeBlock as unknown as React.ComponentType<Record<string, unknown>>,
  })({ defaultConverters }).blocks,
})

type Props = {
  data: DefaultTypedEditorState
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, data, enableProse = true, enableGutter = true, ...rest } = props

  if (!data) return null

  return (
    <div
      className={cn(
        'payload-richtext',
        {
          container: enableGutter,
          'max-w-none': !enableGutter,
          'mx-auto prose md:prose-md dark:prose-invert': enableProse,
        },
        className,
      )}
      {...rest}
    >
      <ConvertRichText
        converters={jsxConverters}
        data={data}
      />
    </div>
  )
}
