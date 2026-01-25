'use client'
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { cn } from '@/utilities/ui'
import { useRouter } from 'next/navigation'
import React from 'react'

export const Pagination: React.FC<{
  className?: string
  page: number
  totalPages: number
}> = (props) => {
  const router = useRouter()

  const { className, page, totalPages } = props
  const hasNextPage = page < totalPages
  const hasPrevPage = page > 1

  return (
    <div className={cn('my-12', className)}>
      <PaginationComponent>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              disabled={!hasPrevPage}
              onClick={() => {
                router.push(`/posts/page/${page - 1}`)
              }}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
            // Show all pages if totalPages <= 9
            // OR show if it's the first page, last page, or within 2 of current page
            // But user specially asked for "up to 9th page". Let's try to be generous.
            // Simplified logic: If total pages <= 9, show all.
            // If total pages > 9, show 1, ..., p-1, p, p+1, ..., last.
            
            const isVisible = 
              totalPages <= 9 || 
              p === 1 || 
              p === totalPages || 
              (p >= page - 2 && p <= page + 2);

            if (!isVisible) {
               // Render ellipsis only once for the gap
               if (p === 2 && page > 4) return <PaginationItem key="ellipsis-start"><PaginationEllipsis /></PaginationItem>;
               if (p === totalPages - 1 && page < totalPages - 3) return <PaginationItem key="ellipsis-end"><PaginationEllipsis /></PaginationItem>;
               return null;
            }

            return (
              <PaginationItem key={p}>
                <PaginationLink
                  isActive={p === page}
                  onClick={() => {
                    router.push(`/posts/page/${p}`)
                  }}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            )
          })}

          <PaginationItem>
            <PaginationNext
              disabled={!hasNextPage}
              onClick={() => {
                router.push(`/posts/page/${page + 1}`)
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </PaginationComponent>
    </div>
  )
}
