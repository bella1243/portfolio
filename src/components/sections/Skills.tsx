import { useState } from 'react'
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
          animated={false}
        />

        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto pb-2 sm:pb-0">
          <div className="flex sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 min-w-max sm:min-w-0">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Code2
            return (
              <button
                key={cat.title}
                type="button"
                onClick={() => setActiveCategory(i)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === i
                    ? 'bg-gradient-to-r from-amber-500/20 to-amber-500/20 border border-amber-500/40 text-amber-400'
                    : 'glass text-gray-400 hover:text-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.title}
              </button>
            )
          })}
          </div>
        </div>

        <div className="glass-card min-w-0">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10 min-w-0">
            <div className="p-2.5 sm:p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 shrink-0">
              <ActiveIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-gray-100 min-w-0 break-words">
              {skillCategories[activeCategory].title}
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {skillCategories[activeCategory].skills.map((skill) => (
              <div
                key={skill}
                className="group relative px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl glass border border-white/10 hover:border-amber-500/40 transition-colors cursor-default overflow-hidden max-w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400/60 group-hover:text-amber-400 transition-colors" />
                  <span className="font-medium text-gray-200 group-hover:text-amber-400 transition-colors">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
