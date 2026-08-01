import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => setVisible(v > 0.02))
    return () => unsubscribe()
  }, [scrollYProgress])

  if (!visible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 origin-left z-[100]"
      style={{ scaleX }}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
    />
  )
}
