import { useEffect, useRef } from 'react'
import consoleArt from '@/assets/trimui-brick-pro-display.webp'
import gameplayVideo from '@/assets/bw2-display-480p.mp4'
import gameplayPoster from '@/assets/bw2-poster.webp'
import './display-section.css'

export function DisplaySection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        void video.play().catch(() => {})
      } else {
        video.pause()
      }
    })

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="display" className="display-section" aria-labelledby="display-title">
      <div className="display-copy">
        <h2 id="display-title">324 PPI</h2>
        <p>3.95-inch, fully laminated IPS display with a 1024 × 768 resolution.</p>
      </div>
      <div className="display-frame">
        <div className="display-screen" aria-hidden="true">
          <video ref={videoRef} src={gameplayVideo} poster={gameplayPoster} preload="none" loop muted playsInline />
        </div>
        <img
          className="display-bezel"
          src={consoleArt}
          width={665}
          height={977}
          alt="White Trimui Brick Pro showing gameplay on its display"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}
