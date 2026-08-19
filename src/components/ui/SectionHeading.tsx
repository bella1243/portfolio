import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface SectionHeadingProps {
  title: string
  subtitle: string
  icon?: LucideIcon
  animated?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  icon: Icon,
  animated = true,
}: SectionHeadingProps) {
  const Wrapper = animated ? motion.div : 'div'
  const wrapperProps = animated
    ? {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
        transition: { duration: 0.4 },
      }
    : {}

  return (
    <Wrapper {...wrapperProps} className="text-center mb-10 sm:mb-16">
      {Icon && (
        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-3 sm:mb-4">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
        </div>
      )}
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-2">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full" />
      </div>
    </Wrapper>
  )
}
