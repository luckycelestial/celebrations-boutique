'use client'

import { useEffect, useState } from 'react'
import { isStoreOpen } from '@/lib/utils'
import { cn } from '@/lib/utils'

export function StoreStatus() {
  const [open, setOpen] = useState<boolean | null>(null)

  useEffect(() => {
    setOpen(isStoreOpen())
    
    // Update every minute
    const interval = setInterval(() => {
      setOpen(isStoreOpen())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  if (open === null) {
    return null // Avoid hydration mismatch
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
        open
          ? 'bg-green-100 text-green-700'
          : 'bg-red-100 text-red-700'
      )}
    >
      <span
        className={cn(
          'h-1.5 w-1.5 rounded-full',
          open ? 'bg-green-500' : 'bg-red-500'
        )}
      />
      {open ? 'Open Now' : 'Closed'}
    </span>
  )
}
