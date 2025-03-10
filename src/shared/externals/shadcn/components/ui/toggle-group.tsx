'use client'

import { toggleVariants } from '@/shared/externals/shadcn/components/ui/toggle'
import { cn } from '@/shared/externals/shadcn/lib/utils'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: 'default',
  variant: 'default',
})

function ToggleGroup({
  children,
  className,
  size,
  variant,
  ...properties
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      className={cn(
        'group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs',
        className,
      )}
      data-size={size}
      data-slot="toggle-group"
      data-variant={variant}
      {...properties}
    >
      <ToggleGroupContext.Provider value={{ size, variant }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  children,
  className,
  size,
  variant,
  ...properties
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      className={cn(
        toggleVariants({
          size: context.size ?? size,
          variant: context.variant || variant,
        }),
        'min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l',
        className,
      )}
      data-size={context.size ?? size}
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      {...properties}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }
