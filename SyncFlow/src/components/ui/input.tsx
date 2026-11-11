import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

export function Input({ className, ...props }: ComponentProps<'input'>) {
  return <input data-slot="input" className={cn('min-h-12 w-full rounded-xl border border-primary/30 bg-white/60 px-3 text-base focus-visible:outline-2 focus-visible:outline-offset-2', className)} {...props} />
}
