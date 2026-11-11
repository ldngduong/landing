import type { ComponentProps } from 'react'
import { X } from 'lucide-react'
import { Dialog as Primitive } from 'radix-ui'
import { cn } from '@/lib/utils'

export const Dialog = Primitive.Root
export const DialogTitle = Primitive.Title
export const DialogDescription = Primitive.Description

export function DialogContent({ children, className, ...props }: ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Portal>
      <Primitive.Overlay className="fixed inset-0 z-40 bg-primary/70" />
      <Primitive.Content
        className={cn('fixed top-1/2 left-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-md -translate-1/2 gap-4 overflow-auto rounded-[30px] bg-background p-8 text-foreground shadow-2xl outline-none', className)}
        {...props}
      >
        {children}
        <Primitive.Close className="absolute top-4 right-4 grid size-10 cursor-pointer place-items-center rounded-full hover:bg-primary/10 focus-visible:outline-2" aria-label="Close">
          <X size={20} />
        </Primitive.Close>
      </Primitive.Content>
    </Primitive.Portal>
  )
}
