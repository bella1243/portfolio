import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Globe,
  Network,
  Brain,
  Shield,
  Zap,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { skillCategories } from '../../data/skills'

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Network,
  Brain,
  Shield,
  Zap,
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const ActiveIcon = iconMap[skillCategories[activeCategory].icon] || Code2

  return (
    <section id="skills" className="section-padding relative" aria-label="Skills">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technical proficiencies across programming, networking, cybersecurity, and engineering"
          icon={Code2}
        />

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Code2
            return (
              <motion.button
                key={cat.title}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === i
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 text-cyan-400'
                    : 'glass text-gray-400 hover:text-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.title}
              </motion.button>
            )
          })}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <ActiveIcon className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="font-display text-xl font-semibold text-gray-100">
              {skillCategories[activeCategory].title}
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, type: 'spring', stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.06, y: -3 }}
                className="group relative px-5 py-3 rounded-xl glass border border-white/10 hover:border-cyan-500/40 transition-all cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
                  <span className="font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
