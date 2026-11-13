import type { ComponentProps } from 'react'
import { Slider as SliderPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'

type SliderProps = ComponentProps<typeof SliderPrimitive.Root> & {
  label: string
  valueText: string
}

export function Slider({ className, label, valueText, ...props }: SliderProps) {
  return (
    <SliderPrimitive.Root data-slot="slider" className={cn('relative flex touch-none select-none items-center', className)} {...props}>
      <SliderPrimitive.Track data-slot="slider-track">
        <SliderPrimitive.Range data-slot="slider-range" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb data-slot="slider-thumb" aria-label={label} aria-valuetext={valueText} />
    </SliderPrimitive.Root>
  )
}
