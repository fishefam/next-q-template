'use client'

import { cn } from '@/shared/externals/shadcn/lib/utils'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

function Tabs({ className, ...properties }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      className={cn('flex flex-col gap-2', className)}
      data-slot="tabs"
      {...properties}
    />
  )
}

function TabsContent({ className, ...properties }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn('flex-1 outline-none', className)}
      data-slot="tabs-content"
      {...properties}
    />
  )
}

function TabsList({ className, ...properties }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn(
        'bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1',
        className,
      )}
      data-slot="tabs-list"
      {...properties}
    />
  )
}

function TabsTrigger({ className, ...properties }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "data-[state=active]:bg-background data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-slot="tabs-trigger"
      {...properties}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger }
