import { useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, ImageIcon } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ProjectImageStackProps {
  images: string[]
  title: string
  accent: string
  gradient: string
  Icon: LucideIcon
  onOpenLightbox: (index: number) => void
}

const cardBase =
  'project-image-card absolute inset-0 overflow-hidden rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400'

export default function ProjectImageStack({
  images,
  title,
  accent,
  gradient,
  Icon,
  onOpenLightbox,
}: ProjectImageStackProps) {
  const [active, setActive] = useState(0)
  const count = images.length

  if (count === 0) {
    return (
      <div className="relative mx-auto w-full max-w-[380px]">
        <div
          className={`relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${gradient} shadow-xl`}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-500 px-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/15"
              style={{ backgroundColor: `${accent}33` }}
            >
              <Icon className="w-8 h-8 text-amber-400" />
            </div>
            <div className="flex items-center gap-2 text-xs">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Add photos in /files</span>
            </div>
            <p className="text-[11px] text-gray-600 text-center">
              “{title}.jpg”, “{title}-2.jpg”, “{title}-3.jpg”…
            </p>
          </div>
        </div>
      </div>
    )
  }

  const goNext = () => setActive((i) => (i + 1) % count)
  const goPrev = () => setActive((i) => (i - 1 + count) % count)

  const leftIndex = count > 1 ? (active - 1 + count) % count : null
  const rightIndex = count > 1 ? (active + 1) % count : null
  const showBothSides = count >= 3
  const showLeft = leftIndex !== null
  const showRight = rightIndex !== null && (showBothSides || leftIndex !== rightIndex)

  type Layer = {
    side: 'left' | 'center' | 'right'
    imageIndex: number
  }

  const layers: Layer[] = [{ side: 'center', imageIndex: active }]
  if (showLeft && leftIndex !== null) layers.unshift({ side: 'left', imageIndex: leftIndex })
  if (showRight && rightIndex !== null) layers.push({ side: 'right', imageIndex: rightIndex })

  const poseClass = {
    left: `${cardBase} z-[1] -translate-x-[42px] translate-y-[8px] -rotate-[9deg] scale-90 opacity-90`,
    right: `${cardBase} z-[1] translate-x-[42px] -translate-y-[6px] rotate-[7deg] scale-90 opacity-90`,
    center: `${cardBase} z-[2] -translate-x-[8px] translate-y-[10px] -rotate-[5deg] scale-100 opacity-100`,
  } as const

  return (
    <div className="relative mx-auto w-full max-w-[420px] min-w-0 isolate">
      <div className="relative mx-auto aspect-[3/4] w-[88%] xs:w-[82%] sm:w-[78%] overflow-visible project-image-stack">
        {layers.map(({ side, imageIndex }) => {
          const isFront = side === 'center'
          const className =
            count === 1
              ? `${cardBase} z-[2] opacity-100`
              : poseClass[side]

          return (
            <button
              key={`${side}-${imageIndex}`}
              type="button"
              onClick={() => {
                if (isFront) onOpenLightbox(imageIndex)
                else if (side === 'left') goPrev()
                else goNext()
              }}
              className={className}
              aria-label={
                isFront
                  ? `View full photo ${imageIndex + 1}`
                  : `Show photo ${imageIndex + 1}`
              }
            >
              <img
                src={images[imageIndex]}
                alt={`${title} photo ${imageIndex + 1}`}
                className="h-full w-full object-cover"
                width={420}
                height={560}
                loading="lazy"
                decoding="async"
                draggable={false}
              />
              {!isFront && <span className="absolute inset-0 bg-black/20" aria-hidden />}
              {isFront && (
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 border border-white/15 px-2.5 py-1 text-[11px] font-medium text-white">
                  <Expand className="w-3 h-3" />
                  View full
                </span>
              )}
            </button>
          )
        })}
      </div>

      {count > 1 && (
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-3 sm:gap-4 px-1 sm:px-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="liquid-glass-btn inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-200"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="liquid-glass-btn inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-200"
              aria-label="Next photo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2" aria-label="Photo indicators">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ${
                  i === active ? 'w-6 bg-amber-400' : 'w-1.5 bg-white/25 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <p className="text-xs text-gray-500 tabular-nums">
            {active + 1} / {count}
          </p>
        </div>
      )}
    </div>
  )
}
