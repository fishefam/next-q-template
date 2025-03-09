'use client'

import { cn } from '@/shared/externals/shadcn/lib/utils'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'

function Avatar({ className, ...properties }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      className={cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', className)}
      data-slot="avatar"
      {...properties}
    />
  )
}

function AvatarFallback({
  className,
  ...properties
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      className={cn('bg-muted flex size-full items-center justify-center rounded-full', className)}
      data-slot="avatar-fallback"
      {...properties}
    />
  )
}

function AvatarImage({ className, ...properties }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      className={cn('aspect-square size-full', className)}
      data-slot="avatar-image"
      {...properties}
    />
  )
}

export { Avatar, AvatarFallback, AvatarImage }
