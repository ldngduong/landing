import type { ComponentProps } from 'react'
import { Accordion as Primitive } from 'radix-ui'
import { cn } from '@/lib/utils'

export const Accordion = Primitive.Root
export const AccordionItem = Primitive.Item

export function AccordionTrigger({ children, className, ...props }: ComponentProps<typeof Primitive.Trigger>) {
  return (
    <Primitive.Header>
      <Primitive.Trigger data-slot="accordion-trigger" className={cn('flex w-full cursor-pointer items-center justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px]', className)} {...props}>
        {children}
      </Primitive.Trigger>
    </Primitive.Header>
  )
}

export function AccordionContent({ className, ...props }: ComponentProps<typeof Primitive.Content>) {
  return <Primitive.Content data-slot="accordion-content" className={cn('overflow-hidden', className)} {...props} />
}
