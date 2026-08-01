import { motion } from 'framer-motion'
import {
  GraduationCap,
  Factory,
  Settings,
  Award,
  Zap,
  Gauge,
  BookOpen,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { educationItems } from '../../data/education'

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Factory,
  Settings,
  Award,
  Zap,
  Gauge,
}

export default function Education() {
  const education = educationItems.filter((item) => item.type === 'education')
  const certifications = educationItems.filter((item) => item.type === 'certification')

  return (
    <section id="education" className="section-padding relative" aria-label="Education and certifications">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Education & Certifications"
          subtitle="Academic background and professional qualifications"
          icon={BookOpen}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((item, i) => {
                const Icon = iconMap[item.icon] || GraduationCap
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="glass-card flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200">{item.title}</h4>
                      {item.institution && (
                        <p className="text-sm text-gray-500 mt-1">{item.institution}</p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-cyan-400" />
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((item, i) => {
                const Icon = iconMap[item.icon] || Award
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="glass-card text-center"
                  >
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <h4 className="font-medium text-sm text-gray-300 leading-snug">
                      {item.title}
                    </h4>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
