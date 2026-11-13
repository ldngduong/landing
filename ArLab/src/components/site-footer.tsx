import { useState, type FormEvent } from 'react'
import brandMark from '@/assets/arlab-mark.webp'
import { Button } from '@/components/ui/button'
import './site-footer.css'

export function SiteFooter() {
  const [submitted, setSubmitted] = useState(false)

  function handleJoin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <footer id="footer" className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-about">
            <a className="site-brand" href="#overview" aria-label="ArLab home">
              <img src={brandMark} width={40} height={40} alt="" />
              <span>ARLAB</span>
            </a>
            <p>
              ARLAB is an independent boutique retailer &amp; hardware showcase. TrimUI is a trademark of
              its respective owner. No copyrighted game ROMs are included or distributed.
            </p>
          </div>
          <section className="footer-newsletter" aria-labelledby="newsletter-title">
            <h2 id="newsletter-title">Get firmware updates &amp; custom button drops</h2>
            <form onSubmit={handleJoin}>
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                required
                onChange={() => setSubmitted(false)}
              />
              <Button type="submit">Join</Button>
            </form>
            <p className="newsletter-status" role="status">
              {submitted && 'Newsletter signup is simulated in this portfolio demo.'}
            </p>
          </section>
        </div>
        <p className="footer-copyright">© 2026 ARLAB. All rights reserved.</p>
      </div>
    </footer>
  )
}
