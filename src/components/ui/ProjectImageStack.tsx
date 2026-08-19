import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  // When only 2 images, still show both sides using the other image twice visually? 
  // Better: left = other, right = other same - weird. With 2: show left + center only, or center + right.
  // With 2: left = prev, center = active, right = prev (same as left) - bad.
  // With 2: only show two cards - left peek and center. Hide right if leftIndex === rightIndex.
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

  // Render back-to-front: left, right, then center on top
  const renderOrder = layers.slice().sort((a, b) => {
    const rank = { left: 0, right: 1, center: 2 }
    return rank[a.side] - rank[b.side]
  })

  const pose = {
    left: { x: -42, y: 8, rotate: -9, scale: 0.9, z: 10 },
    right: { x: 42, y: -6, rotate: 7, scale: 0.9, z: 10 },
    center: { x: -8, y: 10, rotate: -5, scale: 1, z: 30 },
  } as const

  return (
    <div className="relative mx-auto w-full max-w-[420px] min-w-0">
      <div className="relative mx-auto aspect-[3/4] w-[88%] xs:w-[82%] sm:w-[78%]">
        <AnimatePresence initial={false}>
          {renderOrder.map(({ side, imageIndex }) => {
            const isFront = side === 'center'
            const p = pose[side]

            return (
              <motion.button
                key={`${side}-${imageIndex}-${active}`}
                type="button"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{
                  opacity: isFront ? 1 : 0.88,
                  x: count === 1 ? 0 : p.x,
                  y: count === 1 ? 0 : p.y,
                  rotate: count === 1 ? 0 : p.rotate,
                  scale: count === 1 ? 1 : p.scale,
                  zIndex: p.z,
                }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                onClick={() => {
                  if (isFront) onOpenLightbox(imageIndex)
                  else if (side === 'left') goPrev()
                  else goNext()
                }}
                className="absolute inset-0 overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-[0_20px_45px_rgba(0,0,0,0.4)] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
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
                  draggable={false}
                />
                {!isFront && <span className="absolute inset-0 bg-black/20" aria-hidden />}
                {isFront && (
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/15 px-2.5 py-1 text-[11px] font-medium text-white">
                    <Expand className="w-3 h-3" />
                    View full
                  </span>
                )}
              </motion.button>
            )
          })}
        </AnimatePresence>
      </div>

      {count > 1 && (
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-3 sm:gap-4 px-1 sm:px-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 transition-colors"
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
                className={`h-1.5 rounded-full transition-all ${
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
