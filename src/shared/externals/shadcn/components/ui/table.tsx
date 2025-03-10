'use client'

import { cn } from '@/shared/externals/shadcn/lib/utils'
import * as React from 'react'

function Table({ className, ...properties }: React.ComponentProps<'table'>) {
  return (
    <div className="relative w-full overflow-x-auto" data-slot="table-container">
      <table
        className={cn('w-full caption-bottom text-sm', className)}
        data-slot="table"
        {...properties}
      />
    </div>
  )
}

function TableBody({ className, ...properties }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      className={cn('[&_tr:last-child]:border-0', className)}
      data-slot="table-body"
      {...properties}
    />
  )
}

function TableCaption({ className, ...properties }: React.ComponentProps<'caption'>) {
  return (
    <caption
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      data-slot="table-caption"
      {...properties}
    />
  )
}

function TableCell({ className, ...properties }: React.ComponentProps<'td'>) {
  return (
    <td
      className={cn(
        'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      data-slot="table-cell"
      {...properties}
    />
  )
}

function TableFooter({ className, ...properties }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      className={cn('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className)}
      data-slot="table-footer"
      {...properties}
    />
  )
}

function TableHead({ className, ...properties }: React.ComponentProps<'th'>) {
  return (
    <th
      className={cn(
        'text-muted-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      data-slot="table-head"
      {...properties}
    />
  )
}

function TableHeader({ className, ...properties }: React.ComponentProps<'thead'>) {
  return <thead className={cn('[&_tr]:border-b', className)} data-slot="table-header" {...properties} />
}

function TableRow({ className, ...properties }: React.ComponentProps<'tr'>) {
  return (
    <tr
      className={cn(
        'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
        className,
      )}
      data-slot="table-row"
      {...properties}
    />
  )
}

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow }
