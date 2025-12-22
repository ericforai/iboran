import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

import type { Header } from '@/payload-types'

export async function Header() {
  const headerData = (await getCachedGlobal('header', 1)()) as Header
  const payload = await getPayload({ config: configPromise })

  const navItems = headerData.navItems || []
  
  const enrichedNavItems = await Promise.all(navItems.map(async (item) => {
    if (item.blockType === 'navGroup') {
        const nestedItems = item.items || []
        const enrichedNestedItems = await Promise.all(nestedItems.map(async (nestedItem) => {
            if (nestedItem.blockType === 'collectionMenu') {
                 try {
                    const { docs } = await payload.find({
                        collection: nestedItem.collectionSlug as any,
                        limit: nestedItem.limit || 5,
                    })
                    return { ...nestedItem, docs }
                 } catch (e) {
                    console.error(`Error fetching collection ${nestedItem.collectionSlug}`, e)
                    return nestedItem
                 }
            }
            return nestedItem
        }))
        return { ...item, items: enrichedNestedItems }
    }
    
    if (item.blockType === 'collectionMenu') {
        try {
            const { docs } = await payload.find({
                collection: item.collectionSlug as any,
                limit: item.limit || 5,
            })
            return { ...item, docs }
        } catch (e) {
            console.error(`Error fetching collection ${item.collectionSlug}`, e)
            return item
        }
    }
    
    return item
  }))

  return <HeaderClient data={{ ...headerData, navItems: enrichedNavItems }} />
}
