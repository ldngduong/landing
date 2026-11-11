import { Brand } from '@/components/brand'
import { Button } from '@/components/ui/button'
import { navigation, type ActionHandler } from '@/content'
import heroBackground from '@/assets/hero-background.webp'
import workflowBuilder from '@/assets/workflow-builder.webp'
import vercel from '@/assets/vercel.webp'
import stripe from '@/assets/stripe.webp'
import figma from '@/assets/figma.webp'
import openai from '@/assets/openai.webp'
import jira from '@/assets/jira.webp'

const logos = [
  { name: 'Vercel', src: vercel, width: 135 },
  { name: 'Stripe', src: stripe, width: 72 },
  { name: 'Figma', src: figma, width: 110 },
  { name: 'OpenAI', src: openai, width: 111 },
  { name: 'Jira', src: jira, width: 79 },
]

export function Intro({ onRequest }: { onRequest: ActionHandler }) {
  return (
    <div className="intro">
      <div className="hero">
        <div className="hero-backdrop" aria-hidden="true">
          <img src={heroBackground} alt="" fetchPriority="high" />
        </div>
        <header className="page-width site-header">
          <Brand />
          <nav className="main-nav" aria-label="Main navigation">
            {navigation.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <Button className="header-cta" variant="secondary" onClick={(event) => onRequest(event, 'Join Waitlist')}>
            Get Early Access
          </Button>
        </header>
        <div className="page-width hero-copy">
          <h1>Supercharge Your Remote Workflow<br className="desktop-break" /> With AI-Native Collaboration</h1>
          <p>Replace disconnected tools with an AI workspace that keeps your entire team moving in sync.</p>
          <div className="hero-actions">
            <Button variant="secondary" onClick={(event) => onRequest(event, 'Join Waitlist')}>Join Waitlist</Button>
            <Button asChild variant="outline"><a href="#how-it-works">See how it works</a></Button>
          </div>
        </div>
        <div className="page-width hero-preview">
          <div className="hero-preview-image">
            <div className="hero-preview-crop">
              <img src={workflowBuilder} alt="SyncFlow workflow builder with connected automation steps" fetchPriority="high" />
            </div>
          </div>
        </div>
      </div>
      <div className="logo-strip">
        <ul className="page-width logo-list" aria-label="Company logos">
          {logos.map(({ name, src, width }) => (
            <li key={name}><img src={src} width={width} height="30" alt={name} loading="lazy" /></li>
          ))}
        </ul>
      </div>
    </div>
  )
}
