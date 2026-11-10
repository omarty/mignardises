import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AutoVideo from './AutoVideo.jsx'

export default function VideoCarousel({ slides, delay = 3800, variant = 'showcase' }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false }, [
    Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: true }),
  ])
  const [selected, setSelected] = useState(0)

  const onSelect = useCallback(() => embla && setSelected(embla.selectedScrollSnap()), [embla])

  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect).on('reInit', onSelect)
    return () => embla.off('select', onSelect).off('reInit', onSelect)
  }, [embla, onSelect])

  return (
    <div className={`carousel carousel--${variant}`}>
      <div className="carousel__viewport" ref={emblaRef}>
        <div className="carousel__track">
          {slides.map((s, i) => (
            <div className={`carousel__slide ${i === selected ? 'is-active' : ''}`} key={s.id + i}>
              <figure className="video-card">
                <AutoVideo id={s.id} label={s.label} />
                <figcaption>
                  <span className="video-card__index">{String(i + 1).padStart(2, '0')}</span>
                  {s.label}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel__controls">
        <button className="round-btn" onClick={() => embla?.scrollPrev()} aria-label="Précédent">
          <Arrow dir="left" />
        </button>
        <div className="carousel__dots" role="tablist">
          {slides.map((s, i) => (
            <button
              key={s.id + i}
              className={`dot ${i === selected ? 'is-active' : ''}`}
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Vidéo ${i + 1}`}
              aria-selected={i === selected}
              role="tab"
            />
          ))}
        </div>
        <button className="round-btn" onClick={() => embla?.scrollNext()} aria-label="Suivant">
          <Arrow dir="right" />
        </button>
      </div>
    </div>
  )
}

export function Arrow({ dir }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
