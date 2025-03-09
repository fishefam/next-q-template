'use client'

import { cn } from '@/shared/externals/shadcn/lib/utils'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

function Progress({
  className,
  value,
  ...properties
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      className={cn('bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', className)}
      data-slot="progress"
      {...properties}
    >
      <ProgressPrimitive.Indicator
        className="bg-primary h-full w-full flex-1 transition-all"
        data-slot="progress-indicator"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
