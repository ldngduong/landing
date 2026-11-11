import { Artwork } from '@/components/artwork'
import { Button } from '@/components/ui/button'
import { plans, type ActionHandler } from '@/content'
import pricingBackground from '@/assets/pricing-background.webp'
import pricingPro from '@/assets/pricing-pro.webp'

export function Pricing({ onRequest }: { onRequest: ActionHandler }) {
  return (
    <section id="pricing" className="pricing section-spacing">
      <Artwork src={pricingBackground} />
      <div className="page-width pricing-inner">
        <h2 className="section-title">Pricing</h2>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={plan.name === 'Pro' ? 'plan plan-pro' : 'plan'} key={plan.name}>
              {plan.name === 'Pro' && <Artwork src={pricingPro} />}
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <p className="plan-price">{plan.price}</p>
              <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <Button className="plan-cta" variant={plan.name === 'Pro' ? 'secondary' : 'default'} onClick={(event) => onRequest(event, plan.action)}>{plan.action}</Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
