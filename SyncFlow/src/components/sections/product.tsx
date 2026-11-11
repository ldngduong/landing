import type { MouseEventHandler } from 'react'
import { Artwork } from '@/components/artwork'
import { Button } from '@/components/ui/button'
import featureWorkflow from '@/assets/feature-workflow.webp'
import featureSync from '@/assets/feature-sync.webp'
import featureEncryption from '@/assets/feature-encryption.webp'
import featureIntegrations from '@/assets/feature-integrations.webp'
import sectionBackground from '@/assets/section-background.webp'
import workflowDevices from '@/assets/workflow-devices.webp'

const features = [
  { id: 'workflow', image: featureWorkflow, title: 'AI Workflow Automations', description: 'Automate repetitive tasks with intelligent AI.' },
  { id: 'sync', image: featureSync, title: 'Real-time sync', description: 'Keep your team aligned with updates in under 50ms.' },
  { id: 'encryption', image: featureEncryption, title: 'End-to-end Encryption' },
  { id: 'integrations', image: featureIntegrations, title: 'Custom Integrations' },
]

export function Features() {
  return (
    <section id="features" className="page-width features section-spacing">
      <h2 className="section-title">Our Features</h2>
      <div className="feature-grid">
        {features.map(({ id, image, title, description }) => (
          <article className={`feature feature-${id}`} key={id}>
            <Artwork src={image} />
            <div className="feature-copy">
              <h3>{title}</h3>
              {description && <p>{description}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function HowItWorks({ onDemo }: { onDemo: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <section id="how-it-works" className="highlight section-spacing textured-section">
      <Artwork src={sectionBackground} />
      <div className="page-width highlight-inner">
        <div className="highlight-copy">
          <h2>Automate In Minutes,<br className="desktop-break" /> Sync Across Every Device</h2>
          <p>Replace disconnected tools with an AI workspace that keeps your entire team moving in sync.</p>
          <Button variant="secondary" onClick={onDemo}>See how it works</Button>
        </div>
        <img className="devices" src={workflowDevices} width="632" height="380" alt="SyncFlow workspace on desktop and mobile" loading="lazy" decoding="async" />
      </div>
    </section>
  )
}
