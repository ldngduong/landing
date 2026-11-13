import './hardware-section.css'

const hardware = [
  {
    title: '5,000 mAh battery',
    description: '5–10 hours per charge, depending on the game and settings. Charges via USB-C at up to 10 W.',
  },
  {
    title: 'Allwinner A133P',
    description: 'Four Cortex-A53 cores running at up to 1.8 GHz, paired with PowerVR GE8300 graphics.',
  },
  {
    title: 'Fully laminated display',
    description: 'The 3.95-inch, 60 Hz IPS panel is bonded directly to the cover glass, leaving no air gap.',
  },
  {
    title: '8 GB eMMC',
    description: 'Internal flash for the system, plus a microSD slot that accepts cards up to 1 TB.',
  },
]

export function HardwareSection() {
  return (
    <section id="hardware" className="hardware-section" aria-labelledby="hardware-title">
      <h2 id="hardware-title">Hardware Anatomy</h2>
      <div className="hardware-grid">
        {hardware.map(({ title, description }, index) => (
          <article key={title} className="hardware-card">
            <span className="hardware-card-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
