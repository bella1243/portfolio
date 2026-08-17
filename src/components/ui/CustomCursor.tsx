import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouch(hasTouch)
    if (hasTouch) return

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsPointer(
        !!target.closest('a, button, [role="button"], input, textarea, select, label')
      )
    }

    const leave = () => setIsVisible(false)
    const enter = () => setIsVisible(true)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-amber-400/50 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-amber-400 pointer-events-none z-[9999]"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.2 }}
      />
    </>
  )
}
