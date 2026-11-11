import { useRef, useState, type MouseEvent } from 'react'
import { LandingDialog, type LandingAction } from '@/components/landing-dialog'
import { Intro } from '@/components/sections/intro'
import { Pricing } from '@/components/sections/pricing'
import { Features, HowItWorks } from '@/components/sections/product'
import { Faq, Testimonials } from '@/components/sections/proof'
import { SiteFooter } from '@/components/sections/site-footer'

export default function App() {
  const [action, setAction] = useState<LandingAction | null>(null)
  const opener = useRef<HTMLButtonElement>(null)

  function showDialog(event: MouseEvent<HTMLButtonElement>, nextAction: LandingAction) {
    opener.current = event.currentTarget
    setAction(nextAction)
  }

  function openRequest(event: MouseEvent<HTMLButtonElement>, title: string) {
    showDialog(event, { type: 'request', title })
  }

  return (
    <div id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <Intro onRequest={openRequest} />
      <main id="main">
        <Features />
        <HowItWorks onDemo={(event) => showDialog(event, { type: 'demo', title: 'How SyncFlow works' })} />
        <Pricing onRequest={openRequest} />
        <Faq />
        <Testimonials />
      </main>
      <SiteFooter />
      <LandingDialog action={action} close={() => setAction(null)} restoreFocus={() => opener.current?.focus()} />
    </div>
  )
}
