import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface SectionHeadingProps {
  title: string
  subtitle: string
  icon?: LucideIcon
}

export default function SectionHeading({ title, subtitle, icon: Icon }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {Icon && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-4"
        >
          <Icon className="w-6 h-6 text-amber-400" />
        </motion.div>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        {subtitle}
      </p>
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full" />
      </div>
    </motion.div>
  )
}
