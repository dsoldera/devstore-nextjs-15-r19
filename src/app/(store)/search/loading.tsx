'use client'

import { Suspense } from 'react'

//useSearchParams only be used on client side
//import { useSearchParams } from 'next/navigation'
import { Skeleton } from '@/components/skeleton'
import { CurrentSearch } from './current-search'

export default function SearchLoading() {
  //useSearchParams is a Client Component
  //const searchParams = useSearchParams()

  //const query = searchParams.get('q')

  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>Add commentMore actions
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
      </div>
    </div>
  )
}