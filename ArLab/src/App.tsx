import { useRef, useState } from 'react'
import { DisplaySection } from '@/components/display-section'
import { FaqSection } from '@/components/faq-section'
import { HardwareSection } from '@/components/hardware-section'
import { Hero } from '@/components/hero'
import { OrderConfigurator } from '@/components/order-configurator'
import { PageBackground } from '@/components/page-background'
import { ShoppingBag } from '@/components/shopping-bag'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SystemsSection } from '@/components/systems-section'
import { TechnicalSpecs } from '@/components/technical-specs'
import { Drawer } from '@/components/ui/drawer'
import type { BagItem, ConsoleColor, StorageBundle } from '@/lib/brick-pro'

export default function App() {
  const [items, setItems] = useState<BagItem[]>([])
  const [bagOpen, setBagOpen] = useState(false)
  const bagTrigger = useRef<HTMLButtonElement>(null)
  const bagCount = items.reduce((count, item) => count + item.quantity, 0)

  function changeQuantity(id: string, amount: number) {
    setItems((current) => current
      .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
      .filter((item) => item.quantity > 0))
  }

  function addToBag(color: ConsoleColor, bundle: StorageBundle, trigger: HTMLButtonElement) {
    const id = `${color.id}/${bundle.id}`
    setItems((current) => current.some((item) => item.id === id)
      ? current.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...current, { id, color, bundle, quantity: 1 }])
    bagTrigger.current = trigger
    setBagOpen(true)
  }

  return (
    <div className="site-shell">
      <PageBackground />
      <Drawer direction="right" open={bagOpen} onOpenChange={setBagOpen} autoFocus>
        <SiteHeader bagCount={bagCount} onOpenBag={(trigger) => { bagTrigger.current = trigger }} />
        <main>
          <Hero />
          <DisplaySection />
          <HardwareSection />
          <SystemsSection />
          <OrderConfigurator onAddToBag={addToBag} />
          <TechnicalSpecs />
          <FaqSection />
        </main>
        <SiteFooter />
        <ShoppingBag items={items} onQuantityChange={changeQuantity} restoreFocus={() => bagTrigger.current?.focus()} />
      </Drawer>
    </div>
  )
}
