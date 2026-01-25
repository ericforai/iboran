'use client'
import { Header } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Header['navItems']>[number]>()

  let label = ''

  const item = data?.data as any
  const blockType = item?.blockType

  switch (blockType) {
    case 'singleLink':
      label = item?.link?.label
      break
    case 'navGroup':
    case 'navSubGroup':
      label = item?.label
      break
    case 'collectionMenu':
      label = item?.linkLabel
      break
  }

  return <div>{label ? `Nav item ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${label}` : 'Row'}</div>
}
