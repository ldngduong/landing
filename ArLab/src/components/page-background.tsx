import { GrainGradient } from '@udemi/hinh-nen'
import { Component, type ReactNode, useEffect, useState, useSyncExternalStore } from 'react'

const colors = ['#0f3265', '#005f92', '#008ca3', '#00b798']
const motionQuery = '(prefers-reduced-motion: reduce)'

function subscribeToMotion(callback: () => void) {
  const media = window.matchMedia(motionQuery)
  media.addEventListener('change', callback)
  return () => media.removeEventListener('change', callback)
}

function getReducedMotion() {
  return window.matchMedia(motionQuery).matches
}

class ShaderBoundary extends Component<{ children: ReactNode }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    return this.state.failed ? null : this.props.children
  }
}

export function PageBackground() {
  const reducedMotion = useSyncExternalStore(subscribeToMotion, getReducedMotion)
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    let scrollTimer: number | undefined
    function handleScroll() {
      if (scrollTimer === undefined) setScrolling(true)
      window.clearTimeout(scrollTimer)
      scrollTimer = window.setTimeout(() => {
        scrollTimer = undefined
        setScrolling(false)
      }, 150)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.clearTimeout(scrollTimer)
    }
  }, [])

  return (
    <div className="page-background" aria-hidden="true">
      <ShaderBoundary>
        <GrainGradient
          colors={colors}
          colorBack="#000000"
          softness={0.5}
          intensity={0.5}
          noise={0.25}
          shape="corners"
          speed={reducedMotion || scrolling ? 0 : 1}
          minPixelRatio={1}
          maxPixelCount={1_500_000}
          scale={1}
          rotation={0}
          offsetX={0}
          offsetY={0}
          style={{ width: '100%', height: '100%' }}
        />
      </ShaderBoundary>
    </div>
  )
}
