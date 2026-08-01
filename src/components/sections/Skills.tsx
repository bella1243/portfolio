import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Globe,
  Network,
  Cpu,
  Brain,
  type LucideIcon,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { skillCategories } from '../../data/skills'

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Network,
  Cpu,
  Brain,
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="section-padding relative" aria-label="Skills">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technical proficiencies across programming, networking, IoT, and AI"
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card group"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </span>
                <span className="text-sm text-cyan-400 font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 relative"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse-glow rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Code2
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActiveCategory(i)}
                className={`glass-card cursor-pointer text-center ${
                  activeCategory === i ? 'border-cyan-500/40' : ''
                }`}
              >
                <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="font-medium text-sm text-gray-300">{cat.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{cat.skills.length} skills</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
