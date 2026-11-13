import { useLayoutEffect, useRef } from 'react'
import { ShoppingBagIcon } from 'lucide-react'
import brandMark from '@/assets/arlab-mark.webp'
import { Button } from '@/components/ui/button'
import { DrawerTrigger } from '@/components/ui/drawer'
import { specsUrl } from '@/lib/product-links'

type SiteHeaderProps = {
  bagCount: number
  onOpenBag: (trigger: HTMLButtonElement) => void
}

export function SiteHeader({ bagCount, onOpenBag }: SiteHeaderProps) {
  const headerRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const header = headerRef.current
    if (!header) return

    const root = document.documentElement
    const updateScrollPadding = () => {
      root.style.setProperty('--site-header-height', `${header.offsetHeight}px`)
    }
    const observer = new ResizeObserver(updateScrollPadding)
    updateScrollPadding()
    observer.observe(header, { box: 'border-box' })

    return () => {
      observer.disconnect()
      root.style.removeProperty('--site-header-height')
    }
  }, [])

  return (
    <header ref={headerRef} className="site-header">
      <div className="site-navbar">
        <a className="site-brand" href="#overview" aria-label="ArLab home">
          <img src={brandMark} width={40} height={40} alt="" />
          <span>ARLAB</span>
        </a>
        <nav className="site-nav" aria-label="Product navigation">
          <a href="#overview">Overview</a>
          <a href="#display">Display</a>
          <a href="#hardware">Hardware</a>
          <a href="#systems">Systems</a>
          <a href={specsUrl}>Specs</a>
          <a href="#faq">FAQ</a>
        </nav>
        <DrawerTrigger asChild>
          <Button
            className="site-bag-button"
            type="button"
            variant="ghost"
            aria-label={`Open bag, ${bagCount} ${bagCount === 1 ? 'item' : 'items'}`}
            onClick={(event) => onOpenBag(event.currentTarget)}
          >
            <ShoppingBagIcon aria-hidden="true" />
            <span aria-hidden="true">{bagCount}</span>
          </Button>
        </DrawerTrigger>
      </div>
    </header>
  )
}
