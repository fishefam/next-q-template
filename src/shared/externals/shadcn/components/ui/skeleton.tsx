import { cn } from '@/shared/externals/shadcn/lib/utils'

function Skeleton({ className, ...properties }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('bg-primary/10 animate-pulse rounded-md', className)}
      data-slot="skeleton"
      {...properties}
    />
  )
}

export { Skeleton }
