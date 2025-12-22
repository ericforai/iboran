'use client'
import { Header } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Header['navItems']>[number]>()

  let label = ''
  
  const item = data?.data as any

  if (item?.blockType === 'singleLink') {
      label = item?.link?.label
  } else if (item?.blockType === 'navGroup') {
      label = item?.label
  } else if (item?.blockType === 'navSubGroup') {
      label = item?.label
  } else if (item?.blockType === 'collectionMenu') {
      label = item?.linkLabel
  }

  return <div>{label ? `Nav item ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${label}` : 'Row'}</div>
}
