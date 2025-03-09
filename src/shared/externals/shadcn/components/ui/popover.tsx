'use client'

import { cn } from '@/shared/externals/shadcn/lib/utils'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'

function Popover({ ...properties }: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...properties} />
}

function PopoverAnchor({ ...properties }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...properties} />
}

function PopoverContent({
  align = 'center',
  className,
  sideOffset = 4,
  ...properties
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden',
          className,
        )}
        data-slot="popover-content"
        sideOffset={sideOffset}
        {...properties}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverTrigger({ ...properties }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...properties} />
}

export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger }
