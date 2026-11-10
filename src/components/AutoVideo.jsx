import { useEffect, useRef, useState } from 'react'
import { media } from '../data.js'

/** Muted looping video that only loads and plays while on screen. */
export default function AutoVideo({ id, className = '', label }) {
  const ref = useRef(null)
  const visible = useRef(false)
  const [near, setNear] = useState(false)
  const { src, poster } = media(id)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const loader = new IntersectionObserver(([entry]) => entry.isIntersecting && setNear(true), {
      rootMargin: '400px',
    })
    const player = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting
        if (entry.isIntersecting) el.play().catch(() => {})
        else el.pause()
      },
      { threshold: 0.35 },
    )
    loader.observe(el)
    player.observe(el)
    return () => {
      loader.disconnect()
      player.disconnect()
    }
  }, [])

  // A preloaded video must not start until it is actually on screen.
  const onCanPlay = (e) => {
    if (visible.current) e.currentTarget.play().catch(() => {})
    else e.currentTarget.pause()
  }

  return (
    <video
      ref={ref}
      className={`auto-video ${className}`}
      poster={poster}
      src={near ? src : undefined}
      muted
      loop
      playsInline
      preload={near ? 'auto' : 'none'}
      onCanPlay={onCanPlay}
      aria-label={label}
      disablePictureInPicture
    />
  )
}
