import capcom from '@/assets/systems/capcom.svg'
import dreamcast from '@/assets/systems/dreamcast.svg'
import gba from '@/assets/systems/gba.svg'
import genesis from '@/assets/systems/genesis.svg'
import neogeo from '@/assets/systems/neogeo.svg'
import nes from '@/assets/systems/nes.svg'
import ps1 from '@/assets/systems/ps1.svg'
import psp from '@/assets/systems/psp.webp'
import snes from '@/assets/systems/snes.svg'
import './systems-section.css'

const systems = [
  { label: 'GBA', logos: [gba], ink: 'light' },
  { label: 'SNES', logos: [snes] },
  { label: 'NES', logos: [nes], ink: 'dark' },
  { label: 'Sega Genesis', logos: [genesis], ink: 'dark' },
  { label: 'PS1', logos: [ps1] },
  { label: 'Arcade / CPS', logos: [capcom] },
  { label: 'Neo Geo', logos: [neogeo] },
  { label: 'Dreamcast / PSP (light)', logos: [dreamcast, psp] },
]

export function SystemsSection() {
  return (
    <section id="systems" className="systems-section" aria-labelledby="systems-title">
      <h2 id="systems-title">Built for the Golden Era</h2>
      <div className="systems-marquee">
        <div className="systems-track">
          {[false, true].map((duplicate) => (
            <ul key={String(duplicate)} className="systems-list" role="list" aria-hidden={duplicate || undefined}>
              {systems.map(({ label, logos, ink }) => (
                <li key={label} className="system-item">
                  <div className="system-logos" data-ink={ink} aria-hidden="true">
                    {logos.map((logo) => (
                      <img key={logo} src={logo} alt="" loading="lazy" decoding="async" />
                    ))}
                  </div>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
