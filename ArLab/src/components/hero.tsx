import consoleArt from '@/assets/trimui-brick-pro.webp'
import consoleArtSmall from '@/assets/trimui-brick-pro-small.webp'
import { Button } from '@/components/ui/button'
import { specsUrl } from '@/lib/product-links'

export function Hero() {
  return (
    <section id="overview" className="hero" aria-labelledby="hero-title">
      <div className="hero-stage">
        <h1 id="hero-title" className="hero-title">
          <span>Trimui</span>{' '}<span>Brick Pro</span>
        </h1>
        <p className="hero-price">From $89.99</p>
        <div className="hero-console">
          <img
            src={consoleArt}
            srcSet={`${consoleArtSmall} 720w, ${consoleArt} 1200w`}
            sizes="(max-width: 506px) 88vw, (max-width: 680px) 445px, (max-width: 1440px) 43vw, 608px"
            alt="Black Trimui Brick Pro handheld console shown from the front and back"
            width={1200}
            height={1200}
            fetchPriority="high"
          />
        </div>
      </div>
      <div className="hero-actions">
        <Button asChild className="hero-action hero-action-primary">
          <a href="#order">Order Now</a>
        </Button>
        <Button asChild variant="ghost" className="hero-action hero-action-secondary">
          <a href={specsUrl}>Explore Specs</a>
        </Button>
      </div>
    </section>
  )
}
