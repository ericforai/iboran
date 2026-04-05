import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import type {
  DefaultNodeTypes,
  SerializedBlockNode,
} from '@payloadcms/richtext-lexical'
import React from 'react'

import type { CodeBlockProps } from '@/blocks/Code/Component'
import type {
  BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
} from '@/payload-types'
import { cn } from '@/utilities/ui'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>

// We pass components in to avoid circular dependencies without using 'require'
type BlockComponent = React.ComponentType<Record<string, unknown>>

export const getBlockConverters = (components: {
  BannerBlock: BlockComponent
  CallToActionBlock: BlockComponent
  MediaBlock: BlockComponent
  CodeBlock: BlockComponent
}): JSXConvertersFunction<NodeTypes> => {
  const { BannerBlock, CallToActionBlock, MediaBlock, CodeBlock } = components

  return ({ defaultConverters: _defaultConverters }) => ({
    ..._defaultConverters,
    list: ({ node, nodesToJSX }) => {
      const isChecklist = node.listType === 'check'
      const Tag = node.tag || 'ul'
      return (
        <Tag
          className={cn('mb-4 ml-0 list-none p-0', {
            'lexical-checklist': isChecklist,
          })}
        >
          {nodesToJSX({
            nodes: node.children,
          })}
        </Tag>
      )
    },
    listitem: ({ node, nodesToJSX }) => {
      const isChecked = node.checked
      const isChecklist = typeof isChecked === 'boolean'

      if (isChecklist) {
        return (
          <li
            className={cn('relative flex items-start gap-3 mb-4 list-none', {
              'lexical-checklist-item': true,
            })}
          >
            <div className="mt-1.5 flex-shrink-0">
              {isChecked ? (
                <div className="flex h-5 w-5 items-center justify-center rounded-md bg-cyan-500 shadow-sm shadow-cyan-500/20">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : (
                <div className="h-5 w-5 rounded-md border-2 border-slate-200 bg-white shadow-sm ring-1 ring-black/[0.03]" />
              )}
            </div>
            <div className="flex-1 min-w-0 prose-p:m-0">
              {nodesToJSX({
                nodes: node.children,
              })}
            </div>
          </li>
        )
      }

      return (
        <li className="mb-2 list-item">
          {nodesToJSX({
            nodes: node.children,
          })}
        </li>
      )
    },
    blocks: {
      banner: ({ node }) => {
        if (!BannerBlock) return null
        return <BannerBlock className="col-start-2 mb-4" {...node.fields} />
      },
      mediaBlock: ({ node }) => {
        if (!MediaBlock) return null
        return (
          <MediaBlock
            className="col-start-1 col-span-3"
            imgClassName="m-0"
            {...node.fields}
            captionClassName="mx-auto max-w-[48rem]"
            enableGutter={false}
            disableInnerContainer={true}
          />
        )
      },
      code: ({ node }) => {
        if (!CodeBlock) return null
        return <CodeBlock className="col-start-2" {...node.fields} />
      },
      cta: ({ node }) => {
        if (!CallToActionBlock) return null
        return <CallToActionBlock {...node.fields} />
      },
    },
  })
}
