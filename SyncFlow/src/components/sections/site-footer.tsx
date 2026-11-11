import { Brand } from '@/components/brand'
import { navigation } from '@/content'
import linkedin from '@/assets/linkedin.png'
import github from '@/assets/github.png'
import socialX from '@/assets/x.png'

const socials = [
  { label: 'LinkedIn', src: linkedin },
  { label: 'GitHub', src: github },
  { label: 'X', src: socialX },
]

export function SiteFooter() {
  return (
    <footer className="site-footer section-spacing">
      <div className="page-width footer-inner">
        <div className="footer-brand">
          <Brand />
          <p>AI-native workflow automation<br className="desktop-break" /> built for high-velocity remote teams.</p>
          <ul className="socials" aria-label="Social platforms">
            {socials.map(({ label, src }) => <li key={label}><img src={src} alt={label} loading="lazy" /></li>)}
          </ul>
        </div>
        <nav className="footer-column" aria-label="Product">
          <h2>Product</h2>
          <ul>
            {navigation.map(({ href, label }) => <li key={href}><a href={href}>{label === 'How it works' ? 'Explore' : label}</a></li>)}
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </nav>
        <div className="footer-column">
          <h2>Resources</h2>
          <ul>{['Documentation', 'API Reference', 'Guides', 'Community', 'Help Center'].map((label) => <li key={label}>{label}</li>)}</ul>
        </div>
        <div className="footer-column">
          <h2>Legal</h2>
          <ul>{['Privacy Policy', 'Terms of Service', 'Security', 'Cookie Policy'].map((label) => <li key={label}>{label}</li>)}</ul>
        </div>
      </div>
    </footer>
  )
}
